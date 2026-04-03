"use client"

import { BotCard } from "@/components/bot-card"
import { SocialFooter } from "@/components/social-footer"
import { Bot, ArrowLeft, MessageCircle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const DISCORD_LINK = "https://discord.gg/gTEzyDqaGj"

const bots = [
    {
    id: 1,
    name: "iZEE6",
    description: "Premium Discord bot built in C++ with custom image commands, giveaways, gifts, confessions and interactive entertainment features.",
    gifUrl: "https://i.postimg.cc/QChtn71z/download-2026-03-07T055422-915.jpg",
    features: ["Custom Cards", "Giveaways", "Gift System", "Confessions"],
    commands: ["/ship", "/iq", "/future", "/gift", "/send_gift", "/confess"],
    status: "online" as const,
    techStack: ["C++", "DPP", "Cairo", "Pango", "PM2", "VPS"],
  },
  {
  id: 7,
  name: "Arab Community ",
  description: "Advanced Python Discord bot built for Arab Community with utility commands, fun interactions, ranking cards, translations, weather, confessions and custom image features.",
  gifUrl: "https://i.postimg.cc/J0V6wrhV/discord-gg-syria.gif",
  features: [
    "Confessions",
    "Rank Cards",
    "Translations",
    "Weather",
    "Utility Commands",
    "Custom Images"
  ],
  commands: [
    "/confess",
    "/rank",
    "/translate",
    "/weather",
    "/ping",
    "/image",
    "/reply",
    "/rules"
  ],
  status: "online" as const,
  techStack: ["Python", "Discord.py", "Pillow", "SQLite", "VPS"],
},
{
  id: 8,
  name: "Omar",
  description: "Automated Discord news publishing bot with scheduled posting, gallery support, test commands and interval-based news delivery for community servers.",
  gifUrl: "https://i.postimg.cc/J0x2bwRB/Whats-App-Video2026-03-20at5-42-35PM-ezgif-com-video-to-gif-converter.gif",
  features: [
    "Auto News Posting",
    "Interval Scheduler",
    "Gallery Forms",
    "Test Commands",
    "Auto Stop / Start"
  ],
  commands: [
    "/news_interval",
    "/news_start",
    "/news_stop",
    "/news_test",
    "/post_gallery_form"
  ],
  status: "online" as const,
  techStack: ["Python", "Discord.py", "Scheduler", "JSON", "Vercel"],
},
  {
  id: 9,
  name: "Yahya ",
  description: "24/7 Discord voice bot for Quran recitation and Azkar streaming with support for 50+ reciters, continuous room playback, control panel and live status management.",
  gifUrl: "https://i.postimg.cc/qM98jbgg/Whats-App-Video2026-03-20at5-55-54PM-ezgif-com-video-to-gif-converter.gif",
  features: [
    "24/7 Voice Streaming",
    "50+ Reciters",
    "Azkar Audio",
    "Voice Panel",
    "Live Room Control"
  ],
  commands: [
    "/panel",
    "/playnow",
    "/status",
    "/stop",
    "/leave"
  ],
  status: "online" as const,
  techStack: ["Python", "Discord.py", "FFmpeg", "Voice API", "VPS"],
},
]

export default function BotsPage() {
  const handleDiscordRedirect = () => {
    window.open(DISCORD_LINK, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <main className="relative px-6 pb-8 lg:px-12">
        {/* Header */}
        <header className="pb-8 pt-12">
          <div className="mx-auto max-w-7xl">
            {/* Back Navigation */}
            <Link href="/">
              <Button variant="ghost" className="mb-6 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>

            {/* Page Title */}
            <div className="flex items-center gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-primary/50 bg-gradient-to-br from-primary/20 to-transparent shadow-[0_0_30px_rgba(180,50,50,0.3)]">
                <Bot className="h-8 w-8 text-primary" />
                <div className="absolute inset-0 rounded-xl bg-primary/10 blur-md" />
              </div>
              <div>
                <h1 className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
                  Discord Bots Showcase
                </h1>
                <p className="text-sm text-muted-foreground lg:text-base">
                  Premium Discord bots with advanced features and 24/7 hosting
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Bots Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {bots.map((bot) => (
              <BotCard
                key={bot.id}
                name={bot.name}
                description={bot.description}
                gifUrl={bot.gifUrl}
                features={bot.features}
                commands={bot.commands}
                status={bot.status}
                techStack={bot.techStack}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16">
            <div className="mx-auto max-w-2xl rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 via-card/80 to-transparent p-8 text-center backdrop-blur-sm lg:p-12">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              
              <h2 className="mb-3 text-2xl font-bold text-foreground lg:text-3xl">
                Order Your Custom Bot
              </h2>
              
              <p className="mb-8 text-muted-foreground">
                Premium Discord bots built in C++ and Python with 24/7 VPS hosting.
                Tickets, moderation, Quran streaming, news automation, custom image cards and more.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/80 hover:shadow-[0_0_25px_rgba(180,50,50,0.5)]"
                  onClick={handleDiscordRedirect}
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Need a Premium Discord Bot?
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:border-primary hover:bg-primary/10"
                  onClick={handleDiscordRedirect}
                >
                  <Bot className="mr-2 h-5 w-5" />
                  Join Discord Server
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SocialFooter />
    </div>
  )
}
