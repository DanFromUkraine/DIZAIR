import Image from "next/image";
import { SVGProps } from "react";

export default function LogoIcon({ className }: SVGProps<SVGSVGElement>) {
  return (
    <Image
      src="/icons/logo.svg"
      width={168}
      height={40}
      alt="Logo"
      className={className}
    />
  );
}
