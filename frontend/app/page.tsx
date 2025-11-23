import Header from "@/components/header"
import Hero from "@/components/hero"
import InteractiveDemo from "@/components/interactive-demo"
import UseCases from "@/components/use-cases"
import Documentation from "@/components/documentation"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <Header />
      <Hero />
      <InteractiveDemo />
      <UseCases />
      <Documentation />
      <Footer />
    </main>
  )
}
