import {
  PARTNER_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  TEAM_PAGE_ROUTE,
} from "../utils/consts";
import MainPage from "../pages/MainPage";
import TeamPage from "../pages/TeamPage";
import PartnerPage from "../pages/PartnerPage";
import ContactPage from "../pages/ContactPage";

export const publicRoutes = [
  {
    path: MAIN_PAGE_ROUTE,
    Component: MainPage,
  },
  {
    path: TEAM_PAGE_ROUTE,
    Component: TeamPage,
  },
  {
    path: PARTNER_PAGE_ROUTE,
    Component: PartnerPage,
  },
  {
    path: CONTACT_PAGE_ROUTE,
    Component: ContactPage,
  },
];
