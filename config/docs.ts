import { DocsConfig } from "@/types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
      ],
    },
    {
      title: "Core",
      items: [
        {
          title: "Pipeline",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Pipeline Template",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Pipeline Instance",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Putting it Together",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Analytics",
      items: [
        {
          title: "Dashboard",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Pipeline Statistics",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Security",
      items: [
        {
          title: "Basic Security",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Pipeline Locking",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Approval-Based Execution",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
  ],
};
