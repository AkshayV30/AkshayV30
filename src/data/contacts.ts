import { Mail } from "lucide-react";
import { LOGOS } from "@/lib/logos";

export const CONTACT_LINKS = [
  {
    label: "Email Me",
    href: "mailto:akshayatwork.v30@gmail.com",
    icon: Mail,
    variant: "default" as const,
  },
  {
    label: "GitHub",
    href: "https://github.com/AkshayV30",
    logo: LOGOS.github,
    variant: "outline" as const,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/minzakshaykumar03/",
    logo: LOGOS.linkedin,
    variant: "outline" as const,
    external: true,
  },
];
