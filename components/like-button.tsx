"use client"

import { useEffect, useMemo, useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

type LikeButtonProps = {
  itemId: string
}

export function LikeButton({ itemId }: LikeButtonProps) {
  const safeId = useMemo(() => itemId.trim() || "unknown-item", [itemId])
  const likedKey = `tmstudio_liked_${safeId}`

  const [count, setCount] = useState<number>(0)
  const [liked, setLiked] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    async function load() {
      try {
        const localLiked = typeof window !== "undefined" && localStorage.getItem(likedKey) === "1"
        if (mounted) setLiked(localLiked)

        const res = await fetch(`/api/likes?item=${encodeURIComponent(safeId)}`, {
          cache: "no-store",
        })
        const data = await res.json()

        if (mounted) {
          setCount(Number(data.count || 0))
        }
      } catch {
      } finally {
        if (mounted) setLoading(false)
      }
    }

    load()
    return () => {
      mounted = false
    }
  }, [safeId, likedKey])

  async function handleLike() {
    if (liked) return

    try {
      const res = await fetch("/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item: safeId }),
      })

      const data = await res.json()
      setCount(Number(data.count || 0))
      setLiked(true)

      if (typeof window !== "undefined") {
        localStorage.setItem(likedKey, "1")
      }
    } catch {
      alert("Could not register like right now.")
    }
  }

  return (
    <Button
      type="button"
      size="sm"
      onClick={handleLike}
      disabled={loading || liked}
      className="w-full bg-primary text-primary-foreground hover:bg-primary/80 hover:shadow-[0_0_15px_rgba(180,50,50,0.4)] disabled:opacity-100"
    >
      <Heart className={`mr-1.5 h-4 w-4 ${liked ? "fill-current" : ""}`} />
      {liked ? "Liked" : "Like"} ({count})
    </Button>
  )
}
