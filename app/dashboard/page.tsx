"use client";

import { useEffect, useState } from "react";

import Navbar from "../../components/dashboard/Navbar";
import UsageCards from "../../components/dashboard/UsagedCards";
import PlanCard from "../../components/dashboard/PlanCard";
import RemainingCredits from "../../components/dashboard/RemainingCredits";

import { supabase } from "../../lib/supabase";

export default function DashboardPage() {
  const [profile, setProfile] =
    useState<any>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    setProfile(data);
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />

      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <PlanCard profile={profile} />

        <div style={{ height: 20 }} />
        <RemainingCredits profile = {profile}/>
        <UsageCards profile={profile} />
      </div>
    </div>
  );
}