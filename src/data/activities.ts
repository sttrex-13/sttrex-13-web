import type { Activity } from '@/types/activity'
import internSit1 from '@/assets/images/events/internsit-1.jpg'
import internSit2 from '@/assets/images/events/internsit-2.jpg'
import internSit3 from '@/assets/images/events/internsit-3.jpg'
import internSit4 from '@/assets/images/events/internsit-4.jpg'
import internSit5 from '@/assets/images/events/internsit-5.jpg'
import internSit6 from '@/assets/images/events/internsit-6.jpg'
import internSit7 from '@/assets/images/events/internsit-7.jpg'
import internSit8 from '@/assets/images/events/internsit-8.jpg'
import h4cker1 from '@/assets/images/events/first-step-2b-a-h4cker-1.jpg'
import h4cker2 from '@/assets/images/events/first-step-2b-a-h4cker-2.jpg'
import h4cker3 from '@/assets/images/events/first-step-2b-a-h4cker-3.jpg'
import h4cker4 from '@/assets/images/events/first-step-2b-a-h4cker-4.jpg'
import h4cker5 from '@/assets/images/events/first-step-2b-a-h4cker-5.jpg'
import h4cker6 from '@/assets/images/events/first-step-2b-a-h4cker-6.jpg'
import h4cker7 from '@/assets/images/events/first-step-2b-a-h4cker-7.jpg'
import h4cker8 from '@/assets/images/events/first-step-2b-a-h4cker-8.jpg'
import qaDevOps1 from '@/assets/images/events/qa-devops-1.jpg'
import qaDevOps2 from '@/assets/images/events/qa-devops-2.jpg'
import qaDevOps3 from '@/assets/images/events/qa-devops-3.jpg'
import qaDevOps4 from '@/assets/images/events/qa-devops-4.jpg'
import qaDevOps5 from '@/assets/images/events/qa-devops-5.jpg'
import starter28p1 from '@/assets/images/events/starter28-1.jpg'
import starter28p2 from '@/assets/images/events/starter28-2.jpg'
import starter28p3 from '@/assets/images/events/starter28-3.jpg'
import starter28p4 from '@/assets/images/events/starter28-4.jpg'



export const activities: Activity[] = [
  {
    slug: 'first-step-2b-a-h4cker',

    title: 'First Step 2B a H4cker',
    type: 'activity',

    role: 'Organizer',
    date: 'Mar 28, 2024',

    summary:
      'Organized an introductory IT Security workshop for junior students at SIT KMUTT interested in cybersecurity, combining fundamental security concepts with hands-on web security practice.',

    details: [
      'Collaborated with **IT Security peers to design and organize** the learning experience.',
      'Introduced **20 participants** to **fundamental IT Security and cybersecurity concepts**.',
      'Facilitated a **hands-on web security lab** using **OWASP Juice Shop** in a controlled learning environment.',
      'Received **sponsorship from Siam Thanat Hack** to support the workshop and learning activities.',
      'Helped inspire participants to develop a **stronger interest in cybersecurity** and explore the field further.',
    ],
    images: [
      h4cker1,
      h4cker2,
      h4cker3,
      h4cker4,
      h4cker5,
      h4cker6,
      h4cker7,
      h4cker8,
    ],
  },

  {
    slug: 'when-devops-and-qa-have-to-work-with-ai',

    title: 'When DevOps and QA Have to Work with AI',
    type: 'activity',

    role: 'Organizer',
    date: 'Mar 5, 2024',

    summary:
      'Organized a knowledge-sharing activity for junior students at SIT KMUTT exploring how AI can be applied in QA and DevOps through real-world experiences, discussion, and hands-on experimentation.',

    details: [
      'Collaborated with **QA and DevOps peers** to **design and organize** the learning experience.',
      'Shared practical experiences and perspectives on using **AI in QA and DevOps workflows**.',
      'Facilitated an **open Q&A session** between participants and speakers.',
      'Conducted a **hands-on workshop** using **Teachable Machine** to introduce participants to **practical machine learning experimentation**.',
    ],
    images: [
      qaDevOps1,
      qaDevOps2,
      qaDevOps3,
      qaDevOps4,
      qaDevOps5,
    ],
  },

  {
    slug: 'internsit',

    title: 'InternSIT',
    type: 'activity',

    role: 'Project Initiator & Project Lead & Photographer',
    date: 'Aug 20, 2023',

    summary:
      'Organized and coordinated InternSIT, a student-led knowledge-sharing event where senior SIT students shared their internship experiences and career insights with junior students.',

    details: [
      'Collaborated with the **organizing team** to **plan and coordinate the event**, managing team responsibilities and supporting the overall event execution.',
      'Coordinated **experience-sharing sessions** covering both **Dev and Non-Dev career paths**, including Frontend, Backend, DevOps, QA, Full Stack, UX/UI, Business Analytics, Data Analytics, and Security.',
      'Helped create an opportunity for **junior students to learn from real internship experiences** and gain practical insights for choosing future **internship positions and career paths**.',
      'Supported an event attended by **145 students** across multiple year levels and programs within SIT.',
      'Worked closely with **team members and speakers** to ensure activities and experience-sharing sessions **ran smoothly**.',
      'Served as an **event photographer**, documenting key moments, speakers, participants, and activities throughout InternSIT.',
    ],

    links: [
      {
        label: 'SIT KMUTT — Event Article',
        url: 'https://www.sit.kmutt.ac.th/%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2-sit-%E0%B9%81%E0%B8%9A%E0%B9%88%E0%B8%87%E0%B8%9B%E0%B8%B1%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%9A/',
      },
      {
        label: 'InternSIT — Event Website',
        url: 'https://internsit.web.app/',
      },
    ],

    images: [
      internSit1,
      internSit2,
      internSit3,
      internSit4,
      internSit5,
      internSit6,
      internSit7,
      internSit8,
    ],
  },

  {
    slug: 'it28-starter-pack',

    title: 'IT#28 Starter Pack',
    type: 'activity',

    role: 'Project Initiator & Project Lead',
    date: 'Aug 1-6, 2022',

    summary:
      'Initiated and led the IT#28 Starter Pack, a student-led preparation program designed to help incoming SIT KMUTT students build foundational IT knowledge and prepare for their first year of university.',

    about:
      'IT#28 Starter Pack was a **student-led preparation program for incoming IT students at SIT KMUTT**, continuing the learning approach from the previous IT#27 Starter Pack. The program was designed to help first-year students build **foundational knowledge in core IT subjects** through learning sessions, hands-on activities, and guidance from senior students, while also creating opportunities for new students to connect with their seniors and prepare for university life.',

    details: [
      'Initiated the **IT#28 Starter Pack**, establishing the project concept, objectives, and overall direction for the program.',
      'Served as the **Project Lead**, overseeing the overall planning, coordination, and execution of the program.',
      'Led and coordinated the **organizing and teaching teams**, assigning responsibilities and ensuring each part of the program progressed according to plan.',
      'Worked with senior students to **design the learning structure and activities** for incoming IT students.',
      'Managed communication and coordination across the project to ensure the **learning sessions and activities ran smoothly**.',
      'Helped create a **supportive learning environment** where incoming students could strengthen their IT fundamentals, learn from senior students, and prepare for their first year at SIT KMUTT.',
    ],
    images: [starter28p1, starter28p2, starter28p3, starter28p4],
  },

  {
    slug: 'sit-helloworld-2021',

    title: 'SIT HelloWorld 2021',
    type: 'activity',

    role: 'Project Initiator & Organizer',
    date: 'Oct 23 - Nov 20, 2021',

    summary:
      'Initiated and organized SIT HelloWorld 2021, a student-led activity that provided SIT KMUTT students with an opportunity to learn, collaborate, and apply their technical skills through hands-on project development.',

    about:
      'SIT HelloWorld 2021 was a **student-led learning activity at SIT KMUTT** designed to give students an opportunity to gain practical experience beyond the classroom. Participants worked together on technology projects, applying their knowledge in a collaborative environment while developing **technical, teamwork, problem-solving, and project development skills**.',

    details: [
      'Initiated **SIT HelloWorld 2021**, developing the initial concept and helping establish the direction and structure of the project.',
      'Led the **planning and overall project management**, coordinating team responsibilities, timelines, activities, and event execution.',
      'Prepared and managed **all project-related documentation**, including proposals, planning documents, schedules, coordination materials, and other required documentation.',
      'Collaborated with the organizing team to **coordinate participants, staff, and stakeholders** throughout the project.',
      'Managed the project from **initial planning through final execution**, supporting the team and resolving coordination issues throughout the activity.',
    ],

    links: [
      {
        label: 'SIT HelloWorld 2021 — Event Website',
        url: 'https://helloermine.netlify.app/',
      },
    ],
  },

  {
    slug: 'it27-starter-pack',

    title: 'IT#27 Starter Pack',
    type: 'activity',

    role: 'Programming Instructor',
    date: 'Jul 20–30, 2021',

    summary:
      'Contributed as a Programming Instructor for the IT#27 Starter Pack, helping prepare incoming SIT KMUTT students with foundational programming knowledge through hands-on learning.',

    about:
      'Pre-IT#27 Starter Pack was a **student-led preparation program for 111 incoming IT students at SIT KMUTT**, designed to build foundational knowledge before beginning their university studies. The program covered **Programming, Web Technology, and Database fundamentals** through more than a week of online learning, hands-on exercises, and small-group mentoring. More than **90 senior students participated as instructors and mentors**, providing technical guidance, answering questions, and sharing their experiences through special sessions.',

    details: [
      'Collaborated with senior students to **design and prepare the Programming curriculum and learning materials** for incoming IT students.',
      'Taught **fundamental programming concepts** and supported students through hands-on exercises and practical learning activities.',
      'Helped participants understand programming concepts by **answering questions, explaining technical topics, and providing guidance** during the workshop.',
      'Contributed to a program supporting **111 incoming IT students**, alongside more than **90 senior instructors and mentors**.',
      'Worked with the teaching team to create an **accessible introduction to programming** and help students prepare for their first year of IT studies.',
    ],

    links: [
      {
        label: 'SIT KMUTT — IT#27 Starter Pack, Event Article',
        url: 'https://www.sit.kmutt.ac.th/%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B8%9E%E0%B8%B5%E0%B9%88-dsi-%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%95%E0%B9%89%E0%B8%AD/',
      },
    ],
  },

  {
    slug: 'platform-engineering-meetup',

    title: 'Platform Engineering Meetup',
    type: 'volunteer',

    role: 'Volunteer',
    date: 'Jun 21, 2025',

    summary:
      'Participated in the Platform Engineering Meetup, a community event focused on exploring Platform Engineering through expert talks, hands-on workshops, and networking with people in the tech community.',

    details: [
      'The Platform Engineering Meetup provided an opportunity to learn about **Platform Engineering concepts and real-world practices**, from the fundamentals to how platform engineers design, build, and manage internal platforms.',
      'The event featured experience-sharing sessions from industry professionals, including insights from **three years of working in Platform Engineering**, followed by a hands-on workshop, **“What Does a Platform Engineer Do?”**, where participants explored practical aspects of platform engineering.',
      'The meetup also included **networking sessions**, providing an opportunity to exchange ideas, experiences, and perspectives with developers, platform engineers, and other technology professionals.',
    ],
    links: [
      {
        label: 'Platform Engineering Meetup — Event Registration',
        url: 'https://www.eventpop.me/e/95617/odds-platform-engineer-meetups',
      },
    ],
  },
]