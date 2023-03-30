const isProd = process.env.NODE_ENV === "production";

const PRODUCTION_BASE = "/dashboardTestSite";

const ROUTES = {
  DASHBOARD: "/dashboard",
  CUSTOMERS: "/",
};

export default {
  CUSTOMERS: isProd ? PRODUCTION_BASE : ROUTES.CUSTOMERS,
  DASHBOARD: isProd ? PRODUCTION_BASE + ROUTES.DASHBOARD : ROUTES.DASHBOARD,
};
