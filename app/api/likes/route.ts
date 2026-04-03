import { NextRequest, NextResponse } from "next/server"
import { promises as fs } from "fs"
import path from "path"

const dataFile = path.join(process.cwd(), "data", "likes.json")

async function ensureFile() {
  try {
    await fs.access(dataFile)
  } catch {
    await fs.mkdir(path.dirname(dataFile), { recursive: true })
    await fs.writeFile(dataFile, "{}", "utf8")
  }
}

async function readLikes() {
  await ensureFile()
  const raw = await fs.readFile(dataFile, "utf8")
  try {
    return JSON.parse(raw || "{}")
  } catch {
    return {}
  }
}

async function writeLikes(data: Record<string, number>) {
  await ensureFile()
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2), "utf8")
}

export async function GET(req: NextRequest) {
  const item = req.nextUrl.searchParams.get("item") || ""
  const likes = await readLikes()

  return NextResponse.json({
    item,
    count: Number(likes[item] || 0),
  })
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const item = typeof body.item === "string" ? body.item : ""

  if (!item) {
    return NextResponse.json({ error: "Missing item" }, { status: 400 })
  }

  const likes = await readLikes()
  likes[item] = Number(likes[item] || 0) + 1
  await writeLikes(likes)

  return NextResponse.json({
    item,
    count: likes[item],
  })
}
