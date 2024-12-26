export default function TermsPage() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="mx-4 md:mx-40 font-bold relative z-20 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 bg-gradient-to-b from-neutral-500 to-neutral-900 py-8">
        <div className="md:mt-0 mt-60">
          <h1 className="text-4xl mb-8">Terms and Conditions</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p>Welcome to Viora. These terms and conditions outline the rules and regulations for the use of Viora&apos;s Website and services.</p> <br/>
            <h2 className="font-extrabold">1. Acceptance of Terms</h2>
            <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use Viora if you do not agree to take all of the terms and conditions stated on this page.</p> <br/>
            <h2 className="font-extrabold">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Viora&apos;s website for personal, non-commercial transitory viewing only.</p> <br/>
            <h2 className="font-extrabold">3. Disclaimer</h2>
            <p>The materials on Viora&apos;s website are provided on an &apos;as is&apos; basis. Viora makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p> <br/>
            <h2 className="font-extrabold">4. Limitations</h2>
            <p>In no event shall Viora or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Viora&apos;s website, even if Viora or a Viora authorized representative has been notified orally or in writing of the possibility of such damage.</p> <br/>
            <h2 className="font-extrabold">5. Revisions and Errata</h2>
            <p>The materials appearing on Viora&apos;s website could include technical, typographical, or photographic errors. Viora does not warrant that any of the materials on its website are accurate, complete or current. Viora may make changes to the materials contained on its website at any time without notice.</p>
          </div>
        </div>
      </div>
    </div>

  )
}
