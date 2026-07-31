import Reveal from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{eyebrow}</p>
      <h2 className={`section-title mt-5 ${light ? "text-white" : "text-slate-900"}`}>{title}</h2>
      {description && (
        <p className={`mt-5 text-lg leading-8 ${light ? "text-white/72" : "text-slate-600"}`}>{description}</p>
      )}
    </Reveal>
  );
}
