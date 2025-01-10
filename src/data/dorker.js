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
  },
  {
    "id": 11,
    "category": "Vulnerable pages",
    "platform": "PHP",
    "query": "intext:\"error_reporting(E_ALL)\" intitle:\"phpinfo()\" -github.com",
    "tags": ["PHP", "phpinfo", "error_reporting", "debugging", "security"],
    "description": "This query searches for pages that display PHP configuration details using phpinfo() and have error reporting enabled. Such pages can expose sensitive server information and are often targeted by attackers.",
    "risk_level": "high",
    "last_updated": "2025-01-10"
  },
  {
    "id": 12,
    "category": "Vulnerable pages",
    "platform": "PHP",
    "query": "intext:\"sql_query\" inurl:\"admin.php\" -github.com",
    "tags": ["PHP", "SQL", "admin", "database", "security"],
    "description": "This query searches for admin pages that may contain SQL queries, which could indicate potential SQL injection vulnerabilities or unauthorized access points.",
    "risk_level": "high",
    "last_updated": "2025-01-10"
  },
  {
    "id": 13,
    "category": "Sensitive Data",
    "platform": "PHP",
    "query": "inurl:\"config.inc.php\" OR inurl:\"config/config.ini.php\" OR inurl:\"config/config.php\" -github.com",
    "tags": ["PHP", "configuration", "sensitive data", "security"],
    "description": "This query searches for configuration files that may contain sensitive information such as database credentials, API keys, or other critical settings.",
    "risk_level": "high",
    "last_updated": "2025-01-10"
  },
  {
    "id": 14,
    "category": "Sensitive Data",
    "platform": "WordPress",
    "query": "intitle:\"index of\" intext:\"wp-config.php\" -github.com",
    "tags": ["WordPress", "wp-config.php", "sensitive data", "security"],
    "description": "This query searches for exposed wp-config.php files in WordPress installations, which contain sensitive database credentials and other critical settings.",
    "risk_level": "high",
    "last_updated": "2025-01-10"
  },
  {
    "id": 15,
    "category": "Vulnerable pages",
    "platform": "PHP",
    "query": "inurl:\"upload.php\" intext:\"File Upload\" -github.com",
    "tags": ["PHP", "file upload", "security", "vulnerability"],
    "description": "This query searches for file upload pages that may be vulnerable to arbitrary file upload attacks, potentially allowing attackers to upload malicious files.",
    "risk_level": "high",
    "last_updated": "2025-01-10"
  },
  {
    "id": 16,
    "category": "Sensitive Data",
    "platform": "PHP",
    "query": "inurl:\"error_log\" intext:\"PHP Error logs\" -github.com",
    "tags": ["PHP", "error logs", "sensitive data", "debugging"],
    "description": "This query searches for PHP error logs that may contain sensitive information such as file paths, database queries, or other debugging details.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 17,
    "category": "Login pages",
    "platform": "PHP",
    "query": "inurl:\"login.php\" intext:\"Login Page\" -github.com",
    "tags": ["PHP", "login", "authentication", "security"],
    "description": "This query searches for login pages that may be targeted for brute force attacks or credential stuffing.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 18,
    "category": "Login pages",
    "platform": "HTML",
    "query": "inurl:\"login.html\" intext:\"Admin Login\" -github.com",
    "tags": ["HTML", "login", "admin", "security"],
    "description": "This query searches for admin login pages that may be targeted for unauthorized access attempts.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 19,
    "category": "Sensitive Data",
    "platform": "General",
    "query": "intext:\"API_KEY\" -github.com",
    "tags": ["API", "API_KEY", "sensitive data", "security"],
    "description": "This query searches for exposed API keys, which could be used to gain unauthorized access to services or data.",
    "risk_level": "high",
    "last_updated": "2025-01-10"
  },
  {
    "id": 20,
    "category": "Exposed directories",
    "platform": "General",
    "query": "inurl:\"api/v1\" -github.com",
    "tags": ["API", "v1", "directory", "security"],
    "description": "This query searches for exposed API version 1 directories, which may contain sensitive endpoints or data.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 21,
    "category": "Interesting files",
    "platform": "General",
    "query": "inurl:\"swagger.json\" -github.com",
    "tags": ["API", "swagger", "documentation", "security"],
    "description": "This query searches for exposed Swagger JSON files, which provide detailed API documentation and could be used to understand and exploit API endpoints.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 22,
    "category": "Exposed directories",
    "platform": "GraphQL",
    "query": "inurl:\"/graphql\" -github.com",
    "tags": ["GraphQL", "API", "directory", "security"],
    "description": "This query searches for exposed GraphQL endpoints, which could be targeted for query injection or unauthorized data access.",
    "risk_level": "high",
    "last_updated": "2025-01-10"
  },
  {
    "id": 23,
    "category": "Interesting files",
    "platform": "General",
    "query": "inurl:\"/api-docs\" -github.com",
    "tags": ["API", "documentation", "security"],
    "description": "This query searches for exposed API documentation pages, which may reveal sensitive information about API endpoints and usage.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 24,
    "category": "Exposed directories",
    "platform": "General",
    "query": "inurl:\"/api/v2\" -github.com",
    "tags": ["API", "v2", "directory", "security"],
    "description": "This query searches for exposed API version 2 directories, which may contain sensitive endpoints or data.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 25,
    "category": "Exposed directories",
    "platform": "General",
    "query": "inurl:\"/api/v3\" -github.com",
    "tags": ["API", "v3", "directory", "security"],
    "description": "This query searches for exposed API version 3 directories, which may contain sensitive endpoints or data.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 26,
    "category": "Sensitive Data",
    "platform": "General",
    "query": "intext:\"-----BEGIN PRIVATE KEY-----\" -github.com",
    "tags": ["private key", "cryptography", "sensitive data", "security"],
    "description": "This query searches for exposed private keys, which could be used to decrypt sensitive data or impersonate the key owner.",
    "risk_level": "high",
    "last_updated": "2025-01-10"
  },
  {
    "id": 27,
    "category": "Sensitive Data",
    "platform": "General",
    "query": "intext:\"client_secret\" -github.com",
    "tags": ["client_secret", "OAuth", "sensitive data", "security"],
    "description": "This query searches for exposed client secrets, which are used in OAuth authentication and could be exploited to gain unauthorized access.",
    "risk_level": "high",
    "last_updated": "2025-01-10"
  },
  {
    "id": 28,
    "category": "Sensitive Data",
    "platform": "General",
    "query": "intext:\"password\" filetype:env -github.com",
    "tags": ["password", ".env", "sensitive data", "security"],
    "description": "This query searches for exposed environment files containing passwords, which could be used to gain unauthorized access to systems or services.",
    "risk_level": "high",
    "last_updated": "2025-01-10"
  },
  {
    "id": 29,
    "category": "Sensitive Data",
    "platform": "General",
    "query": "intext:\"apikey\" filetype:env -github.com",
    "tags": ["apikey", ".env", "sensitive data", "security"],
    "description": "This query searches for exposed environment files containing API keys, which could be used to gain unauthorized access to services or data.",
    "risk_level": "high",
    "last_updated": "2025-01-10"
  },
  {
    "id": 30,
    "category": "Sensitive Data",
    "platform": "General",
    "query": "intext:\"username\" filetype:env -github.com",
    "tags": ["username", ".env", "sensitive data", "security"],
    "description": "This query searches for exposed environment files containing usernames, which could be used in conjunction with passwords to gain unauthorized access.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 31,
    "category": "Sensitive Data",
    "platform": "General",
    "query": "intext:\"jdbc.password\" -github.com",
    "tags": ["jdbc", "password", "database", "sensitive data", "security"],
    "description": "This query searches for exposed JDBC passwords, which could be used to gain unauthorized access to databases.",
    "risk_level": "high",
    "last_updated": "2025-01-10"
  },
  {
    "id": 32,
    "category": "Sensitive Data",
    "platform": "General",
    "query": "intext:\"oauth.token\" -github.com",
    "tags": ["OAuth", "token", "sensitive data", "security"],
    "description": "This query searches for exposed OAuth tokens, which could be used to gain unauthorized access to user accounts or services.",
    "risk_level": "high",
    "last_updated": "2025-01-10"
  },
  {
    "id": 33,
    "category": "File Exposure",
    "platform": "General",
    "query": "inurl:download.php?file=",
    "tags": ["file", "exposure", "download.php", "sensitive data"],
    "description": "This query searches for instances of the 'download.php' file, which could indicate exposed file download mechanisms vulnerable to abuse or exploitation.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 34,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"Index of /\" inurl:download.php",
    "tags": ["file", "directory index", "download.php", "exposed files"],
    "description": "This query searches for directory listings that include 'download.php', potentially revealing files that should not be publicly accessible.",
    "risk_level": "high",
    "last_updated": "2025-01-10"
  },
  {
    "id": 35,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"Download\" inurl:download.php",
    "tags": ["file", "exposure", "download.php", "sensitive data"],
    "description": "This query looks for pages titled 'Download' with 'download.php' in the URL, which may expose sensitive downloadable files.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 36,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"Download File\" inurl:download.php",
    "tags": ["file", "download.php", "exposure", "vulnerability"],
    "description": "This query identifies pages titled 'Download File' that could expose file download endpoints, potentially leading to sensitive data leaks.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 37,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"File Download\" inurl:download.php",
    "tags": ["file", "download.php", "exposure", "vulnerability"],
    "description": "This query searches for pages titled 'File Download' with 'download.php', possibly exposing sensitive files for download.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 38,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"Download Page\" inurl:download.php",
    "tags": ["file", "download.php", "exposure", "vulnerability"],
    "description": "This query identifies 'Download Page' entries with 'download.php' endpoints that could be exposing sensitive files.",
    "risk_level": "low",
    "last_updated": "2025-01-10"
  },
  {
    "id": 39,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"Download Link\" inurl:download.php",
    "tags": ["file", "download.php", "exposure", "security"],
    "description": "This query looks for pages titled 'Download Link' using 'download.php', possibly revealing downloadable files.",
    "risk_level": "low",
    "last_updated": "2025-01-10"
  },
  {
    "id": 40,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"Download Resource\" inurl:download.php",
    "tags": ["file", "download.php", "exposure", "security"],
    "description": "This query searches for 'Download Resource' pages using 'download.php', which could be exposing sensitive files.",
    "risk_level": "low",
    "last_updated": "2025-01-10"
  },
  {
    "id": 41,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"Download Center\" inurl:download.php",
    "tags": ["file", "download.php", "exposure", "vulnerability"],
    "description": "This query identifies 'Download Center' pages that might expose sensitive files via 'download.php'.",
    "risk_level": "low",
    "last_updated": "2025-01-10"
  },
  {
    "id": 42,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"Download Manager\" inurl:download.php",
    "tags": ["file", "download.php", "exposure", "vulnerability"],
    "description": "This query searches for 'Download Manager' pages with 'download.php', potentially exposing sensitive downloadable files.",
    "risk_level": "low",
    "last_updated": "2025-01-10"
  },
  {
    "id": 43,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"Download Script\" inurl:download.php",
    "tags": ["file", "download.php", "exposure", "security"],
    "description": "This query identifies pages titled 'Download Script' with 'download.php' endpoints that could expose sensitive files.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 44,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"File URL\" inurl:download.php",
    "tags": ["file", "download.php", "vulnerability", "security"],
    "description": "This query searches for 'File URL' pages with 'download.php', potentially exposing file download URLs.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 45,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"File Path\" inurl:download.php",
    "tags": ["file", "download.php", "security", "vulnerability"],
    "description": "This query identifies 'File Path' pages with 'download.php', possibly exposing sensitive paths for file access.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 46,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"Direct Download\" inurl:download.php",
    "tags": ["file", "download.php", "sensitive data", "security"],
    "description": "This query searches for 'Direct Download' pages using 'download.php', potentially revealing sensitive files for direct access.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 47,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"Downloadable File\" inurl:download.php",
    "tags": ["file", "download.php", "sensitive data", "security"],
    "description": "This query identifies 'Downloadable File' entries with 'download.php', which might expose sensitive files.",
    "risk_level": "low",
    "last_updated": "2025-01-10"
  },
  {
    "id": 48,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"File Repository\" inurl:download.php",
    "tags": ["file", "download.php", "exposure", "repository"],
    "description": "This query looks for 'File Repository' pages with 'download.php', potentially exposing sensitive file repositories.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 49,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"File Hosting\" inurl:download.php",
    "tags": ["file", "download.php", "hosting", "vulnerability"],
    "description": "This query searches for 'File Hosting' pages using 'download.php', potentially exposing sensitive hosted files.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 50,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"File Distribution\" inurl:download.php",
    "tags": ["file", "download.php", "distribution", "exposure"],
    "description": "This query identifies 'File Distribution' pages with 'download.php', potentially exposing sensitive distributed files.",
    "risk_level": "medium",
    "last_updated": "2025-01-10"
  },
  {
    "id": 51,
    "category": "File Exposure",
    "platform": "General",
    "query": "intitle:\"Downloadable Resource\" inurl:download.php",
    "tags": ["file", "download.php", "exposure", "vulnerability"],
    "description": "This query searches for 'Downloadable Resource' pages with 'download.php', possibly exposing sensitive resources for download.",
    "risk_level": "low",
    "last_updated": "2025-01-10"
  }
]

export default dork_data;