import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <p className="section-label mb-3">Erreur 404</p>
      <h1
        className="text-4xl font-normal text-[#111218] mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Page introuvable
      </h1>
      <p className="text-lg text-[#6b7280] mb-8 max-w-md">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-3 bg-[#059669] text-white font-semibold rounded-lg hover:bg-[#047857] transition-colors"
      >
        Retour à l&apos;accueil
        <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg>
      </Link>
    </div>
  );
}
