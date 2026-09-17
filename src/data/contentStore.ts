"use client";

import { useState, useEffect } from "react";
import { CLUB_IDENTITY, ClubIdentity } from "./clubData";
import { INITIAL_STATS, ClubStats } from "./stats";
import { INITIAL_ALUMNI_DATA, AlumniProfile } from "./alumni";
import { FEATURED_EVENT_DATA, EventItem, PAST_EVENTS_DATA } from "./events";
import { INITIAL_RESULTS_DATA, ResultRecord } from "./results";

const STORAGE_KEYS = {
  STATS: "kletech_upsc_stats_v1",
  IDENTITY: "kletech_upsc_identity_v1",
  ALUMNI: "kletech_upsc_alumni_v1",
  FEATURED_EVENT: "kletech_upsc_featured_event_v1",
  RESULTS: "kletech_upsc_results_v1",
};

export function useClubContent() {
  const [stats, setStats] = useState<ClubStats>(INITIAL_STATS);
  const [identity, setIdentity] = useState<ClubIdentity>(CLUB_IDENTITY);
  const [alumniList, setAlumniList] = useState<AlumniProfile[]>(INITIAL_ALUMNI_DATA);
  const [featuredEvent, setFeaturedEvent] = useState<EventItem>(FEATURED_EVENT_DATA);
  const [resultsList, setResultsList] = useState<ResultRecord[]>(INITIAL_RESULTS_DATA);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const savedStats = localStorage.getItem(STORAGE_KEYS.STATS);
      if (savedStats) setStats(JSON.parse(savedStats));

      const savedIdentity = localStorage.getItem(STORAGE_KEYS.IDENTITY);
      if (savedIdentity) setIdentity(JSON.parse(savedIdentity));

      const savedAlumni = localStorage.getItem(STORAGE_KEYS.ALUMNI);
      if (savedAlumni) setAlumniList(JSON.parse(savedAlumni));

      const savedEvent = localStorage.getItem(STORAGE_KEYS.FEATURED_EVENT);
      if (savedEvent) setFeaturedEvent(JSON.parse(savedEvent));

      const savedResults = localStorage.getItem(STORAGE_KEYS.RESULTS);
      if (savedResults) setResultsList(JSON.parse(savedResults));
    } catch (e) {
      console.warn("Could not read from localStorage", e);
    }
    setIsLoaded(true);
  }, []);

  const updateStats = (newStats: Partial<ClubStats>) => {
    const updated = { ...stats, ...newStats, lastUpdated: new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" }) };
    setStats(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(updated));
    }
  };

  const updateIdentity = (newIdentity: Partial<ClubIdentity>) => {
    const updated = { ...identity, ...newIdentity };
    setIdentity(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.IDENTITY, JSON.stringify(updated));
    }
  };

  const addAlumni = (profile: AlumniProfile) => {
    const updated = [profile, ...alumniList];
    setAlumniList(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.ALUMNI, JSON.stringify(updated));
    }
  };

  const updateAlumni = (id: string, updatedFields: Partial<AlumniProfile>) => {
    const updated = alumniList.map((a) => (a.id === id ? { ...a, ...updatedFields } : a));
    setAlumniList(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.ALUMNI, JSON.stringify(updated));
    }
  };

  const deleteAlumni = (id: string) => {
    const updated = alumniList.filter((a) => a.id !== id);
    setAlumniList(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.ALUMNI, JSON.stringify(updated));
    }
  };

  const updateFeaturedEvent = (eventFields: Partial<EventItem>) => {
    const updated = { ...featuredEvent, ...eventFields };
    setFeaturedEvent(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.FEATURED_EVENT, JSON.stringify(updated));
    }
  };

  const addResult = (record: ResultRecord) => {
    const updated = [record, ...resultsList.filter((r) => r.usn.toUpperCase() !== record.usn.toUpperCase())];
    setResultsList(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(updated));
    }
  };

  const resetToDefaults = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEYS.STATS);
      localStorage.removeItem(STORAGE_KEYS.IDENTITY);
      localStorage.removeItem(STORAGE_KEYS.ALUMNI);
      localStorage.removeItem(STORAGE_KEYS.FEATURED_EVENT);
      localStorage.removeItem(STORAGE_KEYS.RESULTS);
    }
    setStats(INITIAL_STATS);
    setIdentity(CLUB_IDENTITY);
    setAlumniList(INITIAL_ALUMNI_DATA);
    setFeaturedEvent(FEATURED_EVENT_DATA);
    setResultsList(INITIAL_RESULTS_DATA);
  };

  return {
    stats,
    identity,
    alumniList,
    featuredEvent,
    resultsList,
    isLoaded,
    updateStats,
    updateIdentity,
    addAlumni,
    updateAlumni,
    deleteAlumni,
    updateFeaturedEvent,
    addResult,
    resetToDefaults,
  };
}
