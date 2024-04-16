"use client";

import Head from "next/head";
import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import AboutSection from "@/components/sections/About";
import ProjectsSection from "@/components/sections/Projects";
import ExperienceSection from "@/components/sections/Experience";
import AvailabilitySection from "@/components/sections/Availability";
import Footer from "@/components/sections/Footer";
import Availability, { AvailabilityMonth } from "@/models/Availability";
import Goal, { GoalRecord } from "@/models/Goal";

type Props = {
  goal: GoalRecord;
  availabilityMonths: AvailabilityMonth[];
};

export default function Home({ goal, availabilityMonths }: Props) {
  return (
    <>
      <Header />
      <AboutSection />
      <ProjectsSection goal={goal} />
      <ExperienceSection />
      <AvailabilitySection availabilityMonths={availabilityMonths} />
      <Footer />
    </>
  );
}
