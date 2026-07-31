import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Check, HeartPulse, MapPin, Mic, ShieldCheck, Sparkles } from "lucide-react";

const trustTags = ["澳門本地服務", "官方公開資料", "語音優先設計", "AI 不取代醫生"];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="hero-section relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:min-h-[880px] lg:pb-24 lg:pt-40">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="soft-grid absolute inset-0 opacity-45" aria-hidden="true" />

      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-12">
        <div className="min-w-0 max-w-3xl">
          <motion.div {...enter(0.05)} className="inline-flex items-center gap-2 rounded-full border border-teal-700/15 bg-white/70 px-4 py-2 text-xs font-extrabold tracking-[0.1em] text-teal-800 shadow-sm backdrop-blur">
            <Sparkles size={15} aria-hidden="true" />
            澳門 AI 語音助老守護系統
          </motion.div>
          <motion.p {...enter(0.12)} className="mt-7 text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
            SilverCare Voice · Macau
          </motion.p>
          <motion.h1 {...enter(0.18)} className="mt-4 max-w-[720px] text-[clamp(2.75rem,6.4vw,5.4rem)] font-black leading-[1.02] tracking-[-0.055em] text-[#0a3048]">
            <span className="block">一句話，連接</span>
            <span className="block">長者需要的</span>
            <span className="hero-title-accent block w-fit">每一份守護</span>
          </motion.h1>
          <motion.p {...enter(0.28)} className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            銀髮一句通讓長者無需學習複雜 APP，只需透過語音說出需要，就能獲得福利查詢、醫療分流、輪候資訊與緊急求助支援。
          </motion.p>
          <motion.div {...enter(0.36)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#features" className="button button-primary group">
              了解解決方案
              <ArrowDownRight className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" size={19} aria-hidden="true" />
            </a>
            <a href="#scenarios" className="button button-secondary">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-700/10">
                <Mic size={14} aria-hidden="true" />
              </span>
              查看功能演示
            </a>
          </motion.div>

          <motion.div {...enter(0.44)} className="mt-9 flex flex-wrap gap-x-5 gap-y-3" aria-label="產品信任標籤">
            {trustTags.map((tag) => (
              <span key={tag} className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-700 text-white">
                  <Check size={12} strokeWidth={3} aria-hidden="true" />
                </span>
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto min-w-0 w-full max-w-[610px] lg:ml-auto"
        >
          <div className="mockup-aura" aria-hidden="true" />
          <div className="mockup-shell relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/88 p-2.5 shadow-[0_35px_90px_-34px_rgba(12,55,76,0.38)] backdrop-blur-xl sm:p-3">
            <div className="mockup-topbar flex items-center justify-between rounded-t-[1.5rem] px-5 py-4 sm:px-7">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-700 text-white">
                  <HeartPulse size={17} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-black text-[#0b334d]">銀髮一句通</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">守護服務連線中</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> 安全連線
              </span>
            </div>

            <div className="mockup-grid rounded-b-[1.5rem] px-4 pb-5 pt-7 sm:px-7 sm:pb-7">
              <div className="flex flex-col items-center">
                <p className="text-center text-sm font-bold text-slate-500">請說出你需要的幫助</p>
                <button type="button" className="voice-button mt-5" aria-label="示範語音輸入按鈕">
                  <span className="voice-ring voice-ring-one" aria-hidden="true" />
                  <span className="voice-ring voice-ring-two" aria-hidden="true" />
                  <span className="voice-button-core">
                    <Mic size={30} strokeWidth={2.2} aria-hidden="true" />
                  </span>
                </button>
                <div className="mt-5 flex h-8 items-center gap-[3px]" aria-label="模擬語音波形">
                  {Array.from({ length: 21 }).map((_, index) => (
                    <span
                      key={index}
                      className="wave-bar"
                      style={{
                        height: `${8 + ((index * 7) % 19)}px`,
                        animationDelay: `${index * 0.045}s`,
                      }}
                    />
                  ))}
                </div>
                <p className="mt-1 text-xs font-medium text-teal-700">正在聆聽 · 粵語</p>
              </div>

              <div className="mt-7 space-y-3">
                <div className="ml-8 rounded-2xl rounded-br-md bg-[#0d4b63] px-4 py-3 text-sm leading-6 text-white shadow-sm">
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">長者</span>
                  「我胸口有點悶，應該去哪裡看？」
                </div>
                <div className="mr-5 rounded-2xl rounded-bl-md border border-orange-200/70 bg-orange-50 px-4 py-3.5 text-sm leading-6 text-slate-700">
                  <span className="mb-1.5 flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-orange-700">
                    <ShieldCheck size={13} aria-hidden="true" /> 風險優先提示
                  </span>
                  這可能屬於需要盡快處理的情況。請立即通知家人或尋求緊急醫療協助。
                </div>
                <div className="ml-14 rounded-2xl rounded-br-md bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-700">
                  「我今年 72 歲，可以申請什麼福利？」
                </div>
                <div className="mr-8 hidden rounded-2xl rounded-bl-md border border-teal-100 bg-teal-50 px-4 py-3 text-sm leading-6 text-slate-700 sm:block">
                  我可以整理可能適用的福利、申請條件、所需文件及辦理地點。
                </div>
              </div>
            </div>
          </div>

          <div className="floating-chip -left-5 top-28 hidden lg:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-100 text-teal-800"><MapPin size={18} /></span>
            <span><strong>澳門本地化</strong><small>服務語境與公開資料</small></span>
          </div>
          <div className="floating-chip -bottom-7 right-2 hidden lg:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-orange-700"><ShieldCheck size={18} /></span>
            <span><strong>安全邊界清晰</strong><small>提示風險，不作診斷</small></span>
          </div>
        </motion.div>
      </div>

      <motion.div {...enter(0.55)} className="section-shell relative mt-20 lg:mt-28">
        <div className="rounded-2xl border border-slate-200/80 bg-white/70 px-5 py-5 backdrop-blur sm:flex sm:items-center sm:justify-between sm:px-7">
          <p className="max-w-2xl text-sm font-semibold leading-6 text-slate-600 sm:text-base">
            <span className="mr-2 text-teal-700">我們是誰</span>
            專注澳門智慧養老、AI 語音服務與長者健康守護的跨領域創新團隊。
          </p>
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400 sm:mt-0">Public service × Care × AI</p>
        </div>
      </motion.div>
    </section>
  );
}
