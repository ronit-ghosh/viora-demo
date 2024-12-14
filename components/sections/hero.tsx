"use client"

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="hero-gradient text-white pt-32 pb-20">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Kashmir's 10-minute delivery app</h1>
          <p className="text-xl mb-8 text-white/90">Get your groceries delivered in 10 minutes
          Fresh groceries and everyday essentials delivered right to your doorstep, faster than you can imagine.</p>
          <div className="flex gap-4">
            <a href="#teamsection"><Button size="lg" variant="secondary">Meet Our Team</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
}