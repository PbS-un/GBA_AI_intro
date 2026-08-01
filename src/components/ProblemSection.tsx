import { ArrowRight, CircleMinus, UsersRound } from "lucide-react";
import { currentSolutionGaps, problems, secondaryStakeholders } from "../data/content";
import { iconMap } from "./icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function ProblemSection() {
  return (
    <section id="mission" className="section-pad bg-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Why it matters · 項目使命"
              title="科技服務很多，但不少長者仍然被留在門外"
              description="真正的數碼共融，不只是把服務搬到網上，而是確保每一位長者都能理解、使用並完成下一步。"
            />
            <Reveal className="mt-10 overflow-hidden rounded-[1.75rem] bg-[#0b334d] p-7 text-white sm:p-9" delay={0.08}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-200">Our belief</p>
              <blockquote className="mt-5 text-2xl font-bold leading-[1.5] tracking-[-0.02em] sm:text-[1.7rem]">
                不是讓長者重新學習科技，<br />而是讓科技學會用長者聽得懂的方式提供守護。
              </blockquote>
              <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-white/70">
                <span className="h-px w-8 bg-teal-300" /> 銀髮一句通團隊 Slogan
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem, index) => {
              const Icon = iconMap[problem.icon];
              return (
                <Reveal
                  as="article"
                  key={problem.title}
                  delay={0.06 * index}
                  className={`problem-card group flex min-h-[250px] flex-col rounded-[1.5rem] border border-slate-200 bg-[#fbfcfc] p-6 sm:p-7 ${index === problems.length - 1 ? "sm:col-span-2 sm:min-h-[210px]" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="feature-icon"><Icon size={22} aria-hidden="true" /></span>
                    <span className="text-xs font-black tracking-[0.14em] text-slate-300">{problem.number}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-extrabold text-[#123b52]">{problem.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">{problem.description}</p>
                  <ArrowRight className="mt-auto pt-5 text-teal-700 transition-transform group-hover:translate-x-1" size={20} aria-hidden="true" />
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-slate-200 pt-9 md:flex-row md:items-center" delay={0.12}>
          <p className="max-w-3xl text-lg font-semibold leading-8 text-slate-700">
            我們不是要求長者適應複雜科技，而是重新設計科技，讓長者透過最自然的方式獲得服務。
          </p>
          <span className="whitespace-nowrap rounded-full bg-teal-50 px-4 py-2 text-sm font-bold text-teal-800">從「會不會用」到「開口就能用」</span>
        </Reveal>

        <div className="mt-20 grid gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">The gap · 現有方案不足</p>
            <h3 className="mt-5 text-3xl font-black leading-tight tracking-[-0.035em] text-[#123b52] sm:text-4xl">為什麼現在的方法仍不夠好？</h3>
            <p className="mt-5 text-base leading-7 text-slate-600">困難不只在於缺少資訊，而在於資訊入口、語言與下一步行動仍未為長者連成一條容易使用的路徑。</p>
          </Reveal>
          <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
            {currentSolutionGaps.map((gap, index) => (
              <Reveal key={gap} delay={index * 0.04} className="flex items-start gap-3 border-b border-slate-200 py-4">
                <CircleMinus className="mt-0.5 shrink-0 text-orange-600" size={19} aria-hidden="true" />
                <span className="text-[15px] font-semibold leading-7 text-slate-700">{gap}</span>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-14 grid gap-6 rounded-[1.5rem] border border-teal-800/10 bg-[#f2f8f7] p-6 sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center" delay={0.1}>
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-800 text-white"><UsersRound size={23} aria-hidden="true" /></span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-teal-700">主要影響群體</p>
              <p className="mt-2 text-lg font-extrabold leading-7 text-[#123b52]">澳門高齡、獨居及低數碼能力長者</p>
            </div>
          </div>
          <div className="lg:border-l lg:border-teal-900/10 lg:pl-8">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">相關照護角色</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {secondaryStakeholders.map((person) => <span key={person} className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-bold text-slate-600">{person}</span>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
