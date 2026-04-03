"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles, Briefcase, FileEdit, Bot, User } from "lucide-react"

interface SidebarNavProps {
  activeSection?: string
  onSectionChange?: (section: string) => void
}

const items = [
  {
    id: "designs",
    label: "المعرض المباشر",
    icon: Sparkles,
    href: "/?section=designs",
  },
  {
    id: "projects",
    label: "أعمال مختارة",
    icon: Briefcase,
    href: "/?section=projects",
  },
  {
    id: "custom",
    label: "الطلبات الخاصة",
    icon: FileEdit,
    href: "/?section=custom",
  },
  {
    id: "profile",
    label: "صفحتي",
    icon: User,
    href: "/profile",
  },
  {
    id: "bots",
    label: "بوتات ديسكورد",
    icon: Bot,
    href: "/bots",
  },
]

export function SidebarNav({ activeSection, onSectionChange }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav className="group/nav fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3">
      {items.map((item) => {
        const Icon = item.icon

        const isActive =
          pathname === "/profile"
            ? item.id === "profile"
            : pathname === "/bots"
              ? item.id === "bots"
              : activeSection === item.id

        const className = [
          "relative flex h-14 w-14 items-center overflow-hidden rounded-2xl border transition-all duration-300 ease-out",
          "group-hover/nav:w-48",
          isActive
            ? "border-primary bg-primary/20 shadow-[0_0_20px_rgba(255,0,0,0.30)]"
            : "border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/50 hover:bg-card hover:shadow-[0_0_16px_rgba(255,0,0,0.18)]",
        ].join(" ")

        const inner = (
          <>
            <div className="flex h-14 w-14 shrink-0 items-center justify-center">
              <Icon
                className={[
                  "h-5 w-5 transition-all duration-300",
                  isActive ? "text-primary" : "text-primary/90",
                ].join(" ")}
              />
            </div>

            <span
              className={[
                "whitespace-nowrap pr-4 text-sm font-medium transition-all duration-300",
                "opacity-0 translate-x-2 group-hover/nav:translate-x-0 group-hover/nav:opacity-100",
                isActive ? "text-white" : "text-foreground/90",
              ].join(" ")}
            >
              {item.label}
            </span>

            {isActive && (
              <div className="absolute left-0 top-3 h-8 w-1 rounded-r-full bg-primary shadow-[0_0_12px_rgba(255,0,0,0.8)]" />
            )}
          </>
        )

        return (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => {
              if (pathname === "/" && onSectionChange && ["designs", "projects", "custom"].includes(item.id)) {
                onSectionChange(item.id)
              }
            }}
            className={className}
            aria-label={item.label}
            title={item.label}
          >
            {inner}
          </Link>
        )
      })}
    </nav>
  )
}
