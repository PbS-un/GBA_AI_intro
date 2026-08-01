import { ArrowUpRight, Quote } from "lucide-react";
import { impacts } from "../data/content";
import { iconMap } from "./icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function SocialImpactSection() {
  return (
    <section id="impact" className="section-pad bg-white">
      <div className="section-shell">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.62fr]">
          <SectionHeader
            eyebrow="Inclusive future · 社會價值"
            title="讓每一位長者，都能平等地使用數碼公共服務"
            description="語音不只是一種操作方式，更是讓數碼公共服務回到人的語言、生活情境與實際需要。"
          />
          <Reveal className="lg:pl-8" delay={0.08}>
            <p className="border-l-2 border-orange-400 pl-5 text-base font-semibold leading-7 text-slate-600">
              把複雜資訊轉化為可理解的選擇，把需要幫助的時刻轉化為可採取的行動。
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {impacts.map((impact, index) => {
            const Icon = iconMap[impact.icon];
            return (
              <Reveal as="article" key={impact.title} delay={index * 0.045} className="impact-card group bg-white p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef8f6] text-teal-800 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                    <Icon size={23} aria-hidden="true" />
                  </span>
                  <ArrowUpRight size={19} className="text-slate-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-700" aria-hidden="true" />
                </div>
                <p className="mt-9 text-[10px] font-black uppercase tracking-[0.16em] text-slate-300">Impact 0{index + 1}</p>
                <h3 className="mt-2 text-xl font-extrabold text-[#123b52]">{impact.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-600">{impact.description}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="relative mt-12 overflow-hidden rounded-[1.75rem] bg-[#f4eee6] px-7 py-9 sm:px-11 sm:py-11" delay={0.12}>
          <Quote className="absolute right-8 top-6 hidden text-orange-300/60 sm:block" size={54} aria-hidden="true" />
          <p className="relative max-w-5xl text-xl font-bold leading-9 tracking-[-0.015em] text-[#183b4f] sm:text-2xl sm:leading-10">
            長者不應因為不懂打字、不熟悉 APP 或看不清複雜介面，而失去獲得公共服務與健康支援的機會。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
