import { Crown, Layers3 } from "lucide-react";
import { projectMeta, teamMembers } from "../data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function TeamSection() {
  const leader = teamMembers.find((member) => member.leader)!;
  const members = teamMembers.filter((member) => !member.leader);

  return (
    <section id="team" className="section-pad bg-[#0b334d] text-white">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.56fr] lg:items-end">
          <SectionHeader
            eyebrow="Team · 團隊介紹"
            title={`${projectMeta.teamName}，以跨領域協作把概念落成原型`}
            description="團隊分工涵蓋產品、設計、前端、後端、算法邏輯、運營及展示支援，共同回應澳門長者的真實使用情境。"
            light
          />
          <Reveal className="flex items-center gap-3 border-l-2 border-teal-300/55 pl-5 text-sm leading-6 text-white/70" delay={0.08}>
            <Layers3 className="shrink-0 text-teal-200" size={22} aria-hidden="true" />
            不以履歷堆砌能力，而以清晰分工呈現團隊如何完成同一個社會創新目標。
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal as="article" className="relative overflow-hidden rounded-[1.75rem] bg-[#f5eee3] p-7 text-slate-800 sm:p-9" delay={0.05}>
            <div className="absolute -right-14 -top-14 h-48 w-48 rounded-full border border-orange-300/40" aria-hidden="true" />
            <div className="relative flex items-center justify-between gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0b334d] text-xl font-black text-white">卓</span>
              <span className="flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1.5 text-xs font-black text-orange-800"><Crown size={14} aria-hidden="true" />{leader.badge}</span>
            </div>
            <p className="relative mt-10 text-xs font-black uppercase tracking-[0.14em] text-teal-700">Team leader</p>
            <h3 className="relative mt-2 text-3xl font-black tracking-[-0.03em] text-[#123b52]">{leader.name}</h3>
            <p className="relative mt-2 font-extrabold text-orange-700">{leader.role}</p>
            <p className="relative mt-6 text-[15px] leading-7 text-slate-600">{leader.description}</p>
            <div className="relative mt-7 flex flex-wrap gap-2">
              {leader.tags.map((tag) => <span key={tag} className="rounded-full border border-[#d9d0c2] bg-white/65 px-3 py-1.5 text-xs font-bold text-slate-600">{tag}</span>)}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {members.map((member, index) => (
              <Reveal as="article" key={member.name} delay={0.06 + index * 0.045} className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-base font-black text-teal-100">{member.name.slice(0, 1)}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.14em] text-white/45">Member 0{index + 1}</span>
                </div>
                <h3 className="mt-7 text-xl font-black text-white">{member.name}</h3>
                <p className="mt-1.5 text-sm font-extrabold text-teal-200">{member.role}</p>
                <p className="mt-4 text-sm leading-6 text-white/68">{member.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {member.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1.5 text-[11px] font-bold text-white/70">{tag}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
