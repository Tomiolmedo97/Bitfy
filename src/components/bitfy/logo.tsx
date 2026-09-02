type LogoProps = {
  variant?: "color" | "onInk";
  className?: string;
};

export function Logo({ variant = "color", className = "" }: LogoProps) {
  const color = variant === "onInk" ? "text-fg-on-ink" : "text-primary";

  return (
    <a href="#inicio" className={`inline-flex items-baseline font-logo font-extrabold tracking-tight ${color} ${className}`}>
      <span className="text-[1.35rem] leading-none sm:text-[1.5rem]">Bitfy</span>
    </a>
  );
}
