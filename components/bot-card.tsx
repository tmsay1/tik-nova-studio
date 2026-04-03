"use client"

import { CheckCircle, XCircle, ExternalLink, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

const DISCORD_LINK = "https://discord.gg/gTEzyDqaGj"

interface BotCardProps {
  name: string
  description: string
  gifUrl: string
  features: string[]
  commands: string[]
  status: "online" | "offline" | "maintenance"
  techStack: string[]
}

export function BotCard({
  name,
  description,
  gifUrl,
  features,
  commands,
  status,
  techStack,
}: BotCardProps) {
  const handleDiscordRedirect = () => {
    window.open(DISCORD_LINK, "_blank")
  }

  const statusConfig = {
    online: {
      color: "bg-green-500",
      text: "Online",
      icon: CheckCircle,
      textColor: "text-green-400",
    },
    offline: {
      color: "bg-red-500",
      text: "Offline",
      icon: XCircle,
      textColor: "text-red-400",
    },
    maintenance: {
      color: "bg-yellow-500",
      text: "Maintenance",
      icon: Code,
      textColor: "text-yellow-400",
    },
  }

  const currentStatus = statusConfig[status]
  const StatusIcon = currentStatus.icon

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_40px_rgba(180,50,50,0.35)]">
      {/* Glow effect overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
      </div>

      {/* GIF Preview Area */}
      <div className="relative aspect-[16/9] min-h-[280px] overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#111] lg:min-h-[320px]">
        <img
          src={gifUrl}
          alt={`${name} preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Status Badge */}
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5">
            {status === "online" && (
              <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${currentStatus.color} opacity-75`} />
            )}
            <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${currentStatus.color}`} />
          </span>
          <StatusIcon className={`h-3.5 w-3.5 ${currentStatus.textColor}`} />
          <span className={`text-xs font-semibold ${currentStatus.textColor}`}>
            {currentStatus.text}
          </span>
        </div>

        {/* Bot badge */}
        <div className="absolute right-4 top-4">
          <span className="rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold text-primary-foreground backdrop-blur-sm shadow-lg">
            Discord Bot
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5">
        {/* Name */}
        <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
          {name}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm text-muted-foreground">
          {description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
            Main Features
          </h4>
          <div className="flex flex-wrap gap-2">
            {features.map((feature, i) => (
              <span
                key={i}
                className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Commands */}
        <div className="mb-4">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Commands
          </h4>
          <div className="flex flex-wrap gap-2">
            {commands.map((command, i) => (
              <code
                key={i}
                className="rounded bg-secondary px-2 py-0.5 text-xs text-foreground"
              >
                {command}
              </code>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-5">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="rounded-lg border border-border/50 bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/80 hover:shadow-[0_0_15px_rgba(180,50,50,0.4)]"
            onClick={handleDiscordRedirect}
          >
            <ExternalLink className="mr-1.5 h-4 w-4" />
            Order This Bot
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-primary/50 text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary"
            onClick={handleDiscordRedirect}
          >
            Join Support Server
          </Button>
        </div>
      </div>
    </div>
  )
}
