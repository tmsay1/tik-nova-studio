"use client"

import { SidebarNav } from "@/components/sidebar-nav"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Sparkles, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { SocialFooter } from "@/components/social-footer"

const storyImages = [
  "https://i.postimg.cc/c4mcKdXd/image.jpg",
  "https://i.postimg.cc/0jvpQ4Sp/Whats-App-Image-2026-03-16-at-8-50-06-PM-(3).jpg",
  "https://i.postimg.cc/28zQNPrf/156329760ddcbf18.jpg",
]

export default function ProfilePage() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % storyImages.length)
    }, 3500)

    return () => window.clearInterval(timer)
  }, [])

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + storyImages.length) % storyImages.length)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % storyImages.length)
  }

  return (
    <>
      <SidebarNav activeSection="profile" onSectionChange={() => {}} />
      <main className="relative isolate min-h-screen overflow-hidden bg-background text-white">
      {/* Main background from site */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div aria-hidden="true" className="tik-bg fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="tik-bg__base"></div>
        <div className="tik-bg__vignette"></div>
        <div className="tik-bg__glow tik-bg__glow--1"></div>
        <div className="tik-bg__glow tik-bg__glow--2"></div>
        <div className="tik-bg__glow tik-bg__glow--3"></div>

        <div className="tik-bg__center">
          <div className="tik-bg__tik">TIK</div>
          <div className="tik-bg__pulse"></div>
        </div>

        <div className="tik-bg__wing tik-bg__wing--left">
          <span></span><span></span><span></span>
        </div>
        <div className="tik-bg__wing tik-bg__wing--right">
          <span></span><span></span><span></span>
        </div>

        <div className="tik-bg__particles"></div>
      </div>

      {/* top bar */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1800px] items-center justify-between px-6 py-8 lg:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-card/70 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-card hover:text-white hover:shadow-[0_0_20px_rgba(255,0,0,0.22)]"
        >
          <ArrowLeft className="h-4 w-4" />
          رجوع للموقع
        </Link>

        <div className="flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-primary/50 bg-gradient-to-br from-primary/20 to-transparent shadow-[0_0_30px_rgba(180,50,50,0.3)]">
            <Sparkles className="h-5 w-5 text-primary" />
            <div className="absolute inset-0 rounded-xl bg-primary/10 blur-md" />
          </div>
          <div className="text-right">
            <h2 className="text-lg font-bold text-white">Tik Nova Studio</h2>
            <p className="text-xs text-white/55">Profile</p>
          </div>
        </div>
      </div>

      {/* hero */}
      <section className="relative z-10 flex min-h-[78vh] flex-col items-center justify-center px-6 pb-16 pt-6">
        <div className="relative mb-8">
          <div className="absolute inset-[-10px] rounded-full border-2 border-primary/60 profile-ring shadow-[0_0_36px_rgba(255,0,0,0.30)]" />
          <div className="absolute inset-[-22px] rounded-full bg-primary/10 blur-2xl" />

          <img
            src="https://i.postimg.cc/Vs21bcZR/Whats-App-Image-2026-04-01-at-10-38-16-PM.jpg"
            alt="SALIH"
            className="relative h-44 w-44 rounded-full border border-primary/40 object-contain shadow-[0_0_30px_rgba(255,0,0,0.28)] lg:h-52 lg:w-52"
          />

          <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400/60 profile-ping" />
            <span className="relative inline-flex h-6 w-6 rounded-full border-2 border-white/50 bg-green-400 shadow-[0_0_18px_rgba(34,197,94,0.95)]" />
          </div>
        </div>

        <h1 className="profile-name relative mb-3 text-center text-6xl font-bold leading-none lg:text-8xl">
          <span className="profile-name__text">𝓢𝓐𝓛𝓘𝓗 🪽</span>
          <span aria-hidden="true" className="profile-name__sparks"></span>
        </h1>

        <p className="mb-2 text-center text-xl text-white/80 lg:text-2xl">
          Full Stack Developer
        </p>

        <p className="max-w-2xl text-center text-sm leading-7 text-white/55 lg:text-base">
          مطور ومصمم أعمل على الواجهات الاحترافية، الأوفرلايز، الحلول المخصصة، وتجارب
          مرئية تعطي طابع فاخر ومتناسق مع الهوية البصرية.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://guns.lol/tm_say"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-500 via-red-600 to-red-700 px-8 py-4 text-base font-semibold text-white shadow-[0_0_25px_rgba(255,0,0,0.30)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(255,0,0,0.45)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              Visit My Profile
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
            <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>

          <button
            type="button"
            className="group rounded-2xl border border-white/10 bg-black/35 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-white/20 hover:bg-black/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
          >
            <span className="flex items-center gap-3">
              Get In Touch
              <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </span>
          </button>
        </div>
      </section>

      {/* story section */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-10 lg:px-12">
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-sm text-red-300 shadow-[0_0_20px_rgba(255,0,0,0.10)]">
            <Sparkles className="h-4 w-4" />
            Get to know me
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-white lg:text-7xl">
            <span>My </span>
            <span className="bg-gradient-to-r from-white via-red-300 to-red-500 bg-clip-text text-transparent">
              Story
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/60 lg:text-2xl">
            From creative ideas to polished visuals, custom experiences, and meaningful digital work
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.35fr_0.65fr]">
          {/* left carousel */}
          <div>
            <div className="relative overflow-hidden rounded-[30px] border border-white/8 bg-black/40 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md">
              <div className="absolute right-5 top-5 z-20 rounded-full bg-black/65 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-md">
                {String(currentImage + 1).padStart(2, "0")} / {String(storyImages.length).padStart(2, "0")}
              </div>

              <div className="relative h-[760px] w-full overflow-hidden rounded-[24px] lg:h-[860px]">
                {storyImages.map((image, index) => {
                  const isActive = index === currentImage
                  return (
                    <img
                      key={image}
                      src={image}
                      alt={`Story image ${index + 1}`}
                      className={`absolute inset-0 h-full w-full object-contain transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive
                          ? "z-10 scale-100 opacity-100 blur-0 translate-x-0"
                          : index < currentImage
                            ? "z-0 scale-[1.04] opacity-0 blur-[2px] -translate-x-6"
                            : "z-0 scale-[1.04] opacity-0 blur-[2px] translate-x-6"
                      }`}
                    />
                  )
                })}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/18 to-transparent" />
              </div>

              <button
                type="button"
                onClick={prevImage}
                className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white/90 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-black/70 hover:text-white hover:shadow-[0_0_20px_rgba(255,0,0,0.20)]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={nextImage}
                className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white/90 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-black/70 hover:text-white hover:shadow-[0_0_20px_rgba(255,0,0,0.20)]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              {storyImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentImage(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentImage === i
                      ? "w-8 bg-red-500 shadow-[0_0_14px_rgba(255,0,0,0.45)]"
                      : "w-2.5 bg-white/25 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* right content */}
          <div className="lg:pt-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-red-300">
              <MapPin className="h-4 w-4" />
              سوريا → تركيا
            </div>

            <h3 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              The Journey
            </h3>

            <div className="space-y-6 text-lg leading-9 text-white/72">
              <p>
                بدأت رحلتي من حب التصميم وصناعة الأشياء التي يكون لها حضور بصري واضح،
                ومع الوقت توسع اهتمامي ليشمل <span className="font-semibold text-white">أكثر من مجال</span>:
                من الأوفرلايز والواجهات إلى الصفحات المخصصة، التفاصيل التفاعلية، والأفكار
                التي تتحول إلى تجربة كاملة متناسقة.
              </p>

              <p>
                لا أحب أن يكون العمل مجرد شكل جميل فقط، بل أحب أن يحمل شخصية، إحساس،
                وتنظيم بصري يخلي أي مشروع يبان أقوى وأرتب وأكثر احترافية. بالنسبة لي،
                اللمسات الصغيرة والحركة الناعمة وطريقة العرض كلها عناصر تصنع الفرق الحقيقي.
              </p>

              <p>
                اليوم أعمل على تطوير تجارب متنوعة تجمع بين الهوية، الجمال، الأداء، والأسلوب
                الخاص. سواء كان المشروع متعلقًا بالأوفرلايز أو بواجهة أو صفحة أو فكرة جديدة،
                المهم عندي أن يخرج بشكل يلفت النظر ويحمل بصمة واضحة.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SocialFooter />
    </main>
    </>
  )
}
