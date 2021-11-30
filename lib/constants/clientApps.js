import {
  NeetoKb,
  NeetoChat,
  NeetoDesk,
  NeetoForm,
  NeetoAnalytics,
  NeetoChangelog,
  NeetoInsights,
  NeetoInterview,
  NeetoInvisible,
  NeetoQuiz,
  NeetoReplay,
  NeetoWireframe,
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
        development: "http://spinkart.lvh.me:9005/admin",
        staging: `https://${subdomain}.neetokb.net/admin`,
        production: `https://${subdomain}.neetokb.com/admin`,
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
      icon: NeetoInsights,
      description: "Business Insights App",
      url: {
        development: "http://spinkart.lvh.me:9010",
        staging: `https://${subdomain}.neetoinsights.net`,
        production: `https://${subdomain}.neetoinsights.com`,
      },
      isActive: true,
    },
    {
      name: "Quiz",
      icon: NeetoQuiz,
      description: "Quiz App",
      url: {
        development: "http://spinkart.lvh.me:9011",
        staging: `https://${subdomain}.neetoquiz.net`,
        production: `https://${subdomain}.neetoquiz.com`,
      },
      isActive: true,
    },
    {
      name: "Codify",
      icon: NeetoInterview,
      description: "Interview App",
      url: {
        development: "http://spinkart.lvh.me:9012",
        staging: `https://${subdomain}.neetocodify.net`,
        production: `https://${subdomain}.neetocodify.com`,
      },
      isActive: true,
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
      icon: NeetoReplay,
      description: "Replay App",
      url: {
        development: "http://spinkart.lvh.me:9020",
        staging: `https://${subdomain}.neetoreplay.net`,
        production: `https://${subdomain}.neetoreplay.com`,
      },
      isActive: false,
    },
    {
      name: "Wireframe",
      icon: NeetoWireframe,
      description: "Wireframe App",
      url: {
        development: "http://spinkart.lvh.me:9021",
        staging: `https://${subdomain}.neetowireframe.net`,
        production: `https://${subdomain}.neetowireframe.com`,
      },
      isActive: true,
    },
    {
      name: "Invisible",
      icon: NeetoInvisible,
      description: "Invisible",
      url: {
        development: "http://spinkart.lvh.me:9014",
        staging: `https://${subdomain}.neetoinvisible.net`,
        production: `https://${subdomain}.neetoinvisible.com`,
      },
      isActive: false,
    },
  ];
};
