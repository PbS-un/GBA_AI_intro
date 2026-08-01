import { ArrowDownRight, UsersRound } from "lucide-react";
import { secondaryStakeholders, targetUsers } from "../data/content";
import { iconMap } from "./icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function TargetUsersSection() {
  return (
    <section id="users" className="section-pad overflow-hidden bg-[#f7f4ed]">
      <div className="section-shell">
        <div className="grid gap-9 lg:grid-cols-[1fr_0.52fr] lg:items-end">
          <SectionHeader
            eyebrow="People first · 服務群體"
            title="從長者真正遇到困難的時刻出發"
            description="主要面向澳門高齡、獨居及低數碼能力長者；家屬、社工、照護與醫療服務人員則是未來可協同的相關角色。"
          />
          <Reveal className="rounded-2xl border border-orange-200/70 bg-white/65 p-5 text-sm font-semibold leading-6 text-slate-600" delay={0.08}>
            這些是項目規劃服務的群體與使用場景，不代表目前已獲相關群體或機構正式採用。
          </Reveal>
        </div>

        <div className="mt-14 grid border-y border-[#d9d4c8] lg:grid-cols-3">
          {targetUsers.map((user, index) => {
            const Icon = iconMap[user.icon];
            return (
              <Reveal
                as="article"
                key={user.title}
                delay={index * 0.07}
                className={`group relative px-1 py-9 sm:px-7 lg:min-h-[390px] lg:px-8 lg:py-10 ${index > 0 ? "border-t border-[#d9d4c8] lg:border-l lg:border-t-0" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b334d] text-white"><Icon size={26} aria-hidden="true" /></span>
                  <span className="text-xs font-black tracking-[0.16em] text-slate-400">USER {user.number}</span>
                </div>
                <h3 className="mt-10 text-2xl font-black tracking-[-0.025em] text-[#123b52]">{user.title}</h3>
                <dl className="mt-7 space-y-6">
                  <div>
                    <dt className="text-[10px] font-black uppercase tracking-[0.17em] text-orange-700">使用場景</dt>
                    <dd className="mt-2 text-[15px] font-semibold leading-7 text-slate-700">{user.scenario}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-black uppercase tracking-[0.17em] text-teal-700">核心價值</dt>
                    <dd className="mt-2 text-[15px] leading-7 text-slate-600">{user.value}</dd>
                  </div>
                </dl>
                <ArrowDownRight className="absolute bottom-8 right-8 hidden text-[#c8c1b3] transition-transform group-hover:translate-x-1 group-hover:translate-y-1 lg:block" size={23} aria-hidden="true" />
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-9 flex flex-col gap-5 rounded-[1.4rem] bg-white p-6 shadow-[0_18px_50px_-40px_rgba(10,48,72,0.4)] sm:flex-row sm:items-center sm:justify-between sm:p-7" delay={0.12}>
          <div className="flex items-center gap-3">
            <UsersRound className="shrink-0 text-teal-700" size={23} aria-hidden="true" />
            <p className="font-extrabold text-[#123b52]">未來可協同的照護角色</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            {secondaryStakeholders.map((stakeholder) => (
              <span key={stakeholder} className="rounded-full bg-[#f1f6f5] px-3.5 py-2 text-sm font-bold text-slate-600">{stakeholder}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
