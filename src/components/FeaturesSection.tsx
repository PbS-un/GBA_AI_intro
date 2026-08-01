import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { features, innovations } from "../data/content";
import { iconMap } from "./icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function FeaturesSection() {
  return (
    <section id="features" className="section-pad overflow-hidden bg-[#f1f7f6]">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Core capabilities · 五大核心功能"
            title="從日常查詢到緊急求助，一句話完成"
            description="不是把所有事情交給 AI，而是用 AI 把長者與可信資料、照護資源及正確行動連接起來。"
          />
          <Reveal className="max-w-sm rounded-2xl border border-teal-700/10 bg-white/70 p-5 text-sm leading-6 text-slate-600" delay={0.1}>
            <span className="mb-2 block font-extrabold text-teal-800">一句話品牌定位</span>
            讓長者只需說一句話，就能連接公共服務、醫療資源、家屬照護與社區支援。
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const featured = index === 0;
            return (
              <Reveal
                as="article"
                key={feature.title}
                delay={index * 0.055}
                className={`feature-card group relative overflow-hidden rounded-[1.75rem] p-7 ${featured ? "feature-card-main md:col-span-2 lg:col-span-2 lg:row-span-2" : "md:col-span-1 lg:col-span-2"}`}
              >
                {featured && <div className="feature-card-rings" aria-hidden="true" />}
                <div className="relative flex items-start justify-between gap-4">
                  <span className={`feature-icon ${featured ? "feature-icon-light" : ""}`}>
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <ArrowUpRight className={`transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${featured ? "text-white/55" : "text-slate-300"}`} size={21} aria-hidden="true" />
                </div>
                <div className={`relative ${featured ? "mt-20 sm:mt-28" : "mt-10"}`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className={`text-[10px] font-extrabold uppercase tracking-[0.18em] ${featured ? "text-teal-200" : "text-teal-700"}`}>{feature.tag}</p>
                    <span className={`rounded-full px-2.5 py-1 text-[10px] font-black tracking-[0.08em] ${featured ? "bg-white/10 text-white/75" : "bg-slate-100 text-slate-500"}`}>{feature.phase}</span>
                  </div>
                  <h3 className={`mt-3 font-extrabold leading-snug ${featured ? "text-2xl text-white" : "text-xl text-[#123b52]"}`}>{feature.title}</h3>
                  <p className={`mt-4 text-[15px] leading-7 ${featured ? "text-white/72" : "text-slate-600"}`}>{feature.description}</p>
                </div>
                {featured && (
                  <div className="relative mt-8 flex items-end gap-1" aria-hidden="true">
                    {Array.from({ length: 18 }).map((_, i) => (
                      <span key={i} className="h-1 rounded-full bg-teal-300/70" style={{ width: `${6 + ((i * 5) % 15)}px` }} />
                    ))}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-7 flex items-start gap-4 rounded-2xl border border-orange-200/80 bg-orange-50/80 p-5 sm:items-center sm:p-6" delay={0.12}>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-orange-700 shadow-sm"><ShieldCheck size={22} aria-hidden="true" /></span>
          <div>
            <p className="font-extrabold text-[#123b52]">醫療安全邊界</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">本系統不提供醫療診斷，只提供健康風險提示及就醫路徑建議。頁面所示為比賽產品原型；即時資料、通知及定位等能力仍待合規串接與測試。</p>
          </div>
        </Reveal>

        <div id="innovation" className="mt-24 scroll-mt-28 border-t border-teal-900/10 pt-16">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <SectionHeader
              eyebrow="Distinctive approach · 核心亮點"
              title="不是一般問答工具，而是一座本地照護資源的智能橋樑"
              description="以長者的語言與真實使用場景出發，建立產品最重要的辨識度與安全界線。"
            />
            <div className="divide-y divide-teal-900/10 border-y border-teal-900/10">
              {innovations.map((innovation, index) => (
                <Reveal key={innovation.title} delay={index * 0.05} className="group grid gap-3 py-6 sm:grid-cols-[auto_0.45fr_1fr_auto] sm:items-center sm:gap-5">
                  <span className="text-xs font-black tracking-[0.13em] text-teal-700">{innovation.number}</span>
                  <h3 className="text-lg font-extrabold text-[#123b52]">{innovation.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{innovation.description}</p>
                  <ArrowRight size={18} className="hidden text-slate-300 transition-transform group-hover:translate-x-1 sm:block" aria-hidden="true" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
