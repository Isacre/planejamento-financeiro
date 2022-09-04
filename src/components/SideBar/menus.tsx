import { SidebarMenu } from "../../types";
import { TbBrandGoogleAnalytics, TbUser, TbHome, TbReportMoney } from "react-icons/tb";

export const menus: SidebarMenu[] = [
  {
    icon: TbHome,
    route: "/home",
  },
  {
    icon: TbUser,
    route: "/conta",
  },
  {
    icon: TbBrandGoogleAnalytics,
    route: "/graficos",
  },
  {
    icon: TbReportMoney,
    route: "/fluxo",
  },
];
