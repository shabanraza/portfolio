import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendEmail } from '../utils/email';

type Step = 'name' | 'email' | 'message' | 'sending' | 'done' | 'error';

interface Line {
  kind: 'out' | 'in' | 'ok' | 'err';
  text: string;
}

const OPEN_EVENT = 'command-palette:open';

export const openCommandPalette = () => {
  window.dispatchEvent(new Event(OPEN_EVENT));
};

const promptFor = (step: Step): string => {
  switch (step) {
    case 'name':
      return 'name';
    case 'email':
      return 'email';
    case 'message':
      return 'message';
    default:
      return '';
  }
};

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>('name');
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [history, setHistory] = useState<Line[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener(OPEN_EVENT, onOpen);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener(OPEN_EVENT, onOpen);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    setStep('name');
    setValue('');
    setName('');
    setEmail('');
    setHistory([
      { kind: 'out', text: 'shaban.dev contact terminal — v1.0' },
      { kind: 'out', text: 'type your details below. press enter to continue. esc to close.' },
      { kind: 'out', text: '' },
    ]);
    const t = setTimeout(() => inputRef.current?.focus(), 80);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    scrollerRef.current?.scrollTo({ top: scrollerRef.current.scrollHeight, behavior: 'smooth' });
  }, [history, step]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const append = (line: Line) => setHistory((h) => [...h, line]);

  const submit = async () => {
    const trimmed = value.trim();
    if (!trimmed && step !== 'message') return;

    if (step === 'name') {
      append({ kind: 'in', text: `$ name — ${trimmed}` });
      setName(trimmed);
      setValue('');
      setStep('email');
      return;
    }

    if (step === 'email') {
      if (!isValidEmail(trimmed)) {
        append({ kind: 'in', text: `$ email — ${trimmed}` });
        append({ kind: 'err', text: 'invalid email. try again.' });
        setValue('');
        return;
      }
      append({ kind: 'in', text: `$ email — ${trimmed}` });
      setEmail(trimmed);
      setValue('');
      setStep('message');
      return;
    }

    if (step === 'message') {
      if (!trimmed) return;
      append({ kind: 'in', text: `$ message — ${trimmed}` });
      setValue('');
      setStep('sending');
      append({ kind: 'out', text: 'sending...' });
      const ok = await sendEmail({
        name,
        email,
        projectType: 'Terminal Contact',
        message: trimmed,
      });
      if (ok) {
        append({ kind: 'ok', text: '✓ message delivered. i\'ll reply within 24h.' });
        append({ kind: 'out', text: 'press esc to close.' });
        setStep('done');
      } else {
        append({ kind: 'err', text: 'send failed. opening mailto fallback...' });
        const subject = `Project Inquiry from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\n${trimmed}`;
        window.location.href = `mailto:shaban.razaa@gmail.com?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
        setStep('error');
      }
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submit();
    }
  };

  const inputDisabled = step === 'sending' || step === 'done' || step === 'error';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4 bg-black/70 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Contact terminal"
            className="w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl border border-[var(--color-border)] bg-[#0a0a0a]"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--color-border)] bg-[#050505]">
              <div className="flex gap-1.5">
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"
                />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <p className="flex-1 text-center text-xs text-[var(--color-muted)] font-mono">
                shaban@dev ~ /contact
              </p>
              <kbd className="text-[10px] font-mono text-[var(--color-muted)]">esc</kbd>
            </div>

            <div
              ref={scrollerRef}
              className="px-5 py-4 max-h-[60vh] overflow-y-auto font-mono text-sm leading-relaxed text-gray-300"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line, i) => (
                <p
                  key={i}
                  className={
                    line.kind === 'ok'
                      ? 'text-emerald-400'
                      : line.kind === 'err'
                      ? 'text-rose-400'
                      : line.kind === 'in'
                      ? 'text-primary'
                      : 'text-gray-500'
                  }
                >
                  {line.text || ' '}
                </p>
              ))}

              {!inputDisabled && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-primary select-none">$ {promptFor(step)} —</span>
                  <input
                    ref={inputRef}
                    type={step === 'email' ? 'email' : 'text'}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={onKeyDown}
                    autoComplete="off"
                    spellCheck={false}
                    className="flex-1 bg-transparent outline-none border-none text-gray-100 caret-primary"
                  />
                </div>
              )}
            </div>

            <div className="px-5 py-2.5 border-t border-[var(--color-border)] bg-[#050505] flex items-center justify-between text-[10px] font-mono text-[var(--color-muted)] uppercase tracking-wider">
              <span>
                step {step === 'sending' || step === 'done' || step === 'error' ? 3 : step === 'name' ? 1 : step === 'email' ? 2 : 3}/3
              </span>
              <span className="flex items-center gap-3">
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--color-surface-highlight)] border border-[var(--color-border)]">
                    ↵
                  </kbd>{' '}
                  next
                </span>
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--color-surface-highlight)] border border-[var(--color-border)]">
                    esc
                  </kbd>{' '}
                  close
                </span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
