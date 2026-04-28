/*
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║           IT HELPDESK TOOL — data.js                            ║
 * ║           All static data arrays used across the tool           ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * SECTIONS (Ctrl+F to jump):
 *   DEFAULT_SCRIPTS    — 129 helpdesk script templates
 *   RA AGENTS          — 174 RA agent records
 *   RA UPLOAD HANDLING — xlsx/CSV upload + localStorage
 *   SITE DIRECTORY     — 155 LCFT sites with tech assignments
 *   DIGITAL CHAMPIONS  — 97 digital champion records
 *   SITE AUTOFILL LIST — Site names for form autocomplete
 *
 * NOTE: Edit this file to update script content, add new agents,
 *       or add new site entries. Do not edit index.html for data changes.
 */

const DEFAULT_SCRIPTS = [
  {
    id: 1, name: "Create Teams Channel",
    keywords: ["teams", "channel", "ms teams", "create", "mailbox", "administrators", "team channel"],
    body: `Hi {{customer}},\n\nFor a MS Teams channel, we just need a name and 3 administrators. By default when an MS Teams channel is created it automatically associates a mailbox with it, please can you confirm whether you would like this mailbox function to be disabled and hidden from the address book.\n\nWe can then assign this to the correct team who will set this up for you.\n\nKind Regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 2, name: "IT Purchasing",
    keywords: ["purchase", "buy", "order", "catalogue", "hardware", "it purchasing", "catalog"],
    body: `Hi {{customer}},\n\nYou will need to purchase one via IT Purchasing.\nThe link to the catalogue is below:\nhttps://apps.powerapps.com/play/e/7faa5738-48ee-eb17-8e9b-93481fba5da2/a/817f0a7a-d3d4-4fce-a877-bd64adc395e6\n\nFor any further queries, please check the following site https://nwsis.sharepoint.com/sites/SYITP/ which contains FAQ's and other support guides.\n\nThanks,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 3, name: "Mobile IT Purchase",
    keywords: ["mobile", "phone", "order", "purchase", "handset", "device", "mobile devices"],
    body: `Hi {{customer}},\n\nUnfortunately we are unable to process this request. The ordering of Mobile phones now need to be raised through the IT Purchasing Catalogue. You will need to select Hardware and Mobile Devices on the catalogue, and then once all of the boxes are completed, the catalogue will appear and you can then search for the Mobile.\nhttps://nwnis.sharepoint.com/sites/SYITP/\n\nThanks,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 4, name: "Canon Printer Login",
    keywords: ["canon", "printer", "login", "username", "password", "domain", "id card", "serial"],
    body: `Hi {{customer}},\n\nTo login to a Canon printer please ensure you have inputted the below:\n\nYour username will be your firstname.surname or using a middle initial if you use one (Please ensure you do not enter your full email)\nYour Password will be your normal login password (NOT your pin)\nThe Domain you need to be selecting is lancashirecare_lscft\n\nIf the above doesn't work, can you please provide a serial number for the printer in question and inform us where this printer is located, what error message you got when logging in manually and via ID card, so we can escalate this to Canon.\n\nThanks,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 5, name: "Contact IT - Canon Escalation",
    keywords: ["canon", "escalate", "contact", "call", "printer issue", "serial number"],
    body: `Hi {{customer}},\n\nPlease could you contact the IT Helpdesk on 01772 695316.\nThis can be done between 08:30 - 17:00 Monday to Friday, quoting the INC/SD Number.\n\nSo we can investigate the issue you have.\nWe may need to escalate this to Canon if needed, so please can you have the serial number for the printer ready.\n\nThanks,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 6, name: "Contact IT Helpdesk",
    keywords: ["contact", "call", "helpdesk", "helpline", "phone", "technician", "appointment", "695316"],
    body: `Hi {{customer}},\n\nPlease could you contact the IT Helpdesk on 01772 695316.\nThis can be done between 08:30 - 17:00 Monday to Friday, quoting the INC/SD Number.\n\nSo we can investigate the issue you have.\nWe may need to book in an appointment with a technician if needed.\n\nThanks,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 7, name: "Book Remote Technician",
    keywords: ["remote", "technician", "appointment", "remote support", "book remote", "call back"],
    body: `Hi {{customer}},\n\nPlease could you contact the IT Helpdesk on 01772 695316.\nThis can be done between 08:30 - 17:00 Monday to Friday, quoting the INC/SD Number.\n\nSo we can book you in for a remote technician appointment.\n\nThanks,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 8, name: "Book Field Technician",
    keywords: ["field", "technician", "on site", "visit", "cost code", "book field", "in person"],
    body: `Hi {{customer}},\n\nPlease could you contact the IT Helpdesk on 01772 695316.\nThis can be done between 08:30 - 17:00 Monday to Friday, quoting the INC/SD Number.\n\nSo we can book you in for a field technician appointment.\nWe will also require a cost code so we can look at your device.\n\nThanks,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 9, name: "Drive Access Request",
    keywords: ["drive", "shared drive", "folder", "access", "network drive", "permissions", "read", "edit", "line manager"],
    body: `Hi {{customer}},\n\nUnfortunately for security and governance purposes we are unable to accept self requested access.\n\nThis request would need to come to the service desk from your line manager.\n\nPlease could they also state the full drive paths that access is required to (e.g. \\\\lct-fsclfile.xlancashirecare.nhs.uk\\shared\\LCFT\\exampledrivepath)\n\nCan you advise them to let us know if you need Read or Edit permissions to the folder mentioned above. Please note full access is not a valid permission.\n\nPlease note, forwarded and replied to emails will not be logged on our system. It must be a fresh email to IT.Helpdesk@lscft.nhs.uk. Further to note it is not sufficient to simply have line managers CC'd in.\n\nPlease call through to the service desk on 01772 695316 quoting the INC/SD number if you have any queries.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 10, name: "Email/Mailbox Access Request",
    keywords: ["email", "mailbox", "access", "shared mailbox", "send as", "permissions", "inbox", "read manage"],
    body: `Hi {{customer}},\n\nUnfortunately for security and governance purposes we are unable to accept self requested access.\n\nThis request would need to come to the service desk from your line manager.\n\nPlease ensure they state the full mailbox email or display name.\n\nCan they provide the level of access, such as read and manage or send permissions.\n\nPlease note, forwarded and replied to emails will not be logged on our system. It must be a fresh email to IT.Helpdesk@lscft.nhs.uk. Further to note it is not sufficient to simply have line managers CC'd in.\n\nPlease call through to the service desk on 01772 695316 quoting the INC/SD number if you have any queries.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 11, name: "Calendar Access Request",
    keywords: ["calendar", "room", "meeting room", "booking", "view", "edit", "public folder", "shared calendar"],
    body: `Hi {{customer}},\n\nUnfortunately for security and governance purposes we are unable to accept self requested access.\n\nThis request would need to come to the service desk from your line manager.\n\nPlease ask them to provide the location of the calendar, e.g. All Public Folder, Lancashire Care NHS Trust, Example Building, Meeting Room 1.\n\nPlease note that the line manager should also state the calendar's email or display name and state whether only viewing or editing access is required. Please note full access is not a valid permission.\n\nPlease note, forwarded and replied to emails will not be logged on our system. It must be a fresh email to IT.Helpdesk@lscft.nhs.uk. Further to note it is not sufficient to simply have line managers CC'd in.\n\nPlease call through to the service desk on 01772 695316 quoting the INC/SD number if you have any queries.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 12, name: "Generic Access Request",
    keywords: ["access", "request", "permission", "self service", "governance", "security"],
    body: `Hi {{customer}},\n\nUnfortunately for security and governance purposes we are unable to accept self requested access.\n\nThis request would need to come to the service desk from your line manager.\n\nPlease note, forwarded and replied to emails will not be logged on our system. It must be a fresh email to IT.Helpdesk@lscft.nhs.uk. Further to note it is not sufficient to simply have line managers CC'd in.\n\nPlease call through to the service desk on 01772 695316 quoting the INC/SD number if you have any queries.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 13, name: "Laptop Charger",
    keywords: ["charger", "chargers", "power pack", "laptop charger", "power supply", "lead", "cable", "supply"],
    body: `Hi {{customer}},\n\nIT Helpdesk doesn't supply or replace laptop chargers/power packs. These need to be purchased via IT Purchasing.\n\nIf there is an issue with the laptop itself, please let us know and we can log a job to investigate.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 14, name: "Mobile Order Form (Deprecated)",
    keywords: ["mobile", "order form", "request form", "device form", "old form", "communications", "mobile form"],
    body: `Hi {{customer}},\n\nPlease note that mobile phones must now be requested and purchased via the IT Purchasing App.\n\nOrders are no longer processed via Mobile Communications Device Request Form.\n\nAll mobile phone requests should be submitted using the link below:\nhttps://apps.powerapps.com/play/e/7faa5738-48ee-eb17-8e9b-93481fba5da2/a/817f0a7a-d3d4-4fce-a877-bd64adc395e6\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 15, name: "Connect SecurePrintAnywhere",
    keywords: ["secure print", "print anywhere", "secureprintanywhere", "add printer", "connect printer", "lct-rps202", "print"],
    body: `Hi {{customer}},\n\nTo add the printer, please follow the steps below:\n\n1) In the bottom search bar, type \\\\LCT-RPS202 and press Enter\n2) A window will open showing a list of available printers\n3) Double-click SecurePrintAnywhere\n4) The printer will connect automatically\n\nOnce completed, SecurePrintAnywhere should appear in your list of printers.\n\nIf you're still experiencing issues, please call the Helpdesk on 01772 695316 between 08:30 - 17:00, Monday to Friday. Please quote your INC/SD number and have the printer serial number available.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 16, name: "Install Cisco Jabber",
    keywords: ["cisco", "jabber", "install", "company portal", "voip", "softphone", "cisco jabber"],
    body: `Hi {{customer}},\n\nThe Cisco Jabber can be installed via the Company Portal.\nPlease follow the steps below:\n\n1) Type Company Portal in the bottom search bar and open it\n2) Search for Cisco Jabber\n3) Select it and click Install\n\nIf you're still unable to install the application, please contact the Helpdesk on 01772 695316 between 08:30 - 17:00, Monday to Friday, quoting your incident number.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 17, name: "Teams Meeting in New Outlook",
    keywords: ["teams meeting", "new outlook", "calendar invite", "meeting invite", "toggle teams", "outlook meeting", "teams link"],
    body: `Hi {{customer}},\n\nWhen creating the meeting in New Outlook, please make sure the Teams meeting option is switched on.\n\nHow to toggle Teams Meeting in New Outlook:\n\n1) Open New Outlook\n2) Go to Calendar and select New event\n3) Enter the meeting title, date, and time\n4) Add attendees by typing their name or NHS email\n5) Toggle Teams meeting ON (switch at the top of the meeting window)\n6) Click Send\n\nToggling Teams meeting on ensures the invite and Teams link display correctly for all attendees in both New Outlook and Old Outlook.\n\nIf issues continue, please contact the Helpdesk on 01772 695316 between 08:30 - 17:00, Monday to Friday, quoting your incident number.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 18, name: "IRiS Form (Notes Removal)",
    keywords: ["iris", "notes", "remove notes", "patient notes", "iris form", "portal", "reference number"],
    body: `Hi {{customer}},\n\nTo have notes removed, an IRiS form will need to be completed.\n\nPlease submit an IRiS via the portal, or the desktop icon, and then reply to this email with the IRiS reference number so it can be followed up.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  }  ,
  {
    id: 19, name: "New Account Created",
    keywords: ["new account", "account created", "credentials", "call helpdesk", "login", "mfa", "set up", "new user"],
    body: `Hi {{customer}},\n\nThis account has now been set up. Please call the IT helpdesk on 01772 695316 to obtain a login.\n\nPlease ensure the user registers for MFA as soon as possible - this is a mandatory requirement.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 20, name: "Company Portal Sync Fix",
    keywords: ["company portal", "sync", "fix", "restart", "settings", "portal", "not loading", "update"],
    body: `Hi {{customer}},\n\nThere has been a fix for this issue. Use the search bar at the bottom of the screen and search for 'Company Portal.' There will be a 'Settings' option at the bottom left of the tab. Click on 'Sync.' Allow it to sync once then restart the device.\n\nIf this issue persists please call the helpdesk so we can book you in for a remote appointment for a technician to have a look at this for you.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 21, name: "MFA - Download and Enrol",
    keywords: ["mfa", "multifactor", "enrol", "download", "company portal", "authenticator", "multi factor", "register mfa"],
    body: `Hi {{customer}},\n\nYou can download the MFA app via the 'Company Portal.' You can find that by searching 'Company Portal' on the search bar at the bottom of the screen, then search 'MFA.' Once downloaded you can enrol.\n\nGuide: https://nwsis.sharepoint.com/sites/DIOFF/SitePages/Multifactor-Authentication.aspx\n\nIf you have any issues then contact us again.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 22, name: "MFA - Reset and Re-enrol",
    keywords: ["mfa", "reset mfa", "re-enrol", "multifactor", "code", "desktop pc", "mfa reset", "sign up again"],
    body: `Hi {{customer}},\n\nIt appears MFA is asking for a code which has been set up on a desktop PC. I can reset this for you, but you will need to sign up again.\n\nI would recommend signing back up on a device that you always have access to, as if you need to approve a login it will go to this device. Users usually set it up on their personal devices.\n\nIs this something you want to go ahead with?\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 23, name: "Account Changes Made",
    keywords: ["account changes", "changes made", "sync", "24 hours", "updated", "done", "complete"],
    body: `Hi {{customer}},\n\nI have made the changes to your account as requested.\n\nPlease allow 24 hours for this to sync and get back in touch if any issues.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 24, name: "Dialog / Group Access Granted",
    keywords: ["dialog", "group", "access", "added", "sync", "group access", "dialog access"],
    body: `Hi {{customer}},\n\nI have added the user(s) to the correct dialog and group. Please allow an hour for this to sync.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 25, name: "Username Change",
    keywords: ["username", "change username", "hr", "workforce", "name change", "rename account"],
    body: `Hi {{customer}},\n\nPlease can you confirm what username you require to change to. Please can you also confirm if these changes have been made with HR and workforce systems, as they will all need to match before we can change anything on our side.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 26, name: "USB Permissions - Line Manager Required",
    keywords: ["usb", "permissions", "line manager", "usb access", "removable", "license", "software license"],
    body: `Hi {{customer}},\n\nYour line manager will have to email us to give you USB permissions to access this.\n\nPlease also speak to your line manager about the license, as this software requires an active license to use. If there is none, you will have to purchase one.\n\nUnfortunately we don't advise on how to use this software - please contact your line manager or email digital.training@lscft.nhs.uk for further guidance.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 27, name: "Software via Company Portal",
    keywords: ["software", "company portal", "download", "install", "app", "application", "self install"],
    body: `Hi {{customer}},\n\nThis is something that you can download yourself via the Company Portal. You can find this by using the search bar at the bottom and typing 'Company Portal' and then searching for your software.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 28, name: "Windip Download",
    keywords: ["windip", "company portal", "download", "install", "windip install"],
    body: `Hi {{customer}},\n\nYou can download Windip from the Company Portal. To do this, use the search bar at the bottom and search for 'Company Portal.' Open the app and then search for 'Windip' and install the full version.\n\nIf you have any issues then please call the service desk so we can look at this further.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 29, name: "Workforce Systems - HERO",
    keywords: ["workforce", "hero", "hero icon", "helpdesk", "systems", "ticket", "workforce systems"],
    body: `Hi {{customer}},\n\nYou will need to contact the workforce systems team. You can find them by using the 'HERO' icon on your desktop. From there you can launch their helpdesk and submit a ticket.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 30, name: "ESR - Workforce System",
    keywords: ["esr", "workforce", "hero", "service desk", "workforce system", "esr access"],
    body: `Hi {{customer}},\n\nESR is a workforce system application. You can find them by going onto an LSCFT device and finding the 'HERO' icon on the desktop. Once opened, go to 'Launch Service Desk.' From there you will be able to submit a ticket with them.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 31, name: "Send From / From Field in Outlook",
    keywords: ["send from", "from field", "outlook", "delegate", "send as", "email from", "from button"],
    body: `Hi {{customer}},\n\nThanks for the information. Have you got the 'From' field visible? You can find this by opening a new email. At the top of the tab go to Options and ensure that 'From' is selected. The 'From' field should now be loaded - just click on it and either add or select the email addresses you need to send from.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 32, name: "Out of Office Placed",
    keywords: ["out of office", "ooo", "away message", "auto reply", "placed", "out of office set"],
    body: `Hi {{customer}},\n\nI have placed the out of office on the account as requested.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 33, name: "New User Processing Notes (Internal)",
    keywords: ["new user", "processing", "ou", "move", "account setup", "internal", "new account notes", "processing notes"],
    body: `FOR PROCESSING NEW USERS:\nTaken out of office, added address and checked account, member of, and general tabs. Moved to correct OU.\n\n(DUPLICATE / expired account):\nCopied details from new account to original. Duplicated new account. Moved original to Temp Staffing OU and unhid mailbox on Exchange, also enabled it on AD.`
  },
  {
    id: 34, name: "Leaver Processing Notes (Internal)",
    keywords: ["leaver", "processing", "leavers ou", "exchange", "ad", "internal", "leaver notes", "offboarding"],
    body: `FOR PROCESSING LEAVERS:\nPut leaver's location in office tab with this SD number. Added to leavers OU. Changed password on AD. Hid mailbox on Exchange.`
  },
  {
    id: 35, name: "New User - Rio Access",
    keywords: ["rio", "new user", "rio access", "it trainer", "training", "mfa", "account created"],
    body: `Hi {{customer}},\n\nThis account has been created as per your request. Please ask the user to contact the IT Helpdesk and quote the incident reference to retrieve their login credentials.\n\nPlease note: Rio access is granted by the IT Trainer once the user has attended training.\n\nPlease advise them they must enrol onto MFA as this is now a mandatory requirement across the trust. A guide on how to enrol can be found via the MFA button on Trustnet.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 36, name: "CITO Access Granted",
    keywords: ["cito", "access", "granted", "sync", "cito access"],
    body: `Hi {{customer}},\n\nI have granted access to CITO - please allow a few hours for this to sync.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 37, name: "Duplicate Account Check",
    keywords: ["duplicate", "account", "new user", "middle initial", "already exists", "duplicate account", "existing account"],
    body: `Hi {{customer}},\n\nThank you for your request for a new user account. I just wondered if they have ever worked for the Trust before, as we already have someone by that name on the system.\n\nIf they haven't worked for the Trust before, please provide us with their middle initial and we can create the account.\n\nShould you have any further questions or queries, please visit the IT Service Desk SharePoint page - this page contains information which could answer your question at a click of a button.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 38, name: "USB Permissions Granted",
    keywords: ["usb", "permissions", "granted", "sync", "usb access granted", "removable media"],
    body: `Hi {{customer}},\n\nI have granted USB permissions for this user as requested. Please allow a few hours for this to sync and get them to call us if it doesn't work.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 39, name: "EPMA Download",
    keywords: ["epma", "company portal", "download", "install", "medication", "epma install"],
    body: `Hi {{customer}},\n\nYou should be able to download EPMA from the 'Company Portal.' Use the search box at the bottom of the screen and search for 'Company Portal.' From there search for 'EPMA' and download the latest version.\n\nIf you are having issues, please call the helpdesk on 01772 695316 quoting this job's INC number so we can investigate further.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 40, name: "New User - Additional Details Required",
    keywords: ["new user", "additional details", "base site", "contact number", "manager", "start date", "expiry", "details required"],
    body: `Hi {{customer}},\n\nPlease could you provide some updated details for the user's account? We need their:\n- Base site\n- Contact number\n- Manager's name\n- Start date and expiration date for the account\n- Any previous access which needs to be removed\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 41, name: "Wireless - Certificate Issue",
    keywords: ["wireless", "certificate", "ethernet", "fulwood park", "network", "wifi", "wireless certificate"],
    body: `Hi {{customer}},\n\nThe wireless network is requesting a certificate when connecting. Please try finding an ethernet port or port replicator as an alternative connection method while we investigate this.\n\nIf you need further assistance, please call the helpdesk on 01772 695316 between 08:30 - 17:00, Monday to Friday, quoting your incident number.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 42, name: "Calendar Access Granted",
    keywords: ["calendar", "access granted", "permissions", "sync", "calendar access", "granted"],
    body: `Hi {{customer}},\n\nI have granted access to the calendar as requested. Please allow a few hours for these permissions to sync over.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 43, name: "Login - Check Username Format",
    keywords: ["login", "username", "format", "password", "xlancashirecare", "can't login", "incorrect username"],
    body: `Hi {{customer}},\n\nPlease can you confirm you're using the correct login details. It will be:\n\nUsername: first.surname@xlancashirecare.nhs.uk\nPassword: your normal IT login (15 character minimum)\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 44, name: "Shared Mailbox Access Granted",
    keywords: ["shared mailbox", "access granted", "mailbox", "permissions", "sync", "mailbox granted"],
    body: `Hi {{customer}},\n\nI have granted access to the shared mailbox as requested. Please allow a few hours for these permissions to sync over.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 45, name: "Shared Mailbox - Confirm Permission Type",
    keywords: ["shared mailbox", "permissions", "send as", "full access", "read manage", "mailbox permissions", "confirm permissions"],
    body: `Hi {{customer}},\n\nPlease can you confirm what permissions you want to give for the shared mailbox(es).\n\nThe permissions are as follows:\n\nSend as\nThe Send as permission allows the delegate to send an email from this mailbox. The message will appear to have been sent from the mailbox owner.\n\nRead and manage (Full Access)\nThe Full Access permission allows a delegate to open this mailbox and behave as the mailbox owner.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 46, name: "Distribution List Access Granted",
    keywords: ["distribution list", "access granted", "dl", "group", "list access", "distribution"],
    body: `Hi {{customer}},\n\nI have granted access to the distribution list as requested. Please allow a few hours for these permissions to sync over.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 47, name: "Shared Drive Access Granted",
    keywords: ["shared drive", "drive access", "folder", "granted", "permissions", "network drive", "drive granted"],
    body: `Hi {{customer}},\n\nI have granted access to the shared drive folder as requested. Please allow a few hours for these permissions to sync over.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 48, name: "Shared Drive - File Path Not Found",
    keywords: ["shared drive", "file path", "not found", "confirm path", "drive path", "cannot find"],
    body: `Hi {{customer}},\n\nPlease can you provide us with the full file paths of where you want to grant access, as we cannot find those files on the shared drive.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 49, name: "Account Extended",
    keywords: ["account", "extended", "expiry", "date", "extend account", "account expiry"],
    body: `Hi {{customer}},\n\nI have extended the account until the date specified.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 50, name: "Account Expiry Removed",
    keywords: ["account", "expiry", "removed", "no expiry", "permanent", "remove expiry"],
    body: `Hi {{customer}},\n\nI have removed the expiry on the account.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 51, name: "Account Re-enabled",
    keywords: ["account", "re-enabled", "disabled", "locked out", "enable account", "reactivate"],
    body: `Hi {{customer}},\n\nI have re-enabled the account. If they know the password, they will be able to get in within an hour of receiving this email. If not, please get them to call the helpdesk to obtain their login credentials.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 52, name: "Purchase IT Equipment",
    keywords: ["purchase", "equipment", "trustnet", "digital hub", "it order form", "buy equipment", "new equipment"],
    body: `Hi {{customer}},\n\nYou would have to buy a new one from the IT purchasing portal. You can find it by opening a new web browser on an LSCFT device, going to the main Trustnet page, then navigating to Digital Hub > IT Order Form.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 53, name: "Smartcard / PIN Not Appearing",
    keywords: ["smartcard", "pin", "nhs credential management", "identity agent", "pin box", "smart card", "pin not showing"],
    body: `Hi {{customer}},\n\nThis may be a software issue. Please open 'Hidden Icons' at the bottom right corner of the screen and check if 'NHS Credential Management' and 'Identity Agent' are there (hover over icons to see names).\n\nIf they are not there:\n1. Put your smartcard in the machine\n2. Search for 'NHS Credential Management' at the bottom left of the screen and open it\n3. Do the same for 'Identity Agent'\n4. The PIN box should now open - type your PIN in\n\nIf the PIN box still doesn't appear, please try in another colleague's machine. If that works, contact us so we can arrange an appointment to check the hardware/software.\n\nIf it still doesn't work, please contact us so we can go through the next steps.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 54, name: "CITO Word Add-In",
    keywords: ["cito", "word", "add-in", "enable", "com add-ins", "word addin", "cito tab", "word tab"],
    body: `Hi {{customer}},\n\nTo enable the CITO tab in Word:\n\n1. Open Word and go to File > Options\n2. Click Add-Ins in the left-hand menu\n3. In the 'Manage' dropdown at the bottom, select COM Add-ins and click Go\n4. Check the box next to CitoWordAddIn and click OK\n5. Restart Word\n\nIf the add-in did not appear in the COM list, Word may have disabled it:\n\n1. Go to File > Options > Add-Ins\n2. In the 'Manage' dropdown, select Disabled Items and click Go\n3. If CITO is listed, select it and click Enable\n4. Restart Word\n\nKind regards,\n{{agent}} - IT Helpdesk`
  },
  {
    id: 55, name: "Canon - Serial Number Not Found",
    keywords: ["canon", "serial number", "not found", "printer", "recheck", "serial", "canon escalation"],
    body: `Hi {{customer}},\n\nPlease could you review the serial number for the printer that you provided, as nothing is showing up for that serial number. Once we have the correct serial number we can log a job with Canon.\n\nKind regards,\n{{agent}} - IT Helpdesk`
  }

,
  {
    id: 200, name: "Advice and Guidance",
    keywords: ["advice", "guidance", "lydia", "advice and guidance"],
    body: `Advice and Guidance is managed by Lydia.Yates@lscft.nhs.uk
It would be best to contact her about this

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 201, name: "Canon Resolved",
    keywords: ["canon", "resolved", "complete", "canon job", "repair"],
    body: `Hi {{customer}},

Please see the resolution notes from Canon below. They have advised the job is now complete. If there are any further issues please call the IT Service Desk on 01772 695316 between 08:30 - 17:00 Mon to Fri quoting your SD number.

Kind regards,
{{agent}} - IT Helpdesk`
  },
  {
    id: 202, name: "Cisco Jabber - Install",
    keywords: ["cisco", "jabber", "install", "company portal", "softphone"],
    body: `Hi {{customer}},

You are now able to install this yourself. Please search for Company Portal in the bottom left corner of your screen.
Under Applications please find Cisco Jabber and click Install.

If for whatever reason this fails please click retry and if this still doesn't work, go to the settings icon and click sync and retry installing this.
If this still fails, please could you contact the IT Helpdesk on 01772 695316
This can be done between 08:30 - 17:00 Monday to Friday, quoting the INC/SD Number,
so we can book you in for a remote technician appointment.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 203, name: "Cito Access (RiO)",
    keywords: ["cito", "rio", "access", "cito access"],
    body: `Hi {{customer}},

If you need access to Cito within RiO, this request would need to come to the service desk from your line manager.
This is for security and auditing purposes.

Forwarded and replied to emails will not be logged on our system, it must be a fresh email to IT.Helpdesk@lscft.nhs.uk. It is not sufficient to simply have line managers CC'd in.
Please call through to the service desk on 01772 695316 quoting the INC/SD number.

Kind regards,
{{agent}} - IT Helpdesk`
  },
  {
    id: 204, name: "Cito Plugin - Word",
    keywords: ["cito", "plugin", "word", "add-in", "addin", "cito word"],
    body: `Hi {{customer}},

Please open Word and click File > Options > Add-ins > locate Manage COM Add-ins and click Go.
See if you can see the Cito plugin — tick it and click OK and it should appear in the top right.

If it is not appearing:
1. Close any and all instances of MS Word
2. Search for Company Portal in the bottom left corner of your screen
3. Search for Cito Word - Integration and click Install, then relaunch Word

If the above doesn't work:
4. Locate the settings icon in Company Portal and click Sync (may take a few minutes)
5. Try to install the app again

If this still fails, please contact the IT Helpdesk on 01772 695316 between 08:30 - 17:00 Monday to Friday, quoting the INC/SD Number.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 205, name: "Cito Plugin - Disabled",
    keywords: ["cito", "plugin", "disabled", "word", "add-in", "inactive"],
    body: `Hi {{customer}},

Please open Word and click File > Options > Add-ins > locate the dropdown arrow and click it > choose Disabled Items.

You should see Cito listed there — click it and click Enable, then reload Word and see if this fixes the issue.

If this still fails, please contact the IT Helpdesk on 01772 695316 between 08:30 - 17:00 Monday to Friday, quoting the INC/SD Number.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 206, name: "Cito Teams - Open in Desktop",
    keywords: ["cito", "teams", "word", "desktop app", "teams channel"],
    body: `Hi {{customer}},

With the migration of Shared Drive locations to MS Teams, to use the Cito Word button as normal, please do the following:

1. Open your Word document in MS Teams channel
2. Locate the ribbon on Word and select the option that says Editing
3. Click this and choose 'Open in Desktop'

This will then open in MS Word where you should be able to use the Cito add-in the same way as before.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 207, name: "Default Apps - PDF",
    keywords: ["default apps", "pdf", "adobe", "acrobat", "open pdf", "default"],
    body: `Hi {{customer}},

Please search for 'Default Apps' in your search bar.
Under apps, type Adobe Reader/Acrobat and select it.

Under the extensions please locate the one that says .PDF, click the icon and see if you can change it back to Adobe.

If this works you should then be able to open your PDF in PDF Reader.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 208, name: "EE SIM Details Request",
    keywords: ["ee", "sim", "mobile", "sim details", "cellular", "ee sim"],
    body: `Hi {{customer}},

We require some SIM details to escalate this to EE.

Please follow the below:
Select Settings > Network & Internet > Cellular > Mobile operator settings.
You should see some SIM details — please copy all the info and reply so we can escalate this for you.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 209, name: "EMIS - Install",
    keywords: ["emis", "install", "company portal", "organisation id", "emis install"],
    body: `Hi {{customer}},

You are now able to install this yourself. Please search for Company Portal in the bottom left corner of your screen.
Under Applications please find EMIS and click Install.

Once installed it will ask for your Organisation ID — please note we are not aware of what this could be, you will need to speak to your manager to obtain this for your access.

If this fails, please click retry or go to the settings icon and click sync and retry.
If it still fails, please contact the IT Helpdesk on 01772 695316 between 08:30 - 17:00 Monday to Friday, quoting the INC/SD Number.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 210, name: "EMIS - Super User Support",
    keywords: ["emis", "support", "super user", "emis access", "emis issue"],
    body: `Hi {{customer}},

Unfortunately we only install EMIS but cannot provide further support past this point.
You will need to contact your EMIS Super User. If you don't know who this is, please ask your manager — they should be able to help with basic issues and if not they are in contact with EMIS directly.

Kind regards,
{{agent}} - IT Helpdesk`
  },
  {
    id: 211, name: "Egress - Grant Access & Install",
    keywords: ["egress", "install", "egress access", "encrypted email", "switch egress"],
    body: `Hi {{customer}},

I have now granted you access to LSCFT - Egress Authors - User Mailboxes, which is the permission needed to send via Egress. You must install the add-in yourself:

1. Please ensure you close Outlook down completely first
2. Search for Company Portal in the bottom left corner of your screen
3. Under Applications please find Egress and click Install

Please note this does not work on Outlook New — only on the Classic version.

If this fails, please contact the IT Helpdesk on 01772 695316 between 08:30 - 17:00 Monday to Friday, quoting the INC/SD Number.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 212, name: "Egress - Private Window Access",
    keywords: ["egress", "private window", "inprivate", "encrypted", "switch.egress.com"],
    body: `Hi {{customer}},

If you sign into a private window (open Edge > click the 3 dots in the top right corner > click New InPrivate Window > search switch.egress.com and sign in), you will be able to send encrypted emails outside of the trust.

We can also enable Egress as an add-in via your Outlook but will require your asset tag to do so — can you verify this?

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 213, name: "ePMA - Install & Support",
    keywords: ["epma", "install", "company portal", "epma access", "team.epma"],
    body: `Hi {{customer}},

You are now able to install this yourself. Please search for Company Portal in the bottom left corner of your screen.
Under Applications please find ePMA and click Install.

Please note we do not provide login details — this would need to be raised to Team.ePMA@lscft.nhs.uk.

If this fails, please contact the IT Helpdesk on 01772 695316 between 08:30 - 17:00 Monday to Friday, quoting the INC/SD Number.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 214, name: "Account Expired - Resolved",
    keywords: ["expired", "account expired", "expiry", "extend account", "expired account"],
    body: `Hi {{customer}},

This user's account was expired — this has now been amended as per your request.

Please ask the user to contact the IT Helpdesk on 01772 695316 between 08:30 - 17:00 Mon to Friday, quoting this SD/INC number to obtain their new login credentials.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 215, name: "File Path Request",
    keywords: ["file path", "drive path", "full path", "folder path", "path"],
    body: `Hi {{customer}},

Can you verify if the user will require READ or EDIT access?

Please provide the full file path for this area in the drive. You can do this by copying and pasting the path URL — go to the area in the drive the user needs access to and click on the small folder icon on the left side in the path URL.

Example:
\\\\lct-fsclfile.xlancashirecare.nhs.uk\\Shared\\LCFT\\Training\\Intranet Docs

Kind regards,
{{agent}} - IT Helpdesk`
  },
  {
    id: 216, name: "GlobalProtect VPN",
    keywords: ["globalprotect", "vpn", "global protect", "remote access", "connect vpn"],
    body: `Hi {{customer}},

Please ensure you are connected to your home wifi first, then search 'GlobalProtect' in the bottom left corner of your screen.

If you have an option to connect, please do so. If you are still unable to, there should be a small box with 3 lines — click it then click 'Refresh connection' and allow some time to reconnect.

If this still fails, please contact the IT Helpdesk on 01772 695316 between 08:30 - 17:30 Monday to Friday, quoting the INC/SD Number.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 217, name: "Harris Flex - Install",
    keywords: ["harris flex", "harris", "quadramed", "lth", "harris flex install"],
    body: `Hi {{customer}},

Harris Flex/Quadramed is a software managed by LTH. To obtain access please fill out the following form:
https://lancsteachinghospitals-dash.achieveservice.com/en/AchieveForms/?form_uri=sandbox-publish://AF-Process-87580aa1-8592-44e5-8ac6-4bab29f77f3a/AF-Stage-3d2671fb-09aa-469c-8d00-db515477cd44/definition.json

In the meantime, please search for Company Portal in the bottom left corner of your screen.
Under Applications please find Harris Flex and click Install.

Once installed, please go to Settings > About Device and provide the Device ID, and also confirm your main LSCFT base site.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 218, name: "Identity Agent - RiO Fix",
    keywords: ["identity agent", "nhs credential management", "smartcard", "api error", "rio fix"],
    body: `Hi {{customer}},

The error you are experiencing in RiO may be software related. Please follow the steps below:

1. Open 'Hidden Icons' at the bottom right corner of the screen (arrow icon)
2. Check if 'NHS Credential Management' and 'Identity Agent' are there (hover over icons to see names)
3. If they are there, right-click each and select Exit
4. Search for Company Portal in the search bar
5. Type 'NHS' in the Company Portal search bar
6. Install/update 'NHS Identity Agent' and 'NHS Credential Management'
7. Close Company Portal, then open both applications again from the search bar

Once done, put your smartcard back in — the PIN box should appear. Enter your PIN and RiO should work as intended.

If this doesn't work on multiple machines it may be a smartcard fault — please contact your local RA agent.

Please contact the IT Helpdesk on 01772 695316 between 08:30 - 17:30 Monday to Friday if further help is needed.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 219, name: "IRIS - Complete Form",
    keywords: ["iris", "ulysses", "iris form", "incident", "rio error", "cito error"],
    body: `Hi {{customer}},

Can you confirm whether this error was made in RiO or Cito?

Please could you complete an IRIS regarding this request: https://ulysses.lscft.nhs.uk/
Once you have done this, please let us know the reference number and we can assign it to the appropriate team.

Kind regards,
{{agent}} - IT Helpdesk`
  },
  {
    id: 220, name: "IRIS - Contact Team",
    keywords: ["iris", "iris contact", "iris down", "iris access", "iris@lscft"],
    body: `Hi {{customer}},

Please contact IRIS@lscft.nhs.uk as IT does not manage or administrate access to this system.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 221, name: "IT Shortcut - Create Desktop",
    keywords: ["shortcut", "desktop shortcut", "it shortcut", "trustnet link", "create shortcut"],
    body: `Hi {{customer}},

It seems like the link you have is an old one. Please follow the below to create a new shortcut:

1. Open Trustnet
2. Locate the Digital Hub button and click it
3. Locate the option that says 'Log a job with IT'
4. Right-click and copy the link
5. Go to your desktop
6. Right-click anywhere and click New > Create Shortcut
7. Paste the copied link and click Next
8. Name the shortcut 'IT Service Desk'

This will replace the old incorrect link.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 222, name: "Janus C4 - Install",
    keywords: ["janus", "c4", "janus c4", "install janus"],
    body: `Hi {{customer}},

Please open Microsoft Edge and copy and paste the following link:
http://lct-januscn01/c4client/

You will be redirected to the next page — select 'Install Janus C4 Client'.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 223, name: "Known Inactive - Confirm Return",
    keywords: ["known inactive", "inactive", "wallpaper", "phase return", "white background", "return to work"],
    body: `Hi {{customer}},

We have marked your account as known inactive following information received from the Workforce team due to an absence from work.
This is done to prevent your account from being deactivated due to inactivity.

Please can you confirm you have fully returned to work and are no longer on any phased return or keeping in touch days.

If so, please provide the latest contact details:
- Job title
- Telephone number
- Site location
- Department
- Manager's name

So we can update our records accordingly.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 224, name: "Known Inactive - Account Updated",
    keywords: ["known inactive", "account updated", "moved back", "wallpaper", "white background", "door access"],
    body: `Hi {{customer}},

I have now updated your account accordingly and moved you back to the correct area.

Please allow 24 hours for the 'known inactive' wallpaper to go back to normal — please note this is just a wallpaper and does not restrict any access.

If you are affected by door access issues, this will also rectify within the next 2-3 hours.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 225, name: "LMS-X - Contact Training",
    keywords: ["lms-x", "lmsx", "e-learning", "training", "mandatory training", "lms"],
    body: `Hi {{customer}},

Please contact Mandatory.Training@lscft.nhs.uk as IT does not manage or administrate access to the LMS-X E-Learning site.

You can also call 01772 773592.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 226, name: "LMS-X - System Down",
    keywords: ["lms-x", "lmsx", "down", "portal down", "lms down", "not working"],
    body: `Hi {{customer}},

We are aware that the LMS-X Portal is currently down.
The Clinical Education team are aware and looking into this, as it is currently affecting all users.

Please contact Clinical.Education@lscft.nhs.uk if you have any queries.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 227, name: "LPRES - Adobe Reader Fix",
    keywords: ["lpres", "adobe", "adobe reader", "lpres fix", "pdf lpres"],
    body: `Hi {{customer}},

You are now able to install this yourself. Please search for Company Portal in the bottom left corner of your screen.
Under Applications please find Adobe Reader and click Install. Once installed, please reload your LPRES page and this should fix the issue.

If this fails, go to the settings icon and click Sync, then retry installing.
If it still fails, please contact the IT Helpdesk on 01772 695316 between 08:30 - 17:00 Monday to Friday, quoting the INC/SD Number.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 228, name: "Mailbox Permissions - Clarify",
    keywords: ["mailbox", "permissions", "shared mailbox", "full access", "send as", "read manage"],
    body: `Hi {{customer}},

In regards to access to a shared mailbox, please state the full mailbox display name or email address.

The permissions available are:
1. Full access (read & manage only)
2. Send permissions

Can you specify which is required? Please note send permissions are a different permission group that must be specified separately.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 229, name: "MFA - Reset / New Device",
    keywords: ["mfa", "mfa reset", "new device", "authenticator", "multi-factor", "mfa enrol"],
    body: `Hi {{customer}},

I have revoked your previous MFA methods as you have obtained a new device. You will need to re-enrol yourself into MFA via the link below:
https://mysignins.microsoft.com/security-info

Please note you will be required to re-enrol before midday tomorrow.

If you struggle, please reach out to your Digital Champions:
https://nwnis.sharepoint.com/sites/DigitalAdvocatesLSCftTeams/Lists/Digital%20Champions%20List/AllItems.aspx

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 230, name: "MFA - Restricted Account",
    keywords: ["mfa", "mfa restricted", "nosync", "mfa enrol", "mfa mandatory"],
    body: `Hi {{customer}},

This account is currently MFA restricted due to failing to enrol into MFA.
Please ask the user to call the IT Helpdesk on 01772 695316 between 08:30 - 17:30 Monday to Friday, quoting the INC/SD Number, so we can remove the restriction and advise on enrolling into MFA.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 231, name: "MFA - Guide",
    keywords: ["mfa", "mfa guide", "sign up mfa", "mfa setup", "authenticator setup"],
    body: `Hi {{customer}},

Please follow the below to find the MFA guide:

1. Open Trustnet home page
2. Click the purple 'Digital Hub' button
3. Click 'Sign up to MFA'
4. Scroll down to find the guides

Smartphone guide:
https://nwnis.sharepoint.com/sites/DIOFF/SiteAssets/SitePages/Multifactor-Authentication/MFA-Desktop-App-Smartphone-Quick-Guide.pdf?web=1

Desktop guide:
https://nwnis.sharepoint.com/sites/DIOFF/SiteAssets/SitePages/Multifactor-Authentication/MFA-Desktop-App-Guide-Windows-11.pdf?web=1

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 232, name: "MS Teams - Channel Access",
    keywords: ["teams", "teams access", "teams channel", "channel owners", "ms teams access"],
    body: `Hi {{customer}},

Any and all access-related queries will need to be raised to the MS Teams Channel Owners. IT is no longer able to provide access in the same manner as shared drive locations.

To locate the owners of the MS Teams Channel:
1. Open MS Teams
2. Locate the Teams tab
3. Find the correct team
4. Click the 3 dots and click Manage Team
5. Select the Members tab
6. Locate Owners

For further support visit:
https://nwsis.sharepoint.com/sites/DIDTT/SitePages/Shared-Drive-Migration.aspx

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 233, name: "MS Teams - New Teams Layout",
    keywords: ["teams", "new teams", "teams layout", "chat channels", "teams update"],
    body: `Hi {{customer}},

Microsoft has amalgamated Chat and Teams into one location in the new version of MS Teams.

This can be reverted by:
1. In Teams, click the 3 ellipses next to your initials and select Settings
2. Select Chats and Channels
3. Under 'Viewing chats and channels' change from Combined to Separate

Teams will then display again on the left column.

Please note this is a training-related issue and not a technical one.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 234, name: "MS Teams - Repair Addin",
    keywords: ["teams", "addin", "teams addin", "calendar addin", "teams meeting addin", "repair"],
    body: `Hi {{customer}},

Please try to repair the Teams add-in for Office:

In Control Panel under Programs, click 'Uninstall a program'.
Find 'Microsoft Teams Meeting Add-in for Microsoft Office', right-click and click Repair.

Once complete, close Outlook and reopen it. This should restore the Teams meeting add-in in your calendar.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 235, name: "Name Change Process",
    keywords: ["name change", "name changed", "name update", "change name", "new name"],
    body: `Hi {{customer}},

The process for a name change is as follows:
1. Inform HR that your name has changed
2. Once HR has confirmed the change, inform the IT Helpdesk
3. We will arrange a 2-hour time slot where you will not be logged into any system
4. We will send to the clinical team to amend any clinical-related access if applicable
5. You will then login with your new name

Please also submit a ticket via Workforce Systems:
https://apps.powerapps.com/play/e/default-0418b648-afb0-4300-94ba-33f2b09eb31f/a/c28d0e5e-e90a-4350-8c51-d8b50c571655

Once HR have confirmed, please provide 3x 2-hour slots between 08:30-17:00 Mon-Fri where you will not be logged in.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 236, name: "NerveCentre - Manager Request",
    keywords: ["nervecentre", "nerve centre", "nervecentre access"],
    body: `Hi {{customer}},

This NerveCentre-based request would need to come to the service desk from your line manager.
This is for security and auditing purposes.

Forwarded and replied emails will not be logged on our system — it must be a fresh email to IT.Helpdesk@lscft.nhs.uk. It is not sufficient to simply have line managers CC'd in.
Please call through to the service desk on 01772 695316 quoting the INC/SD number.

Kind regards,
{{agent}} - IT Helpdesk`
  },
  {
    id: 237, name: "New Teams Channel Request",
    keywords: ["new teams", "create teams", "teams channel", "new channel", "teams setup"],
    body: `Hi {{customer}},

In order to create a new MS Teams channel, please can you confirm the below:

• Name of Team
• Who will be the owners (minimum of 3)
• A mailbox is created automatically as part of the team creation. If the mailbox won't be used, would you prefer it is disabled?

Kind regards,
{{agent}} - IT Helpdesk`
  },
  {
    id: 238, name: "New User Form",
    keywords: ["new user", "new account", "user form", "create account", "new user form"],
    body: `Hi {{customer}},

To create an IT account for this user, please submit a New User Request Form via the link below:
https://apps.powerapps.com/play/e/7faa5738-48ee-eb17-8e9b-93481fba5da2/a/17e4a1e8-f176-4e6d-882e-e7bc2cf3df4c

Alternatively:
1. Open Trustnet home page
2. Click the purple 'Digital Hub' button
3. Click the New User Form button

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 239, name: "New Account Created",
    keywords: ["new user", "account created", "credentials", "mfa enrol", "new account", "start date"],
    body: `Hi {{customer}},

The requested account has been successfully created.
Please advise the user to contact the IT Helpdesk on 01772 695316 between 08:30 and 17:00, Monday to Friday, quoting the incident reference number to obtain their login credentials.

Please note:
- Credentials can only be retrieved once the user's official start date has commenced
- The user must enrol in MFA, which is now mandatory. A guide is available via the MFA button on Trustnet
- MFA enrolment must be completed within two days of the user's start date
- RiO access will be granted by the IT Trainer once the user has attended the required training

Kind regards,
{{agent}} - IT Helpdesk`
  },
  {
    id: 240, name: "NHS.NET - No Longer Created",
    keywords: ["nhs.net", "nhs net", "nhs.net account", "nhs email", "deleted nhs.net"],
    body: `Hi {{customer}},

We are no longer creating NHS.net accounts. As of March 2023, LSCFT is now DCB1596 compliant — meaning we can stop using NHS.net inboxes.

Your existing NHS.net account has been deleted due to lack of use and we are unable to create a new one as NHS England has advised us to offload accounts.

You are welcome to use your @lscft.nhs.uk email with the Egress Switch add-in to send encrypted emails externally.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 241, name: "No Response - Resolve",
    keywords: ["no response", "unable to contact", "resolve", "contact attempts", "failed contact"],
    body: `Hi {{customer}},

We have tried to contact you on several occasions but were unfortunately unable to do so. As per procedure we will now resolve this job as completed.

If the issue is still of concern, please re-log a job ensuring you have provided your latest contact details. You can also call the IT Helpdesk on 01772 695316.

Kind regards,
{{agent}} - IT Helpdesk`
  },
  {
    id: 242, name: "OCS - Redirect",
    keywords: ["ocs", "ocs helpdesk", "ocs support"],
    body: `Hi {{customer}},

Please contact LCTHelpdesk@ocs.co.uk as they are the relevant team to support this request. IT does not have access to support with this.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 243, name: "Out of Office - Shared Mailbox",
    keywords: ["out of office", "automatic reply", "ooo", "shared mailbox ooo", "auto reply"],
    body: `Hi {{customer}},

The automatic reply can be managed by anyone who has access to the shared mailbox:

1. Open a web browser and go to Outlook.office.com
2. Top right of the screen select your initials then 'Open Another Mailbox'
3. Type the name of the shared mailbox and press Open
4. Top right select the settings cog
5. At the bottom select 'View all Outlook settings'
6. Select Mail > Automatic Replies and edit the message

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 244, name: "Office 365 - Install",
    keywords: ["office 365", "365", "o365", "install office", "microsoft office", "company portal"],
    body: `Hi {{customer}},

Please search for Company Portal in the bottom left corner of your screen.
Under Applications please find 'LSCFT - 365 Apps' and click Install.

Please note this process can take up to an hour to fully sync over to the latest applications.

If this fails, please contact the IT Helpdesk on 01772 695316 between 08:30 - 17:30 Monday to Friday, quoting the INC/SD Number.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 245, name: "OneDrive - Y Drive Migration",
    keywords: ["onedrive", "y drive", "ydrive", "migration", "my documents", "onedrive migration"],
    body: `Hi {{customer}},

As per communications sent out, from October 2024 we migrated data from Y Drive to OneDrive. You should now be able to access your migrated data within:
OneDrive > Documents > YDrive > My Documents and surrounding folders.

Please note previous shortcuts and quick access to the old Y: storage location will no longer work — you will need to remap these as required.

Please confirm whether you are able to access your data. If you feel you are missing files or folders, please get back to us with some examples so we can investigate.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 246, name: "Outlook - Use Classic Version",
    keywords: ["outlook", "outlook classic", "outlook new", "shared calendar", "shared mailbox outlook"],
    body: `Hi {{customer}},

On Windows 11 & Office 365, we recommend using Outlook Classic over Outlook New as the new version does not populate shared calendars and shared mailboxes in the same way.

Please check which version you are using by searching 'Outlook' in the search bar.

If this is Outlook New, please close it and open Outlook Classic — this should fix your issue.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 247, name: "Outlook Sync - Cache Mode",
    keywords: ["outlook sync", "outlook cache", "cache mode", "outlook slow", "sync outlook"],
    body: `Hi {{customer}},

Please open Outlook Classic.
Click File > Account Settings > Account and Sync Settings > untick 'Cache Data Mode'.
Restart Outlook.

Please let me know if this fixes the issue.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 248, name: "Password - Encrypted Email Policy",
    keywords: ["password protected", "encrypted email", "egress", "send secure", "domain checker", "ppp"],
    body: `Hi {{customer}},

Password protecting a document is not a secure way of sending data via email and is not backed by policy.

If you need to send sensitive data to an external organisation, please use the Domain Checker to identify whether the recipient's domain is Trusted or Unsafe:
https://domainchecker.xlancashirecare.nhs.uk/

- If Trusted: safe to send unencrypted
- If Unsafe: use the Egress Encryption tool

For Egress please contact the IT Service Desk on 01772 695316.
You could also consider sharing data via OneDrive — contact Digital.Training@lscft.nhs.uk for help.

Regards,
{{agent}} - IT Helpdesk`
  },
  {
    id: 249, name: "PowerBI - Portal",
    keywords: ["powerbi", "power bi", "powerbi access", "power bi request"],
    body: `Hi {{customer}},

For any Power BI requests, please raise via the Power BI Portal:
https://nwnis.sharepoint.com/sites/DIDAA

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 250, name: "RA Form - Submit",
    keywords: ["ra form", "registration authority", "smartcard form", "ra agent form"],
    body: `Hi {{customer}},

Please submit an RA form using the link below:
https://nwsis.sharepoint.com/sites/DIRAU/SitePages/RA-Form.aspx

If you want to locate this manually:
Trustnet > Digital Hub > Registration Authority > RA Form

For any other queries please email smartcards.idbadges@lscft.nhs.uk

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 251, name: "RiO - Access Request (Manager)",
    keywords: ["rio", "rio access", "rio manager", "manager request rio", "rio self requested"],
    body: `Hi {{customer}},

Unfortunately for security and governance purposes we are unable to accept self-requested access to RiO.
This request would need to come to the service desk from your line manager.

Forwarded and replied emails will not be logged on our system — it must be a fresh email to IT.Helpdesk@lscft.nhs.uk. It is not sufficient to simply have line managers CC'd in.
Please call through to the service desk on 01772 695316 quoting the INC/SD number.

Kind regards,
{{agent}} - IT Helpdesk`
  },
  {
    id: 252, name: "RiO - Smartcard NHS Credential Fix",
    keywords: ["rio", "smartcard", "nhs credential", "identity agent", "pin", "rio issue", "api error"],
    body: `Hi {{customer}},

This may be a software issue. Please open 'Hidden Icons' at the bottom right corner of the screen and check if 'NHS Credential Management' and 'Identity Agent' are there (hover over icons to see names).

If they are not there, put your smartcard in and search for 'NHS Credential Management' at the bottom left of your screen, open it, then do the same for 'Identity Agent'. The PIN box should then open.

If there is still no PIN box, please try in another colleague's machine. If that works, contact us to arrange an appointment to check the hardware/software.

Kind regards,
{{agent}} - IT Helpdesk`
  },
  {
    id: 253, name: "SharePoint Migration",
    keywords: ["sharepoint", "migration", "trustnet", "sharepoint migration", "sp migration", "old trustnet"],
    body: `Hi {{customer}},

Migration to SharePoint Online is now complete. All sites confirmed by services are now live.

Please visit the SharePoint Migration Site Lists page to view current status:
https://nwnis.sharepoint.com/sites/digital/SitePages/SharePoint%20Migration%20-%20Site%20Lists.aspx

If you are experiencing any issues with your site, please email digital.help@lscft.nhs.uk with:
- Team / Department
- Issue Description
- Name/email of staff member experiencing the issue
- Link to SharePoint site

Please note shortcuts and saved bookmarks linked to the old Trustnet home page will no longer function — contact digital.help for support.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 254, name: "Simultaneous Connections",
    keywords: ["simultaneous", "wifi", "wired", "ethernet", "wireless", "monitor ethernet"],
    body: `Hi {{customer}},

Simultaneous connections are not permitted. Devices will need to either:
- Use Wireless by connecting to NWSIS-WLAN-D, or
- Use a port replicator or ethernet cable for a wired connection

If connected to a monitor, please ensure the monitor has a working ethernet connection.
If you still wish to use wireless despite being connected to your monitor, remove the ethernet cable from the monitor.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 255, name: "Smartcard - No Roles / Expiry",
    keywords: ["smartcard", "no roles", "expiry", "roles dropped", "ra agent", "smartcard roles"],
    body: `Hi {{customer}},

IT is not able to update or amend smartcard expiry dates.

The 'No Roles Assigned' error will need to be taken up with your local RA Agent. If the role has expired entirely, please submit a new RA form:
https://nwnis.sharepoint.com/sites/DIRAU/SitePages/RA-Form.aspx

Alternatively you can email smartcards.idbadges@lscft.nhs.uk for further assistance.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 256, name: "Teams - Background Effects",
    keywords: ["teams background", "blur background", "teams effects", "virtual background"],
    body: `Hi {{customer}},

To change your MS Teams background before a meeting starts:

1. Turn on your camera and select Effects and Avatars > Video Effects
2. Select Blur Background to blur your background
3. Or select a Teams background to apply it, or upload your own (.JPG, .PNG, or .BMP)
4. To turn off background effects, select None

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 257, name: "Teams - Reset App",
    keywords: ["teams", "reset teams", "teams not working", "teams issue", "reinstall teams"],
    body: `Hi {{customer}},

This is an intermittent issue — a reboot usually fixes it. Failing that:

1. Open Settings
2. Click Apps
3. Scroll and find Teams
4. Click Teams > Advanced Options
5. Scroll to Reset heading and choose Reset
6. Wait for it to complete, then reopen Teams

If this still does not work, please use the web version of Teams and call the Helpdesk to arrange a Teams reinstall appointment.

Kind regards,
{{agent}} - IT Helpdesk`
  },
  {
    id: 258, name: "Video Driver Update",
    keywords: ["video driver", "screen flicker", "driver update", "dell command", "screen flickering"],
    body: `Hi {{customer}},

There is currently a new video driver install taking place which is causing screens to flicker.

If you let it run its course this can take 20-30 minutes and should rectify itself.
You can open Dell Command Update to check the progress of the install.

Once complete, the flickering should stop.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 259, name: "WiFi Certificate Issue",
    keywords: ["wifi", "wireless", "wifi cert", "network connectivity", "wireless issue", "wlan"],
    body: `Hi {{customer}},

We had an issue with devices connecting to the network wirelessly which has now been resolved.

If you are still experiencing problems:

Working from home:
1. Press the Windows key and search Company Portal
2. Sync Company Portal — once complete you should be able to connect wirelessly again

On site:
1. Connect your laptop to the network via ethernet cable or port rep monitor
2. Sync Company Portal
3. Confirm whether the issue is now resolved

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 260, name: "Windows 11 Upgrade",
    keywords: ["windows 11", "w11", "upgrade", "windows 11 upgrade", "windows upgrade form"],
    body: `Hi {{customer}},

To arrange your Windows 11 upgrade, please use the online booking form:
https://outlook.office365.com/book/Windows11Upgrade@lscft.nhs.uk/?ismsaljsauthenabled=true

Alternatively:
1. Open Trustnet > Digital Hub
2. Scroll to the bottom and locate IT Services
3. Click the Windows 11 Upgrade option
4. Scroll to find the booking form link

For the latest information please visit:
https://nwnis.sharepoint.com/sites/DIITS/SitePages/Windows-11@LSCft.aspx

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 261, name: "Workforce Systems",
    keywords: ["workforce", "esr", "healthroster", "hero", "workforce systems", "loop", "safecare"],
    body: `Hi {{customer}},

This is an HR Software system — IT does not manage it. Please log a job on the Workforce Systems Service Desk:
https://apps.powerapps.com/play/e/default-0418b648-afb0-4300-94ba-33f2b09eb31f/a/c28d0e5e-e90a-4350-8c51-d8b50c571655?tenantId=0418b648-afb0-4300-94ba-33f2b09eb31f

Please ensure you populate all the fields.

For ESR queries: ESR.SelfService@lscft.nhs.uk
For HERO queries: Workforce.Systems@lscft.nhs.uk
For training: Digital.Training@lscft.nhs.uk

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 262, name: "Other NHS Trust Contacts",
    keywords: ["elht", "bth", "uhmb", "lthtr", "other trust", "east lancs", "blackpool teaching", "lancashire teaching"],
    body: `Hi {{customer}},

Here are the contact details for other NHS Trust IT helpdesks:

ELHT – East Lancashire Hospitals Trust
Email: it.sostenuto@elht.nhs.uk
Tel: 01254 733135

BTH – Blackpool Teaching Hospitals
Email: Bfw.systemmail@nhs.net
Tel: 01253 951016

UHMB – University Hospital of Morecambe Bay
Email: servicedesk@mbhci.nhs.uk
Tel: 01524 516000

LTHTR – Lancashire Teaching Hospitals
Email: it.servicedesk@lthtr.nhs.uk
Tel: 01772 522185 – Option 1

MLSCU – Midlands and Lancashire Commissioning Support Unit
Email: mlcsu.servicedesk@nhs.net
Tel: 0300 555 0212 – Option 5

Kind regards,
{{agent}} - IT Helpdesk`
  },
  {
    id: 263, name: "Door Access - Known Inactive",
    keywords: ["door access", "door", "known inactive", "door permission", "site receptionist"],
    body: `Hi {{customer}},

The reason for the loss of door access is due to your account being placed in the 'Known Inactive OU' following information received from the Workforce team due to an absence from work.

Please confirm you have fully returned to work and are no longer on any phased return or keeping in touch days.

If so, please provide:
- Job title
- Site location
- Expiry date (or confirm permanent)
- Telephone number
- Manager's name

So we can update your account. Please allow 2-3 hours for door access to update once processed.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 264, name: "Camera - Teams Issue",
    keywords: ["camera", "webcam", "camera not working", "teams camera", "camera issue"],
    body: `Hi {{customer}},

Can you try opening your standard Camera app (search 'camera' in the search bar at the bottom left) and let us know if this shows anything?

Please also ensure your camera shutter is not covering the laptop camera.

This will help us confirm if this is just a Teams issue or a wider issue across multiple applications.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 265, name: "Reactivate Account - Request Info",
    keywords: ["reactivate", "re-enable", "disabled account", "account reactivate", "old account"],
    body: `Hi {{customer}},

In order to reactivate this account, please provide the latest contact details:

- Job title
- Site location
- Initial start date
- Expiry date (or confirm permanent)
- User's telephone number
- Department
- Manager's name
- Any access that needs removing from the previous role?

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 266, name: "Process - Internal Action",
    keywords: ["internal", "logged", "request logged", "self service", "sostenuto", "portal"],
    body: `Hi {{customer}},

Thank you for contacting us. Your request has been logged with the appropriate team and will be processed as soon as possible.

Did you know we have a self-service portal? You can log requests, check progress, and provide updates here:
https://sostenuto/Sostenuto/web/SContacts/

Kind regards,
{{agent}} - IT Helpdesk`
  },
  {
    id: 267, name: "Best Contact Number Request",
    keywords: ["contact number", "telephone number", "best number", "landline", "contact details"],
    body: `Hi {{customer}},

Please can you provide a best suited work-related contact number?
This can be a landline or office/admin based number, as we require one for your account.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 268, name: "Send From Shared Mailbox",
    keywords: ["shared mailbox", "send from", "from field", "send as", "from icon"],
    body: `Hi {{customer}},

If you are unable to send from a shared mailbox, please follow the below:

1. Create a new email
2. Select Options at the top of the email
3. Select the From icon

This will generate a From field where you can change the sending mailbox.
Add the shared mailbox and send the email this way.

If the mailbox is visible but you still cannot send, try removing and re-adding it:
In the From field, click the dropdown near the shared inbox — click the X to remove it, then re-add it and try again.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 269, name: "Admin App - Remove Run As Admin",
    keywords: ["admin", "run as administrator", "windip", "run as admin", "application admin"],
    body: `Hi {{customer}},

1. Locate the WinDIP application icon on your desktop
2. Right-click the icon and select Properties
3. Select the Shortcut tab
4. Click Advanced in the bottom-right corner
5. Locate the checkbox labelled 'Run as administrator'
6. Untick 'Run as administrator'
7. Click OK then Apply
8. Close Properties and try launching the application again

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 270, name: "Teams File Path - Rename",
    keywords: ["teams", "file name", "character limit", "teams file", "file path teams"],
    body: `Hi {{customer}},

The file name in the MS Teams channel is too long and has exceeded the character limit.

Anyone with access to the MS Teams channel can rename the file — reducing the name by 3-4 characters should resolve this.

If you are unsure, speak to the channel owner:
1. Open MS Teams
2. Locate Teams tab and find the correct team
3. Click the 3 dots and click Manage Team
4. Select Members tab > Locate Owners

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 271, name: "RPS202 / Secure Print Anywhere",
    keywords: ["rps202", "rps203", "secure print", "print anywhere", "secureprintanywhere"],
    body: `Hi {{customer}},

In the search bar type \\\\LCT-RPS202 and hit Enter.
Select and double-click SecurePrintAnywhere to use this.

You can do the same for \\\\LCT-RPS203 if needed.

Please try to print again and let us know if this resolves the issue.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 272, name: "Global Protect - Remote VPN Fix",
    keywords: ["global protect", "vpn", "remote", "ivanti", "vpn issue", "offsite"],
    body: `Hi {{customer}},

Please check your GlobalProtect and see if it connects. If it fails, click the 3 lines in the top right corner and click Refresh.

If this doesn't work, please search for 'Ivanti Secure Access Client' and try that.

If both fail, please contact the IT Helpdesk on 01772 695316 between 08:30 - 17:30 Monday to Friday, quoting the INC/SD Number. Please note this will need to be resolved while you are on an LSCFT site.

Thanks,
{{agent}} - IT Helpdesk`
  },
  {
    id: 273, name: "Cerner - Citrix Workspace",
    keywords: ["cerner", "citrix", "elht", "elht cerner", "citrix workspace"],
    body: `Hi {{customer}},

I have pushed out Citrix Workspace to your machine.

Staff can access their ELHT Citrix Workspace via:
https://elhtnhs.cloud.com

Users will be prompted to authenticate with their ELHT domain account and ELHT Citrix Token. Once logged in, staff can launch a Citrix VM for access to Cerner.

Thanks,
{{agent}} - IT Helpdesk`
  }];
