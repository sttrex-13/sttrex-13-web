import type { Experience } from '@/types/experience'

export const experiences: Experience[] = [
  {
    slug: 'ttb',
    company: 'TMBThanachart Bank (ttb)',
    role: 'Frontend Developer',
    period: 'May 2025 – Current',
    group: 'ODT Sites',

    summary:
      'Contributed to the development and enhancement of FINOVA, a modern branch banking web application built with React and TypeScript using a micro-frontend architecture. Focused on feature development, authentication and authorization, performance optimization, production issue investigation, and cross-functional delivery.',

    details: [
      `
  - Developed and maintained key FINOVA features, including **Landing Dashboard, Daily Transactions, Drawer Status, Override Transactions, Special Instructions, and Journal Report**.
  - Built end-to-end **Journal Report** functionality, including transaction search, transaction details, failed-transaction reporting, print slips, audit logging, and CSV/Excel exports.
  - Implemented **AuthGuard and Role-Based Access Control (RBAC)** to secure routes and manage user access across micro-frontends.
  - Investigated and resolved complex **authentication and session-management issues**, including token expiration, refresh-token flows, token mismatches, session conflicts, and persistent loading states.
  - Analyzed **Landing Page performance bottlenecks** and proposed optimization strategies, validating improvements with **Google Lighthouse**.
  - Investigated production performance issues involving **CPU utilization spikes of up to 80–90%**.
  - Collaborated with **QA, backend developers, business analysts, and engineering teams** throughout SIT/UAT, root-cause analysis, and production releases.
      `,

      `
  - **Journal Report** — Developed comprehensive transaction reporting workflows covering search, transaction details, failed transactions, print slips, audit logging, and CSV/Excel exports.
  - **Authentication & Authorization** — Implemented AuthGuard and RBAC while resolving complex token, session, and authentication issues across the micro-frontend architecture.
  - **Performance Optimization** — Investigated slow Landing Page rendering by analyzing component rendering, API requests, application state, and lifecycle behavior. Proposed optimization strategies and validated improvements using **Google Lighthouse**.
  - **Production Investigation** — Analyzed production incidents involving **CPU utilization of up to 80–90%** to identify potential frontend and integration-related causes.
  - **Cross-Functional Delivery** — Worked closely with QA, backend developers, business analysts, and engineering teams across requirement refinement, implementation, SIT/UAT, debugging, incident investigation, and release delivery.
      `,
    ],
  },
  {
    slug: 'thainamthip-2025',
    company: 'ThaiNamthip Corporation Limited.',
    role: 'Software Engineer',
    period: 'Jan 2025 – Apr 2025',
    group: 'ODT Sites',

    summary:
      'Contributed to the development of a Sales Visit and Assignment web application built with Angular, helping sales teams plan, manage, and track customer visits and assignments more efficiently. Focused on reusable UI development, frontend architecture, authentication, CI/CD, issue investigation, and UAT support.',

    details: [
      `
- Developed a **Sales Visit and Assignment web application** using Angular, enabling sales teams to efficiently plan, manage, and track customer visits and assignments.
- Built reusable **shared UI components** and core features including **My Assignment, assignment listings, sales visit forms, loading states, and empty-state handling**.
- Established a scalable **monorepo architecture** through a proof of concept, supporting shared components and libraries across applications.
- Integrated and customized **Keycloak authentication**, including authentication themes and login/logout experiences, with deployment support across UAT environments.
- Configured **GitHub Actions CI/CD pipelines** to automate application build and deployment processes.
- Investigated and resolved frontend issues involving **data rendering, DatePicker components, Angular architecture, authentication UI, and environment-specific behavior**.
- Collaborated with cross-functional teams throughout **requirement refinement, debugging, UAT support, and deployment activities**.
    `,

      `
- **Sales Visit & Assignment** — Developed core workflows for managing customer visits and sales assignments, including assignment listings, forms, loading states, and empty-state handling.
- **Reusable UI Components** — Created shared frontend components to improve consistency and reduce duplicated implementation across features.
- **Frontend Architecture** — Built a proof of concept for a scalable **monorepo architecture**, enabling shared components and libraries across multiple applications.
- **Authentication** — Integrated and customized **Keycloak**, including authentication themes and login/logout user experiences.
- **CI/CD & Deployment** — Configured **GitHub Actions** to automate build and deployment workflows and supported application deployment across UAT environments.
- **Issue Investigation** — Investigated and resolved issues related to data rendering, DatePicker behavior, Angular architecture, authentication UI, and environment-specific inconsistencies.
- **Cross-Functional Delivery** — Worked with engineering and business teams during requirement refinement, debugging, UAT, deployment, and feature validation.
    `,
    ],
  },
  {
  slug: 'sf-cinema',
  company: 'SF Corporation Public Company Limited',
  role: 'Software Engineer',
  period: 'Sep 2024 - Jan 2025',
  group: 'ODT Sites',

  summary:
    'Contributed to the development and maintenance of customer-facing and back-office web applications for SF Cinema, supporting movie discovery, content management, concessions, and branch operations. Focused on reusable frontend development, API and microservice integration, operational workflows, issue investigation, and cross-functional delivery.',

  details: [
    `
- Developed and maintained **customer-facing and back-office web applications** for SF Cinema, supporting movie discovery, content management, concessions, and branch operations.
- Built responsive **landing and movie showcase experiences** integrated with CMS and backend services, applying **Atomic Design principles** to create reusable and maintainable frontend components.
- Integrated frontend applications with **RESTful APIs and gRPC-based microservices**, supporting communication across large-scale cinema operations.
- Developed key **back-office and concessions management features**, including Current Cash, Close Shift, product configuration, vendor management, recipes, and product menu profiles.
- Implemented **cash reconciliation and Close Shift workflows**, integrating transaction data to calculate workstation and system amounts while managing operational status transitions.
- Investigated and resolved complex **business logic, data mapping, and form-validation issues**, including variable product configurations, duplicate submissions, product validation, and environment-specific defects across Development and UAT.
- Collaborated with cross-functional teams throughout **requirement refinement, technical estimation, debugging, regression testing, and UAT**, and prepared technical documentation for successful client handover.
    `,

    `
- **Customer-Facing Experience** — Developed responsive landing pages and movie showcase experiences integrated with CMS and backend services, using **Atomic Design** to improve component reusability and maintainability.
- **Back-Office & Concessions** — Developed operational features including **Current Cash, Close Shift, product configuration, vendor management, recipes, and product menu profiles** to support cinema branch operations.
- **API & Microservice Integration** — Integrated frontend applications with **RESTful APIs and gRPC-based microservices**, handling data exchange between frontend applications and backend services.
- **Cash Reconciliation & Close Shift** — Implemented workflows for calculating and reconciling **workstation and system transaction amounts**, while handling operational status transitions during shift closing.
- **Business Logic & Validation** — Investigated and resolved complex issues involving **data mapping, variable product configurations, duplicate submissions, form validation, and product validation**.
- **Environment & Quality Assurance** — Investigated environment-specific defects across **Development and UAT**, supporting debugging, regression testing, and issue resolution before release.
- **Cross-Functional Delivery** — Collaborated with engineering and business teams throughout **requirement refinement, technical estimation, implementation, debugging, regression testing, UAT, and client handover**, including preparation of technical documentation.
    `,
  ],
},
  {
  slug: 'thai-beverage-part-time',
  company: 'Thai Beverage Public Company Limited.',
  role: 'Software Engineer (Part-Time)',
  period: 'Aug 2024 – Dec 2024',
  group: 'ODT Sites',

  summary:
    'Contributed to the development and maintenance of the back-office system for Sustainability Expo 2024, supporting internal operations through a full-stack web application built with React, Golang, and MongoDB.',

  details: [
    `
- Developed and maintained the **back-office system** for **Sustainability Expo 2024**.
- Implemented new features and enhanced existing functionality to support internal operational workflows.
- Worked across the **frontend and backend**, using **React** for the user interface and **Golang** for backend services.
- Worked with **MongoDB** for application data storage and integration.
- Supported ongoing **maintenance, debugging, and feature improvements** throughout the project.
    `,

    `
- **Frontend Development** — Developed and maintained back-office user interfaces using **React**, supporting internal users and operational workflows.
- **Backend Development** — Worked with **Golang** to develop and maintain backend functionality supporting the back-office application.
- **Database** — Used **MongoDB** as the application's database and worked with data required by back-office features.
- **Feature Development** — Implemented new functionality and improved existing features based on project requirements.
- **Maintenance** — Supported application maintenance and issue resolution to keep the back-office system functioning reliably.
    `,
  ],
},
  {
  slug: 'bangkok-university',
  company: 'Bangkok University',
  role: 'Teaching Assistant (Part-Time)',
  period: 'Aug 2024 – Nov 2024',
  group: 'ODT Sites',

  summary:
    'Supported teaching and curriculum design for 3rd- and 4th-year Computer and Robotics Engineering students at Bangkok University, providing practical guidance in software development technologies including Git, Ruby on Rails, React, and application deployment.',

  details: [
    `
- Assisted in **teaching and curriculum design** for 3rd- and 4th-year students in **Computer and Robotics Engineering** at Bangkok University.
- Provided instructional support in **Git, Ruby on Rails, React, Deployment**, and related software development technologies.
- Supported students in understanding and applying **software development concepts and tools** through practical learning activities.
- Assisted with technical guidance and problem-solving during coursework and development exercises.
    `,

    `
- **Teaching & Mentoring** — Supported students in learning software development concepts, tools, and practical development workflows.
- **Curriculum Design** — Assisted in preparing and improving technical learning content for 3rd- and 4th-year Computer and Robotics Engineering students.
- **Web Development** — Provided guidance in **Ruby on Rails and React**, covering frontend and backend web development concepts.
- **Version Control** — Supported students in learning **Git** and applying version-control practices during software development.
- **Deployment** — Provided instructional support on application **deployment** and related development workflows.
- **Technical Support** — Helped students troubleshoot development issues and better understand the technologies used throughout their coursework.
    `,
  ],
},
  {
  slug: 'thainamthip-2024',
  company: 'ThaiNamthip Corporation Limited.',
  role: 'Software Engineer',
  period: 'Jan 2024 – Sep 2024',
  group: 'ODT Sites',

  summary:
    'Contributed to the development of an e-commerce platform for retailers and stockists, covering customer-facing features, back-office operations, automated testing, and deployment support. Focused on building reliable e-commerce workflows and improving software quality through Playwright-based E2E test automation.',

  details: [
    `
- Developed an **e-commerce web application** for retailers and stockists, supporting key online purchasing workflows.
- Built an **admin system** to manage core e-commerce operations, including **promotions, coupons, users, and orders**.
- Set up and implemented **automated testing with Playwright**, while sharing testing practices and knowledge with the development team.
- Developed automated **batch End-to-End (E2E) tests** to detect feature changes and application errors, reducing manual regression testing effort.
- Provided **deployment support** and assisted with application delivery throughout the project.
- Contributed to the company's **business and profitability goals** through the development and improvement of the e-commerce platform.
    `,

    `
- **E-Commerce Development** — Developed web application features supporting retailers and stockists throughout their online purchasing experience.
- **Admin & Back-Office** — Built administrative functionality for managing **promotions, coupons, users, and orders**, supporting day-to-day e-commerce operations.
- **Test Automation** — Introduced and implemented **Playwright** for automated testing, helping improve application reliability and reduce repetitive manual testing.
- **E2E Regression Testing** — Developed automated batch **End-to-End test suites** to identify feature changes, regressions, and application errors across critical workflows.
- **Knowledge Sharing** — Shared **Playwright and automated testing practices** with team members to improve the team's testing capabilities.
- **Deployment & Delivery** — Supported application deployment and delivery activities to help ensure successful releases.
- **Business Impact** — Contributed to improving the e-commerce platform and supporting the company's **revenue and profitability objectives** through software development.
    `,
  ],
},
  {
  slug: 'set-2023',
  company: 'Stock Exchange Thailand (SET)',
  role: 'Full Stack Developer',
  period: 'Oct 2023 – Dec 2023',
  group: 'ODT Sites',

  summary:
    'Contributed to the development and maintenance of the LiVE Platform and E-Learning platform for the Stock Exchange of Thailand (SET), supporting digital content and learning experiences. Worked across application features and content management functionality, including a CMS for managing news and promotional banners.',

  details: [
    `
- Developed and maintained features for the **LiVE Platform** and **E-Learning platform**.
- Built and enhanced application functionality to support **digital content and online learning experiences**.
- Developed a **Content Management System (CMS)** for managing website content.
- Implemented CMS functionality for managing **news and promotional banners**.
- Worked across **frontend and backend development** as part of the Full Stack Developer role.
- Supported ongoing **maintenance, debugging, and feature improvements** across the platforms.
    `,

    `
- **LiVE Platform** — Developed and maintained application features supporting the platform's digital services and content.
- **E-Learning Platform** — Contributed to features supporting online learning and educational content.
- **Content Management System (CMS)** — Developed back-office functionality allowing content to be managed through an administrative interface.
- **News Management** — Implemented functionality for managing and maintaining news content displayed across the platform.
- **Banner Management** — Developed CMS functionality for managing **promotional banners and related content**.
- **Full-Stack Development** — Worked across frontend and backend functionality to deliver and maintain application features.
- **Maintenance & Improvements** — Supported debugging, maintenance, and continuous feature improvements across both platforms.
    `,
  ],
},
  {
  slug: 'thai-beverage-2023',
  company: 'Thai Beverage Public Company Limited.',
  role: 'Software Engineer',
  period: 'Apr 2023 – Oct 2023',
  group: 'ODT Sites',

  summary:
    'Contributed to the development of digital platforms for Sustainability Expo 2023, including a back-office system for internal operations and the SX Application for event participants. Focused on supporting event management, participant activities, and access to event updates throughout the expo.',

  details: [
    `
- Developed a **back-office system** for **Sustainability Expo 2023**, supporting internal event operations and management.
- Developed the **SX Application** for event participants attending Sustainability Expo 2023.
- Built application features that enabled participants to **join event activities** and interact with the expo.
- Implemented functionality allowing participants to **follow event updates and information** throughout the event.
- Supported the development and maintenance of both **internal back-office and participant-facing applications**.
    `,

    `
- **Back-Office System** — Developed functionality supporting internal operations and management for **Sustainability Expo 2023**.
- **SX Application** — Contributed to the participant-facing application used during the expo.
- **Event Activities** — Developed features enabling participants to discover and **join activities** available throughout the event.
- **Event Updates** — Implemented functionality allowing participants to stay informed about **event updates and information**.
- **Event Platform Development** — Worked across both internal and participant-facing systems to support the digital experience of **Sustainability Expo 2023**.
    `,
  ],
},
  {
  slug: 'set-intern',
  company: 'Stock Exchange Thailand (SET)',
  role: 'Full Stack Developer (Intern)',
  period: 'Feb 2023 – Mar 2023',
  group: 'ODT Sites',

  summary:
    'Contributed to the development and maintenance of the LiVE Platform and E-Learning platform during a Full Stack Developer internship at the Stock Exchange of Thailand (SET). Worked on application features and content management functionality for managing news and promotional banners.',

  details: [
    `
- Developed and maintained features for the **LiVE Platform** and **E-Learning platform**.
- Contributed to both **frontend and backend development** as part of the Full Stack Developer internship.
- Developed and maintained a **Content Management System (CMS)** for managing platform content.
- Implemented CMS functionality for managing **news and promotional banners**.
- Supported ongoing **feature development, maintenance, and debugging** across the platforms.
    `,

    `
- **LiVE Platform** — Contributed to the development and maintenance of application features supporting the platform.
- **E-Learning Platform** — Worked on features supporting the platform's online learning experience.
- **Content Management System (CMS)** — Developed and maintained administrative functionality for managing digital content.
- **News Management** — Supported CMS functionality for creating and managing news content.
- **Promotional Banners** — Developed functionality for managing promotional banners displayed across the platform.
- **Full-Stack Development** — Gained practical experience working across **frontend and backend development** within a production project environment.
    `,
  ],
},
{
  slug: 'silpakorn-intern',
  company: 'Silpakorn University',
  role: 'Backend Developer (Intern)',
  period: 'Jan 2023 – Feb 2023',
  group: 'ODT Sites',

  summary:
    'Contributed to the development of a back-office system for Silpakorn University, focusing on backend functionality and API integration for retrieving and managing student master data used by the student card module.',

  details: [
    `
- Developed backend functionality for a **back-office system** supporting the **student card module**.
- Integrated with APIs to **retrieve student master data** from university systems.
- Implemented functionality for managing and processing **student information** used within the application.
- Worked on **API integration and data handling** between the back-office system and student data services.
- Gained practical experience in **backend development, API integration, and data management** within a production project.
    `,

    `
- **Backend Development** — Developed backend functionality supporting the back-office system and student card operations.
- **API Integration** — Integrated the application with external APIs to retrieve **student master data** from university systems.
- **Student Data Management** — Implemented functionality for handling and managing student information required by the **student card module**.
- **Data Integration** — Worked with data exchanged between backend services and the back-office application to support application workflows.
- **Production Experience** — Gained hands-on experience with **backend development and system integration** in a real-world university project.
    `,
  ],
},
  {
  slug: 'shipty',
  company: 'Shipty',
  role: 'Teacher Assistant',
  period: '3 September 2022',
  group: 'Freelance',

  summary:
    'Supported educators in using Open Model Zoo demos for classroom activities at Satriwitthaya 2 School, providing technical assistance in downloading, applying, and adapting AI models for student learning.',

  details: [
    `
- Assisted educators in downloading, setting up, and applying **Open Model Zoo demos** for classroom use.
- Provided technical support in adapting and customizing **AI models** for student learning activities.
- Helped educators understand how to integrate **pre-trained models and demos** into classroom exercises.
- Supported the preparation of AI learning activities for students at **Satriwitthaya 2 School**.
    `,

    `
- **Open Model Zoo** — Assisted educators in setting up and using pre-trained model demos for classroom activities.
- **Model Customization** — Supported the adaptation and customization of models to better fit student learning activities.
- **Technical Support** — Helped troubleshoot and configure demos for use in an educational environment.
- **Teaching Support** — Assisted educators in applying technical resources and AI demonstrations as part of classroom learning.
- **Student Learning** — Supported the preparation of practical AI learning experiences for students at **Satriwitthaya 2 School**.
    `,
  ],
},
]
