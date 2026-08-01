import { ArrowUpRight, Building2, HeartHandshake, Hospital, Microscope, UsersRound } from "lucide-react";
import Reveal from "./Reveal";

type PartnershipSectionProps = {
  onContact: () => void;
};

const partners = [
  { icon: Building2, label: "政府部門" },
  { icon: Hospital, label: "醫療機構" },
  { icon: UsersRound, label: "社福團體" },
  { icon: HeartHandshake, label: "長者服務中心" },
  { icon: Microscope, label: "技術及研究夥伴" },
];

export default function PartnershipSection({ onContact }: PartnershipSectionProps) {
  return (
    <section id="partnership" className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <Reveal className="partnership-panel relative overflow-hidden rounded-[2rem] px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="partnership-orb" aria-hidden="true" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <p className="eyebrow eyebrow-light">Partnership · 合作邀請</p>
              <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[3.25rem]">共同建立更有溫度的澳門智慧養老服務</h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
                我們期待與政府部門、醫療機構、社福團體、長者服務中心、技術夥伴及研究機構合作，讓 AI 真正成為連接長者、家庭、社區與公共服務的橋樑。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button type="button" className="button button-light group" onClick={onContact}>
                  成為合作夥伴
                  <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </button>
                <button type="button" className="button button-ghost-light" onClick={onContact}>聯絡項目團隊</button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {partners.map(({ icon: Icon, label }, index) => (
                <div key={label} className={`partner-chip ${index === partners.length - 1 ? "col-span-2" : ""}`}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><Icon size={20} aria-hidden="true" /></span>
                  <span className="font-bold">{label}</span>
                </div>
              ))}
              <p className="col-span-2 mt-2 text-center text-xs font-semibold tracking-[0.08em] text-white/65">期待共創 · 未表示任何現有正式合作關係</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
