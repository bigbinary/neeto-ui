// Data Generator for Table Components
// Generates realistic dummy data similar to TABLE_DATA structure

const FIRST_NAMES = [
  "Brennen",
  "Manny",
  "Wilton",
  "Crin",
  "Antons",
  "Junette",
  "Julee",
  "Izak",
  "Blondy",
  "Joceline",
  "William",
  "Petronille",
  "Donielle",
  "Kirby",
  "Rosella",
  "Donaugh",
  "Luis",
  "Delly",
  "Margarete",
  "Agneta",
  "Osbert",
  "Janeva",
  "Berkeley",
  "Leona",
  "Ashbey",
  "Dunn",
  "Amie",
  "Timmy",
  "Barbara",
  "Amabel",
  "Far",
  "Melinda",
  "Brande",
  "Jody",
  "Winn",
  "Osbourn",
  "Luca",
  "Sylvester",
  "Farr",
  "Ingra",
  "Bonnibelle",
  "Elna",
  "Blaine",
  "Mychal",
  "Olly",
  "Berti",
  "Cyndy",
  "Eward",
  "Gerardo",
  "Janice",
  "Gabriella",
  "Cherida",
  "Michaelina",
  "Martainn",
  "Aarika",
  "Alexandra",
  "Benjamin",
  "Charlotte",
  "Daniel",
  "Emma",
];

const LAST_NAMES = [
  "Realy",
  "Jaime",
  "Huddlestone",
  "Tapply",
  "Shallow",
  "Peever",
  "Palmby",
  "Towe",
  "Gosselin",
  "Brushneen",
  "Marskell",
  "Pays",
  "Streetley",
  "Bauckham",
  "McMorran",
  "Letty",
  "Dufore",
  "Tanti",
  "Eakin",
  "Gillhespy",
  "Rasher",
  "Vedeniktov",
  "Skacel",
  "Melluish",
  "Fieldstone",
  "Krysiak",
  "Kildea",
  "Munford",
  "Clemintoni",
  "Cookley",
  "McQuillin",
  "Orbine",
  "Molder",
  "Seadon",
  "Bernlin",
  "Prando",
  "Ritchman",
  "Skeech",
  "Backhurst",
  "Toping",
  "Seyers",
  "Giacoppoli",
  "Inman",
  "Geertz",
  "Gilffillan",
  "Steutly",
  "Clemson",
  "Pennazzi",
  "Elphick",
  "Stutard",
  "Blay",
  "Gunton",
  "Cruise",
  "Morrell",
  "Grishunin",
  "Johnson",
  "Smith",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
];

const BUZZWORDS = [
  "artificial intelligence",
  "Profit-focused",
  "definition",
  "next generation",
  "Multi-tiered",
  "Down-sized",
  "Reduced",
  "orchestration",
  "intranet",
  "productivity",
  "knowledge base",
  "core",
  "Grass-roots",
  "Polarised",
  "Self-enabling",
  "radical",
  "Upgradable",
  "executive",
  "Ergonomic",
  "fault-tolerant",
  "functionalities",
  "internet solution",
  "flexibility",
  "content-based",
  "strategy",
  "model",
  "methodical",
  "encompassing",
  "6th generation",
  "Intuitive",
  "clear-thinking",
  "monitoring",
  "stable",
  "Re-engineered",
  "installation",
  "Assimilated",
  "toolset",
  "tangible",
  "hybrid",
  "5th generation",
  "capability",
  "systematic",
  "fresh-thinking",
  "explicit",
  "circuit",
  "interface",
  "Horizontal",
  "3rd generation",
];

const GENDERS = [
  "Male",
  "Female",
  "Polygender",
  "Agender",
  "Non-binary",
  "Bigender",
  "Genderfluid",
  "Genderqueer",
];

const DEPARTMENTS = [
  "Training",
  "Engineering",
  "Legal",
  "Product Management",
  "Marketing",
  "Business Development",
  "Services",
  "Sales",
  "Human Resources",
  "Accounting",
  "Research and Development",
  "Support",
];

const JOB_TITLES = [
  "Internal Auditor",
  "Community Outreach Specialist",
  "Sales Associate",
  "Tax Accountant",
  "Quality Engineer",
  "Civil Engineer",
  "Structural Analysis Engineer",
  "Assistant Manager",
  "Account Executive",
  "Nurse",
  "VP Marketing",
  "Web Designer IV",
  "Programmer Analyst I",
  "Administrative Officer",
  "Social Worker",
  "Clinical Specialist",
  "Paralegal",
  "Technical Writer",
  "Media Manager I",
  "Office Assistant III",
  "General Manager",
  "Recruiter",
  "Analog Circuit Design manager",
  "Account Representative III",
  "Senior Sales Associate",
  "Systems Administrator II",
  "Software Engineer IV",
  "Quality Control Specialist",
  "Safety Technician III",
  "Professor",
  "Senior Cost Accountant",
  "Marketing Manager",
  "Assistant Media Planner",
  "Accountant III",
  "Financial Analyst",
  "Nuclear Power Engineer",
  "Account Coordinator",
  "Senior Developer",
  "Product Engineer",
  "VP Product Management",
  "Account Representative I",
  "Senior Financial Analyst",
  "Dental Hygienist",
  "Staff Accountant III",
  "Data Coordiator",
];

const CURRENCIES = [
  "Ruble",
  "Yuan Renminbi",
  "Euro",
  "Dollar",
  "Dram",
  "Peso",
  "Real",
  "Zloty",
  "Shilling",
  "Rupiah",
  "Baht",
  "Hryvnia",
  "Afghani",
  "Krona",
  "Naira",
  "Pula",
  "Franc",
  "Koruna",
  "Lilangeni",
  "Dong",
  "Escudo",
  "Rial",
  "Quetzal",
];

const CURRENCY_CODES = [
  "RUB",
  "CNY",
  "EUR",
  "USD",
  "AMD",
  "PHP",
  "BRL",
  "PLN",
  "SOS",
  "IDR",
  "THB",
  "UAH",
  "AFN",
  "SEK",
  "NGN",
  "BWP",
  "XAF",
  "CZK",
  "SZL",
  "VND",
  "CVE",
  "SAR",
  "GTQ",
];

const COMPANY_SUFFIXES = [
  "Inc",
  "LLC",
  "Group",
  "and Sons",
  "-Beier",
  ", Ankunding and Cartwright",
  "-Turcotte",
  "-Oberbrunner",
  "-Rodriguez",
  "-Barton",
  ", Wiza and Lowe",
  "-Effertz",
  "-Rath",
  ", Klein and Lehner",
  "-Torp",
  "-Gulgowski",
  "-Vandervort",
  "-Breitenberg",
  "-Connelly",
  ", Littel and Hane",
  ", Streich and Lowe",
  "-Quigley",
  "-Maggio",
  ", Donnelly and Carroll",
  "-Dickens",
  "-Swaniawski",
];

const DOMAIN_EXTENSIONS = [
  ".com",
  ".org",
  ".net",
  ".edu",
  ".gov",
  ".int",
  ".co.uk",
  ".de",
  ".fr",
  ".jp",
  ".au",
  ".ca",
  ".in",
  ".ru",
  ".br",
  ".mx",
  ".es",
  ".it",
  ".nl",
];

const SHIRT_SIZES = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

const APP_NAMES = [
  "Sub-Ex",
  "Duobam",
  "Asoka",
  "Zoolab",
  "Wrapsafe",
  "Tres-Zap",
  "Fix San",
  "Lotlux",
  "Latlux",
  "Tresom",
  "Y-find",
  "Flowdesk",
  "Subin",
  "Gembucket",
  "Zontrax",
  "Biodex",
  "Bytecard",
  "Pannier",
  "Tampflex",
  "Ronstring",
  "Veribet",
  "Zathin",
  "Y-Solowarm",
  "Regrant",
  "Sonair",
  "Andalax",
  "Voyatouch",
  "Daltfresh",
  "Keylex",
  "Stringtough",
  "Bitchip",
  "Tin",
  "Zamit",
  "Prodder",
  "Konklux",
  "Temp",
  "Vagram",
];

// Helper functions
const randomChoice = array => array[Math.floor(Math.random() * array.length)];

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomFloat = (min, max, decimals = 2) =>
  parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

const generateGuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });

const generateEmail = (firstName, lastName) => {
  const domains = [
    "who.int",
    "jigsy.com",
    "mapquest.com",
    "newsvine.com",
    "reference.com",
    "mysql.com",
    "ed.gov",
    "webs.com",
    "toplist.cz",
    "un.org",
    "cornell.edu",
    "fotki.com",
    "ow.ly",
    "mayoclinic.com",
    "salon.com",
    "google.com.au",
    "blogs.com",
    "arstechnica.com",
    "gmpg.org",
    "nymag.com",
    "si.edu",
    "gravatar.com",
    "wikimedia.org",
    "surveymonkey.com",
    "rediff.com",
    "sitemeter.com",
    "quantcast.com",
    "intel.com",
    "163.com",
    "istockphoto.com",
    "php.net",
    "goodreads.com",
    "behance.net",
    "cnbc.com",
    "fda.gov",
    "tiny.cc",
    "omniture.com",
    "ibm.com",
    "squarespace.com",
    "hatena.ne.jp",
    "ning.com",
    "liveinternet.ru",
    "upenn.edu",
    "wix.com",
    "imgur.com",
    "cisco.com",
    "aboutads.info",
    "dion.ne.jp",
    "yahoo.com",
    "hao123.com",
    "auda.org.au",
    "adobe.com",
    "google.fr",
    "icio.us",
    "vinaora.com",
    "about.me",
    "last.fm",
    "desdev.cn",
    "spiegel.de",
    "nbcnews.com",
    "livejournal.com",
    "lulu.com",
    "t-online.de",
    "amazon.co.jp",
    "narod.ru",
    "weather.com",
    "hp.com",
    "jalbum.net",
    "unc.edu",
    "mapy.cz",
    "photobucket.com",
    "scribd.com",
    "state.gov",
    "elpais.com",
    "wunderground.com",
    "ycombinator.com",
    "wired.com",
    "instagram.com",
    "deviantart.com",
    "naver.com",
    "google.com.hk",
    "sphinn.com",
    "youku.com",
    "amazonaws.com",
    "taobao.com",
    "tamu.edu",
    "chicagotribune.com",
    "dailymail.co.uk",
    "prlog.org",
    "google.com",
    "indiatimes.com",
    "eepurl.com",
    "aol.com",
    "ezinearticles.com",
    "51.la",
  ];

  const username = `${firstName.toLowerCase()}${lastName.toLowerCase()}${randomInt(
    0,
    99
  )}`;

  return `${username}@${randomChoice(domains)}`;
};

const generateIpAddress = () =>
  `${randomInt(1, 255)}.${randomInt(0, 255)}.${randomInt(0, 255)}.${randomInt(
    1,
    255
  )}`;

const generateCreditCardNumber = () => {
  // Generate realistic credit card numbers (not real, just format)
  const prefixes = [
    30, 34, 35, 37, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
    55, 56, 57, 58, 59, 60, 62, 63, 64, 65, 66, 67,
  ];
  const prefix = randomChoice(prefixes);
  const length = prefix.toString().startsWith("3") ? 15 : 16;
  let number = prefix.toString();

  while (number.length < length) {
    number += randomInt(0, 9);
  }

  return parseInt(number);
};

const generateCompanyName = () => {
  const firstParts = [
    "Schuppe",
    "Legros",
    "Hickle",
    "Jones",
    "Moen",
    "Hills",
    "Douglas",
    "Koepp",
    "Pagac",
    "Torp",
    "Thiel",
    "Medhurst",
    "Hackett",
    "Grant",
    "O'Connell",
    "Hintz",
    "Wehner",
    "Bosco",
    "Hodkiewicz",
    "Breitenberg",
    "Baumbach",
    "Willms",
    "Gislason",
    "Tillman",
    "Macejkovic",
    "Lind",
    "Schuppe",
    "Schuster",
    "Kozey",
    "Nolan",
    "Green",
    "Fahey",
    "Stiedemann",
    "Mitchell",
    "Haley",
    "Farrell",
    "Hintz",
    "Robel",
    "Jenkins",
    "Bednar",
    "Hilll",
    "Koss",
    "Kertzmann",
    "Heaney",
    "Reichert",
    "Ziemann",
    "Murray",
    "Turcotte",
    "Klocko",
  ];

  return `${randomChoice(firstParts)}${randomChoice(COMPANY_SUFFIXES)}`;
};

const generateDomainName = () => {
  const domains = [
    "freewebs",
    "unc",
    "businessinsider",
    "wordpress",
    "adobe",
    "mysql",
    "ed",
    "edublogs",
    "un",
    "imdb",
    "ow",
    "zdnet",
    "google",
    "arstechnica",
    "nymag",
    "gravatar",
    "surveymonkey",
    "sitemeter",
    "intel",
    "istockphoto",
    "php",
    "goodreads",
    "cnbc",
    "tiny",
    "ibm",
    "squarespace",
    "hatena",
    "ning",
    "liveinternet",
    "upenn",
    "wix",
    "imgur",
    "cisco",
    "aboutads",
    "dion",
    "yahoo",
    "hao123",
    "auda",
    "mayoclinic",
    "google",
    "icio",
    "vinaora",
    "about",
    "last",
    "desdev",
    "spiegel",
    "nbcnews",
    "livejournal",
    "lulu",
    "t-online",
    "amazon",
    "narod",
    "weather",
    "hp",
    "jalbum",
    "mapy",
    "photobucket",
    "scribd",
    "state",
    "elpais",
    "wunderground",
    "ycombinator",
    "wired",
    "instagram",
    "deviantart",
    "naver",
    "sphinn",
    "youku",
    "amazonaws",
    "taobao",
    "tamu",
    "chicagotribune",
    "dailymail",
    "prlog",
    "indiatimes",
    "eepurl",
    "aol",
    "ezinearticles",
  ];

  return `${randomChoice(domains)}${randomChoice(DOMAIN_EXTENSIONS)}`;
};

const generateAppVersion = () => {
  const formats = [
    () => `${randomInt(0, 9)}.${randomInt(0, 9)}.${randomInt(0, 9)}`,
    () => `${randomInt(0, 9)}.${randomInt(0, 99)}`,
    () => randomFloat(0, 9, 2),
    () => randomInt(0, 9),
    () =>
      `${randomInt(0, 9)}.${randomInt(0, 9)}.${randomInt(0, 9)}.${randomInt(
        0,
        9
      )}`,
  ];

  return randomChoice(formats)();
};

/**
 * Generator function to create dummy table data similar to TABLE_DATA structure
 * @param {number} count - Number of records to generate
 * @param {number} startId - Starting ID for the records (default: 1)
 * @returns {Generator} Generator that yields dummy data objects
 */
export function* generateTableData(count = 100, startId = 1) {
  for (let i = 0; i < count; i++) {
    const id = startId + i;
    const firstName = randomChoice(FIRST_NAMES);
    const lastName = randomChoice(LAST_NAMES);
    const guid = generateGuid();
    const currency = randomChoice(CURRENCIES);
    const currencyCode = randomChoice(CURRENCY_CODES);

    yield {
      key: id,
      id,
      guid,
      first_name: firstName,
      last_name: lastName,
      buzzword: randomChoice(BUZZWORDS),
      gender: randomChoice(GENDERS),
      email: generateEmail(firstName, lastName),
      company_name: generateCompanyName(),
      ip_address: generateIpAddress(),
      department: randomChoice(DEPARTMENTS),
      job_title: randomChoice(JOB_TITLES),
      currency,
      credit_card_number: generateCreditCardNumber(),
      currency_code: currencyCode,
      domain_name: generateDomainName(),
      app_name: randomChoice(APP_NAMES),
      app_version: generateAppVersion(),
      shirt_size: randomChoice(SHIRT_SIZES),
    };
  }
}

/**
 * Utility function to generate an array of dummy table data
 * @param {number} count - Number of records to generate
 * @param {number} startId - Starting ID for the records (default: 1)
 * @returns {Array} Array of dummy data objects
 */
export const generateTableDataArray = (count = 100, startId = 1) =>
  Array.from(generateTableData(count, startId));

/**
 * Generate dummy data in batches for better performance with large datasets
 * @param {number} totalCount - Total number of records to generate
 * @param {number} batchSize - Size of each batch (default: 1000)
 * @param {number} startId - Starting ID for the records (default: 1)
 * @returns {Generator} Generator that yields batches of dummy data
 */
export function* generateTableDataBatches(
  totalCount,
  batchSize = 1000,
  startId = 1
) {
  let currentId = startId;
  let remaining = totalCount;

  while (remaining > 0) {
    const currentBatchSize = Math.min(batchSize, remaining);
    const batch = Array.from(generateTableData(currentBatchSize, currentId));

    yield batch;

    currentId += currentBatchSize;
    remaining -= currentBatchSize;
  }
}

// Export default generator for convenience
export default generateTableData;
