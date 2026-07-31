import { ArrowUp, Mail } from "lucide-react";
import { BrandMark } from "./Navbar";

type FooterProps = {
  onContact: () => void;
};

const footerLinks = [
  { label: "項目理念", href: "#mission" },
  { label: "核心功能", href: "#features" },
  { label: "安全原則", href: "#safety" },
  { label: "私隱政策", href: "#privacy" },
];

export default function Footer({ onContact }: FooterProps) {
  return (
    <footer className="bg-[#082738] text-white">
      <div className="section-shell py-12 sm:py-14">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1fr_auto] md:items-start">
          <div className="flex items-start gap-4">
            <BrandMark compact />
            <div>
              <p className="text-xl font-black tracking-[0.03em]">銀髮一句通</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-white/45">澳門 AI 語音助老守護系統</p>
              <p className="mt-5 text-base font-semibold text-teal-100">讓科技聽懂長者，讓守護一句即達。</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 md:max-w-md md:justify-end">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-semibold text-white/60 transition-colors hover:text-white">{link.label}</a>
            ))}
            <button type="button" className="flex items-center gap-1.5 text-sm font-semibold text-white/60 transition-colors hover:text-white" onClick={onContact}><Mail size={15} /> 聯絡合作</button>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/35">Important notice · 重要聲明</p>
            <p className="mt-3 text-xs leading-6 text-white/48">
              本系統不提供醫療診斷，所有健康提示及輪候資訊只供參考。如遇緊急情況，應立即聯絡當地緊急服務。網站所述功能為產品概念及發展規劃，不代表已與任何政府或醫療機構建立正式合作。
            </p>
            <p className="mt-5 text-xs text-white/30">© 2026 銀髮一句通 SilverCare Voice. 概念展示網站。</p>
          </div>
          <a href="#top" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/35 hover:text-white" aria-label="返回頁面頂部"><ArrowUp size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
