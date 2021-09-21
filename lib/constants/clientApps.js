import {
  NeetoKb,
  NeetoChat,
  NeetoDesk,
  NeetoForm,
  NeetoAnalytics,
  NeetoChangelog,
} from "@bigbinary/neeto-icons";

export const getClientApp = (subdomain) => {
  return [
    {
      name: "Desk",
      icon: NeetoDesk,
      description: "Customer support app",
      url: {
        development: "http://spinkart.lvh.me:9001",
        staging: `https://${subdomain}.neetodesk.net`,
        production: `https://${subdomain}.neetodesk.com`,
      },
      isActive: true,
    },
    {
      name: "Chat",
      icon: NeetoChat,
      description: "Customer chat app",
      url: {
        development: "http://spinkart.lvh.me:9006",
        staging: `https://${subdomain}.neetochat.net`,
        production: `https://${subdomain}.neetochat.com`,
      },
      isActive: true,
    },
    {
      name: "KB",
      icon: NeetoKb,
      description: "Knowledge Base App",
      url: {
        development: "http://spinkart.lvh.me:9005",
        staging: `https://${subdomain}.neetokb.net`,
        production: `https://${subdomain}.neetokb.com`,
      },
      isActive: true,
    },
    {
      name: "Form",
      icon: NeetoForm,
      description: "Form management app",
      url: {
        development: "http://spinkart.lvh.me:9004",
        staging: `https://${subdomain}.neetoform.net`,
        production: `https://${subdomain}.neetoform.com`,
      },
      isActive: true,
    },
    {
      name: "Changelog",
      icon: NeetoChangelog,
      description: "Changelog management app",
      url: {
        development: "http://spinkart.lvh.me:9003",
        staging: `https://${subdomain}.neetochangelog.net`,
        production: `https://${subdomain}.neetochangelog.com`,
      },
      isActive: true,
    },
    {
      name: "Analytics",
      icon: NeetoAnalytics,
      description: "Business Analytics App",
      url: {
        development: "http://spinkart.lvh.me:9007",
        staging: `https://${subdomain}.neetoanalytics.net`,
        production: `https://${subdomain}.neetoanalytics.com`,
      },
      isActive: true,
    },
    {
      name: "Engage",
      icon: NeetoForm,
      description: "Customer Engagement App",
      url: {
        development: "http://spinkart.lvh.me:9009",
        staging: `https://${subdomain}.neetoengage.net`,
        production: `https://${subdomain}.neetoengage.com`,
      },
      isActive: false,
    },
    {
      name: "Insights",
      icon: NeetoForm,
      description: "Business Insights App",
      url: {
        development: "http://spinkart.lvh.me:9010",
        staging: `https://${subdomain}.neetoinsights.net`,
        production: `https://${subdomain}.neetoinsights.com`,
      },
      isActive: false,
    },
    {
      name: "Quiz",
      icon: NeetoForm,
      description: "Quiz App",
      url: {
        development: "http://spinkart.lvh.me:9011",
        staging: `https://${subdomain}.neetoquiz.net`,
        production: `https://${subdomain}.neetoquiz.com`,
      },
      isActive: false,
    },
    {
      name: "Interview",
      icon: NeetoForm,
      description: "Interview App",
      url: {
        development: "http://spinkart.lvh.me:9012",
        staging: `https://${subdomain}.neetointerview.net`,
        production: `https://${subdomain}.neetointerview.com`,
      },
      isActive: false,
    },
    {
      name: "Planner",
      icon: NeetoForm,
      description: "Planner App",
      url: {
        development: "http://spinkart.lvh.me:9013",
        staging: `https://${subdomain}.neetoplanner.net`,
        production: `https://${subdomain}.neetoplanner.com`,
      },
      isActive: false,
    },
    {
      name: "Replay",
      icon: NeetoForm,
      description: "Replay App",
      url: {
        development: "http://spinkart.lvh.me:9020",
        staging: `https://${subdomain}.neetodesk.net`,
        production: `https://${subdomain}.neetodesk.com`,
      },
      isActive: false,
    },
    {
      name: "Wireframe",
      icon: NeetoForm,
      description: "Wireframe App",
      url: {
        development: "http://spinkart.lvh.me:9021",
        staging: `https://${subdomain}.neetodesk.net`,
        production: `https://${subdomain}.neetodesk.com`,
      },
      isActive: false,
    },
    {
      name: "Invisible",
      icon: NeetoForm,
      description: "Invisible",
      url: {
        development: "http://spinkart.lvh.me:9014",
        staging: `https://${subdomain}.neetodesk.net`,
        production: `https://${subdomain}.neetodesk.com`,
      },
      isActive: false,
    },
  ];
};