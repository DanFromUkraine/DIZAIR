import { MAIN_LOCAL_LINKS } from "../../constants/main-local-links";
import { MyLink } from "../../types/link";

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
