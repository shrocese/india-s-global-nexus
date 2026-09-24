import { Fragment, type ReactNode } from "react";
import { GLOSSARY, GLOSSARY_TERMS } from "@/data/glossary";
import type { Claim } from "@/data/types";

const TERM_PATTERN = new RegExp(
  `\\b(${GLOSSARY_TERMS.map((t) => t.replace(/[+]/g, "\\+")).join("|")})\\b`,
  "g",
);

/** Wraps known acronyms in a hover-state definition. No navigation. */
export function Annotated({ children }: { children: string }) {
  const parts = children.split(TERM_PATTERN);

  return (
    <>
      {parts.map((part, i) => {
        const definition = GLOSSARY[part];
        if (!definition) return <Fragment key={i}>{part}</Fragment>;
        return (
          <span key={i} className="group relative inline-block">
            <abbr
              title={definition}
              className="cursor-help border-b border-dotted border-oxide font-semibold no-underline"
            >
              {part}
            </abbr>
            <span
              role="tooltip"
              className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-lg bg-popover px-3 py-2 text-xs leading-snug text-popover-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
            >
              <span className="stamp mb-1 block text-saffron">{part}</span>
              {definition}
            </span>
          </span>
        );
      })}
    </>
  );
}

/** Superscript source anchor. Every editorial claim carries one. */
export function Cite({ index, href, label }: { index: number; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      title={label}
      className="ml-0.5 align-super text-[0.65em] font-bold text-oxide underline decoration-dotted underline-offset-2"
    >
      [{index}]
    </a>
  );
}

export function ClaimLine({ claim, index }: { claim: Claim; index: number }): ReactNode {
  return (
    <>
      <Annotated>{claim.text}</Annotated>
      {claim.source && (
        <Cite index={index} href={claim.source.url} label={claim.source.label} />
      )}
    </>
  );
}
