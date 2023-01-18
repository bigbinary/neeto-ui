export const getClientApp = (subdomain) => {
  return [
    {
      name: "Desk",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoDesk.svg",
      description: "Customer support & ticketing",
      url: {
        development: "http://spinkart.lvh.me:9001",
        staging: `https://${subdomain}.neetodesk.net`,
        production: `https://${subdomain}.neetodesk.com`,
      },
    },
    {
      name: "Chat",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoChat.svg",
      description: "Live chat & instant messaging",
      url: {
        development: "http://spinkart.lvh.me:9006",
        staging: `https://${subdomain}.neetochat.net`,
        production: `https://${subdomain}.neetochat.com`,
      },
    },
    {
      name: "KB",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoKB.svg",
      description: "Knowledge Base to find answers",
      url: {
        development: "http://spinkart.lvh.me:9005/admin",
        staging: `https://${subdomain}.neetokb.net/admin`,
        production: `https://${subdomain}.neetokb.com/admin`,
      },
    },
    {
      name: "Form",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoForm.svg",
      description: "Build forms and collect data effortlessly",
      url: {
        development: "http://spinkart.lvh.me:9004",
        staging: `https://${subdomain}.neetoform.net`,
        production: `https://${subdomain}.neetoform.com`,
      },
    },
    {
      name: "Changelog",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoChangelog.svg",
      description: "Inform customers of new updates",
      url: {
        development: "http://spinkart.lvh.me:9003",
        staging: `https://${subdomain}.neetochangelog.net`,
        production: `https://${subdomain}.neetochangelog.com`,
      },
    },
    {
      name: "Invoice",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoInvoice.svg",
      description: "Invoicing & time tracking",
      url: {
        development: "http://spinkart.lvh.me:9024",
        staging: `https://${subdomain}.neetoinvoice.net`,
        production: `https://${subdomain}.neetoinvoice.com`,
      },
    },
    {
      name: "Analytics",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoAnalytics.svg",
      description: "Social Media Analytics & reports",
      url: {
        development: "http://spinkart.lvh.me:9007",
        staging: `https://${subdomain}.neetoanalytics.net`,
        production: `https://${subdomain}.neetoanalytics.com`,
      },
    },
    {
      name: "Engage",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoEngage.svg",
      description: "Customer feedback",
      url: {
        development: "http://spinkart.lvh.me:9009/admin/boards",
        staging: `https://${subdomain}.neetoengage.net/admin/boards`,
        production: `https://${subdomain}.neetoengage.com/admin/boards`,
      },
    },
    {
      name: "Grow",
      icon: "",
      description: "For growing your business",
      url: {
        development: "http://spinkart.lvh.me:9010",
        staging: `https://${subdomain}.neetogrow.net`,
        production: `https://${subdomain}.neetogrow.com`,
      },
    },
    {
      name: "Quiz",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoQuiz.svg",
      description: "Build quizzes",
      url: {
        development: "http://spinkart.lvh.me:9011/quizzes",
        staging: `https://${subdomain}.neetoquiz.net/quizzes`,
        production: `https://${subdomain}.neetoquiz.com/quizzes`,
      },
    },
    {
      name: "Runner",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoRunner.svg",
      description: "Coding assessments & technical interviews",
      url: {
        development: "http://spinkart.lvh.me:9012",
        staging: `https://${subdomain}.neetorunner.net`,
        production: `https://${subdomain}.neetorunner.com`,
      },
    },
    {
      name: "Planner",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoPlanner.svg",
      description: "Manage projects and todos",
      url: {
        development: "http://spinkart.lvh.me:9013",
        staging: `https://${subdomain}.neetoplanner.net`,
        production: `https://${subdomain}.neetoplanner.com`,
      },
    },
    {
      name: "Replay",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoReplay.svg",
      description: "Watch customer activities",
      url: {
        development: "http://spinkart.lvh.me:9020",
        staging: `https://${subdomain}.neetoreplay.net`,
        production: `https://${subdomain}.neetoreplay.com`,
      },
    },
    {
      name: "Wireframe",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoWireframe.svg",
      description: "Build wireframes",
      url: {
        development: "http://spinkart.lvh.me:9021",
        staging: `https://${subdomain}.neetowireframe.net`,
        production: `https://${subdomain}.neetowireframe.com`,
      },
    },
    {
      name: "Invisible",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoInvisible.svg",
      description: "Watch how users interact with your products",
      url: {
        development: "http://spinkart.lvh.me:9014",
        staging: `https://${subdomain}.neetoinvisible.net`,
        production: `https://${subdomain}.neetoinvisible.com`,
      },
    },
    {
      name: "Popups",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoPopups.svg",
      description: "Capture emails and more",
      url: {
        development: "http://spinkart.lvh.me:9021",
        staging: `https://${subdomain}.neetopopups.net`,
        production: `https://${subdomain}.neetopopups.com`,
      },
    },
    {
      name: "Store",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoStore.svg",
      description: "Build online stores",
      url: {
        development: "http://spinkart.lvh.me:9025",
        staging: `https://${subdomain}.neetostore.net`,
        production: `https://${subdomain}.neetostore.com`,
      },
    },
    {
      name: "CRM",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoCRM.svg",
      description: "Manage customers",
      url: {
        development: "http://spinkart.lvh.me:9017",
        staging: `https://${subdomain}.neetocrm.net`,
        production: `https://${subdomain}.neetocrm.com`,
      },
    },
    {
      name: "Course",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoCourse.svg",
      description: "Build & sell courses online",
      url: {
        development: "http://spinkart.lvh.me:9016",
        staging: `https://${subdomain}.neetocourse.net`,
        production: `https://${subdomain}.neetocourse.com`,
      },
    },
    {
      name: "HR",
      icon: "",
      description: "HR and payroll software",
      url: {
        development: "http://spinkart.lvh.me:9015",
        staging: `https://${subdomain}.neetohr.net`,
        production: `https://${subdomain}.neetohr.com`,
      },
    },
    {
      name: "Cal",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoCal.svg",
      description: "Schedule meetings",
      url: {
        development: "http://spinkart.lvh.me:9026",
        staging: `https://${subdomain}.neetocal.net`,
        production: `https://${subdomain}.neetocal.com`,
      },
    },
    {
      name: "Testify",
      icon: "",
      description: "Manage manual & automated test cases",
      url: {
        development: "http://spinkart.lvh.me:9027",
        staging: `https://${subdomain}.neetotestify.net`,
        production: `https://${subdomain}.neetotestify.com`,
      },
    },
    {
      name: "Site",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoSite.svg",
      description: "Build websites",
      url: {
        development: "http://spinkart.lvh.me:9028",
        staging: `https://${subdomain}.neetosite.net`,
        production: `https://${subdomain}.neetosite.com`,
      },
    },
    {
      name: "Review",
      icon: "https://d2v7kzglnr2dnh.cloudfront.net/icons/neetoReview.svg",
      description: "Deploy web applications ",
      url: {
        development: "http://spinkart.lvh.me:9028",
        staging: `https://${subdomain}.neetoreview.net`,
        production: `https://${subdomain}.neetoreview.com`,
      },
    },
  ];
};
