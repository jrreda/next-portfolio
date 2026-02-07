"use client";

export default function PageBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full relative bg-background">
      {/* Noise Texture: dark dots in light mode, white dots in dark mode */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-background dark:opacity-0"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.35 0.005 285) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Dark Mode */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 dark:opacity-10 bg-background"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.98 0 0) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      {children}
    </div>
  );
}
