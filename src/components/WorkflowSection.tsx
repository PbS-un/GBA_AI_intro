import { ArrowRight, Database, Mic2, Route, ScanSearch, ShieldCheck, Users } from "lucide-react";
import { workflow } from "../data/content";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const stepIcons = [Mic2, ScanSearch, Database, ShieldCheck, Route, Users];

export default function WorkflowSection() {
  return (
    <section id="workflow" className="section-pad bg-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="How it works · 運作方式"
          title="從一句話，到真正採取行動"
          description="系統把自然語音轉化為一條清晰、可理解、可確認的服務路徑；需要真人介入時，AI 會退到輔助位置。"
          align="center"
        />

        <div className="relative mt-16">
          <div className="workflow-line absolute left-[8.3%] right-[8.3%] top-10 hidden h-px lg:block" aria-hidden="true" />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {workflow.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <Reveal as="li" key={step.number} delay={index * 0.055} className="workflow-card group relative h-full rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-[0_12px_36px_-28px_rgba(12,55,76,0.35)]">
                  <span className="workflow-icon relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white text-teal-800 shadow-sm">
                    <Icon size={25} aria-hidden="true" />
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#0b334d] text-[9px] font-black text-white">{step.number}</span>
                  </span>
                  <h3 className="mt-6 font-extrabold text-[#123b52]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{step.description}</p>
                </Reveal>
              );
            })}
          </ol>
        </div>

        <Reveal className="mt-12 rounded-[1.5rem] bg-[#f5f8f8] p-6 sm:p-8" delay={0.12}>
          <p className="text-center text-xs font-extrabold uppercase tracking-[0.17em] text-teal-700">完整服務鏈路</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm font-bold text-slate-700 sm:gap-3 sm:text-base">
            {workflow.map((step, index) => (
              <span key={step.number} className="inline-flex items-center gap-2 sm:gap-3">
                <span className="rounded-full bg-white px-3.5 py-2 shadow-sm">{step.title}</span>
                {index < workflow.length - 1 && <ArrowRight size={17} className="text-teal-600" aria-hidden="true" />}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
