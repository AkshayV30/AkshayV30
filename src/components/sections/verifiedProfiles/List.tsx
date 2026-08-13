"use client";

import { motion } from "framer-motion";

import {
  verifiedProfileCardHover,
  verifiedProfileCardVariants,
  verifiedProfilesContainerVariants,
} from "@/app/motions";

import type { VerificationProfile } from "@/types/verification";

import VerifiedProfileCard from "./Card";

interface VerifiedProfileListProps {
  profiles: readonly VerificationProfile[];
}

export default function VerifiedProfileList({
  profiles,
}: VerifiedProfileListProps) {
  return (
    <motion.div
      variants={verifiedProfilesContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {profiles.map((profile) => (
        <motion.div
          key={profile.id}
          variants={verifiedProfileCardVariants}
          whileHover={verifiedProfileCardHover}
          className="h-full"
        >
          <VerifiedProfileCard profile={profile} />
        </motion.div>
      ))}
    </motion.div>
  );
}
