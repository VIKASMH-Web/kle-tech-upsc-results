export interface CardCandidateData {
  rank: number;
  name: string;
  usn: string;
  score: number;
  status: string;
}

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  if (typeof ctx.roundRect === "function") {
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, radius);
  } else {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }
}

export async function generateResultCardBlob(
  candidate: CardCandidateData
): Promise<Blob> {
  if (typeof document !== "undefined" && document.fonts) {
    try {
      await document.fonts.ready;
    } catch {
      // ignore font loading error
    }
  }

  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas context could not be created.");
  }

  // 1. Deep Navy Background
  const bgGradient = ctx.createLinearGradient(0, 0, 0, 1350);
  bgGradient.addColorStop(0, "#060e24");
  bgGradient.addColorStop(0.5, "#081639");
  bgGradient.addColorStop(1, "#040918");
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, 1080, 1350);

  // Subtle radial ambient glow behind rank
  const glow = ctx.createRadialGradient(540, 560, 20, 540, 560, 450);
  glow.addColorStop(0, "rgba(217, 119, 6, 0.12)");
  glow.addColorStop(1, "rgba(8, 22, 57, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 1080, 1350);

  // 2. Elegant Institutional Double Border
  ctx.strokeStyle = "rgba(200, 150, 62, 0.4)";
  ctx.lineWidth = 3;
  ctx.strokeRect(40, 40, 1000, 1270);

  ctx.strokeStyle = "rgba(200, 150, 62, 0.15)";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(52, 52, 976, 1246);

  // Corner ornamental squares
  const cornerSize = 12;
  ctx.fillStyle = "#c8963e";
  ctx.fillRect(34, 34, cornerSize, cornerSize);
  ctx.fillRect(1034, 34, cornerSize, cornerSize);
  ctx.fillRect(34, 1304, cornerSize, cornerSize);
  ctx.fillRect(1034, 1304, cornerSize, cornerSize);

  // 3. Load & Draw Official Logos (KLE Tech Left, UPSC Club Right)
  const kleLogo = await loadImage("/assets/kle-tech-logo.png");
  const upscLogo = await loadImage("/assets/upsc-club-logo.jpg");

  const logoY = 90;
  const logoBoxSize = 110;

  // KLE Tech Logo (Left)
  drawRoundedRect(ctx, 395, logoY, logoBoxSize, logoBoxSize, 20);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "rgba(200, 150, 62, 0.5)";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  if (kleLogo) {
    ctx.save();
    drawRoundedRect(ctx, 403, logoY + 8, logoBoxSize - 16, logoBoxSize - 16, 14);
    ctx.clip();
    ctx.drawImage(kleLogo, 403, logoY + 8, logoBoxSize - 16, logoBoxSize - 16);
    ctx.restore();
  }

  // UPSC Club Logo (Right)
  drawRoundedRect(ctx, 575, logoY, logoBoxSize, logoBoxSize, 20);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "rgba(200, 150, 62, 0.5)";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  if (upscLogo) {
    ctx.save();
    drawRoundedRect(ctx, 583, logoY + 8, logoBoxSize - 16, logoBoxSize - 16, 14);
    ctx.clip();
    ctx.drawImage(upscLogo, 583, logoY + 8, logoBoxSize - 16, logoBoxSize - 16);
    ctx.restore();
  }

  // 4. Institutional Header Text
  ctx.textAlign = "center";

  // UPSC ASPIRANTS CLUB
  ctx.font = "bold 32px 'Cinzel', 'Playfair Display', Georgia, serif";
  ctx.fillStyle = "#ffffff";
  ctx.letterSpacing = "2px";
  ctx.fillText("UPSC ASPIRANTS CLUB", 540, 255);

  // KLE TECHNOLOGICAL UNIVERSITY
  ctx.font = "600 21px 'Plus Jakarta Sans', -apple-system, sans-serif";
  ctx.fillStyle = "#cbd5e1";
  ctx.letterSpacing = "3px";
  ctx.fillText("KLE TECHNOLOGICAL UNIVERSITY", 540, 290);

  // Gold Divider
  ctx.strokeStyle = "rgba(200, 150, 62, 0.5)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(380, 318);
  ctx.lineTo(700, 318);
  ctx.stroke();

  // Small gold diamond in center of divider
  ctx.fillStyle = "#d97706";
  ctx.beginPath();
  ctx.arc(540, 318, 4, 0, Math.PI * 2);
  ctx.fill();

  // OFFICE BEARER RECRUITMENT
  ctx.font = "700 19px 'Plus Jakarta Sans', -apple-system, sans-serif";
  ctx.fillStyle = "#f59e0b";
  ctx.letterSpacing = "3px";
  ctx.fillText("OFFICE BEARER RECRUITMENT", 540, 355);

  // ROUND 1
  ctx.font = "800 17px 'Plus Jakarta Sans', -apple-system, sans-serif";
  ctx.fillStyle = "#34d399";
  ctx.letterSpacing = "4px";
  ctx.fillText("ROUND 1", 540, 385);

  // RESULT
  ctx.font = "bold 26px 'Cinzel', 'Playfair Display', Georgia, serif";
  ctx.fillStyle = "#f8fafc";
  ctx.letterSpacing = "6px";
  ctx.fillText("RESULT", 540, 428);

  // 5. Central Candidate Credentials Card
  const cardX = 110;
  const cardY = 465;
  const cardWidth = 860;
  const cardHeight = 670;

  drawRoundedRect(ctx, cardX, cardY, cardWidth, cardHeight, 28);
  ctx.fillStyle = "rgba(10, 24, 60, 0.85)";
  ctx.fill();
  ctx.strokeStyle = "rgba(200, 150, 62, 0.4)";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Inner Card Content:

  // --- RANK SECTION ---
  const formattedRank = String(candidate.rank).padStart(2, "0");
  ctx.font = "bold 100px 'Cinzel', 'Playfair Display', Georgia, serif";
  ctx.fillStyle = "#fbbf24";
  ctx.fillText(formattedRank, 540, 580);

  ctx.font = "700 18px 'Plus Jakarta Sans', -apple-system, sans-serif";
  ctx.fillStyle = "#94a3b8";
  ctx.letterSpacing = "4px";
  ctx.fillText("RANK", 540, 615);

  // Divider line
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(220, 645);
  ctx.lineTo(860, 645);
  ctx.stroke();

  // --- CANDIDATE NAME SECTION ---
  ctx.font = "bold 44px 'Plus Jakarta Sans', -apple-system, sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.letterSpacing = "1px";
  ctx.fillText(candidate.name, 540, 705);

  ctx.font = "700 15px 'Plus Jakarta Sans', -apple-system, sans-serif";
  ctx.fillStyle = "#94a3b8";
  ctx.letterSpacing = "3px";
  ctx.fillText("CANDIDATE NAME", 540, 735);

  // --- USN SECTION ---
  ctx.font = "bold 26px 'Plus Jakarta Sans', monospace, sans-serif";
  ctx.fillStyle = "#93c5fd";
  ctx.letterSpacing = "3px";
  ctx.fillText(`USN: ${candidate.usn.toUpperCase()}`, 540, 785);

  // Divider line
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(220, 815);
  ctx.lineTo(860, 815);
  ctx.stroke();

  // --- SCORE SECTION ---
  ctx.font = "bold 64px 'Plus Jakarta Sans', -apple-system, sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(String(candidate.score), 515, 895);

  ctx.font = "500 32px 'Plus Jakarta Sans', -apple-system, sans-serif";
  ctx.fillStyle = "#94a3b8";
  ctx.fillText("/ 100", 615, 895);

  ctx.font = "700 16px 'Plus Jakarta Sans', -apple-system, sans-serif";
  ctx.fillStyle = "#94a3b8";
  ctx.letterSpacing = "3px";
  ctx.fillText("SCORE", 540, 930);

  // --- STATUS: QUALIFIED FOR ROUND 2 ---
  const badgeX = 230;
  const badgeY = 965;
  const badgeWidth = 620;
  const badgeHeight = 72;

  drawRoundedRect(ctx, badgeX, badgeY, badgeWidth, badgeHeight, 18);
  ctx.fillStyle = "rgba(6, 78, 59, 0.85)";
  ctx.fill();
  ctx.strokeStyle = "#10b981";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  ctx.font = "800 24px 'Plus Jakarta Sans', -apple-system, sans-serif";
  ctx.fillStyle = "#a7f3d0";
  ctx.letterSpacing = "3px";
  ctx.fillText("✓  QUALIFIED FOR ROUND 2", 540, 1010);

  // 6. Institutional Card Footer
  ctx.font = "600 16px 'Plus Jakarta Sans', -apple-system, sans-serif";
  ctx.fillStyle = "#94a3b8";
  ctx.letterSpacing = "2px";
  ctx.fillText("KLE TECH UPSC ASPIRANTS CLUB", 540, 1205);

  ctx.font = "500 14px 'Plus Jakarta Sans', -apple-system, sans-serif";
  ctx.fillStyle = "#64748b";
  ctx.letterSpacing = "1.5px";
  ctx.fillText("KLE Technological University • Hubballi, Karnataka", 540, 1235);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("Canvas blob conversion failed."));
      }
    }, "image/png", 1.0);
  });
}
