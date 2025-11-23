import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
            <span className="font-semibold">Waldo</span>
            <Link href="https://github.com/vika908/hackaTUM-25" className="text-sm text-muted-foreground hover:text-foreground transition-colors mt-2">
              https://github.com/vika908/hackaTUM-25
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="https://github.com/vika908/hackaTUM-25" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">© 2025 Waldo. Protecting authenticity in the age of AI.</p>
        </div>
      </div>
    </footer>
  )
}
