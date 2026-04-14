"use client";
import dynamic from "next/dynamic";

const ExitIntentPopup = dynamic(
  () =>
    import("@/components/ui/ExitIntentPopup").then((m) => ({
      default: m.ExitIntentPopup,
    })),
  { ssr: false }
);

const StickyMobileCTA = dynamic(
  () =>
    import("@/components/ui/StickyMobileCTA").then((m) => ({
      default: m.StickyMobileCTA,
    })),
  { ssr: false }
);

interface ClientPopupsProps {
  toolName: string;
  toolHref: string;
  score: number;
}

export function ClientPopups({ toolName, toolHref, score }: ClientPopupsProps) {
  return (
    <>
      <ExitIntentPopup />
      <StickyMobileCTA toolName={toolName} toolHref={toolHref} score={score} />
    </>
  );
}
