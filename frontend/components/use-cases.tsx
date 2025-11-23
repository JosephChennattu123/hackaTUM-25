import { Card } from "@/components/ui/card"
import { Newspaper, MessageSquare, User } from "lucide-react"

const useCases = [
  {
    icon: Newspaper,
    title: "Combat Fake News",
    description: "Detect AI-generated misinformation in articles and images before they spread across platforms.",
    image: "/fake-news-article-with-ai-warning-label.jpg",
  },
  {
    icon: MessageSquare,
    title: "Identify Bot Accounts",
    description: "Spot AI bots posing as humans in social media comments and conversations with confidence.",
    image: "/images/finalcrop.png",
  },
  {
    icon: User,
    title: "Verify Profile Authenticity",
    description: "Protect users from AI-generated fake profiles and deepfake images on social platforms.",
    image: "/social-media-profile-with-fake-ai-generated-photo-.jpg",
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built for Real-World Protection</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Waldo helps platforms and users maintain trust in an AI-powered world
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {useCases.map((useCase, index) => (
            <Card key={index} className="overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="aspect-[3/2] overflow-hidden bg-secondary">
                <img
                  src={useCase.image || "/placeholder.svg"}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <useCase.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{useCase.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
