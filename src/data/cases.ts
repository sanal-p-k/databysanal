export interface Case {
  name: string;
  slug: string;
  title: string;
  testimonial: string;
  benefits: string[];
  description: string;
  challenges: string[];
  goals: string[];
  solution: string;
  results: string[];
  tools: string[];
  duration: string;
  location: string;
  avatar: string;
  avatarColor: string;
  image?: string;
  screenshots?: { src: string; alt: string; caption?: string }[];
}

export const cases: Case[] = [
  {
    name: 'Staffspectrum: Automated Recruitment Tracker with Power Apps + Dashboards',
    slug: 'hr-consultancy-calicut-powerbi',
    title: 'Power BI & Power Apps Dashboard',
    testimonial:
      'Sanal transformed our HR operations by building a comprehensive Power BI dashboard and automating our internal workflows with Power Apps and Power Automate. We now have complete visibility into client flow, job requirements, and recruiter performance.',
    benefits: [
      'Centralized performance & incentive dashboard accessible by management',
      'Automated job tracking workflows eliminating manual entry errors',
      'Clear, visual recruiter performance insights enabling data-driven decisions',
      'Reduced turnaround time for generating HR reports',
      'Improved employee motivation through transparent incentive tracking',
    ],
    description: `The client, a fast-growing HR consultancy based in Calicut, struggled with fragmented data spread across spreadsheets, emails, and manual reports. Tracking daily HR operations—like job requirements, client inflow, recruiter performance, and incentive calculations—was cumbersome and error-prone. These issues led to slow decision-making and lack of transparency for managers and recruiters.

Our engagement involved creating an integrated data solution leveraging Power BI for visual analytics, Power Apps for interactive data entry forms, and Power Automate for workflow automation. This streamlined their HR processes, significantly improving data accuracy and operational efficiency.`,
    challenges: [
      'Lack of a centralized system to track job requirements and client requests in real time',
      'Manual incentive calculations prone to errors and delays',
      'Disconnected data sources causing inconsistent and outdated reports',
      'Difficulty in monitoring recruiter activity and performance trends',
      'Time-consuming manual reporting processes reducing managerial productivity',
    ],
    goals: [
      'Implement a unified platform consolidating recruitment and employee data',
      'Automate workflows to reduce manual data entry and errors',
      'Provide real-time dashboards for managers to monitor KPIs',
      'Enable clear visibility of incentive structures and payout status',
      'Enhance transparency and accountability among recruiters and management',
    ],
    solution: `The solution comprised three core components:

1. **Power BI Dashboard:** Designed an interactive dashboard that visualizes recruitment metrics such as active job openings, candidate pipeline, client inflow trends, recruiter performance, and incentive calculations over time. Custom visuals were used to highlight key KPIs and exceptions.

2. **Power Apps Forms:** Developed user-friendly forms integrated with Microsoft Dataverse for recruiters and HR staff to input daily job updates, client communications, and candidate status easily via mobile or desktop.

3. **Power Automate Workflows:** Automated notifications, reminders, and report generation workflows to reduce manual follow-ups and streamline incentive processing.

This integrated ecosystem enabled seamless data flow, ensuring up-to-date, accurate insights accessible anytime by management.`,
    results: [
      'Reduced manual reporting effort by approximately 60%, freeing up HR staff for higher-value activities',
      'Improved accuracy and timeliness of incentive calculations, minimizing payroll discrepancies',
      'Managers gained real-time visibility into recruitment pipelines and recruiter productivity',
      'Increased recruiter engagement through transparent performance dashboards',
      'Faster decision-making supported by actionable data insights',
    ],

    
    tools: ['Power BI', 'Power Apps', 'Power Automate', 'Microsoft Dataverse'],
    duration: '1 Month',
    location: 'Calicut, Kerala',
    avatar: 'HC',
    avatarColor: 'text-blue-500',
    image: '/images/cases/powerbi-dashboard-hr.png', // Replace with your actual image path
    screenshots: [
      {
        src: '/images/cases/powerbi-dashboard-overview.png',
        alt: 'Power BI Dashboard Overview',
        caption: 'Centralized dashboard overview displaying job openings and recruiter metrics',
      },
      {
        src: '/images/cases/powerapps-form.png',
        alt: 'Power Apps Data Entry Form',
        caption: 'Custom Power Apps form for recruiter data entry',
      },
      {
        src: '/images/cases/powerautomate-flow.png',
        alt: 'Power Automate Workflow',
        caption: 'Automated workflow for incentive notification and approvals',
      },
    ],
  },
  {
    name: 'Hike HR: WhatsApp Bot for Candidate Registration & Scheduling',
    slug: 'hr-consultancy-calicut-appsheet',
    title: 'Recruiter Tracking App with AppSheet',
    testimonial:
      'Sanal built a simple, mobile-friendly AppSheet solution that empowered our recruiters to track interview activity in real time. It has made performance reporting much more efficient.',
    benefits: [
      'Mobile tracking of candidate interviews and recruiter activities',
      'Improved recruiter accountability with easy-to-use interface',
      'Real-time visibility for managers on hiring progress',
      'Streamlined hiring performance visibility leading to better planning',
      'Reduced dependency on manual spreadsheets and communication channels',
    ],
    description: `This HR consultancy needed a lightweight, no-code mobile application to track recruiter daily activities such as number of candidates contacted, interviews attended, and follow-ups made. Previously, recruiters maintained manual spreadsheets and WhatsApp updates, which were error-prone and delayed reporting.

Sanal delivered a customized AppSheet app that allowed recruiters to quickly input data via their smartphones, ensuring data consistency and real-time availability. Managers could then monitor recruitment KPIs without manual data consolidation.`,
    challenges: [
      'Absence of centralized daily activity tracking for recruiters',
      'Delays in receiving accurate performance updates',
      'Inconsistent data due to manual spreadsheet and WhatsApp dependency',
      'Limited visibility into recruiter productivity leading to planning challenges',
      'Difficulty in aggregating and analyzing recruitment progress data',
    ],
    goals: [
      'Develop a mobile-first, easy-to-use solution for recruiters in the field',
      'Increase visibility of daily recruitment metrics for managers',
      'Streamline data collection to enable real-time reporting and analysis',
      'Reduce manual effort and errors associated with current processes',
      'Motivate recruiters through transparent performance tracking',
    ],
    solution: `A custom AppSheet mobile application was designed with the following features:

- **Intuitive Data Entry:** Recruiters can log candidate contacts, interviews attended, and outcomes with minimal clicks.

- **Real-Time Sync:** Data is immediately synced to a central cloud database accessible by managers.

- **Performance Dashboard:** Managers access up-to-date performance dashboards without manual consolidation.

- **Notifications:** Alerts remind recruiters to update daily activities, ensuring data completeness.

This no-code app required minimal training and accelerated adoption across the recruitment team.`,
    results: [
      'Improved accuracy and timeliness of recruiter activity tracking',
      'Faster performance updates enabled quicker management interventions',
      'Enhanced accountability and motivation among recruiters',
      'Eliminated manual spreadsheet consolidation, reducing errors',
      'Simplified reporting enabling better hiring forecasts and planning',
    ],
    tools: ['AppSheet', 'Google Sheets (backend)', 'Cloud Sync'],
    duration: '1 Month',
    location: 'Calicut, Kerala',
    avatar: 'HA',
    avatarColor: 'text-green-600',
    image: '/images/cases/appsheet-recruiter-app.png', // Replace with your actual image path
    screenshots: [
      {
        src: '/images/cases/appsheet-mobile-entry.png',
        alt: 'AppSheet Mobile Data Entry',
        caption: 'Recruiter mobile screen for daily activity logging',
      },
      {
        src: '/images/cases/appsheet-dashboard.png',
        alt: 'AppSheet Manager Dashboard',
        caption: 'Real-time performance dashboard for recruitment managers',
      },
    ],
  },
];
