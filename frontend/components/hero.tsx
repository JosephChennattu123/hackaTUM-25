import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center text-center py-20 sm:py-28 lg:py-36">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now in Beta
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance mb-6 max-w-4xl">
            Invisible Watermarking for <span className="text-primary">AI Content</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground text-balance max-w-2xl mb-10 leading-relaxed">
            Embed undetectable watermarks in AI-generated text, images, and audio. Verify authenticity and combat
            misinformation with our detection engine.
          </p>

          <Link href="https://github.com/vika908/Waldo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            https://github.com/vika908/Waldo
          </Link>
        </div>
      </div>
    </section>
  )
}
