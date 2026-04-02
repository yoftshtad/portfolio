import Link from "next/link";
import Image from "next/image";

// 1. We define the "Props" (the settings we can pass to the button)
interface ButtonProps {
  text: string;
  href?: string;           // '?' means optional. If provided, it acts like a link.
  target?: string;         // support _blank if needed
  rel?: string;            // support noopener/noreferrer
  bgColor?: string;        // e.g., "bg-zinc-900" or "bg-white"
  textColor?: string;      // e.g., "text-white" or "text-black"
  iconUrl?: string;        // Optional image link for an icon
  className?: string;      // For any extra tweaks (like specific padding or shadows)
}

export default function Button({
  text,
  href,
  target,
  rel,
  bgColor = "bg-zinc-900", // Default color is dark
  textColor = "text-white", // Default text is white
  iconUrl,
  className = "",
}: ButtonProps) {
  
  // 2. These are the standard styles EVERY button will have
  const baseStyles = ` px-4 py-2 inline-flex items-center justify-center gap-2 rounded-full font-medium transition hover:opacity-80 ${bgColor} ${textColor} ${className}`;

  // 3. The inside of the button (Icon + Text)
  const innerContent = (
    <>
      {iconUrl && (
        <Image src={iconUrl} alt="icon" width={16} height={16} className="object-contain" />
      )}
      <span>{text}</span>
    </>
  );

  // 4. If we passed an "href", return a Next.js Link
  if (href) {
    return (
      <Link href={href} className={baseStyles} target={target} rel={rel}>
        {innerContent}
      </Link>
    );
  }

  // 5. Otherwise, return a standard HTML button
  return (
    <button className={baseStyles}>
      {innerContent}
    </button>
  );
}