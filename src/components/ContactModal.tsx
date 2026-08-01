import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Send, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormValues = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  direction: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  direction: "",
  message: "",
};

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const closeModal = useCallback(() => {
    onClose();
    window.setTimeout(() => {
      setSubmitted(false);
      setErrors({});
      setValues(initialValues);
    }, reduceMotion ? 0 : 250);
  }, [onClose, reduceMotion]);

  useEffect(() => {
    if (!open) return;
    previousFocus.current = document.activeElement as HTMLElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeRef.current?.focus(), 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus.current?.focus();
    };
  }, [closeModal, open]);

  const validate = () => {
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "請輸入姓名。";
    if (!values.organization.trim()) nextErrors.organization = "請輸入機構名稱。";
    if (!values.email.trim()) nextErrors.email = "請輸入電郵地址。";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = "請輸入有效的電郵地址。";
    if (!values.direction) nextErrors.direction = "請選擇合作方向。";
    setErrors(nextErrors);
    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    const firstError = Object.keys(nextErrors)[0] as keyof FormValues | undefined;
    if (firstError) {
      window.requestAnimationFrame(() => document.getElementById(firstError)?.focus());
      return;
    }
    setSubmitted(true);
  };

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-backdrop"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            aria-describedby="contact-description"
            className="modal-panel"
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.99 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.25 }}
          >
            <div className="flex items-start justify-between gap-5 border-b border-slate-100 px-6 py-5 sm:px-8 sm:py-6">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-teal-700">Partnership enquiry</p>
                <h2 id="contact-title" className="mt-2 text-2xl font-black tracking-[-0.02em] text-[#123b52]">聯絡項目團隊</h2>
                <p id="contact-description" className="mt-2 text-sm leading-6 text-slate-500">歡迎分享你的合作想法，我們會以此示範表單確認資料格式。</p>
              </div>
              <button ref={closeRef} type="button" className="icon-button shrink-0" aria-label="關閉聯絡表單" onClick={closeModal}>
                <X size={21} />
              </button>
            </div>

            {submitted ? (
              <div className="modal-scroll-region flex flex-col items-center justify-center px-7 py-12 text-center" aria-live="polite">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-50 text-teal-700"><CheckCircle2 size={39} aria-hidden="true" /></span>
                <h3 className="mt-7 text-2xl font-black text-[#123b52]">資料格式已確認</h3>
                <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
                  這是前端功能演示，資料並未寄出或儲存。正式串接後，我們可把你的合作意向安全地交給項目團隊。
                </p>
                <button type="button" className="button button-primary mt-8" onClick={closeModal}>完成</button>
              </div>
            ) : (
              <form className="modal-scroll-region px-6 py-6 sm:px-8" noValidate onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="姓名" name="name" required error={errors.name}>
                    <input id="name" name="name" required aria-required="true" autoComplete="name" value={values.name} onChange={(event) => updateField("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
                  </Field>
                  <Field label="機構" name="organization" required error={errors.organization}>
                    <input id="organization" name="organization" required aria-required="true" autoComplete="organization" value={values.organization} onChange={(event) => updateField("organization", event.target.value)} aria-invalid={Boolean(errors.organization)} aria-describedby={errors.organization ? "organization-error" : undefined} />
                  </Field>
                  <Field label="電郵" name="email" required error={errors.email}>
                    <input id="email" name="email" type="email" required aria-required="true" autoComplete="email" value={values.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
                  </Field>
                  <Field label="聯絡電話" name="phone">
                    <input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={(event) => updateField("phone", event.target.value)} />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="合作方向" name="direction" required error={errors.direction}>
                      <select id="direction" name="direction" required aria-required="true" value={values.direction} onChange={(event) => updateField("direction", event.target.value)} aria-invalid={Boolean(errors.direction)} aria-describedby={errors.direction ? "direction-error" : undefined}>
                        <option value="">請選擇合作方向</option>
                        <option value="public">公共服務及政策資料</option>
                        <option value="medical">醫療與健康服務</option>
                        <option value="community">社福及社區照護</option>
                        <option value="technology">技術與數據合作</option>
                        <option value="research">研究及試點計劃</option>
                        <option value="other">其他合作方向</option>
                      </select>
                    </Field>
                  </div>
                  <div className="sm:col-span-2">
                    <Field label="留言" name="message">
                      <textarea id="message" name="message" rows={4} value={values.message} onChange={(event) => updateField("message", event.target.value)} placeholder="請簡單說明合作構想或希望了解的內容。" />
                    </Field>
                  </div>
                </div>
                <div className="mt-7 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-xs leading-5 text-slate-400">此示範不會傳送或儲存任何資料。標示 * 的欄位為必填。</p>
                  <button type="submit" className="button button-primary shrink-0">
                    提交合作意向 <Send size={17} aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type FieldProps = {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, name, required, error, children }: FieldProps) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}{required && <span aria-hidden="true"> *</span>}</label>
      {children}
      {error && <p id={`${name}-error`} className="form-error" role="alert">{error}</p>}
    </div>
  );
}
