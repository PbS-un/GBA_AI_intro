import { Check, KeyRound, LockKeyhole, ShieldCheck } from "lucide-react";
import { roadmap } from "../data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="section-pad overflow-hidden bg-[#eef5f5]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Growth roadmap · 發展藍圖"
          title="從 AI 語音助手，走向澳門銀髮守護平台"
          description="由最急切的語音服務場景開始，逐步建立家庭、社區與專業服務之間的協同能力。以下均為項目發展規劃。"
        />

        <div className="relative mt-14 grid gap-5 lg:grid-cols-3">
          <div className="roadmap-line absolute left-[16%] right-[16%] top-9 hidden h-px lg:block" aria-hidden="true" />
          {roadmap.map((phase, index) => (
            <Reveal as="article" key={phase.phase} delay={index * 0.08} className="roadmap-card relative rounded-[1.75rem] border border-slate-200/90 bg-white p-7 shadow-[0_20px_55px_-38px_rgba(10,48,72,0.35)] sm:p-8">
              <div className="flex items-center justify-between">
                <span className="roadmap-number relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0b334d] text-sm font-black tracking-[0.08em] text-white">0{index + 1}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-slate-500">{phase.year}</span>
              </div>
              <p className="mt-8 text-xs font-black tracking-[0.14em] text-teal-700">{phase.phase}</p>
              <h3 className="mt-2 text-2xl font-black tracking-[-0.02em] text-[#123b52]">{phase.title}</h3>
              <p className="mt-4 min-h-[56px] text-[15px] leading-7 text-slate-600">{phase.description}</p>
              <ul className="mt-7 space-y-3 border-t border-slate-100 pt-6">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700"><Check size={12} strokeWidth={3} aria-hidden="true" /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal id="privacy" className="mt-8 grid gap-6 rounded-[1.65rem] border border-teal-700/15 bg-[#0b334d] p-7 text-white sm:p-9 lg:grid-cols-[auto_1fr_auto] lg:items-center" delay={0.14}>
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10"><LockKeyhole size={27} aria-hidden="true" /></span>
          <div>
            <p className="text-lg font-extrabold">資料主權始終屬於長者</p>
            <p className="mt-2 text-sm leading-6 text-white/65">
              所有健康資料共享均以長者授權、資料加密、分級權限及可撤回授權為前提。
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:max-w-[270px] lg:justify-end">
            {[{ icon: KeyRound, text: "明確授權" }, { icon: ShieldCheck, text: "加密保護" }, { icon: LockKeyhole, text: "分級權限" }].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white/80"><Icon size={13} /> {text}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
