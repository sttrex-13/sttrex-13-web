import { createBrowserRouter } from 'react-router-dom'
import SiteLayout from '@/components/layout/SiteLayout/SiteLayout'
import HomePage from '@/pages/Home/HomePage'
import InfoPage from '@/pages/Info/InfoPage'
import WorkExperiencePage from '@/pages/WorkExperience/WorkExperiencePage'
import ExperienceDetailPage from '@/pages/ExperienceDetail/ExperienceDetailPage'
import ActivitiesPage from '@/pages/Activities/ActivitiesPage'
import ActivityDetailPage from '@/pages/ActivityDetail/ActivityDetailPage'
import ProjectsPage from '@/pages/Projects/ProjectsPage'

export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/info', element: <InfoPage /> },
      { path: '/experience', element: <WorkExperiencePage /> },
      { path: '/experience/:slug', element: <ExperienceDetailPage /> },
      { path: '/activities', element: <ActivitiesPage /> },
      { path: '/activities/:slug', element: <ActivityDetailPage /> },
      { path: '/projects', element: <ProjectsPage /> },
    ],
  },
])
