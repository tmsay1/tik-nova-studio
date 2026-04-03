export type DesignCategory =
  | "أفضل الهدايا"
  | "الأوفرلايز"
  | "ودجات تيك توك"
  | "تصاميم OBS"
  | "المنصات"
  | "أهداف الإعجاب"
  | "عدادات البث"
  | "بوتات ديسكورد"
  | "واجهات مخصصة"
  | "قوالب احترافية"

export interface Design {
  id: number
  title: string
  description: string
  category: DesignCategory
  rating: number
  tags: string[]
  previewCode: string
}

export const designs: Design[] = [
  {
    id: 2,
    title: "ودجت أفضل هدية",
    description: "ودجت فاخر لعرض أفضل هدية مع أسد متحرك، عداد ذهبي، وتأثيرات إضاءة احترافية. مثالي لإبراز أفضل الداعمين.",
    category: "أفضل الهدايا",
    rating: 5,
    tags: ["top gift", "lion", "animated", "gold", "supporters"],
    previewCode: `
      <style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:500px;height:500px;overflow:hidden;background:transparent!important;font-family:'Segoe UI',sans-serif;display:flex;justify-content:flex-end;align-items:center}
.w{position:relative;width:500px;height:500px;background:transparent;overflow:hidden}

/* ── DARK RADIAL BASE ── */
.bg{
  position:absolute;inset:0;
  background:radial-gradient(ellipse 78% 68% at 48% 60%,rgba(22,13,0,.84) 0%,rgba(14,8,0,.62) 52%,transparent 100%);
  z-index:0;animation:bgP 3.4s ease-in-out infinite;
}
@keyframes bgP{0%,100%{opacity:.80}50%{opacity:1}}

/* ── GOLD HALO BEHIND LION ── */
.halo{
  position:absolute;left:50%;top:50%;width:360px;height:320px;border-radius:50%;
  transform:translate(-50%,-50%);
  background:radial-gradient(ellipse 100% 100% at 50% 50%,rgba(255,190,0,.24) 0%,rgba(255,130,0,.13) 42%,transparent 72%);
  filter:blur(24px);z-index:1;animation:haloP 3.4s ease-in-out infinite;
}
@keyframes haloP{
  0%,100%{transform:translate(-50%,-50%) scale(1.00);opacity:.72}
  50%    {transform:translate(-50%,-50%) scale(1.12);opacity:1}
}

/* ── FLOOR GLOW ── */
.floor{
  position:absolute;bottom:100px;left:50%;width:260px;height:44px;
  transform:translateX(-50%);border-radius:50%;
  background:radial-gradient(ellipse 100% 100% at 50% 70%,rgba(255,170,0,.28) 0%,transparent 80%);
  filter:blur(14px);z-index:2;animation:floorP 3.4s ease-in-out infinite;
}
@keyframes floorP{0%,100%{opacity:.55}50%{opacity:1}}

/* ── TOP GIFT LABEL ── */
.label{
  position:absolute;top:18px;left:50%;transform:translateX(-50%);
  z-index:20;font-size:27px;font-weight:900;letter-spacing:4px;
  text-transform:uppercase;color:#FFD700;white-space:nowrap;
  image-rendering:crisp-edges;
  animation:lblG 3.4s ease-in-out infinite;
}
@keyframes lblG{
  0%,100%{text-shadow:0 0 6px #FFD700,0 0 14px #FFA500,0 0 28px rgba(255,140,0,.50)}
  50%    {text-shadow:0 0 10px #FFE040,0 0 24px #FFA500,0 0 48px rgba(255,140,0,.82),0 0 68px rgba(255,100,0,.36)}
}

/* ── SUPPORTER BLOCK — top-right ── */
.supp{
  position:absolute;top:10px;right:16px;
  display:flex;flex-direction:column;align-items:center;gap:8px;
  z-index:20;
}

/* Avatar: 116px — clearly larger */
.av{
  width:128px;height:128px;border-radius:50%;
  border:3.5px solid #FFD700;
  overflow:hidden;background:#1a0e00;
  /* Sharp rendering */
  image-rendering:crisp-edges;
  animation:avP 3.4s ease-in-out infinite;
}
@keyframes avP{
  0%,100%{box-shadow:0 0 0 2px rgba(255,215,0,.30),0 0 12px 4px rgba(255,165,0,.45),0 0 26px 8px rgba(255,130,0,.18)}
  50%    {box-shadow:0 0 0 4px rgba(255,215,0,.60),0 0 20px 8px rgba(255,165,0,.70),0 0 40px 14px rgba(255,130,0,.36)}
}
.av img{
  width:100%;height:100%;
  object-fit:cover;display:block;
  image-rendering:crisp-edges;
  /* Sharper rendering via will-change */
  will-change:transform;
}

.tag{
  background:rgba(14,9,0,.78);
  border:1.5px solid rgba(255,195,0,.58);
  border-radius:30px;padding:4px 18px;
  color:#FFF8DC;font-size:14px;font-weight:700;
  letter-spacing:.5px;white-space:nowrap;
  max-width:130px;overflow:hidden;text-overflow:ellipsis;text-align:center;
  box-shadow:0 0 9px rgba(255,175,0,.28),inset 0 0 6px rgba(255,175,0,.07);
  backdrop-filter:blur(3px);
}

/* ── LION — sharp, no blur on the image itself ── */
.lion{
  position:absolute;left:50%;top:26px;width:318px;
  transform:translateX(-54%);
  z-index:10;
  will-change:transform;
  animation:lionF 4.6s ease-in-out infinite;
}
@keyframes lionF{
  0%,100%{transform:translateX(-54%) translateY(0px)}
  50%    {transform:translateX(-54%) translateY(-6px)}
}
.lion img{
  width:100%;display:block;
  image-rendering:crisp-edges;
  will-change:filter;
  animation:lionG 3.4s ease-in-out infinite;
}
/* Key change: drop-shadow spread reduced so it glows but doesn't blur the lion itself */
@keyframes lionG{
  0%,100%{filter:drop-shadow(0 0 10px rgba(255,165,0,.55)) drop-shadow(0 0 22px rgba(255,110,0,.28)) drop-shadow(0 8px 18px rgba(0,0,0,.75))}
  50%    {filter:drop-shadow(0 0 18px rgba(255,165,0,.80)) drop-shadow(0 0 38px rgba(255,110,0,.50)) drop-shadow(0 8px 18px rgba(0,0,0,.75))}
}

/* ── GIFT BAR — near lion's feet ── */
.gift{
  position:absolute;
  bottom:128px;
  left:41%;
  transform:translateX(-50%);
  display:flex;align-items:center;gap:10px;
  z-index:20;
}

/* ── GOLD GIFT COIN ── */
.coin{
  width:52px;height:52px;border-radius:50%;
  position:relative;flex-shrink:0;
  background:radial-gradient(circle at 35% 30%, #FFF2A8 0%, #FFD84A 24%, #FFB000 48%, #F08A00 72%, #B85B00 100%);
  border:3px solid rgba(255,239,150,.86);
  display:flex;align-items:center;justify-content:center;
  animation:coinPulse 3.4s ease-in-out infinite;
  overflow:hidden;
}
.coin::before{
  content:'';position:absolute;top:5px;left:8px;
  width:18px;height:10px;border-radius:50%;
  background:rgba(255,255,255,.35);transform:rotate(-25deg);
  pointer-events:none;
}
@keyframes coinPulse{
  0%,100%{box-shadow:0 0 0 1px rgba(255,196,0,.44),0 0 12px 4px rgba(255,206,0,.68),0 0 26px 8px rgba(255,145,0,.38),0 2px 6px rgba(0,0,0,.55);transform:scale(1.00)}
  50%    {box-shadow:0 0 0 2px rgba(255,224,90,.70),0 0 20px 8px rgba(255,210,0,.88),0 0 38px 14px rgba(255,160,0,.54),0 2px 6px rgba(0,0,0,.55);transform:scale(1.08)}
}
.coin svg{position:relative;z-index:2;width:28px;height:28px;filter:drop-shadow(0 1px 1px rgba(0,0,0,.18));}

.gcnt{
  font-size:34px;font-weight:900;
  color:#fff;letter-spacing:1px;min-width:20px;
  /* Sharp text, no blur */
  text-shadow:0 0 6px rgba(255,215,0,.90),0 0 14px rgba(255,165,0,.55);
  will-change:auto;
}
      </style>

      <div class="w" id="widget">
        <div class="bg"></div>
        <div class="halo"></div>
        <div class="floor"></div>

        <div class="label">TOP GIFT</div>

        <div class="supp">
          <div class="av"><img id="avImg" src="https://i.postimg.cc/mrJvXWfR/Whats-App-Image-2026-03-26-at-12-43-46-AM.jpg" alt=""/></div>
          <div class="tag" id="tagName">Top Supporter</div>
        </div>

        <div class="lion">
          <img src="https://i.postimg.cc/7hS6mN5P/4fb89af2082a290b37d704e20f4fe729tplv-obj.png" alt="lion" crossorigin="anonymous"/>
        </div>

        <div class="gift">
          <div class="coin">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M33.5 14.5c-1.4 7.3.8 13.9 6.1 18.1 3.7 3 8 4.6 12.4 4.7v7.1c-5.9-.1-11.8-2.3-16.7-6.3v11.8c0 8.7-7.1 15.3-15.5 15.3S5 58.6 5 50.2c0-8.4 6.6-14.5 14.9-14.5 1.5 0 2.8.1 4.2.5v8.3c-1.2-.8-2.7-1.2-4.2-1.2-3.9 0-7 3.1-7 6.9 0 3.9 3.1 7 7 7 4.8 0 7.6-3.8 7.6-8.8V14.5h5.9Z" fill="#FFF7F0"/>
            </svg>
          </div>
          <div class="gcnt" id="gcnt">0</div>
        </div>
      </div>

      <script>
var topGiftUser = "Supporter";
var topGiftCount = 0;
var topGiftAvatar = "https://i.postimg.cc/mrJvXWfR/Whats-App-Image-2026-03-26-at-12-43-46-AM.jpg";

function setTopGift(o){
  o = o || {};
  document.getElementById("avImg").src = o.avatar ?? topGiftAvatar;
  document.getElementById("tagName").textContent = o.user ?? topGiftUser;
  document.getElementById("gcnt").textContent = o.count ?? topGiftCount;
}
setTopGift();
window.setTopGift = setTopGift;
      </script>
    `,
  },
  {
    id: 3,
    title: "ترتيب أفضل 5 داعمين",
    description: "ودجت ترتيب عمودي فاخر يعرض أفضل 5 داعمين مع قلوب متحركة، حلقات مضيئة، شارات ملوّنة، وتاج للمركز الأول. مثالي للوحات الترتيب.",
    category: "أفضل الهدايا",
    rating: 5,
    tags: ["ranking", "vertical", "animated", "hearts", "supporters"],
    previewCode: `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

        :root {
            --color-1: #ffcc00;
            --color-2: #00ffff;
            --color-3: #ff6600;
            --color-4: #bf00ff;
            --color-5: #00ff88;
            
            --base-row-height: 80px;
            --base-avatar-size: 70px;
            --base-font-size: 24px;
        }

        body {
            background-color: transparent;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: flex-end;
            align-items: flex-start;
            height: 100vh;
            font-family: 'Fredoka One', cursive;
            overflow: hidden;
            color: white;
        }

        .ranking-container {
            display: flex;
            flex-direction: column;
            gap: 15px;
            width: 450px;
        }

        .rank-row {
            display: flex;
            align-items: center;
            position: relative;
            width: 100%;
        }

        .row-1 { --row-scale: 1; height: calc(var(--base-row-height) * var(--row-scale)); }
        .row-2 { --row-scale: 0.95; height: calc(var(--base-row-height) * var(--row-scale)); }
        .row-3 { --row-scale: 0.90; height: calc(var(--base-row-height) * var(--row-scale)); }
        .row-4 { --row-scale: 0.85; height: calc(var(--base-row-height) * var(--row-scale)); }
        .row-5 { --row-scale: 0.80; height: calc(var(--base-row-height) * var(--row-scale)); }

        .left-section {
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 80px;
        }

        .heart-icon {
            width: calc(25px * var(--row-scale));
            height: calc(25px * var(--row-scale));
            fill: #ff4d6d;
            filter: drop-shadow(0 0 5px #ff4d6d);
            animation: rotateHeart 4s linear infinite;
        }

        .heart-value {
            font-size: calc(var(--base-font-size) * var(--row-scale));
            text-shadow: 0 0 10px rgba(255,255,255,0.5);
        }

        @keyframes rotateHeart {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(360deg); }
        }

        .middle-section {
            flex-grow: 1;
            height: calc(40px * var(--row-scale));
            background: rgba(20, 20, 20, 0.8);
            margin: 0 15px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 15px;
            border-bottom: 2px solid var(--row-color);
        }

        .middle-section::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            background: var(--row-color);
            box-shadow: 0 0 10px var(--row-color);
        }

        .placeholder-text {
            color: #ffffff;
            font-size: calc(18px * var(--row-scale));
            letter-spacing: 2px;
            opacity: 0.8;
        }

        .right-section {
            position: relative;
            width: calc(80px * var(--row-scale));
            height: calc(80px * var(--row-scale));
            margin-left: 0;
        }

        .avatar-box {
            width: calc(var(--base-avatar-size) * var(--row-scale));
            height: calc(var(--base-avatar-size) * var(--row-scale));
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #111;
            overflow: hidden;
            border: 2px solid rgba(255,255,255,0.1);
        }

        .avatar-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .glow-ring {
            width: calc(78px * var(--row-scale));
            height: calc(78px * var(--row-scale));
            border: 3px solid transparent;
            border-top: 3px solid var(--row-color);
            border-right: 3px solid var(--row-color);
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            animation: rotateRing 3s linear infinite;
            box-shadow: inset 0 0 5px var(--row-color);
        }

        @keyframes rotateRing {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .rank-badge {
            position: absolute;
            bottom: calc(5px * var(--row-scale));
            right: calc(-5px * var(--row-scale));
            width: calc(28px * var(--row-scale));
            height: calc(28px * var(--row-scale));
            background: var(--row-color);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000;
            font-size: calc(16px * var(--row-scale));
            font-weight: bold;
            box-shadow: 0 0 10px var(--row-color);
            z-index: 10;
        }

        .crown {
            position: absolute;
            top: calc(-25px * var(--row-scale));
            left: 50%;
            transform: translateX(-50%);
            width: calc(30px * var(--row-scale));
            height: calc(30px * var(--row-scale));
            fill: var(--color-1);
            filter: drop-shadow(0 0 8px var(--color-1));
            z-index: 11;
        }

        .row-1 { --row-color: var(--color-1); }
        .row-2 { --row-color: var(--color-2); }
        .row-3 { --row-color: var(--color-3); }
        .row-4 { --row-color: var(--color-4); }
        .row-5 { --row-color: var(--color-5); }
      </style>

      <div class="ranking-container">
        <div class="rank-row row-1">
            <div class="left-section">
                <svg class="heart-icon" viewBox="0 0 32 32"><path d="M16 28.5L14.1 26.7C7.3 20.6 2.8 16.5 2.8 11.5 2.8 7.4 6 4.2 10.1 4.2c2.3 0 4.5 1.1 5.9 2.8 1.4-1.7 3.6-2.8 5.9-2.8 4.1 0 7.3 3.2 7.3 7.3 0 5-4.5 9.1-11.3 15.2L16 28.5z"/></svg>
                <span class="heart-value">0</span>
            </div>
            <div class="middle-section">
                <span class="placeholder-text">---</span>
            </div>
            <div class="right-section">
                <svg class="crown" viewBox="0 0 24 24"><path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z"/></svg>
                <div class="glow-ring"></div>
                <div class="avatar-box">
                    <img src="https://i.postimg.cc/GmD7PsMS/channels4-profile.jpg">
                </div>
                <div class="rank-badge">1</div>
            </div>
        </div>

        <div class="rank-row row-2">
            <div class="left-section">
                <svg class="heart-icon" viewBox="0 0 32 32"><path d="M16 28.5L14.1 26.7C7.3 20.6 2.8 16.5 2.8 11.5 2.8 7.4 6 4.2 10.1 4.2c2.3 0 4.5 1.1 5.9 2.8 1.4-1.7 3.6-2.8 5.9-2.8 4.1 0 7.3 3.2 7.3 7.3 0 5-4.5 9.1-11.3 15.2L16 28.5z"/></svg>
                <span class="heart-value">0</span>
            </div>
            <div class="middle-section">
                <span class="placeholder-text">---</span>
            </div>
            <div class="right-section">
                <div class="glow-ring"></div>
                <div class="avatar-box">
                    <img src="https://i.postimg.cc/FzbQSFGp/Whats-App-Image-2026-03-26-at-12-43-46-AM.jpg">
                </div>
                <div class="rank-badge">2</div>
            </div>
        </div>

        <div class="rank-row row-3">
            <div class="left-section">
                <svg class="heart-icon" viewBox="0 0 32 32"><path d="M16 28.5L14.1 26.7C7.3 20.6 2.8 16.5 2.8 11.5 2.8 7.4 6 4.2 10.1 4.2c2.3 0 4.5 1.1 5.9 2.8 1.4-1.7 3.6-2.8 5.9-2.8 4.1 0 7.3 3.2 7.3 7.3 0 5-4.5 9.1-11.3 15.2L16 28.5z"/></svg>
                <span class="heart-value">0</span>
            </div>
            <div class="middle-section">
                <span class="placeholder-text">---</span>
            </div>
            <div class="right-section">
                <div class="glow-ring"></div>
                <div class="avatar-box">
                    <img src="https://i.postimg.cc/4NwDRS0w/8b5c5e33b3904fd2badf73f91b12403e-tplv-pyavlv3z7u-shrink-1200-0-q75.webp">
                </div>
                <div class="rank-badge">3</div>
            </div>
        </div>

        <div class="rank-row row-4">
            <div class="left-section">
                <svg class="heart-icon" viewBox="0 0 32 32"><path d="M16 28.5L14.1 26.7C7.3 20.6 2.8 16.5 2.8 11.5 2.8 7.4 6 4.2 10.1 4.2c2.3 0 4.5 1.1 5.9 2.8 1.4-1.7 3.6-2.8 5.9-2.8 4.1 0 7.3 3.2 7.3 7.3 0 5-4.5 9.1-11.3 15.2L16 28.5z"/></svg>
                <span class="heart-value">0</span>
            </div>
            <div class="middle-section">
                <span class="placeholder-text">---</span>
            </div>
            <div class="right-section">
                <div class="glow-ring"></div>
                <div class="avatar-box">
                    <img src="https://i.postimg.cc/GmD7PsMS/channels4-profile.jpg">
                </div>
                <div class="rank-badge">4</div>
            </div>
        </div>

        <div class="rank-row row-5">
            <div class="left-section">
                <svg class="heart-icon" viewBox="0 0 32 32"><path d="M16 28.5L14.1 26.7C7.3 20.6 2.8 16.5 2.8 11.5 2.8 7.4 6 4.2 10.1 4.2c2.3 0 4.5 1.1 5.9 2.8 1.4-1.7 3.6-2.8 5.9-2.8 4.1 0 7.3 3.2 7.3 7.3 0 5-4.5 9.1-11.3 15.2L16 28.5z"/></svg>
                <span class="heart-value">0</span>
            </div>
            <div class="middle-section">
                <span class="placeholder-text">---</span>
            </div>
            <div class="right-section">
                <div class="glow-ring"></div>
                <div class="avatar-box">
                    <img src="https://i.postimg.cc/FzbQSFGp/Whats-App-Image-2026-03-26-at-12-43-46-AM.jpg">
                </div>
                <div class="rank-badge">5</div>
            </div>
        </div>
      </div>

      <script>
        let scores = [0, 0, 0, 0, 0];
        
        function updateScores(newScores) {
            const values = document.querySelectorAll('.heart-value');
            newScores.forEach((score, index) => {
                if(values[index]) {
                    values[index].innerText = score;
                }
            });
        }

        setInterval(() => {
            scores = scores.map(s => s + Math.floor(Math.random() * 5));
            updateScores(scores);
        }, 3000);
      </script>
    `,
  },
  {
    id: 4,
    title: "هدف الإعجابات بزجاجة القلب",
    description: "تصميم زجاجة على شكل قلب مع تعبئة سائلة متحركة، قلوب عائمة، وتفاصيل أنيقة مع عرض النسبة. مثالي لتتبع هدف الإعجابات.",
    category: "أهداف الإعجاب",
    rating: 5,
    tags: ["like goal", "heart", "bottle", "animated", "liquid"],
    previewCode: `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
        :root {
          --liquid-color: #990011;
          --liquid-glow: #ff0022;
          --glass-outline: rgba(255, 255, 255, 0.8);
          --text-color: #ffffff;
        }
        body {
          background-color: transparent;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          font-family: 'Fredoka One', cursive;
          overflow: hidden;
        }
        .widget-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 400px;
        }
        .cork {
          width: 40px;
          height: 25px;
          background: #6d4c41;
          border-radius: 4px 4px 2px 2px;
          margin-bottom: -5px;
          z-index: 2;
          box-shadow: inset 0 -5px 10px rgba(0,0,0,0.3);
          border: 1px solid #3e2723;
        }
        .bottle-wrapper {
          position: relative;
          width: 200px;
          height: 180px;
          filter: drop-shadow(0 0 15px var(--liquid-glow));
        }
        .heart-bottle {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          clip-path: path('M100 175 C100 175 20 120 20 70 C20 40 45 25 65 25 C80 25 90 35 100 45 C110 35 120 25 135 25 C155 25 180 40 180 70 C180 120 100 175 100 175 Z');
          border: 4px solid var(--glass-outline);
          box-sizing: border-box;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
        }
        .bottle-wrapper::after {
          content: '';
          position: absolute;
          top: 35px;
          left: 45px;
          width: 30px;
          height: 60px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: rotate(15deg);
          filter: blur(5px);
          pointer-events: none;
          z-index: 5;
        }
        .liquid {
          width: 100%;
          height: 0%;
          background: linear-gradient(to top, #660000, var(--liquid-color));
          transition: height 1s ease-in-out;
          position: relative;
        }
        .floating-heart {
          position: absolute;
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
          pointer-events: none;
          animation: rise 3s infinite ease-in;
        }
        @keyframes rise {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-50px) scale(1.5); opacity: 0; }
        }
        .percent-text {
          position: absolute;
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 32px;
          color: white;
          text-shadow: 0 0 10px rgba(0,0,0,0.8);
          z-index: 10;
        }
        .footer {
          margin-top: 20px;
          text-align: center;
          color: white;
          text-shadow: 0 0 15px var(--liquid-glow);
        }
        .goal-label {
          font-size: 28px;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }
        .counter {
          font-size: 24px;
          opacity: 0.9;
        }
      </style>
      <div class="widget-container">
        <div class="cork"></div>
        <div class="bottle-wrapper">
          <div class="percent-text" id="percent-display">0%</div>
          <div class="heart-bottle">
            <div id="liquid-fill" class="liquid"></div>
          </div>
        </div>
        <div class="footer">
          <div class="goal-label">Like Goal</div>
          <div class="counter"><span id="current-likes">0</span> / <span id="goal-likes">100</span></div>
        </div>
      </div>
      <script>
        let currentLikes = 0;
        let goalLikes = 100;
        const liquid = document.getElementById('liquid-fill');
        const percentDisplay = document.getElementById('percent-display');
        const currentDisplay = document.getElementById('current-likes');
        const goalDisplay = document.getElementById('goal-likes');
        const bottle = document.querySelector('.heart-bottle');
        function updateWidget() {
          let percentage = Math.floor((currentLikes / goalLikes) * 100);
          if (percentage > 100) percentage = 100;
          if (percentage < 0) percentage = 0;
          liquid.style.height = percentage + "%";
          percentDisplay.innerText = percentage + "%";
          currentDisplay.innerText = currentLikes;
          goalDisplay.innerText = goalLikes;
        }
        function spawnHeart() {
          if (currentLikes === 0) return;
          const heart = document.createElement('div');
          heart.className = 'floating-heart';
          heart.innerHTML = '❤';
          heart.style.left = Math.random() * 80 + 10 + '%';
          heart.style.bottom = (currentLikes / goalLikes * 100) - 5 + '%';
          liquid.appendChild(heart);
          setTimeout(() => { heart.remove(); }, 3000);
        }
        updateWidget();
        setInterval(spawnHeart, 800);
        function addLike(val = 1) {
          currentLikes += val;
          if (currentLikes > goalLikes) currentLikes = goalLikes;
          updateWidget();
        }
        let demoInterval = setInterval(() => {
          if (currentLikes < goalLikes) {
            addLike(Math.floor(Math.random() * 3) + 1);
          } else {
            clearInterval(demoInterval);
          }
        }, 2000);
      </script>
    `,
  },
  {
    id: 5,
    title: "شريط تقدم هدف الهدايا",
    description: "ودجت فاخر لهدف الهدايا مع شريط تقدم متحرك، لمعة ذهبية، جزيئات لامعة، وعداد مضيء. مثالي لتتبع الهدايا.",
    category: "أفضل الهدايا",
    rating: 5,
    tags: ["gift goal", "progress bar", "gold", "animated", "shimmer"],
    previewCode: `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
        :root {
          --accent-color: #ffcc00;
          --glow-color: rgba(255, 204, 0, 0.6);
          --bar-bg: rgba(20, 20, 0, 0.8);
        }
        body {
          background-color: transparent;
          margin: 0;
          padding: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          overflow: hidden;
          font-family: 'Fredoka One', cursive;
        }
        .widget-wrapper {
          position: relative;
          width: 700px;
          height: 150px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .ambient-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .particle {
          position: absolute;
          background: var(--accent-color);
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          opacity: 0;
          animation: flicker 3s infinite;
        }
        @keyframes flicker {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        .header {
          margin-left: 95px;
          margin-bottom: 8px;
        }
        .goal-title {
          color: white;
          font-size: 32px;
          text-shadow: 0 0 15px var(--accent-color);
          letter-spacing: 1px;
        }
        .main-row {
          display: flex;
          align-items: center;
          position: relative;
        }
        .gift-icon {
          width: 70px;
          height: 70px;
          margin-right: 20px;
          filter: drop-shadow(0 0 15px var(--accent-color));
        }
        .gift-icon svg {
          fill: var(--accent-color);
          width: 100%;
          height: 100%;
        }
        .progress-container {
          flex-grow: 1;
          height: 55px;
          background: var(--bar-bg);
          border: 3px solid #665500;
          border-radius: 50px;
          position: relative;
          box-shadow: 0 0 30px var(--glow-color), inset 0 0 20px rgba(0,0,0,0.9);
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #886600, var(--accent-color), #ffe680);
          border-radius: 50px;
          box-shadow: 0 0 20px var(--accent-color);
          transition: width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }
        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255, 0.4), transparent);
          animation: shimmer 2s infinite;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .counter-wrapper {
          position: absolute;
          right: 0;
          bottom: -50px;
          color: white;
          font-size: 38px;
          text-shadow: 0 0 15px var(--accent-color);
        }
        .current-val { color: var(--accent-color); }
      </style>
      <div class="widget-wrapper">
        <div class="ambient-particles" id="particles"></div>
        <div class="header">
          <span class="goal-title">Gift Goal</span>
        </div>
        <div class="main-row">
          <div class="gift-icon">
            <svg viewBox="0 0 24 24">
              <path d="M20,6H17.62A3,3,0,0,0,12,3a3,3,0,0,0-5.62,3H4A2,2,0,0,0,2,8v3a2,2,0,0,0,2,2h1v6a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V13h1a2,2,0,0,0,2-2V8A2,2,0,0,0,20,6ZM9,6a1,1,0,0,1,1-1,1,1,0,0,1,1,1H9Zm6,0H13a1,1,0,0,1,1-1,1,1,0,0,1,1,1ZM17,19H7V13H17Zm3-8H4V8H20Z"/>
            </svg>
          </div>
          <div class="progress-container">
            <div id="barFill" class="progress-fill"></div>
          </div>
          <div class="counter-wrapper">
            <span id="currentVal" class="current-val">0</span> / <span id="goalVal">1000</span>
          </div>
        </div>
      </div>
      <script>
        let currentGifts = 0;
        let goalGifts = 1000;
        const barFill = document.getElementById('barFill');
        const currentText = document.getElementById('currentVal');
        const goalText = document.getElementById('goalVal');
        const particleContainer = document.getElementById('particles');
        function updateWidget() {
          currentText.innerText = Math.floor(currentGifts);
          goalText.innerText = goalGifts;
          const percentage = Math.min((currentGifts / goalGifts) * 100, 100);
          barFill.style.width = percentage + "%";
        }
        function createParticles() {
          for(let i = 0; i < 15; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            const size = Math.random() * 8 + 4;
            p.style.width = size + 'px';
            p.style.height = size + 'px';
            p.style.top = Math.random() * 100 + '%';
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDelay = Math.random() * 5 + 's';
            particleContainer.appendChild(p);
          }
        }
        function addGifts(amount) {
          currentGifts += amount;
          if (currentGifts > goalGifts) currentGifts = goalGifts;
          updateWidget();
        }
        createParticles();
        updateWidget();
        setInterval(() => {
          if (currentGifts < goalGifts) {
            addGifts(Math.floor(Math.random() * 100) + 20);
          }
        }, 3000);
      </script>
    `,
  },
  {
    id: 6,
    title: "أنيميشن نافورة القلوب",
    description: "نافورة قلوب ملوّنة مع قلوب صاعدة، تأثيرات لامعة، وحركات ديناميكية. مثالية لأوفرلايز الاحتفالات.",
    category: "الأوفرلايز",
    rating: 5,
    tags: ["hearts", "fountain", "animated", "colorful", "celebration"],
    previewCode: `
      <style>
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background-color: transparent;
        }
        #fountain-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          perspective: 1000px;
        }
        .heart {
          position: absolute;
          bottom: -50px;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
          animation: rise linear forwards;
        }
        .sparkle {
          position: absolute;
          background: white;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          animation: twinkle var(--duration) infinite ease-in-out;
        }
        @keyframes rise {
          0% {
            transform: translate(-50%, 0) scale(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translate(calc(-50% + var(--drift-x) * 0.1), -10vh) scale(var(--size)) rotate(var(--rot));
          }
          100% {
            transform: translate(calc(-50% + var(--drift-x)), -110vh) scale(var(--size)) rotate(calc(var(--rot) * 2));
            opacity: 0;
          }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 0.8; transform: scale(1); }
        }
        svg {
          width: 100%;
          height: 100%;
        }
      </style>
      <div id="fountain-container"></div>
      <script>
        const container = document.getElementById('fountain-container');
        const colors = ['#FF3366', '#FF6633', '#FFCC33', '#33FF66', '#33FFCC', '#3399FF', '#9933FF', '#FF33CC'];
        function createHeart() {
          const heart = document.createElement('div');
          heart.className = 'heart';
          const size = Math.random() * 25 + 15;
          const color = colors[Math.floor(Math.random() * colors.length)];
          const duration = Math.random() * 3 + 4;
          const driftX = (Math.random() - 0.5) * 400;
          const rotation = (Math.random() - 0.5) * 45;
          const startDelay = Math.random() * 2;
          heart.style.setProperty('--size', 1);
          heart.style.setProperty('--drift-x', driftX + 'px');
          heart.style.setProperty('--rot', rotation + 'deg');
          heart.style.width = size + 'px';
          heart.style.height = size + 'px';
          heart.style.animationDuration = duration + 's';
          heart.style.animationDelay = startDelay + 's';
          heart.innerHTML = '<svg viewBox="0 0 32 32"><path fill="' + color + '" d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c0.841-9.945,14-8.902,14,0.454 C30,20.335,16,28.261,16,28.261z" /></svg>';
          heart.style.filter = 'drop-shadow(0 0 12px ' + color + '88)';
          container.appendChild(heart);
          setTimeout(() => { heart.remove(); }, (duration + startDelay) * 1000);
        }
        function createSparkle() {
          const sparkle = document.createElement('div');
          sparkle.className = 'sparkle';
          const size = Math.random() * 4 + 2;
          const duration = Math.random() * 2 + 1;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          sparkle.style.width = size + 'px';
          sparkle.style.height = size + 'px';
          sparkle.style.left = x + '%';
          sparkle.style.top = y + '%';
          sparkle.style.setProperty('--duration', duration + 's');
          sparkle.style.boxShadow = '0 0 10px white';
          container.appendChild(sparkle);
          setTimeout(() => { sparkle.remove(); }, duration * 1000);
        }
        setInterval(createHeart, 300);
        setInterval(createSparkle, 150);
        for(let i = 0; i < 10; i++) { createHeart(); }
      </script>
    `,
  },
  {
    id: 9,
    title: "لوحة أفضل 10 داعمين",
    description: "لوحة ترتيب كاملة لأفضل 10 داعمين مع أشرطة متدرجة، عملات دوّارة، تاج للمركز الأول، وحدود مضيئة. مثالية لترتيب الداعمين.",
    category: "الأوفرلايز",
    rating: 5,
    tags: ["leaderboard", "top 10", "supporters", "coins", "ranking"],
    previewCode: `
      <style>
        :root {
          --c1: #efcc1d; --c2: #d4d4d4; --c3: #b07c4d; --c4: #4363a0; --c5: #725298;
          --c6: #356d48; --c7: #851c2c; --c8: #8d5d28; --c9: #2b3d58; --c10: #4a3463;
        }
        body {
          background-color: transparent;
          margin: 0;
          padding: 50px;
          overflow: hidden;
          font-family: 'Arial', sans-serif;
        }
        .leaderboard {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: fit-content;
        }
        .row {
          display: flex;
          align-items: center;
          border-radius: 40px;
          position: relative;
          background: rgba(0, 0, 0, 0.7);
          border: 2px solid transparent;
          color: white;
          padding-left: 10px;
          padding-right: 25px;
          box-sizing: border-box;
        }
        .r1 { width: 620px; height: 74px; border-color: var(--c1); box-shadow: 0 0 25px var(--c1); }
        .r2 { width: 560px; height: 68px; border-color: var(--c2); box-shadow: 0 0 15px var(--c2); }
        .r3 { width: 500px; height: 62px; border-color: var(--c3); box-shadow: 0 0 15px var(--c3); }
        .r4 { width: 450px; height: 58px; border-color: var(--c4); box-shadow: 0 0 12px var(--c4); }
        .r5 { width: 410px; height: 54px; border-color: var(--c5); box-shadow: 0 0 12px var(--c5); }
        .r6 { width: 370px; height: 50px; border-color: var(--c6); box-shadow: 0 0 10px var(--c6); }
        .r7 { width: 330px; height: 46px; border-color: var(--c7); box-shadow: 0 0 10px var(--c7); }
        .r8 { width: 300px; height: 44px; border-color: var(--c8); box-shadow: 0 0 8px var(--c8); }
        .r9 { width: 270px; height: 42px; border-color: var(--c9); box-shadow: 0 0 8px var(--c9); }
        .r10{ width: 240px; height: 40px; border-color: var(--c10); box-shadow: 0 0 8px var(--c10); }
        .rank-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 20px;
          background: rgba(255, 255, 255, 0.2);
          margin-right: 15px;
          color: #fff;
        }
        .r1 .rank-circle { background: var(--c1); color: #000; box-shadow: 0 0 10px var(--c1); }
        .avatar-box {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.4);
          overflow: hidden;
          margin-right: 15px;
        }
        .avatar-box img { width: 100%; height: 100%; object-fit: cover; }
        .name {
          flex-grow: 1;
          font-weight: bold;
          font-size: 18px;
          color: #ddd;
        }
        .stats {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .coin {
          width: 28px;
          height: 28px;
          background: #f1b90d;
          border: 2px solid #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 16px;
          box-shadow: 0 0 10px #f1b90d;
          animation: spin 3s linear infinite;
        }
        .value {
          font-size: 24px;
          font-weight: 800;
        }
        .crown {
          position: absolute;
          top: -24px;
          left: 14px;
          width: 40px;
          animation: float 2.5s ease-in-out infinite;
          filter: drop-shadow(0 0 5px gold);
        }
        .r1::after {
          content: "";
          position: absolute;
          top: 0; left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-25deg);
          animation: shine 5s infinite;
        }
        @keyframes spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-6px) rotate(2deg); }
        }
        @keyframes shine {
          0% { left: -100%; }
          20% { left: 120%; }
          100% { left: 120%; }
        }
      </style>
      <div class="leaderboard" id="board"></div>
      <script>
        const images = [
          'https://i.postimg.cc/mkrp7Xq5/8b5c5e33b3904fd2badf73f91b12403e-tplv-pyavlv3z7u-shrink-1200-0-q75.webp',
          'https://i.postimg.cc/pLLWFvJn/channels4-profile-(1).jpg',
          'https://i.postimg.cc/GmD7PsMS/channels4-profile.jpg'
        ];
        const board = document.getElementById('board');
        for (let i = 1; i <= 10; i++) {
          const row = document.createElement('div');
          row.className = 'row r' + i;
          const avatarImg = images[(i - 1) % images.length];
          let crownHtml = '';
          if (i === 1) {
            crownHtml = '<svg class="crown" viewBox="0 0 24 24" fill="none"><path d="M5 21H19V19H5V21ZM19 8L15 10L12 3L9 10L5 8L7 17H17L19 8Z" fill="#FFD700" stroke="#B8860B" stroke-width="1"/></svg>';
          }
          row.innerHTML = crownHtml + '<div class="rank-circle">' + i + '</div><div class="avatar-box"><img src="' + avatarImg + '" alt="user"></div><div class="name">---</div><div class="stats"><div class="coin">$</div><div class="value">0</div></div>';
          board.appendChild(row);
        }
      </script>
    `,
  },
  {
    
    id: 11,
    title: "أفضل 10 داعمين - تصميم ممتلئ",
    description: "لوحة ترتيب احترافية بتدرجات ممتلئة مع أيقونة عملة تيك توك، أشرطة متدرجة، وتأثيرات لمعان. مثالية لترتيب الداعمين.",
    category: "الأوفرلايز",
    rating: 5,
    tags: ["leaderboard", "top 10", "filled", "gradient", "tiktok"],
    previewCode: `
      <style>
        :root {
          --c1: #efcc1d; --c2: #d4d4d4; --c3: #b07c4d; --c4: #4363a0; --c5: #725298;
          --c6: #356d48; --c7: #851c2c; --c8: #8d5d28; --c9: #2b3d58; --c10: #4a3463;
        }
        body {
          background-color: transparent;
          margin: 0;
          padding: 50px;
          overflow: hidden;
          font-family: 'Arial', sans-serif;
        }
        .leaderboard {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: fit-content;
        }
        .row {
          display: flex;
          align-items: center;
          border-radius: 40px;
          position: relative;
          color: white;
          padding-left: 10px;
          padding-right: 22px;
          box-sizing: border-box;
          overflow: visible;
        }
        .r1  { width: 620px; height: 74px; background: linear-gradient(135deg, #b9870a 0%, #efcc1d 35%, #f7df62 68%, #c99510 100%); box-shadow: 0 0 26px rgba(239,204,29,0.95), 0 0 46px rgba(239,204,29,0.35); }
        .r2  { width: 560px; height: 68px; background: linear-gradient(135deg, #747474 0%, #c6c6c6 38%, #efefef 68%, #8d8d8d 100%); box-shadow: 0 0 18px rgba(212,212,212,0.85), 0 0 30px rgba(212,212,212,0.28); }
        .r3  { width: 500px; height: 62px; background: linear-gradient(135deg, #7c4c1e 0%, #b07c4d 38%, #cf9a67 68%, #8d5e34 100%); box-shadow: 0 0 16px rgba(176,124,77,0.85), 0 0 28px rgba(176,124,77,0.28); }
        .r4  { width: 450px; height: 58px; background: linear-gradient(135deg, #23467c 0%, #4363a0 38%, #5e83c6 68%, #2d4b84 100%); box-shadow: 0 0 14px rgba(67,99,160,0.9), 0 0 24px rgba(67,99,160,0.30); }
        .r5  { width: 410px; height: 54px; background: linear-gradient(135deg, #4b2e71 0%, #725298 38%, #8f6db9 68%, #5b3f7f 100%); box-shadow: 0 0 14px rgba(114,82,152,0.9), 0 0 24px rgba(114,82,152,0.30); }
        .r6  { width: 370px; height: 50px; background: linear-gradient(135deg, #1c5532 0%, #356d48 38%, #4e9a69 68%, #214d32 100%); box-shadow: 0 0 12px rgba(53,109,72,0.85), 0 0 20px rgba(53,109,72,0.28); }
        .r7  { width: 330px; height: 46px; background: linear-gradient(135deg, #5f1421 0%, #851c2c 38%, #ae2a41 68%, #681726 100%); box-shadow: 0 0 12px rgba(133,28,44,0.85), 0 0 20px rgba(133,28,44,0.28); }
        .r8  { width: 300px; height: 44px; background: linear-gradient(135deg, #6a4314 0%, #8d5d28 38%, #b67931 68%, #6e4319 100%); box-shadow: 0 0 10px rgba(141,93,40,0.85), 0 0 18px rgba(141,93,40,0.26); }
        .r9  { width: 270px; height: 42px; background: linear-gradient(135deg, #1c3551 0%, #2b3d58 38%, #3f5a84 68%, #20324c 100%); box-shadow: 0 0 10px rgba(43,61,88,0.85), 0 0 18px rgba(43,61,88,0.26); }
        .r10 { width: 240px; height: 40px; background: linear-gradient(135deg, #322447 0%, #4a3463 38%, #664887 68%, #39274d 100%); box-shadow: 0 0 10px rgba(74,52,99,0.85), 0 0 18px rgba(74,52,99,0.26); }
        .row::before {
          content: ""; position: absolute; inset: 1px; border-radius: 40px;
          background: linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.02) 42%, rgba(0,0,0,0.16) 100%);
          pointer-events: none;
        }
        .rank-circle {
          width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
          font-weight: 900; font-size: 20px; background: rgba(0, 0, 0, 0.36); margin-right: 15px;
          color: #fff; box-shadow: inset 0 1px 1px rgba(255,255,255,0.12);
        }
        .r1 .rank-circle { background: #ffd21f; color: #000; box-shadow: 0 0 12px rgba(255,210,31,0.9); }
        .avatar-box {
          width: 48px; height: 48px; border-radius: 50%; border: 3px solid rgba(255, 255, 255, 0.72);
          overflow: hidden; margin-right: 15px;
        }
        .avatar-box img { width: 100%; height: 100%; object-fit: cover; }
        .name { flex-grow: 1; font-weight: 800; font-size: 18px; color: #f2f2f2; text-shadow: 0 1px 3px rgba(0,0,0,0.45); }
        .stats { display: flex; align-items: center; gap: 10px; }
        .coin {
          width: 32px; height: 32px;
          animation: spin 3s linear infinite;
          filter: drop-shadow(0 0 8px rgba(255,196,0,0.8));
        }
        .value { font-size: 24px; font-weight: 900; color: #fff; text-shadow: 0 1px 3px rgba(0,0,0,0.5); }
        .crown {
          position: absolute; top: -18px; left: 16px; width: 48px;
          animation: float 2.5s ease-in-out infinite;
          filter: drop-shadow(0 0 6px gold);
        }
        .r1::after {
          content: ""; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-25deg); animation: shine 5s infinite;
        }
        @keyframes spin { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
        @keyframes float { 0%, 100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-6px) rotate(2deg); } }
        @keyframes shine { 0% { left: -100%; } 20% { left: 120%; } 100% { left: 120%; } }
      </style>
      <div class="leaderboard" id="board"></div>
      <script>
        const images = [
          'https://i.postimg.cc/mkrp7Xq5/8b5c5e33b3904fd2badf73f91b12403e-tplv-pyavlv3z7u-shrink-1200-0-q75.webp',
          'https://i.postimg.cc/pLLWFvJn/channels4-profile-(1).jpg',
          'https://i.postimg.cc/GmD7PsMS/channels4-profile.jpg'
        ];
        const board = document.getElementById('board');
        const tiktokCoinSVG = '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="url(#coinGrad)" stroke="#e1a900" stroke-width="2"/><defs><linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#ffe57e"/><stop offset="50%" style="stop-color:#ffbc0d"/><stop offset="100%" style="stop-color:#d28a00"/></linearGradient></defs><path d="M68,35.5 c-5.2,0 -9.5,-3.2 -11.2,-7.8 v28.8 c0,10.1 -8.2,18.3 -18.3,18.3 s-18.3,-8.2 -18.3,-18.3 s8.2,-18.3 18.3,-18.3 c1.5,0 3,0.2 4.4,0.5 v9.4 c-1.4,-0.5 -2.8,-0.8 -4.4,-0.8 c-4.9,0 -8.9,4 -8.9,8.9 s4,8.9 8.9,8.9 s8.9,-4 8.9,-8.9 V15.5 h9.4 c0,6.9 5.6,12.5 12.5,12.5 v7.5 Z" fill="white" /></svg>';
        for (let i = 1; i <= 10; i++) {
          const row = document.createElement('div');
          row.className = 'row r' + i;
          const avatarImg = images[(i - 1) % images.length];
          let crownHtml = '';
          if (i === 1) {
            crownHtml = '<svg class="crown" viewBox="0 0 36 28" fill="none"><path d="M4 23H32V20H4V23Z" fill="#ffd61f" stroke="#9e6a00" stroke-width="1"/><path d="M5 20L8 8L15 14L18 4L21 14L28 8L31 20H5Z" fill="#ffd61f" stroke="#9e6a00" stroke-width="1.1"/></svg>';
          }
          row.innerHTML = crownHtml + '<div class="rank-circle">' + i + '</div><div class="avatar-box"><img src="' + avatarImg + '" alt="user"></div><div class="name">---</div><div class="stats"><div class="coin">' + tiktokCoinSVG + '</div><div class="value">0</div></div>';
          board.appendChild(row);
        }
      </script>
    `,
  },
  {
    id: 12,
    title: "أوفرلاي ترتيب الفوانيس",
    description: "لوحة ترتيب بتصميم فوانيس معلّقة مع حركة اهتزاز ناعمة، إضاءات ملوّنة، وشارات للمراكز. مثالية لأوفرلايز البث.",
    category: "الأوفرلايز",
    rating: 5,
    tags: ["leaderboard", "lantern", "hanging", "animated", "overlay"],
    previewCode: `
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        html, body {
          background: transparent;
          width: fit-content;
          height: fit-content;
          overflow: visible;
        }
        .scene {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 10px;
          padding: 8px 14px 32px 14px;
        }
        .unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          transform-origin: top center;
          flex-shrink: 0;
        }
        .unit.ol { animation: swOL 6.3s ease-in-out infinite; }
        .unit.sl { animation: swSL 5.5s ease-in-out infinite 0.6s; }
        .unit.cc { animation: swCC 5.1s ease-in-out infinite 0.15s; }
        .unit.sr { animation: swSR 5.7s ease-in-out infinite 0.9s; }
        .unit.or { animation: swOR 6.6s ease-in-out infinite 0.35s; }
        @keyframes swOL { 0%,100%{transform:rotate(-1.9deg)} 50%{transform:rotate(1.5deg)} }
        @keyframes swSL { 0%,100%{transform:rotate(-1.5deg)} 50%{transform:rotate(1.7deg)} }
        @keyframes swCC { 0%,100%{transform:rotate(-1.1deg)} 50%{transform:rotate(1.1deg)} }
        @keyframes swSR { 0%,100%{transform:rotate(1.5deg)}  50%{transform:rotate(-1.7deg)} }
        @keyframes swOR { 0%,100%{transform:rotate(1.9deg)}  50%{transform:rotate(-1.5deg)} }
        .string { width:2px; flex-shrink:0; }
        .lcap {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          position: relative;
          width: 100%;
        }
        .lcap-hook {
          border-radius: 50%;
          border-style: solid;
          flex-shrink: 0;
        }
        .lcap-neck {
          flex-shrink: 0;
          border-radius: 3px 3px 0 0;
        }
        .lcap-shoulder {
          width: 100%;
          flex-shrink: 0;
          position: relative;
          border-radius: 6px 6px 0 0;
        }
        .card {
          width: 100%;
          flex-shrink: 0;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          border-top: none !important;
        }
        .av-wrap { position:relative; flex-shrink:0; z-index:3; }
        .av-ring-outer {
          border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          padding:3px;
        }
        .av-ring-inner {
          border-radius:50%;
          background:#07070e;
          display:flex; align-items:center; justify-content:center;
          padding:2px;
        }
        .av-img {
          border-radius:50%;
          display:block;
          object-fit:cover;
          background:#12121f;
        }
        .crown {
          position:absolute;
          top:-22px; left:50%;
          transform:translateX(-50%);
          font-size:22px;
          filter:drop-shadow(0 0 10px #ffd700);
          z-index:6;
          line-height:1;
        }
        .pname {
          font-family:'Segoe UI',Arial,sans-serif;
          font-weight:700;
          color:#fff;
          text-align:center;
          text-shadow:0 1px 6px rgba(0,0,0,0.95);
          padding:0 8px;
          line-height:1.2;
          z-index:3;
        }
        .vpill {
          display:flex; align-items:center; gap:5px;
          background:rgba(0,0,0,0.48);
          border-radius:22px;
          border:1px solid rgba(255,255,255,0.09);
          z-index:3;
        }
        .vheart {
          line-height:1;
          filter:drop-shadow(0 0 5px currentColor);
        }
        .vval {
          font-family:'Segoe UI',Arial,sans-serif;
          font-weight:800;
          color:#fff;
          text-shadow:0 1px 4px rgba(0,0,0,0.8);
        }
        .rbadge {
          position:absolute;
          bottom:-13px; left:50%;
          transform:translateX(-50%) rotate(45deg);
          border-radius:4px;
          display:flex; align-items:center; justify-content:center;
          z-index:10;
        }
        .rbadge-n {
          transform:rotate(-45deg);
          font-family:'Segoe UI',Arial,sans-serif;
          font-weight:900;
          color:#fff;
          text-shadow:0 1px 4px rgba(0,0,0,0.75);
        }
      </style>
      <div class="scene">
        <div class="unit ol" style="width:150px">
          <div class="string" style="height:64px;background:linear-gradient(to bottom, rgba(191,95,255,0.85), rgba(191,95,255,0.2))"></div>
          <div class="lcap" style="width:150px">
            <div class="lcap-hook" style="width:14px;height:14px;border-width:2px;border-color:#BF5FFF;box-shadow:0 0 8px #BF5FFF"></div>
            <div class="lcap-neck" style="width:78px;height:36px;background:linear-gradient(160deg,#222,#111);border:1.5px solid rgba(191,95,255,0.68);margin-top:-2px;display:flex;align-items:center;justify-content:center">
              <span style="color:#BF5FFF;font-size:17px;filter:drop-shadow(0 0 6px #BF5FFF)">&#10022;</span>
            </div>
            <div class="lcap-shoulder" style="width:150px;height:14px;background:linear-gradient(160deg,#222,#111);border:1.5px solid rgba(191,95,255,0.68);margin-top:-1px"></div>
          </div>
          <div class="card" style="width:150px;min-height:218px;background:linear-gradient(175deg,#181825,#0f0f1c,#08080e);border:1.5px solid rgba(191,95,255,0.58);border-radius:0 0 18px 18px;padding-bottom:28px">
            <div class="av-wrap" style="margin-top:16px">
              <div class="av-ring-outer" style="width:74px;height:74px;background:conic-gradient(#BF5FFF,#6200EA,#BF5FFF);box-shadow:0 0 20px rgba(191,95,255,0.6)">
                <div class="av-ring-inner" style="width:68px;height:68px">
                  <img class="av-img" style="width:62px;height:62px" src="https://i.postimg.cc/q73JDCcz/channels4-profile-(1).jpg" alt="">
                </div>
              </div>
              <div class="rbadge" style="width:25px;height:25px;background:linear-gradient(135deg,#BF5FFF,#6200EA);bottom:-12px">
                <span class="rbadge-n" style="font-size:11px">4</span>
              </div>
            </div>
            <div class="pname" style="font-size:13px;margin-top:8px">Player 4</div>
            <div class="vpill" style="margin-top:5px;padding:3px 10px 3px 8px">
              <span class="vheart" style="color:#BF5FFF;font-size:12px">&#9829;</span>
              <span class="vval" style="font-size:12px">5100</span>
            </div>
          </div>
        </div>
        <div class="unit sl" style="width:164px">
          <div class="string" style="height:54px;background:linear-gradient(to bottom, rgba(0,229,255,0.85), rgba(0,229,255,0.2))"></div>
          <div class="lcap" style="width:164px">
            <div class="lcap-hook" style="width:14px;height:14px;border-width:2px;border-color:#00E5FF;box-shadow:0 0 8px #00E5FF"></div>
            <div class="lcap-neck" style="width:88px;height:40px;background:linear-gradient(160deg,#002840,#001020);border:1.5px solid rgba(0,229,255,0.68);margin-top:-2px;display:flex;align-items:center;justify-content:center">
              <span style="color:#00E5FF;font-size:17px;filter:drop-shadow(0 0 6px #00E5FF)">&#10022;</span>
            </div>
            <div class="lcap-shoulder" style="width:164px;height:16px;background:linear-gradient(160deg,#002840,#001020);border:1.5px solid rgba(0,229,255,0.68);margin-top:-1px"></div>
          </div>
          <div class="card" style="width:164px;min-height:240px;background:linear-gradient(175deg,#001d2e,#001018,#000810);border:1.5px solid rgba(0,229,255,0.68);border-radius:0 0 18px 18px;padding-bottom:28px">
            <div class="av-wrap" style="margin-top:16px">
              <div class="av-ring-outer" style="width:80px;height:80px;background:conic-gradient(#00E5FF,#006EFF,#00E5FF);box-shadow:0 0 20px rgba(0,229,255,0.6)">
                <div class="av-ring-inner" style="width:74px;height:74px">
                  <img class="av-img" style="width:68px;height:68px" src="https://i.postimg.cc/q73JDCcz/channels4-profile-(1).jpg" alt="">
                </div>
              </div>
              <div class="rbadge" style="width:25px;height:25px;background:linear-gradient(135deg,#00E5FF,#006EFF);bottom:-12px">
                <span class="rbadge-n" style="font-size:11px">2</span>
              </div>
            </div>
            <div class="pname" style="font-size:13px;margin-top:8px">Player 2</div>
            <div class="vpill" style="margin-top:5px;padding:3px 10px 3px 8px">
              <span class="vheart" style="color:#00E5FF;font-size:12px">&#9829;</span>
              <span class="vval" style="font-size:12px">8950</span>
            </div>
          </div>
        </div>
        <div class="unit cc" style="width:194px">
          <div class="string" style="height:42px;background:linear-gradient(to bottom, rgba(255,215,0,0.85), rgba(255,215,0,0.2))"></div>
          <div class="lcap" style="width:194px">
            <div class="lcap-hook" style="width:17px;height:17px;border-width:2px;border-color:#FFD700;box-shadow:0 0 8px #FFD700"></div>
            <div class="lcap-neck" style="width:108px;height:46px;background:linear-gradient(160deg,#3e3200,#1c1600);border:1.5px solid rgba(255,208,44,0.75);margin-top:-2px;display:flex;align-items:center;justify-content:center">
              <span style="color:#FFD700;font-size:22px;filter:drop-shadow(0 0 6px #FFD700)">&#9733;</span>
            </div>
            <div class="lcap-shoulder" style="width:194px;height:18px;background:linear-gradient(160deg,#3e3200,#1c1600);border:1.5px solid rgba(255,208,44,0.75);margin-top:-1px"></div>
          </div>
          <div class="card" style="width:194px;min-height:290px;background:linear-gradient(175deg,#2e2400,#1c1600,#0e0d00);border:1.5px solid rgba(255,208,44,0.75);border-radius:0 0 18px 18px;padding-bottom:28px">
            <div class="av-wrap" style="margin-top:38px">
              <div class="crown">&#128081;</div>
              <div class="av-ring-outer" style="width:96px;height:96px;background:conic-gradient(#FFD700,#996600,#ffe580,#FFD700);box-shadow:0 0 20px rgba(255,215,0,0.7)">
                <div class="av-ring-inner" style="width:90px;height:90px">
                  <img class="av-img" style="width:84px;height:84px" src="https://i.postimg.cc/Hx0pdDh8/channels4-profile.jpg" alt="">
                </div>
              </div>
              <div class="rbadge" style="width:30px;height:30px;background:linear-gradient(135deg,#FFD700,#aa7700);bottom:-14px">
                <span class="rbadge-n" style="font-size:14px">1</span>
              </div>
            </div>
            <div class="pname" style="font-size:17px;margin-top:12px">Player 1</div>
            <div class="vpill" style="margin-top:8px;padding:5px 14px 5px 10px">
              <span class="vheart" style="color:#FFD700;font-size:15px">&#9829;</span>
              <span class="vval" style="font-size:15px">15400</span>
            </div>
          </div>
        </div>
        <div class="unit sr" style="width:164px">
          <div class="string" style="height:54px;background:linear-gradient(to bottom, rgba(255,107,53,0.85), rgba(255,107,53,0.2))"></div>
          <div class="lcap" style="width:164px">
            <div class="lcap-hook" style="width:14px;height:14px;border-width:2px;border-color:#FF6B35;box-shadow:0 0 8px #FF6B35"></div>
            <div class="lcap-neck" style="width:88px;height:40px;background:linear-gradient(160deg,#331a00,#160900);border:1.5px solid rgba(255,118,28,0.68);margin-top:-2px;display:flex;align-items:center;justify-content:center">
              <span style="color:#FF6B35;font-size:17px;filter:drop-shadow(0 0 6px #FF6B35)">&#10022;</span>
            </div>
            <div class="lcap-shoulder" style="width:164px;height:16px;background:linear-gradient(160deg,#331a00,#160900);border:1.5px solid rgba(255,118,28,0.68);margin-top:-1px"></div>
          </div>
          <div class="card" style="width:164px;min-height:240px;background:linear-gradient(175deg,#221000,#140800,#090300);border:1.5px solid rgba(255,118,28,0.68);border-radius:0 0 18px 18px;padding-bottom:28px">
            <div class="av-wrap" style="margin-top:16px">
              <div class="av-ring-outer" style="width:80px;height:80px;background:conic-gradient(#FF6B35,#FF0000,#FF6B35);box-shadow:0 0 20px rgba(255,107,53,0.6)">
                <div class="av-ring-inner" style="width:74px;height:74px">
                  <img class="av-img" style="width:68px;height:68px" src="https://i.postimg.cc/g25cKKh9/8b5c5e33b3904fd2badf73f91b12403e-tplv-pyavlv3z7u-shrink-1200-0-q75.webp" alt="">
                </div>
              </div>
              <div class="rbadge" style="width:25px;height:25px;background:linear-gradient(135deg,#FF6B35,#FF0000);bottom:-12px">
                <span class="rbadge-n" style="font-size:11px">3</span>
              </div>
            </div>
            <div class="pname" style="font-size:13px;margin-top:8px">Player 3</div>
            <div class="vpill" style="margin-top:5px;padding:3px 10px 3px 8px">
              <span class="vheart" style="color:#FF6B35;font-size:12px">&#9829;</span>
              <span class="vval" style="font-size:12px">7200</span>
            </div>
          </div>
        </div>
        <div class="unit or" style="width:150px">
          <div class="string" style="height:64px;background:linear-gradient(to bottom, rgba(0,255,157,0.85), rgba(0,255,157,0.2))"></div>
          <div class="lcap" style="width:150px">
            <div class="lcap-hook" style="width:14px;height:14px;border-width:2px;border-color:#00FF9D;box-shadow:0 0 8px #00FF9D"></div>
            <div class="lcap-neck" style="width:78px;height:36px;background:linear-gradient(160deg,#002e14,#001508);border:1.5px solid rgba(35,215,115,0.68);margin-top:-2px;display:flex;align-items:center;justify-content:center">
              <span style="color:#00FF9D;font-size:17px;filter:drop-shadow(0 0 6px #00FF9D)">&#10022;</span>
            </div>
            <div class="lcap-shoulder" style="width:150px;height:14px;background:linear-gradient(160deg,#002e14,#001508);border:1.5px solid rgba(35,215,115,0.68);margin-top:-1px"></div>
          </div>
          <div class="card" style="width:150px;min-height:218px;background:linear-gradient(175deg,#001c0c,#000f07,#000604);border:1.5px solid rgba(35,215,115,0.68);border-radius:0 0 18px 18px;padding-bottom:28px">
            <div class="av-wrap" style="margin-top:16px">
              <div class="av-ring-outer" style="width:74px;height:74px;background:conic-gradient(#00FF9D,#00B36B,#00FF9D);box-shadow:0 0 20px rgba(0,255,157,0.6)">
                <div class="av-ring-inner" style="width:68px;height:68px">
                  <img class="av-img" style="width:62px;height:62px" src="https://i.postimg.cc/Hx0pdDh8/channels4-profile.jpg" alt="">
                </div>
              </div>
              <div class="rbadge" style="width:25px;height:25px;background:linear-gradient(135deg,#00FF9D,#00B36B);bottom:-12px">
                <span class="rbadge-n" style="font-size:11px">5</span>
              </div>
            </div>
            <div class="pname" style="font-size:13px;margin-top:8px">Player 5</div>
            <div class="vpill" style="margin-top:5px;padding:3px 10px 3px 8px">
              <span class="vheart" style="color:#00FF9D;font-size:12px">&#9829;</span>
              <span class="vval" style="font-size:12px">3800</span>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: 13,
    title: "ودجت هدف المتابعة",
    description: "ودجت هدف متابعة بتصميم أزرق مع شريط تقدم متحرك، لمعات، وتأثيرات مضيئة. مثالي لتتبع هدف المتابعين.",
    category: "ودجات تيك توك",
    rating: 5,
    tags: ["follow goal", "progress bar", "blue", "animated", "sparkles"],
    previewCode: `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
        :root {
          --glow-color: #0022ff;
          --fill-color: #0044ff;
          --text-color: #4d79ff;
          --bar-bg: rgba(0, 0, 0, 0.6);
        }
        body {
          background-color: transparent;
          margin: 0;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          overflow: hidden;
          font-family: 'Fredoka One', cursive;
        }
        .widget-container {
          position: relative;
          width: 600px;
          height: 120px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .header {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
          margin-left: 70px;
        }
        .title {
          color: var(--text-color);
          font-size: 28px;
          letter-spacing: 2px;
          text-shadow: 0 0 10px var(--glow-color);
          text-transform: lowercase;
        }
        .bar-row {
          display: flex;
          align-items: center;
          position: relative;
        }
        .icon-container {
          width: 50px;
          height: 50px;
          margin-right: 15px;
          filter: drop-shadow(0 0 8px var(--glow-color));
        }
        .icon-container svg {
          fill: #1a53ff;
          width: 100%;
          height: 100%;
        }
        .progress-outline {
          flex-grow: 1;
          height: 44px;
          background: var(--bar-bg);
          border: 3px solid #0011aa;
          border-radius: 50px;
          position: relative;
          box-shadow: 0 0 20px var(--glow-color), inset 0 0 15px rgba(0,0,0,0.8);
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #001188, #0055ff);
          box-shadow: 0 0 15px var(--glow-color);
          transition: width 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67);
          border-radius: 50px;
          position: relative;
        }
        .sparkles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          background-image: 
            radial-gradient(circle, #fff 1px, transparent 1px),
            radial-gradient(circle, #fff 1px, transparent 1px);
          background-size: 100px 44px, 150px 30px;
          background-position: 0 0, 40px 10px;
          opacity: 0.4;
          animation: moveSparkles 10s linear infinite;
        }
        @keyframes moveSparkles {
          from { background-position: 0 0, 40px 10px; }
          to { background-position: 500px 0, 540px 10px; }
        }
        .counter {
          position: absolute;
          right: 10px;
          bottom: -35px;
          color: var(--text-color);
          font-size: 32px;
          text-shadow: 0 0 10px var(--glow-color);
        }
        .ambient-star {
          position: absolute;
          color: var(--text-color);
          font-size: 10px;
          opacity: 0.6;
          animation: flicker 2s infinite alternate;
        }
        @keyframes flicker {
          0% { opacity: 0.2; transform: scale(0.8); }
          100% { opacity: 0.8; transform: scale(1.2); }
        }
      </style>
      <div class="widget-container">
        <div class="ambient-star" style="top: 10px; left: 260px;">&#10022;</div>
        <div class="ambient-star" style="top: 35px; right: 80px;">&#10022;</div>
        <div class="ambient-star" style="bottom: 50px; left: 220px;">&#10022;</div>
        <div class="header">
          <div class="title">follow Goal</div>
        </div>
        <div class="bar-row">
          <div class="icon-container">
            <svg viewBox="0 0 24 24">
              <path d="M15 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-9-4V7H4v3H1v2h3v3h2v-3h3v-2H6zm9-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
            </svg>
          </div>
          <div class="progress-outline">
            <div id="fill" class="progress-fill">
              <div class="sparkles"></div>
            </div>
          </div>
          <div class="counter">
            <span id="current">0</span> / <span id="goal">100</span>
          </div>
        </div>
      </div>
      <script>
        let currentFollowers = 0;
        let goalFollowers = 100;
        const fillElement = document.getElementById('fill');
        const currentText = document.getElementById('current');
        const goalText = document.getElementById('goal');
        function updateWidget() {
          currentText.innerText = currentFollowers;
          goalText.innerText = goalFollowers;
          let percentage = (currentFollowers / goalFollowers) * 100;
          percentage = Math.min(Math.max(percentage, 0), 100);
          fillElement.style.width = percentage + "%";
        }
        function addFollow(amount) {
          currentFollowers += amount;
          if (currentFollowers > goalFollowers) currentFollowers = goalFollowers;
          updateWidget();
        }
        updateWidget();
        const demoInterval = setInterval(() => {
          if (currentFollowers < goalFollowers) {
            addFollow(Math.floor(Math.random() * 5) + 1);
          } else {
            clearInterval(demoInterval);
          }
        }, 2000);
      </script>
    `,
  },
  {
    id: 14,
    title: "شريط تقدم هدف الإعجابات",
    description: "ودجت هدف إعجابات بتصميم أحمر مع شريط تقدم متحرك، لمعات عائمة، وأيقونة قلب. مثالي لتتبع هدف الإعجابات.",
    category: "أهداف الإعجاب",
    rating: 5,
    tags: ["like goal", "progress bar", "red", "animated", "hearts"],
    previewCode: `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
        :root {
          --accent-color: #ff0044;
          --glow-color: rgba(255, 0, 68, 0.7);
          --bar-bg: rgba(15, 0, 5, 0.85);
          --text-shadow: 0 0 12px rgba(255, 0, 68, 0.9);
        }
        body {
          background-color: transparent;
          margin: 0;
          padding: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          overflow: hidden;
          font-family: 'Fredoka One', cursive;
        }
        .widget-container {
          position: relative;
          width: 650px;
          display: flex;
          flex-direction: column;
        }
        .sparkle {
          position: absolute;
          background: white;
          border-radius: 50%;
          pointer-events: none;
          box-shadow: 0 0 10px var(--accent-color), 0 0 20px var(--accent-color);
          opacity: 0;
          animation: fly 4s infinite ease-in-out;
        }
        @keyframes fly {
          0% { transform: translate(0, 0) scale(0); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translate(var(--x), var(--y)) scale(1); opacity: 0; }
        }
        .header {
          margin-left: 85px;
          margin-bottom: 5px;
        }
        .title {
          color: white;
          font-size: 30px;
          text-shadow: var(--text-shadow);
          letter-spacing: 1px;
        }
        .main-row {
          display: flex;
          align-items: center;
          position: relative;
        }
        .icon-box {
          width: 65px;
          height: 65px;
          margin-right: 15px;
          filter: drop-shadow(0 0 15px var(--accent-color));
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .icon-box svg {
          fill: var(--accent-color);
          width: 100%;
          height: 100%;
        }
        .progress-outline {
          flex-grow: 1;
          height: 52px;
          background: var(--bar-bg);
          border: 3px solid #440011;
          border-radius: 50px;
          position: relative;
          box-shadow: 0 0 35px var(--glow-color), inset 0 0 15px rgba(0,0,0,1);
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #880022, var(--accent-color), #ff6688);
          border-radius: 50px;
          box-shadow: 0 0 20px var(--accent-color);
          transition: width 1s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
        }
        .progress-fill::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
          animation: shine 3s infinite linear;
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .counter {
          position: absolute;
          right: 5px;
          bottom: -45px;
          color: white;
          font-size: 34px;
          text-shadow: var(--text-shadow);
        }
        .current-num {
          color: var(--accent-color);
        }
      </style>
      <div class="widget-container">
        <div id="sparkle-container"></div>
        <div class="header">
          <div class="title">Like Goal</div>
        </div>
        <div class="main-row">
          <div class="icon-box">
            <svg viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <div class="progress-outline">
            <div id="bar" class="progress-fill"></div>
          </div>
          <div class="counter">
            <span id="current" class="current-num">0</span> / <span id="goal">100</span>
          </div>
        </div>
      </div>
      <script>
        let currentLikes = 0;
        let goalLikes = 100;
        const bar = document.getElementById('bar');
        const currentTxt = document.getElementById('current');
        const goalTxt = document.getElementById('goal');
        const sparkleContainer = document.getElementById('sparkle-container');
        function updateWidget() {
          currentTxt.innerText = currentLikes;
          goalTxt.innerText = goalLikes;
          let percentage = (currentLikes / goalLikes) * 100;
          if (percentage > 100) percentage = 100;
          if (percentage < 0) percentage = 0;
          bar.style.width = percentage + "%";
        }
        function createSparkle() {
          const s = document.createElement('div');
          s.className = 'sparkle';
          const size = Math.random() * 5 + 2;
          s.style.width = size + 'px';
          s.style.height = size + 'px';
          s.style.left = Math.random() * 100 + '%';
          s.style.top = Math.random() * 100 + '%';
          const xMove = (Math.random() - 0.5) * 150;
          const yMove = (Math.random() - 0.5) * 150;
          s.style.setProperty('--x', xMove + 'px');
          s.style.setProperty('--y', yMove + 'px');
          sparkleContainer.appendChild(s);
          setTimeout(() => { s.remove(); }, 4000);
        }
        function addLikes(amount) {
          currentLikes += amount;
          if (currentLikes > goalLikes) currentLikes = goalLikes;
          updateWidget();
        }
        updateWidget();
        setInterval(createSparkle, 400);
        const demo = setInterval(() => {
          if (currentLikes < goalLikes) {
            addLikes(Math.floor(Math.random() * 5) + 1);
          } else {
            clearInterval(demo);
          }
        }, 2500);
      </script>
    `,
 },
{
  id: 15,
  title: "مبدّل المنصات الاحترافي",
  description: "عرض متحرك للمنصات الاجتماعية مع دوران أنيق، تأثيرات مضيئة، انتقالات نيون، وتبديل سلس للأيقونات.",
  category: "واجهات مخصصة",
  rating: 5,
  tags: ["platforms", "rotator", "social", "animated", "premium"],
  previewCode: `
    <iframe
      src="/previews/platforms-rotator.html"
      style="width:700px;height:280px;border:none;background:transparent;overflow:hidden;"
      scrolling="no">
    </iframe>
  `
},
{
  id: 16,
  title: "أوفرلاي منصة أحمر احترافي",
  description: "أوفرلاي منصة احترافي متحرك مع حدود مضيئة، تاج، جزيئات لامعة، وإبراز واضح للنقاط.",
  category: "المنصات",
  rating: 5,
  tags: ["podium", "overlay", "red", "premium", "animated"],
  previewCode: `
    <iframe
      src="/previews/podium-overlay-red.html"
      style="width:600px;height:390px;border:none;background:transparent;overflow:hidden;"
      scrolling="no">
    </iframe>
  `
},
{
  id: 17,
  title: "لوحة ترتيب احترافية لـ 6 لاعبين",
  description: "لوحة ترتيب احترافية متحركة لـ 6 لاعبين مع حلقات مضيئة، تاج، لوحات نقاط زجاجية، وتحديثات مباشرة.",
  category: "المنصات",
  rating: 5,
  tags: ["leaderboard", "ranking", "6 players", "animated", "premium"],
  previewCode: `
    <iframe
      src="/previews/leaderboard-premium.html"
      style="width:600px;height:390px;border:none;background:transparent;overflow:hidden;"
      scrolling="no">
    </iframe>
  `
},
{
  id: 18,
  title: "أوفرلاي متابعة احترافي",
  description: "أوفرلاي متابعة متحرك مع حلقات مضيئة حول الصورة، دخول سلس، ونص شكر عربي للمتابعة.",
  category: "الأوفرلايز",
  rating: 5,
  tags: ["follow", "overlay", "social", "animated", "premium"],
  previewCode: `
    <iframe
      src="/previews/follow-overlay.html"
      style="width:600px;height:340px;border:none;background:transparent;overflow:hidden;"
      scrolling="no">
    </iframe>
  `
},
{
  id: 19,
  title: "أوفرلاي إعجابات البث",
  description: "عداد إعجابات مباشر متحرك مع قلوب عائمة، نص مضيء، وتأثير زيادة سلس في الوقت الحقيقي.",
  category: "أهداف الإعجاب",
  rating: 5,
  tags: ["likes", "overlay", "hearts", "animated", "live"],
  previewCode: `
    <iframe
      src="/previews/live-like-overlay.html"
      style="width:600px;height:340px;border:none;background:transparent;overflow:hidden;"
      scrolling="no">
    </iframe>
  `
},
{
  id: 20,
  title: "أوفرلاي إعجابات احترافي",
  description: "أوفرلاي إعجابات فاخر متحرك مع حلقات مضيئة حول الصورة، قلوب عائمة، تأثيرات نيون حمراء، وحركة دخول وخروج سلسة.",
  category: "أهداف الإعجاب",
  rating: 5,
  tags: ["likes", "overlay", "hearts", "premium", "animated"],
  previewCode: `
    <iframe
      src="/previews/premium-like-overlay.html"
      style="width:600px;height:340px;border:none;background:transparent;overflow:hidden;"
      scrolling="no">
    </iframe>
  `
}
]
export const categories: DesignCategory[] = [
  "أفضل الهدايا",
  "الأوفرلايز",
  "ودجات تيك توك",
  "تصاميم OBS",
  "المنصات",
  "أهداف الإعجاب",
  "عدادات البث",
  "بوتات ديسكورد",
  "واجهات مخصصة",
  "قوالب احترافية",
]

export function getDesignsByCategory(category: DesignCategory): Design[] {
  return designs.filter((design) => design.category === category)
}

export function getDesignById(id: number): Design | undefined {
  return designs.find((design) => design.id === id)
}
