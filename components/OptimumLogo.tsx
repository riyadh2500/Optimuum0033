// Shared logo component — used everywhere in the app
// Displays the Optimum silver blob logo from /public/logo.png
// Falls back to the purple "O" circle if image not found

export default function OptimumLogo({ size = 40 }: { size?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="Optimum"
      width={size}
      height={size * 0.55}
      style={{ width: size, height: size * 0.55, objectFit: "contain" }}
    />
  );
}
