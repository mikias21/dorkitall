const dork_data = [
  {
    "id": 1,
    "category": "Interesting Files",
    "platform": "General",
    "query": "intitle:index.of.personal",
    "tags": ["index", "personal", "files"],
    "description": "Searches for directories containing personal files.",
    "risk_level": "High",
    "success_rate": "50.5%",
    "last_updated": "2024-12-18"
  },
  {
    "id": 2,
    "category": "Interesting Files",
    "platform": "General",
    "query": "intitle:\"index of\" intext:globals.inc",
    "tags": ["index", "globals", "files"],
    "description": "Searches for exposed globals.inc files, which may contain sensitive configurations.",
    "risk_level": "High",
    "success_rate": "50.5%",
    "last_updated": "2024-12-18"
  },
  {
    "id": 3,
    "category": "Interesting Files",
    "platform": "Windows",
    "query": "filetype:reg reg +intext:\"defaultusername\" +intext:\"defaultpassword\"",
    "tags": ["registry", "credentials", "files"],
    "description": "Finds Windows registry files containing default usernames and passwords.",
    "risk_level": "Critical",
    "success_rate": "50.5%",
    "last_updated": "2024-12-18"
  },
  {
    "id": 4,
    "category": "Login Pages",
    "platform": "Citrix",
    "query": "inurl:metaframexp/default/login.asp | intitle:\"Metaframe XP Login\"",
    "tags": ["login", "citrix", "metaframe"],
    "description": "Searches for exposed Citrix Metaframe XP login pages.",
    "risk_level": "Medium",
    "success_rate": "50.5%",
    "last_updated": "2024-12-18"
  },
  {
    "id": 5,
    "category": "Login Pages",
    "platform": "General",
    "query": "inurl:\"webadmin\" filetype:nsf",
    "tags": ["login", "webadmin"],
    "description": "Finds web administration login pages.",
    "risk_level": "Medium",
    "success_rate": "50.5%",
    "last_updated": "2024-12-18"
  },
  {
    "id": 6,
    "category": "Vulnerable Pages",
    "platform": "Java",
    "query": "allinurl:/examples/jsp/snp/snoop.jsp",
    "tags": ["vulnerable", "snoop", "java"],
    "description": "Searches for exposed Java Server Pages examples, which may reveal server information.",
    "risk_level": "High",
    "last_updated": "2024-12-18"
  },
  {
    "id": 7,
    "category": "Vulnerable Pages",
    "platform": "MikroTik",
    "query": "intitle:\"MikroTik RouterOS Managing Webpage\"",
    "tags": ["vulnerable", "mikrotik", "routeros"],
    "description": "Searches for exposed MikroTik RouterOS management pages.",
    "risk_level": "Critical",
    "last_updated": "2024-12-18"
  },
  {
    "id": 8,
    "category": "Vulnerable Pages",
    "platform": "Samba",
    "query": "intitle:\"Samba Web Administration Tool\" intext:\"Help Workgroup\"",
    "tags": ["samba", "webadmin", "vulnerable"],
    "description": "Finds exposed Samba web administration pages that may contain sensitive information.",
    "risk_level": "High",
    "last_updated": "2024-12-18"
  },
  {
    "id": 9,
    "category": "Vulnerable Pages",
    "platform": "General",
    "query": "+intext:\"webalizer\" +intext:\"Total Usernames\" +intext:\"Usage Statistics for\"",
    "tags": ["vulnerable", "webalizer", "statistics"],
    "description": "Searches for exposed Webalizer usage statistics pages, which may reveal sensitive data.",
    "risk_level": "Medium",
    "last_updated": "2024-12-18"
  },
  {
    "id": 10,
    "category": "Sensitive Information",
    "platform": "PHP",
    "query": "\"Fatal error: Call to undefined function\" -reply -the -next",
    "tags": ["php", "errors", "sensitive"],
    "description": "Searches for PHP error messages indicating undefined functions, which may reveal sensitive information.",
    "risk_level": "Medium",
    "last_updated": "2024-12-18"
  }
]

export default dork_data;