'use client'

import { useEffect, useRef } from 'react'

interface GiftOverlayProps {
  name?: string
  value?: string
  avatar?: string
}

export function GiftOverlay({ 
  name = 'Alice_Wonder', 
  value = '999K',
  avatar = 'https://i.postimg.cc/mD3rqWsn/Gemini-Generated-Image-3o7b5m3o7b5m3o7b.png'
}: GiftOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 600
    canvas.height = 340

    const sparks: any[] = []
    const streaks: any[] = []

    function createSpark(type: string) {
      const isShine = type === 'shine'
      return {
        x: Math.random() * 600,
        y: Math.random() * 340,
        r: isShine ? Math.random() * 3 + 1 : Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * (isShine ? 0.8 : 0.3),
        vy: -(Math.random() * 0.8 + 0.2),
        alpha: Math.random() * 0.7 + 0.3,
        life: 0,
        maxLife: Math.random() * 160 + 80,
        isShine,
        color: isShine
          ? `hsl(${Math.random() * 30 + 40}, 100%, ${Math.random() * 20 + 60}%)`
          : `hsl(${Math.random() * 20 + 35}, 90%, 65%)`,
      }
    }

    function createStreak() {
      return {
        x: Math.random() * 600,
        y: Math.random() * 340,
        len: Math.random() * 40 + 15,
        angle: Math.random() * Math.PI * 2,
        alpha: Math.random() * 0.4 + 0.1,
        life: 0,
        maxLife: Math.random() * 60 + 30,
        color: `hsl(${Math.random() * 30 + 40}, 100%, 70%)`,
      }
    }

    for (let i = 0; i < 50; i++) {
      const s = createSpark(Math.random() > 0.5 ? 'shine' : 'normal')
      s.life = Math.random() * s.maxLife
      sparks.push(s)
    }

    for (let i = 0; i < 8; i++) {
      const s = createStreak()
      s.life = Math.random() * s.maxLife
      streaks.push(s)
    }

    function animGift() {
      ctx.clearRect(0, 0, 600, 340)

      for (const s of streaks) {
        s.life++
        if (s.life > s.maxLife) {
          Object.assign(s, createStreak())
          s.life = 0
          continue
        }
        const fade = Math.sin((s.life / s.maxLife) * Math.PI)
        ctx.save()
        ctx.globalAlpha = s.alpha * fade
        ctx.strokeStyle = s.color
        ctx.lineWidth = 1.5
        ctx.shadowBlur = 8
        ctx.shadowColor = s.color
        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x + Math.cos(s.angle) * s.len, s.y + Math.sin(s.angle) * s.len)
        ctx.stroke()
        ctx.restore()
      }

      for (const p of sparks) {
        p.life++
        if (p.life > p.maxLife) {
          Object.assign(p, createSpark(p.isShine ? 'shine' : 'normal'))
          p.life = 0
          continue
        }
        const fade = 1 - p.life / p.maxLife
        const cx = p.x + p.vx * p.life
        const cy = p.y + p.vy * p.life
        ctx.beginPath()
        if (p.isShine) {
          ctx.save()
          ctx.translate(cx, cy)
          ctx.rotate(Math.PI / 4)
          ctx.rect(-p.r, -p.r, p.r * 2, p.r * 2)
          ctx.restore()
        } else {
          ctx.arc(cx, cy, p.r, 0, Math.PI * 2)
        }
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.alpha * fade
        ctx.shadowBlur = 8
        ctx.shadowColor = p.color
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.shadowBlur = 0
      }

      requestAnimationFrame(animGift)
    }

    animGift()
  }, [])

  useEffect(() => {
    if (overlayRef.current) {
      const el = overlayRef.current
      el.style.animation = 'none'
      void el.offsetHeight
      el.style.animation = 'overlay-enter 0.7s cubic-bezier(0.16,1,0.3,1) forwards'
    }
  }, [])

  return (
    <div 
      ref={overlayRef}
      style={{
        width: '600px',
        height: '340px',
        position: 'relative',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
      }}
    >
      <style>{`
        @keyframes overlay-enter {
          0% { opacity: 0; transform: scale(0.8) translateY(20px); }
          60% { opacity: 1; transform: scale(1.04) translateY(-4px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes gift-bounce {
          0% { transform: scale(0) rotate(-10deg); opacity: 0; }
          60% { transform: scale(1.3) rotate(5deg); opacity: 1; }
          80% { transform: scale(0.9) rotate(-3deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        @keyframes gift-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @keyframes reveal-text {
          to { clip-path: inset(0 0% 0 0); }
        }

        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0.5); }
          70% { opacity: 1; transform: scale(1.15); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes shimmer-bar {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes shine {
          0% { left: -20%; opacity: 0; }
          20% { opacity: 1; }
          100% { left: 120%; opacity: 0; }
        }

        .bg-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,160,0,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 20% 60%, rgba(255,100,0,0.12) 0%, transparent 70%),
            radial-gradient(ellipse 30% 40% at 80% 30%, rgba(255,200,0,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .gift-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0;
          background: linear-gradient(135deg,
            rgba(30,20,5,0.85) 0%,
            rgba(50,30,5,0.75) 50%,
            rgba(30,20,5,0.85) 100%);
          border: 1px solid rgba(255,180,0,0.4);
          border-radius: 20px;
          padding: 24px 32px;
          width: 540px;
          box-shadow:
            0 0 40px rgba(255,140,0,0.25),
            0 0 80px rgba(200,100,0,0.15),
            inset 0 1px 0 rgba(255,220,100,0.15);
          overflow: hidden;
        }

        .card-shimmer {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ffd700, #ffaa00, #ffd700, transparent);
          animation: shimmer-bar 2s ease infinite;
        }

        .gift-icon-wrap {
          position: relative;
          width: 110px;
          height: 110px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gift-glow {
          position: absolute;
          inset: -15px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,160,0,0.45) 0%, transparent 70%);
          animation: gift-pulse 1.5s ease-in-out infinite;
        }

        .gift-emoji {
          font-size: 64px;
          filter: drop-shadow(0 0 15px rgba(255,180,0,0.9)) drop-shadow(0 0 30px rgba(255,120,0,0.5));
          animation: gift-bounce 0.6s cubic-bezier(0.36,0.07,0.19,0.97) 0.3s both;
          position: relative;
          z-index: 1;
        }

        .right-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          margin-right: 20px;
        }

        .top-row {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .avatar-small {
          width: 52px; height: 52px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid rgba(255,180,0,0.8);
          box-shadow: 0 0 14px rgba(255,140,0,0.6);
          flex-shrink: 0;
        }

        .avatar-small img {
          width: 100%; height: 100%;
          object-fit: cover;
        }

        .username {
          font-size: 28px;
          font-weight: 900;
          color: #fff;
          text-shadow: 0 0 15px rgba(255,180,0,0.8), 0 0 30px rgba(255,120,0,0.4);
          clip-path: inset(0 100% 0 0);
          animation: reveal-text 0.5s cubic-bezier(0.16,1,0.3,1) 0.6s forwards;
          direction: ltr;
          white-space: nowrap;
        }

        .gift-label {
          font-size: 16px;
          font-weight: 700;
          color: #ffcc44;
          text-shadow: 0 0 10px rgba(255,180,0,0.7);
          clip-path: inset(0 100% 0 0);
          animation: reveal-text 0.5s cubic-bezier(0.16,1,0.3,1) 0.9s forwards;
          direction: rtl;
        }

        .gift-arabic {
          font-size: 22px;
          font-weight: 700;
          color: #ffaa33;
          text-shadow: 0 0 12px rgba(255,160,0,0.7);
          clip-path: inset(0 100% 0 0);
          animation: reveal-text 0.5s cubic-bezier(0.16,1,0.3,1) 1.1s forwards;
          direction: rtl;
        }

        .value-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, rgba(255,160,0,0.3), rgba(180,100,0,0.2));
          border: 1px solid rgba(255,180,0,0.5);
          border-radius: 14px;
          padding: 3px 12px;
          opacity: 0;
          animation: pop-in 0.4s cubic-bezier(0.36,0.07,0.19,0.97) 1.3s forwards;
          box-shadow: 0 0 10px rgba(255,140,0,0.3);
        }

        .value-text {
          font-size: 14px;
          font-weight: 800;
          color: #ffd700;
          text-shadow: 0 0 8px rgba(255,200,0,0.8);
          letter-spacing: 1px;
        }

        .shine-1, .shine-2 {
          position: absolute;
          top: 0;
          width: 30px; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,200,100,0.15), transparent);
          transform: skewX(-20deg);
        }
        .shine-1 { left: -100%; animation: shine 2.5s ease 1.5s infinite; }
        .shine-2 { left: -100%; animation: shine 2.5s ease 2.2s infinite; }
      `}</style>

      <div className="bg-glow"></div>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      <div className="gift-card">
        <div className="card-shimmer"></div>
        <div className="shine-1"></div>
        <div className="shine-2"></div>

        <div className="gift-icon-wrap">
          <div className="gift-glow"></div>
          <div className="gift-emoji">🎁</div>
        </div>

        <div className="right-section">
          <div className="top-row">
            <div className="username">{name}</div>
            <div className="avatar-small">
              <img src={avatar} alt="avatar" />
            </div>
          </div>
          <div className="gift-arabic">أرسل هدية رائعة! 🌟</div>
          <div className="gift-label">شكراً على هديتك الكريمة</div>
          <div className="value-badge">
            <span style={{ color: '#ffd700', fontSize: '14px' }}>⭐</span>
            <span className="value-text">{value}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
