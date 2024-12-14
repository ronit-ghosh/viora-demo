"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

export function DownloadSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section id="downloadsection" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Started with Viora Today</h2>
            <p className="text-xl text-muted-foreground mb-8">Download our app and experience lightning-fast grocery delivery</p>
            <Button size="lg" className="gap-2" onClick={() => setIsOpen(true)}>
              Download App <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>App Under Maintenance</DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground">
            We're currently working on making the Viora app even better! Please check back soon.
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}