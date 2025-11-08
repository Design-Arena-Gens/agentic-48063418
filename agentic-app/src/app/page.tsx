import { BottomPanel, MiddlePanel, TopPanel } from "@/components/Panels";

export default function Home() {
  const grainSvg = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="4"/></filter><rect width="200" height="200" filter="url(#n)" opacity="0.45"/></svg>`
  );

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#150f0b] via-[#1e1610] to-[#0f0a07] p-4 text-white">
      <div className="relative w-full max-w-[420px] md:max-w-[480px]">
        <div className="relative aspect-[9/16] overflow-hidden rounded-[38px] border border-[#3f2e24] bg-[#20140f] shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/45" />
          <div
            className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-45"
            style={{
              backgroundImage: `url("data:image/svg+xml,${grainSvg}")`,
              backgroundSize: "280px 280px",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/35" />
          <div className="relative flex h-full flex-col gap-[1px]">
            <div className="flex-1">
              <div className="h-full w-full bg-[#2b1d16]">
                <TopPanel />
              </div>
            </div>
            <div className="flex-[1.15]">
              <div className="h-full w-full bg-[#2a1b13]">
                <MiddlePanel />
              </div>
            </div>
            <div className="flex-[0.85]">
              <div className="h-full w-full bg-[#26160f]">
                <BottomPanel />
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-[38px] shadow-[inset_0_0_120px_rgba(0,0,0,0.65)]" />
        <div className="pointer-events-none absolute inset-0 rounded-[38px] ring-1 ring-white/5" />
        <span className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center text-sm uppercase tracking-[0.35em] text-[#c6aa8a]/80">
          Film Portrait Triptych
        </span>
      </div>
    </main>
  );
}
