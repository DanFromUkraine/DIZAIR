import { MAIN_LOCAL_LINKS } from "@/src/shared/constants/main-local-links";
import { MyLink } from "@/src/shared/types/link";

export const FOOTER_LINKS: MyLink[] = [
  ...MAIN_LOCAL_LINKS,
  {
    tKey: "footer.footerSpecificRoutes.cancel-sub",
    href: "/cancel-sub",
  },
  {
    tKey: "footer.footerSpecificRoutes.privacy-policy",
    href: "/privacy-policy",
  },
  {
    tKey: "footer.footerSpecificRoutes.use-terms",
    href: "/use-terms",
  },
  {
    tKey: "footer.footerSpecificRoutes.free-test",
    href: "/free-test",
  },
];
