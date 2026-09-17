import { NextRequest, NextResponse } from "next/server";
import { portalConfig } from "@/config/portalConfig";
import fs from "fs";
import path from "path";

interface CandidateResult {
  rank: number;
  name: string;
  usn: string;
  score: number;
}

function loadResultsData(): CandidateResult[] {
  // Check root results.json, then data/results.json, public/results.json, then src/data/results.json
  const candidatePaths = [
    path.join(process.cwd(), "results.json"),
    path.join(process.cwd(), "data", "results.json"),
    path.join(process.cwd(), "public", "results.json"),
    path.join(process.cwd(), "src", "data", "results.json"),
  ];

  for (const filePath of candidatePaths) {
    if (fs.existsSync(filePath)) {
      try {
        const raw = fs.readFileSync(filePath, "utf-8");
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Dynamically sort descending by score
          const sorted = [...parsed].sort((a, b) => Number(b.score) - Number(a.score));
          // Calculate competition ranking for ties
          let currentRank = 1;
          return sorted.map((candidate, idx) => {
            if (idx > 0 && Number(candidate.score) < Number(sorted[idx - 1].score)) {
              currentRank = idx + 1;
            }
            return {
              rank: currentRank,
              name: candidate.name,
              usn: candidate.usn,
              score: candidate.score,
            };
          });
        }
      } catch (err) {
        console.error(`Error reading ${filePath}:`, err);
      }
    }
  }
  return [];
}

export async function POST(req: NextRequest) {
  try {
    if (!portalConfig.resultsPublished) {
      return NextResponse.json({
        published: false,
        message: portalConfig.unannouncedNotice,
      });
    }

    const body = await req.json().catch(() => ({}));
    const rawUsn: string = (body.usn || "").toString();

    const cleanInput = rawUsn.trim().toUpperCase().replace(/\s+/g, "");

    if (!cleanInput) {
      return NextResponse.json(
        { error: "Please enter your USN." },
        { status: 400 }
      );
    }

    const dataset = loadResultsData();
    const candidate = dataset.find((item) => {
      const itemUsn = (item.usn || "").toString().trim().toUpperCase().replace(/\s+/g, "");
      return itemUsn === cleanInput;
    });

    if (!candidate) {
      return NextResponse.json({
        published: true,
        found: false,
        message: portalConfig.notFoundTitle,
      });
    }

    // Return ONLY the matched candidate record with no external leak
    return NextResponse.json({
      published: true,
      found: true,
      result: {
        rank: candidate.rank,
        name: candidate.name,
        usn: candidate.usn,
        score: candidate.score,
        status: portalConfig.qualificationStatus,
      },
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const rawUsn = searchParams.get("usn") || "";

  if (!portalConfig.resultsPublished) {
    return NextResponse.json({
      published: false,
      message: portalConfig.unannouncedNotice,
    });
  }

  const cleanInput = rawUsn.trim().toUpperCase().replace(/\s+/g, "");
  if (!cleanInput) {
    return NextResponse.json(
      { error: "Please enter your USN." },
      { status: 400 }
    );
  }

  const dataset = loadResultsData();
  const candidate = dataset.find((item) => {
    const itemUsn = (item.usn || "").toString().trim().toUpperCase().replace(/\s+/g, "");
    return itemUsn === cleanInput;
  });

  if (!candidate) {
    return NextResponse.json({
      published: true,
      found: false,
    });
  }

  return NextResponse.json({
    published: true,
    found: true,
    result: {
      rank: candidate.rank,
      name: candidate.name,
      usn: candidate.usn,
      score: candidate.score,
      status: portalConfig.qualificationStatus,
    },
  });
}
