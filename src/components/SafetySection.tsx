import { HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import { safetyPrinciples } from "../data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function SafetySection() {
  return (
    <section id="safety" className="section-pad bg-[#f7f8f6]">
      <div className="section-shell">
        <div className="grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionHeader
              eyebrow="Safety by design · 安全原則"
              title="AI 提供協助，但不取代專業判斷"
              description="我們為產品設定清晰的能力邊界：更快整理情況、更容易理解資訊、更清楚找到下一步。"
            />
            <Reveal className="mt-9 rounded-[1.6rem] border border-[#0b334d]/10 bg-[#0b334d] p-7 text-white" delay={0.08}>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10"><Stethoscope size={22} aria-hidden="true" /></span>
                <div>
                  <p className="text-sm font-extrabold">醫療專業始終由人負責</p>
                  <p className="mt-0.5 text-xs text-white/55">Human-led professional care</p>
                </div>
              </div>
              <p className="mt-6 text-[15px] leading-7 text-white/72">
                最終醫療診斷、治療決策及處方仍由專業醫護人員負責。銀髮一句通的角色，是協助長者更快理解情況、整理資訊及找到正確的下一步。
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {safetyPrinciples.map((principle, index) => (
              <Reveal as="article" key={principle.number} delay={index * 0.06} className="safety-card rounded-[1.5rem] border border-slate-200 bg-white p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-teal-800">
                    {index === 0 ? <Stethoscope size={21} /> : index === 1 ? <HeartPulse size={21} /> : <ShieldCheck size={21} />}
                  </span>
                  <span className="text-xs font-black tracking-[0.15em] text-slate-300">{principle.number}</span>
                </div>
                <h3 className="mt-7 text-lg font-extrabold text-[#123b52]">{principle.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">{principle.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
