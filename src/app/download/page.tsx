"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Download() {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl  mx-auto p-4">
        <h1 className="relative z-10 text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          App is currenlty under development
        </h1>
        <p></p>
        {/* <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Introducing Viora, the delivery app that brings your groceries and essentials to your door in just 10 minutes! Say goodbye to empty fridges—our team is hard at work ensuring you can snack and sip without the wait. Stay tuned for updates and get ready for a speedy shopping experience with Viora!
        </p> */}
        <div
          className="rounded-lg text-center border border-neutral-800 w-full relative z-10 mt-4 bg-neutral-950 text-neutral-400 py-2 cursor-pointer"
        >{"Contact => vioranow@gmail.com / +91 90701 27513"} </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
