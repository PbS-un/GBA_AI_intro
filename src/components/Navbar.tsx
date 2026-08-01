import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  onContact: () => void;
};

const navLinks = [
  { label: "項目理念", href: "#mission" },
  { label: "核心功能", href: "#features" },
  { label: "服務群體", href: "#users" },
  { label: "團隊介紹", href: "#team" },
  { label: "參賽目標", href: "#goals" },
];

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-mark ${compact ? "brand-mark-compact" : ""}`} aria-hidden="true">
      <span className="brand-mark-wave brand-mark-wave-one" />
      <span className="brand-mark-wave brand-mark-wave-two" />
      <span className="brand-mark-core" />
    </span>
  );
}

export default function Navbar({ onContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateNav = () => setIsScrolled(window.scrollY > 20);
    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });
    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled || menuOpen ? "nav-scrolled" : ""}`}>
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="主要導覽列">
        <a href="#top" className="group flex min-w-0 items-center gap-3" aria-label="銀髮一句通首頁">
          <BrandMark />
          <span className="min-w-0">
            <span className="block text-[17px] font-black tracking-[0.04em] text-[#0b334d]">銀髮一句通</span>
            <span className="hidden text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500 sm:block">SilverCare Voice</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <button type="button" className="button button-primary ml-3 px-5 py-3 text-sm" onClick={onContact}>
            聯絡合作
          </button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="icon-button menu-button lg:hidden"
          aria-label={menuOpen ? "關閉導覽選單" : "開啟導覽選單"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={23} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-nav lg:hidden ${menuOpen ? "mobile-nav-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="section-shell flex flex-col gap-1 pb-6 pt-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="mobile-nav-link" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <button
            type="button"
            className="button button-primary mt-3 w-full"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => {
              setMenuOpen(false);
              onContact();
            }}
          >
            聯絡合作
          </button>
        </div>
      </div>
    </header>
  );
}
