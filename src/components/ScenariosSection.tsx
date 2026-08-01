import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, MessageSquareText, MoveRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { scenarios } from "../data/content";
import { iconMap } from "./icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function ScenariosSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = scenarios[activeIndex];
  const ActiveIcon = iconMap[active.icon];

  const handleTabKey = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const supportedKeys = ["ArrowUp", "ArrowDown", "Home", "End"];
    if (!supportedKeys.includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "Home"
      ? 0
      : event.key === "End"
        ? scenarios.length - 1
        : event.key === "ArrowDown"
          ? (index + 1) % scenarios.length
          : (index - 1 + scenarios.length) % scenarios.length;
    setActiveIndex(next);
    document.getElementById(`scenario-tab-${next}`)?.focus();
  };

  return (
    <section id="scenarios" className="section-pad overflow-hidden bg-[#0b334d] text-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="Real situations · 情境演示"
              title="不是只會回答，而是協助長者完成下一步"
              description="每一個回應都以『現在應該做什麼』為終點，讓資訊真正轉化為可採取的行動。"
              light
            />

            <div className="mt-10 flex flex-col gap-3" role="tablist" aria-label="功能情境" aria-orientation="vertical">
              {scenarios.map((scenario, index) => {
                const Icon = iconMap[scenario.icon];
                const selected = index === activeIndex;
                return (
                  <button
                    id={`scenario-tab-${index}`}
                    key={scenario.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="scenario-panel"
                    tabIndex={selected ? 0 : -1}
                    className={`scenario-tab ${selected ? "scenario-tab-active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(event) => handleTabKey(event, index)}
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8"><Icon size={20} aria-hidden="true" /></span>
                    <span className="text-left">
                      <small className="scenario-tab-kicker block text-[10px] font-bold uppercase tracking-[0.15em]">情境 0{index + 1}</small>
                      <strong className="mt-0.5 block">{scenario.label}</strong>
                    </span>
                    <MoveRight className="ml-auto" size={19} aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </div>

          <Reveal className="relative" delay={0.08}>
            <div className="scenario-glow" aria-hidden="true" />
            <div id="scenario-panel" role="tabpanel" aria-live="polite" aria-labelledby={`scenario-tab-${activeIndex}`} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-2 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, x: -12 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-[1.55rem] bg-[#f8fbfb] p-5 text-slate-800 sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-lg shadow-teal-900/15">
                        <ActiveIcon size={24} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-teal-700">Live scenario 0{activeIndex + 1}</p>
                        <h3 className="mt-1 text-xl font-black text-[#123b52]">{active.label}</h3>
                      </div>
                    </div>
                    <span className="self-start rounded-full border border-teal-200 bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-800 sm:self-auto">語音對話示意</span>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="ml-auto max-w-[86%] rounded-2xl rounded-br-sm bg-[#0d4b63] p-4 text-white sm:p-5">
                      <span className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-white/55"><MessageSquareText size={13} /> 長者說</span>
                      <p className="text-lg font-semibold leading-8">「{active.quote}」</p>
                    </div>
                    <div className="max-w-[92%] rounded-2xl rounded-bl-sm border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                      <span className="mb-2 flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.13em] text-teal-700"><Sparkles size={13} /> 系統回應</span>
                      <p className="leading-7 text-slate-700">{active.response}</p>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-slate-200 pt-7">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">系統協助完成</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {active.actions.map((action, index) => (
                        <div key={action} className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3.5 text-sm font-semibold text-slate-700">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-700 text-white"><Check size={13} strokeWidth={3} aria-hidden="true" /></span>
                          <span><small className="mr-1 text-slate-400">0{index + 1}</small> {action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
