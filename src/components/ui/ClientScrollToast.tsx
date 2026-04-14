"use client";
import dynamic from "next/dynamic";

const ScrollToast = dynamic(
  () =>
    import("@/components/ui/ScrollToast").then((m) => ({
      default: m.ScrollToast,
    })),
  { ssr: false }
);

interface ClientScrollToastProps {
  toolName: string;
  toolHref: string;
}

export function ClientScrollToast({ toolName, toolHref }: ClientScrollToastProps) {
  return <ScrollToast toolName={toolName} toolHref={toolHref} />;
}
