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
  NeetoIcon,
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
    },
    {
      name: "Invoice",
      icon: NeetoIcon,
      description: "Invoice management app",
      url: {
        development: "http://spinkart.lvh.me:9024",
        staging: `https://${subdomain}.neetoinvoice.net`,
        production: `https://${subdomain}.neetoinvoice.com`,
      },
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
    },
    {
      name: "Engage",
      icon: NeetoForm,
      description: "Customer Engagement App",
      url: {
        development: "http://spinkart.lvh.me:9009/admin/boards",
        staging: `https://${subdomain}.neetoengage.net/admin/boards`,
        production: `https://${subdomain}.neetoengage.com/admin/boards`,
      },
    },
    {
      name: "Grow",
      icon: NeetoInsights,
      description: "Business Grow App",
      url: {
        development: "http://spinkart.lvh.me:9010",
        staging: `https://${subdomain}.neetogrow.net`,
        production: `https://${subdomain}.neetogrow.com`,
      },
    },
    {
      name: "Quiz",
      icon: NeetoQuiz,
      description: "Quiz App",
      url: {
        development: "http://spinkart.lvh.me:9011/quizzes",
        staging: `https://${subdomain}.neetoquiz.net/quizzes`,
        production: `https://${subdomain}.neetoquiz.com/quizzes`,
      },
    },
    {
      name: "Runner",
      icon: NeetoInterview,
      description: "Interview App",
      url: {
        development: "http://spinkart.lvh.me:9012",
        staging: `https://${subdomain}.neetorunner.net`,
        production: `https://${subdomain}.neetorunner.com`,
      },
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
    },
    {
      name: "Popups",
      icon: NeetoIcon,
      description: "Popups App",
      url: {
        development: "http://spinkart.lvh.me:9021",
        staging: `https://${subdomain}.neetopopups.net`,
        production: `https://${subdomain}.neetopopups.com`,
      },
    },
    {
      name: "Store",
      icon: NeetoIcon,
      description: "Store App",
      url: {
        development: "http://spinkart.lvh.me:9025",
        staging: `https://${subdomain}.neetostore.net`,
        production: `https://${subdomain}.neetostore.com`,
      },
    },
    {
      name: "CRM",
      icon: NeetoIcon,
      description: "CRM App",
      url: {
        development: "http://spinkart.lvh.me:9017",
        staging: `https://${subdomain}.neetocrm.net`,
        production: `https://${subdomain}.neetocrm.com`,
      },
    },
    {
      name: "Course",
      icon: NeetoIcon,
      description: "Course App",
      url: {
        development: "http://spinkart.lvh.me:9016",
        staging: `https://${subdomain}.neetocourse.net`,
        production: `https://${subdomain}.neetocourse.com`,
      },
    },
    {
      name: "Hr",
      icon: NeetoIcon,
      description: "Hr App",
      url: {
        development: "http://spinkart.lvh.me:9015",
        staging: `https://${subdomain}.neetohr.net`,
        production: `https://${subdomain}.neetohr.com`,
      },
    },
    {
      name: "Cal",
      icon: NeetoIcon,
      description: "Calender app",
      url: {
        development: "http://spinkart.lvh.me:9026",
        staging: `https://${subdomain}.neetocal.net`,
        production: `https://${subdomain}.neetocal.com`,
      },
    },
    {
      name: "Testify",
      icon: NeetoIcon,
      description: "Test management app",
      url: {
        development: "http://spinkart.lvh.me:9027",
        staging: `https://${subdomain}.neetotestify.net`,
        production: `https://${subdomain}.neetotestify.com`,
      },
    },
    {
      name: "Site",
      icon: NeetoIcon,
      description: "Site Builder App",
      url: {
        development: "http://spinkart.lvh.me:9028",
        staging: `https://${subdomain}.neetosite.net`,
        production: `https://${subdomain}.neetosite.com`,
      },
    },
  ];
};
