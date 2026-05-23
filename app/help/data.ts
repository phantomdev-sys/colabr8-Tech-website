export interface QA {
  q: string;
  a: string;
}

export interface HelpSection {
  id: string;
  label: string;
  qas: QA[];
}

export interface QuickTip {
  tip: string;
  iconKey: string;
}

export const helpSections: HelpSection[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    qas: [
      {
        q: "What is this platform?",
        a: "A comprehensive business management platform that combines CRM, operations, marketing, and intelligence tools — all in one place. Manage contacts, companies, deals, invoices, bookings, email campaigns, social media, and more from a single dashboard.",
      },
      {
        q: "How do I launch the AI Launchpad (Command Palette)?",
        a: `The AI Launchpad is the fastest way to navigate, search, and act across the entire CRM.

• Mac — Press ⌘K (Command + K)
• Windows / Linux — Press Ctrl + K

From the Launchpad you can:

• Instantly navigate to any page
• Quick-create contacts, companies, deals, and tasks
• Search CRM records in real time (companies, contacts, deals, invoices)
• Ask the AI assistant a question directly

The Launchpad is available from every screen in the platform. Think of it as your universal command centre — if you need to get somewhere or find something fast, ⌘K is always the answer.`,
      },
      {
        q: "How do I navigate the platform?",
        a: `Use the sidebar to navigate between sections. The sidebar is organised into four groups:

• CRM — Dashboard, Contacts, Companies, Deals
• Operations — Services, Bookings, Invoices, Tasks
• Marketing — Email Campaigns, Inbox, Social Media
• Intelligence — Portfolio, Opportunity Radar, Visitor Intelligence

You can also press ⌘K (Mac) or Ctrl+K (Windows/Linux) at any time to open the AI Launchpad for instant navigation and search.

Customise your sidebar by clicking the sidebar customiser icon to show or hide sections.`,
      },
      {
        q: "How do I customise my workspace?",
        a: "Click the sidebar customiser icon to show or hide sections. You can also rearrange your dashboard widgets by clicking \"Customise Dashboard\" on the main dashboard page.",
      },
    ],
  },
  {
    id: "dashboard",
    label: "Dashboard",
    qas: [
      {
        q: "What does the dashboard show?",
        a: "The dashboard provides an at-a-glance overview of your business including key metrics, recent activity, upcoming tasks, deal pipeline status, and today's schedule. Widgets update in real time as data changes across the platform.",
      },
      {
        q: "Can I customise the dashboard?",
        a: `Yes. Click "Customise Dashboard" to choose which widgets to display. Available widgets include:

• Key Metrics (contacts, companies, deals, revenue)
• Deals Pipeline overview
• Upcoming Tasks
• Recent Activity feed
• Today's Bookings
• Portfolio Snapshot
• Social Media Posts`,
      },
    ],
  },
  {
    id: "contacts",
    label: "Contacts",
    qas: [
      {
        q: "How do I add a new contact?",
        a: "Navigate to Contacts and click \"Add Contact\". Fill in the required fields (first name, last name) along with optional information such as email, phone, company, job title, and status.",
      },
      {
        q: "What are contact statuses?",
        a: `Contacts can have one of three statuses:

• Active — Current customers or actively engaged leads
• Lead — Potential customers not yet converted
• Inactive — Contacts you're no longer actively engaging with`,
      },
      {
        q: "Can I link contacts to companies?",
        a: "Yes. When adding or editing a contact, select a company from the dropdown. This helps organise contacts by organisation and lets you view all contacts associated with a specific company.",
      },
      {
        q: "How do I send an email to a contact?",
        a: "Open a contact's detail view and click \"Send Email\". You can compose a message directly or use a saved template. The email is sent from your verified sending domain.",
      },
    ],
  },
  {
    id: "deals",
    label: "Deals",
    qas: [
      {
        q: "How do I track deals?",
        a: "The Deals section displays your sales pipeline as a visual Kanban board. Create deals with a title, value, expected close date, and optionally link them to contacts and companies.",
      },
      {
        q: "What are the deal stages?",
        a: `• Lead — Initial interest identified
• Qualified — Confirmed as a genuine opportunity
• Proposal — Quote or proposal has been sent
• Negotiation — Discussing terms and conditions
• Won — Successfully closed
• Lost — Opportunity did not convert`,
      },
      {
        q: "How do I move deals between stages?",
        a: "Drag and drop deal cards between columns on the pipeline board. You can also update the stage from within a deal's detail view.",
      },
      {
        q: "Can I attach documents to deals?",
        a: "Yes. Open a deal's detail view to upload and manage documents such as proposals, contracts, or supporting materials.",
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    qas: [
      {
        q: "What is the Services section?",
        a: "Services lets you define the products or services your business offers. Each service can include a name, description, price, and tax rate. Services are used across the platform for invoicing, quoting, and booking.",
      },
      {
        q: "How do I create a service?",
        a: "Navigate to Services and click \"Add Service\". Enter the service name, description, unit price, and applicable tax rate. You can also specify suppliers for each service.",
      },
      {
        q: "How are services used in invoices?",
        a: "When creating an invoice, you can select from your pre-defined services. This auto-populates the line item description, price, and tax rate — saving time and ensuring consistency.",
      },
      {
        q: "Can I assign services to companies?",
        a: "Yes. You can assign services to specific companies through the company detail view, creating service contracts that track which services each client receives.",
      },
    ],
  },
  {
    id: "bookings",
    label: "Bookings",
    qas: [
      {
        q: "How do I manage bookings?",
        a: "The Bookings section provides a calendar view of all appointments. You can create, reschedule, and cancel bookings. Each booking is linked to a contact (customer), a service, and an assigned staff member.",
      },
      {
        q: "How do I create a booking?",
        a: "Click on a time slot in the calendar or use the \"New Booking\" button. Select the customer, service, staff member, and choose the date and time. The system automatically calculates the end time based on the service duration.",
      },
      {
        q: "Can I set staff availability?",
        a: "Yes. Go to Settings → Bookings to configure staff working hours, break times, and availability overrides for specific dates (e.g., holidays or days off).",
      },
      {
        q: "Are booking confirmations sent automatically?",
        a: "Yes. When a booking is created, the customer receives an email confirmation. Notifications are also sent for cancellations and rescheduling, provided email sending is configured.",
      },
    ],
  },
  {
    id: "invoices",
    label: "Invoices",
    qas: [
      {
        q: "How do I create an invoice?",
        a: "Navigate to Invoices and click \"New Invoice\". Select the company, add line items (from pre-defined services or custom entries), set the due date, and choose to save as Draft or send immediately.",
      },
      {
        q: "What invoice statuses are available?",
        a: `• Draft — Still being prepared, fully editable
• Sent — Delivered to the client
• Paid — Payment received
• Overdue — Past the due date without payment`,
      },
      {
        q: "How do I send an invoice?",
        a: "From the invoice list, click the menu on an invoice and select \"Send\". The invoice is delivered as a branded HTML email with your company logo and payment details. A copy is automatically sent to your registered email.",
      },
      {
        q: "Can I generate quotes?",
        a: "Yes. Quotes follow a similar workflow to invoices with their own lifecycle: Draft (editable), Sent (requires revision confirmation to edit), Accepted (locked), and Rejected/Expired (read-only). Quotes are numbered separately (e.g., Q-0001).",
      },
      {
        q: "How do I download or print an invoice?",
        a: "Open the invoice preview and use the \"Print\" button for browser printing or \"Download\" to generate a PDF. Both options use your branded invoice layout with company details and payment information.",
      },
      {
        q: "How do I configure payment details?",
        a: "Go to Settings → Invoice Settings to add your company bank details (bank name, sort code, account number), VAT number, and default payment terms. These appear automatically on all invoices.",
      },
    ],
  },
  {
    id: "tasks",
    label: "Tasks",
    qas: [
      {
        q: "How do I manage tasks?",
        a: "The Tasks section lets you create, assign, and track work items. Each task can have a title, description, due date, priority, status, and be assigned to a team member.",
      },
      {
        q: "What are task priorities?",
        a: `• High — Urgent items requiring immediate attention
• Medium — Standard priority
• Low — Non-urgent tasks`,
      },
      {
        q: "Can I link tasks to contacts or companies?",
        a: "Yes. Tasks can be associated with contacts, companies, or deals so you can track related work across your business relationships.",
      },
    ],
  },
  {
    id: "email-setup",
    label: "Email Setup",
    qas: [
      {
        q: "Why do I need to verify a domain?",
        a: "Domain verification is required to send bulk emails reliably. Without it, your emails are likely to be marked as spam or blocked. Major email providers require sending authentication — this is an industry standard.",
      },
      {
        q: "Can I send from a personal email (Gmail, Outlook)?",
        a: `No. Bulk email services don't allow sending from personal email providers because:

• It violates their terms of service
• Emails would be marked as spam
• It could get your personal email account banned

You need a business domain (e.g., company.com) that you own and control.`,
      },
      {
        q: "What is sandbox mode?",
        a: "Before verifying a domain, you operate in sandbox mode. This lets you test email sending by sending only to your own account email address. Once your domain is verified, you can send to all contacts.",
      },
      {
        q: "How do I verify my domain?",
        a: `Go to Settings → Email Sending and add your domain. You'll receive DNS records to add at your domain registrar (e.g., GoDaddy, Namecheap, Cloudflare):

1. Log into your domain registrar
2. Navigate to DNS settings
3. Add each record with the exact Type, Name, and Value provided
4. Wait 10–30 minutes for propagation
5. Click "Check Status" in Settings`,
      },
      {
        q: "What DNS records are required?",
        a: `Typically you'll need:

• SPF record — Authorises our servers to send on your behalf
• DKIM records — Cryptographic signatures for email authentication
• Verification TXT record — Proves domain ownership

The exact records are displayed in Settings after you add your domain.`,
      },
      {
        q: "How long does verification take?",
        a: "DNS changes typically propagate within 10–30 minutes, though it can take up to 48 hours in rare cases. Click \"Check Status\" periodically to confirm verification.",
      },
    ],
  },
  {
    id: "campaigns",
    label: "Campaigns",
    qas: [
      {
        q: "How do I create an email campaign?",
        a: "Go to Email and click \"New Campaign\". Provide a campaign name, subject line, from name, and reply-to email. Optionally select a template and choose your target recipients.",
      },
      {
        q: "How do I select recipients?",
        a: `When creating a campaign, choose from:

• All Contacts — Send to every contact with an email address
• By Status — Filter by contact status (Active, Lead, Inactive)
• By Company — Target contacts from specific companies

Unsubscribed contacts are automatically excluded.`,
      },
      {
        q: "How do I send a campaign?",
        a: "From the Campaigns list, click the menu on a draft campaign and select \"Send\". You'll see a preview of the recipient count. Click \"Send Now\" to begin delivery — progress is shown in real time.",
      },
      {
        q: "How do I track campaign performance?",
        a: "Each sent campaign shows detailed analytics including delivery rate, open rate, click rate, bounces, and unsubscribes. Click on a campaign to view its full performance breakdown.",
      },
      {
        q: "What happens if an email fails?",
        a: "Failed emails are tracked and visible in campaign statistics. Common causes include invalid email addresses or temporary delivery issues. Check the campaign's failed count for specifics.",
      },
    ],
  },
  {
    id: "templates",
    label: "Templates",
    qas: [
      {
        q: "How do I create a template?",
        a: "Go to Email → Templates and click \"New Template\". Add a name and subject line, then use the block-based editor to build your email with headings, text, images, buttons, dividers, and spacers.",
      },
      {
        q: "What are merge tags?",
        a: `Merge tags are placeholders automatically replaced with contact-specific information when sending:

• {first_name} — Contact's first name
• {last_name} — Contact's last name
• {email} — Contact's email address
• {phone} — Contact's phone number
• {company} — Associated company name`,
      },
      {
        q: "Can I generate templates with AI?",
        a: "Yes. Click \"AI Generate\" when creating a template. Describe your campaign goal, choose a tone, and optionally specify brand colours and a call-to-action. The AI generates multiple template variations to choose from.",
      },
      {
        q: "Can I duplicate a template?",
        a: "Yes. Click the menu on any template card and select \"Duplicate\" to create an editable copy without affecting the original.",
      },
    ],
  },
  {
    id: "inbox",
    label: "Inbox",
    qas: [
      {
        q: "What is the Inbox?",
        a: "The Inbox provides a unified view of your email conversations. Connect your email account to send and receive messages directly within the platform, keeping all communication alongside your CRM data.",
      },
      {
        q: "How do I connect my email?",
        a: "Go to Inbox and click \"Connect Email\". Follow the authorisation prompts to link your Gmail or Outlook account. Once connected, your emails sync automatically.",
      },
      {
        q: "Can I compose new emails from the Inbox?",
        a: "Yes. Click \"Compose\" to write a new email. You can select recipients from your contacts or enter email addresses directly. Sent messages are tracked within the platform.",
      },
    ],
  },
  {
    id: "csv-import",
    label: "CSV Import",
    qas: [
      {
        q: "How do I import contacts from CSV?",
        a: "Go to Email → Import. Upload your CSV file, map columns to contact fields, choose how to handle duplicates, then click Import. Progress and results are displayed throughout the process.",
      },
      {
        q: "What is the required CSV format?",
        a: `Only email is required. Recommended columns:

• first_name
• last_name
• email (required)
• phone
• company
• job_title
• notes

Download a template from the Import tab to ensure correct formatting.`,
      },
      {
        q: "How does duplicate detection work?",
        a: "Duplicates are detected by email address. You can choose to skip duplicates (existing contacts remain unchanged) or update existing contacts with the new information from your CSV.",
      },
      {
        q: "How are companies handled during import?",
        a: "If you map a company column, new companies are created as needed. Existing companies (matched by name) are linked automatically without creating duplicates.",
      },
    ],
  },
  {
    id: "social-media",
    label: "Social Media",
    qas: [
      {
        q: "How do I connect social accounts?",
        a: "Go to Social Media → Accounts and click \"Connect Account\". Choose the platform (Facebook, Instagram, X/Twitter, LinkedIn, or TikTok) and follow the authorisation prompts.",
      },
      {
        q: "Which platforms are supported?",
        a: `• Facebook Pages
• Instagram Business accounts
• X (Twitter) profiles
• LinkedIn profiles and company pages
• TikTok accounts

Multiple accounts per platform are supported.`,
      },
      {
        q: "How do I schedule a post?",
        a: `1. Click "New Post"
2. Select the accounts to post to
3. Write your content (character counts shown per platform)
4. Check "Schedule for later" and pick a date and time
5. Click "Schedule Post"`,
      },
      {
        q: "What are the character limits?",
        a: `• X (Twitter): 280 characters
• Facebook: 63,206 characters
• Instagram: 2,200 characters
• LinkedIn: 3,000 characters

The composer shows real-time character counts and warns you if limits are exceeded.`,
      },
      {
        q: "How do I view social media analytics?",
        a: "Go to Social Media → Analytics to view performance metrics across all connected accounts. Track engagement, reach, impressions, and top-performing posts over customisable date ranges.",
      },
      {
        q: "What happens if a post fails?",
        a: "Failed posts display a \"Failed\" badge with an error message. Click \"Retry\" to attempt posting again. Common causes include expired tokens (reconnect the account), content policy violations, or network issues.",
      },
    ],
  },
  {
    id: "media-library",
    label: "Media Library",
    qas: [
      {
        q: "How do I use the Media Library?",
        a: "When composing a social post, click \"Choose a free stock image\" in the Media section to browse royalty-free images and videos from Unsplash and Pexels.",
      },
      {
        q: "Are these images free to use?",
        a: "Yes. All media comes from royalty-free sources and is free for commercial and personal use with no attribution required. They are safe for use on any social media platform.",
      },
    ],
  },
  {
    id: "ai-assistant",
    label: "AI Assistant",
    qas: [
      {
        q: "What is the AI Post Assistant?",
        a: "A writing assistant that generates social media post suggestions based on your input. It helps overcome writer's block and create engaging content faster.",
      },
      {
        q: "How do I use the AI Post Assistant?",
        a: `1. Click "AI Assistant" in the post composer
2. Describe your topic (e.g., "Announce our summer sale")
3. Choose a tone (Professional, Friendly, Promotional, etc.)
4. Optionally specify your business type for industry-relevant language
5. Click "Generate Suggestions"

You'll receive multiple variations to choose from.`,
      },
      {
        q: "Tips for better AI results",
        a: `• Be specific about your topic and key details
• Include any particular points you want mentioned
• Specify your business type for more relevant language
• Try different tones if the initial results don't fit
• Use the example prompts as inspiration`,
      },
    ],
  },
  {
    id: "ai-workspace",
    label: "AI Workspace",
    qas: [
      {
        q: "What is the AI Workspace?",
        a: "The AI Workspace is a conversational AI assistant with full context of your CRM data. Use it to ask questions, generate reports, draft communications, and get intelligent suggestions based on your business data.",
      },
      {
        q: "How do I start a conversation?",
        a: "Navigate to AI Workspace from the sidebar. Click \"New Chat\" to begin a conversation. You can organise conversations into folders and projects for easy reference.",
      },
      {
        q: "Can I share AI conversations?",
        a: "Yes. Click the share icon on any conversation to generate a shareable link. You can also manage permissions to control who can view or contribute to shared conversations.",
      },
    ],
  },
  {
    id: "portfolio-intelligence",
    label: "Portfolio Intelligence",
    qas: [
      {
        q: "What is Portfolio Intelligence?",
        a: "Portfolio Intelligence provides a comprehensive view of your client portfolio including contract values, renewal timelines, and revenue forecasting. It helps you identify at-risk accounts and growth opportunities.",
      },
      {
        q: "How do I view contract details?",
        a: "Navigate to a company's detail view and select the Contracts tab. You can create, edit, and track contracts including start and end dates, values, and renewal status.",
      },
      {
        q: "What is the Renewal Risk score?",
        a: "Each contract is assigned a renewal risk score based on factors such as time until expiry, engagement level, and recent activity. This helps you prioritise retention efforts on accounts most likely to churn.",
      },
      {
        q: "How does revenue forecasting work?",
        a: "The Revenue Forecast chart projects future revenue based on your active contracts, renewal probabilities, and historical data. Use it to plan capacity and set realistic growth targets.",
      },
    ],
  },
  {
    id: "revenue-intelligence",
    label: "Revenue Intelligence",
    qas: [
      {
        q: "What is the Opportunity Radar?",
        a: "The Opportunity Radar identifies potential sales opportunities based on visitor behaviour, engagement signals, and intent data. It highlights companies showing buying intent so you can prioritise outreach.",
      },
      {
        q: "What is Visitor Intelligence?",
        a: "Visitor Intelligence tracks anonymous website visitors and matches them to companies. You can see which organisations are visiting your site, which pages they view, and how frequently they return.",
      },
      {
        q: "How do I connect my website for tracking?",
        a: "Go to Intelligence → Data Sources and follow the setup instructions. You'll receive a tracking script to add to your website. Once installed, visitor data begins flowing into the platform.",
      },
      {
        q: "What is Attribution tracking?",
        a: "Attribution helps you understand which marketing channels and campaigns are driving conversions. Track the customer journey from first touch to closed deal across multiple touchpoints.",
      },
    ],
  },
  {
    id: "users",
    label: "Users",
    qas: [
      {
        q: "How do I invite team members?",
        a: "Go to User Management and click \"Invite User\". Enter their email address and select their role (Admin, Manager, or Staff). They'll receive an email invitation to join your workspace.",
      },
      {
        q: "What are the user roles?",
        a: `• Admin — Full access to all features including settings and user management
• Manager — Access to most features with limited administrative capabilities
• Staff — Standard access for day-to-day operations`,
      },
      {
        q: "Can I control which sections a user can access?",
        a: "Yes. When editing a user's permissions, you can select which CRM sections they can access. This lets you tailor each team member's experience to their role.",
      },
    ],
  },
  {
    id: "approvals",
    label: "Approvals",
    qas: [
      {
        q: "What is the Approvals system?",
        a: "The Approvals system provides a structured workflow for reviewing and authorising key actions such as deal stage changes, contact deletions, or high-value transactions. Admins can review, approve, or reject pending requests.",
      },
      {
        q: "How do I review an approval request?",
        a: "Navigate to Approvals to see all pending requests. Click on a request to view details, then choose to Approve or Reject. You can add notes explaining your decision.",
      },
    ],
  },
  {
    id: "feedback",
    label: "Feedback",
    qas: [
      {
        q: "How do I submit feedback?",
        a: "Navigate to Feedback and click \"New Feedback\". Describe your suggestion, report a bug, or request a feature. You can attach files to provide additional context.",
      },
      {
        q: "Can I track the status of my feedback?",
        a: "Yes. Each feedback item shows its current status (New, Under Review, In Progress, Completed, or Declined). You'll be notified when the status of your feedback changes.",
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    qas: [
      {
        q: "What can I configure in Settings?",
        a: `Settings lets you manage:

• Brand — Logo, colours, and company information
• Email Sending — Domain verification and sending configuration
• Invoice Settings — Payment details and default terms
• Booking Settings — Staff availability, services, and time slots
• Industry Templates — Pre-built configurations for your sector`,
      },
      {
        q: "How do I update my company branding?",
        a: "Go to Settings and upload your company logo (light and dark versions). Set your brand colour to customise the platform's accent colour. These settings are applied across invoices, emails, and the platform interface.",
      },
      {
        q: "How do I manage my profile?",
        a: "Click your avatar in the top-right corner to access profile settings. You can update your name, avatar, and notification preferences.",
      },
    ],
  },
  {
    id: "billing",
    label: "Billing",
    qas: [
      {
        q: "How do I manage my subscription?",
        a: "Navigate to Billing from the sidebar to view your current plan, usage, and billing history. You can upgrade, downgrade, or manage your payment method from this page.",
      },
      {
        q: "What happens when my trial ends?",
        a: "When your trial period expires, you'll need to select a paid plan to continue using premium features. Your data is preserved during the transition.",
      },
    ],
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
    qas: [
      {
        q: "Emails are not sending",
        a: `Check that:

1. Your sending domain is verified in Settings → Email Sending
2. Contacts have valid email addresses
3. Contacts are not marked as unsubscribed
4. Your campaign has a valid from name and reply-to email

If issues persist, check the campaign's failure count for specific error details.`,
      },
      {
        q: "CSV import errors",
        a: `Common causes:

• Missing or invalid email addresses
• Incorrectly formatted CSV (ensure proper comma separation)
• Special characters in fields

Download the template from the Import tab and match your data to that format.`,
      },
      {
        q: "Social account won't connect",
        a: `Common issues:

• Pop-up blockers preventing the authorisation window
• Signed into the wrong account on the platform
• Permissions not fully granted during authorisation

Try signing out of the platform first, then reconnecting.`,
      },
      {
        q: "Data not loading or appearing slowly",
        a: "Try refreshing the page. If the issue persists, check your internet connection. For large datasets, the platform loads data in batches — allow a moment for all records to appear.",
      },
      {
        q: "Invoice or quote PDF not generating",
        a: "Ensure all required fields are completed (company, line items, due date). If the download still fails, try using the \"Print\" option as an alternative and save to PDF from your browser's print dialog.",
      },
    ],
  },
];

export const quickTips: QuickTip[] = [
  {
    tip: "Press ⌘K (Mac) or Ctrl+K (Windows/Linux) from anywhere to instantly search, navigate, create records, or ask the AI — it's the fastest way to use the CRM.",
    iconKey: "zap",
  },
  {
    tip: "Use the search bar on any list page to quickly find contacts, companies, or deals.",
    iconKey: "search",
  },
  {
    tip: "Link contacts to companies to see all relationships at a glance.",
    iconKey: "users",
  },
  {
    tip: "Create email templates once and reuse them across multiple campaigns.",
    iconKey: "mail",
  },
  {
    tip: "Download the CSV template before importing to ensure correct formatting.",
    iconKey: "upload",
  },
  {
    tip: "Preview merge tags in templates before sending campaigns.",
    iconKey: "eye",
  },
  {
    tip: "Use the AI Workspace to get intelligent insights from your CRM data.",
    iconKey: "sparkles",
  },
  {
    tip: "Set up booking services in Settings to enable online appointment scheduling.",
    iconKey: "calendar",
  },
  {
    tip: "Configure invoice payment details in Settings so they appear on every invoice automatically.",
    iconKey: "credit-card",
  },
  {
    tip: "Use the Opportunity Radar to identify high-intent prospects before they reach out.",
    iconKey: "target",
  },
  {
    tip: "Customise your sidebar to show only the sections relevant to your daily workflow.",
    iconKey: "layout",
  },
];
