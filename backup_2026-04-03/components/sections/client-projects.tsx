"use client"

import { useEffect, useState } from "react"

type PortfolioItem = {
  title: string
  description: string
  image: string
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "استوديو البث المباشر",
    description: "استوديو بث احترافي يعرض واجهات التفاعل والإحصاءات المباشرة للمحتوى بأسلوب بصري فاخر وواضح.",
    image: "https://i.postimg.cc/cJmbr84W/Whats-App-Image-2026-04-03-at-11-26-40-AM.jpg",
  },
  {
    title: "جيرسون أدوات المبدعين",
    description: "واجهة جوال مخصصة لإدارة أدوات المبدعين والإحصاءات مع عرض بصري أنيق ولمسة حديثة.",
    image: "https://i.postimg.cc/MT33Y2BK/Whats-App-Image-2026-04-03-at-11-28-28-AM.jpg",
  },
  {
    title: "واجهة موقع فاخر",
    description: "موقع احترافي مصمم لعرض الهوية والخدمات بأسلوب بصري مميز يعكس جودة المشروع وقيمته.",
    image: "https://i.postimg.cc/8P6XLYPx/Whats-App-Image-2026-04-03-at-11-29-24-AM.jpg",
  },
  {
    title: "منصة ألعاب احترافية",
    description: "واجهة مخصصة للبطولات والإحصاءات والتفاعل المباشر بتفاصيل قوية وهوية بصرية واضحة.",
    image: "https://i.postimg.cc/525PRFz5/Whats-App-Image-2026-04-03-at-11-30-27-AM.jpg",
  },
  {
    title: "صفحة هبوط مستقبلية",
    description: "تصميم حديث بهوية بصرية فاخرة وتكوين متوازن يمنح المشروع حضوراً أقوى وأكثر تميزاً.",
    image: "https://i.postimg.cc/xC8t8xZ2/Gemini-Generated-Image-mwktd4mwktd4mwkt.png",
  },
  {
    title: "استوديو Creator Pro",
    description: "لوحة عرض احترافية للبث المباشر وأدوات التفاعل مع اهتمام واضح بالتفاصيل والإضاءة والعمق.",
    image: "https://i.postimg.cc/DfJ3YBwX/Gemini-Generated-Image-8o9elg8o9elg8o9e.png",
  },
]

export function ClientProjects() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section id="client-projects" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            أعمال مختارة
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/60 md:text-base">
            نماذج من التصاميم والواجهات التي تم تنفيذها بأسلوب احترافي يعكس جودة العمل
            والهوية البصرية لكل مشروع.
          </p>
        </div>

        <div className="space-y-32 md:space-y-44 lg:space-y-56">
          {portfolioItems.map((item, index) => {
            const isImageRight = index % 2 === 0
            const imageShift = Math.max(-30, Math.min(30, (scrollY * 0.03) - index * 8))
            const glowShift = Math.max(-40, Math.min(40, (scrollY * 0.045) - index * 10))

            return (
              <div
                key={index}
                className="grid items-center gap-8 md:gap-12 lg:grid-cols-12 lg:gap-16"
              >
                <div
                  className={`relative ${isImageRight ? "lg:col-span-7 lg:col-start-6" : "lg:col-span-7 lg:col-start-1"} order-1`}
                >
                  <div
                    className={`pointer-events-none absolute -inset-x-6 -bottom-8 -top-8 rounded-[40px] blur-3xl ${
                      isImageRight
                        ? "bg-[radial-gradient(circle_at_70%_40%,rgba(180,25,40,0.22),transparent_55%)]"
                        : "bg-[radial-gradient(circle_at_30%_40%,rgba(180,25,40,0.22),transparent_55%)]"
                    }`}
                    style={{
                      transform: `translate3d(0, ${glowShift}px, 0) scale(1.02)`,
                    }}
                  />

                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="group relative block w-full text-left [perspective:1600px]"
                  >
                    <div
                      className={`relative overflow-hidden rounded-[30px] border border-white/10 bg-black/30 shadow-[0_18px_80px_rgba(0,0,0,0.38)] transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-[1.01] group-hover:border-primary/40 group-hover:shadow-[0_28px_90px_rgba(120,10,20,0.32)] ${
                        isImageRight
                          ? "origin-right md:rotate-[1.1deg] group-hover:rotate-0"
                          : "origin-left md:-rotate-[1.1deg] group-hover:rotate-0"
                      }`}
                      style={{
                        transform: `translate3d(0, ${imageShift}px, 0)`,
                      }}
                    >
                      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),transparent_24%,transparent_76%,rgba(255,255,255,0.05))]" />
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
                          index % 3 === 1
                            ? "h-[380px] md:h-[520px] lg:h-[620px]"
                            : "h-[440px] md:h-[580px] lg:h-[700px]"
                        }`}
                        loading="lazy"
                      />
                    </div>
                  </button>
                </div>

                <div
                  className={`order-2 lg:col-span-5 ${isImageRight ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8 lg:row-start-1"}`}
                >
                  <div
                    className={`max-w-xl ${
                      isImageRight ? "lg:pr-6" : "lg:pl-6"
                    }`}
                  >
                    <div className="mb-5 h-px w-24 bg-gradient-to-r from-primary/80 to-transparent" />
                    <h3 className="text-2xl font-bold tracking-tight text-white md:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-sm leading-8 text-white/65 md:text-lg md:leading-9">
                      {item.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className="mt-7 inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-primary/40 hover:bg-white/10"
                    >
                      فتح المعاينة
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="w-full max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#080808] shadow-2xl">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[82vh] w-full object-contain bg-black"
              />
            </div>

            <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {selectedItem.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-8 text-white/70 md:text-base">
                  {selectedItem.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
