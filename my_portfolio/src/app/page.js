"use client";

import React, { useEffect, useState } from "react";
import Loading from "@/components/Loader/Loading";
import MintFadeInObserver from "@/components/Mint/MintFadeInObserver";
import MintNav from "@/components/Mint/MintNav";
import MintHero from "@/components/Mint/MintHero";
import MintAboutSection from "@/components/Mint/MintAboutSection";
import MintExperienceSection from "@/components/Mint/MintExperienceSection";
import MintGallerySection from "@/components/Mint/MintGallerySection";
import MintSkillsSection from "@/components/Mint/MintSkillsSection";
import MintAchievementsSection from "@/components/Mint/MintAchievementsSection";
import MintProjectsSection from "@/components/Mint/MintProjectsSection";
import MintEducationSection from "@/components/Mint/MintEducationSection";
import MintFooter from "@/components/Mint/MintFooter";
import { divider } from "@/lib/mint-styles";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <MintFadeInObserver />
      <main className="relative z-[1]">
        <MintNav />
        <MintHero />

        <div className={divider} />
        <MintAboutSection />
        <div className={divider} />

        <MintExperienceSection />
        <div className={divider} />

        <MintAchievementsSection />
        <div className={divider} />

        <MintGallerySection />
        <div className={divider} />

        <MintSkillsSection />
        <div className={divider} />


        <MintProjectsSection />
        <div className={divider} />

        <MintEducationSection />
        <div className={divider} />

        <MintFooter />
      </main>
    </>
  );
};

export default Home;
