"use client"

import { FileEdit, Palette, Bot, Globe, Layers, ExternalLink, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const DISCORD_LINK = "https://discord.gg/gTEzyDqaGj"

const orderTypes = [
  {
    id: "ui-design",
    title: "Custom UI Design",
    description: "Request a unique interface design tailored to your brand and requirements.",
    icon: Palette,
    features: ["Unique Design", "Source Files", "Revisions", "Fast Delivery"],
  },
  {
    id: "discord-bot",
    title: "Discord Bot",
    description: "Custom Discord bot with features specific to your server needs.",
    icon: Bot,
    features: ["Custom Commands", "Moderation Tools", "Auto Features", "24/7 Hosting"],
  },
  {
    id: "website",
    title: "Website Development",
    description: "Professional website development from landing pages to full web apps.",
    icon: Globe,
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration"],
  },
  {
    id: "overlay",
    title: "Stream Overlay",
    description: "Custom streaming overlays, alerts, and widgets for your channel.",
    icon: Layers,
    features: ["Animated Alerts", "Custom Widgets", "Scene Transitions", "Brand Colors"],
  },
]

export function CustomOrders() {
  const handleDiscordRedirect = () => {
    window.open(DISCORD_LINK, "_blank")
  }

  return (
    <section className="py-12">
      {/* Section Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
            <FileEdit className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Custom Orders</h2>
            <p className="text-sm text-muted-foreground">
              Request custom UI, Discord bots, websites, or overlays
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Order Types */}
        <div className="space-y-4">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Available Services</h3>
          {orderTypes.map((type) => {
            const Icon = type.icon

            return (
              <div
                key={type.id}
                className="w-full rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_25px_rgba(180,50,50,0.2)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-1 text-lg font-semibold text-foreground">{type.title}</h4>
                    <p className="mb-4 text-sm text-muted-foreground">{type.description}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {type.features.map((feature, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Button
                      className="bg-primary text-primary-foreground hover:bg-primary/80 hover:shadow-[0_0_15px_rgba(180,50,50,0.4)]"
                      onClick={handleDiscordRedirect}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Request via Discord
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Discord CTA */}
        <div className="flex flex-col justify-center">
          <div className="rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 via-card/80 to-transparent p-8 backdrop-blur-sm">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/20">
              <MessageCircle className="h-10 w-10 text-primary" />
            </div>
            
            <h3 className="mb-3 text-2xl font-bold text-foreground">
              Ready to Start Your Project?
            </h3>
            
            <p className="mb-6 text-muted-foreground">
              Join our Discord server to discuss your project requirements, get quotes, and start working with our team. All orders and communications happen through Discord for faster response times.
            </p>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs text-primary">1</span>
                Join our Discord server
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs text-primary">2</span>
                Describe your project in the orders channel
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs text-primary">3</span>
                Get a quote and start collaborating
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/80 hover:shadow-[0_0_25px_rgba(180,50,50,0.5)]"
              onClick={handleDiscordRedirect}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Join Discord Server
            </Button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              discord.gg/gTEzyDqaGj
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
