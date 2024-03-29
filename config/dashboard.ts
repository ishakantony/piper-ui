import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
    },
    {
      title: "Pipelines",
      href: "/pipelines",
      icon: "pipeline",
    },
    {
      title: "Settings",
      href: "/settings",
      icon: "settings",
      disabled: true,
    },
  ],
};
