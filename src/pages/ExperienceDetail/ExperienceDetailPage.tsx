import { Navigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import PageGrid from '@/components/layout/PageGrid/PageGrid'
import PageMotion from '@/components/common/PageMotion/PageMotion'
import ReadMore from '@/components/common/ReadMore/ReadMore'
import { experiences } from '@/data/experience'

import styles from './ExperienceDetailPage.module.scss'

const ExperienceDetailPage = () => {
  const { slug } = useParams()

  const experience = experiences.find((item) => item.slug === slug)

  if (!experience) {
    return <Navigate to="/experience" replace />
  }

  const details = experience.details?.length
    ? experience.details
    : [
        'Use this area for responsibilities, outcomes, technical decisions, and collaboration details.',
        'Because this is data-driven, every experience can use the same detail page without creating a new React route component.',
      ]

  return (
    <PageMotion>
      <PageGrid
        left={
          <div>
            <p>{experience.company}</p>
            <p className={styles.muted}>{experience.role}</p>
          </div>
        }
        center={<p>{experience.period}</p>}
        right={
          <div className={styles.copy}>
            <p>
              {experience.summary ??
                'Project details can be added in src/data/experience.ts.'}
            </p>

            <ReadMore>
              {details.map((detail, index) => (
                <section
                  key={`${experience.slug}-${index}`}
                  className={styles.detailSection}
                >
                  <h3>
                    {index === 0 ? 'What I Worked On' : 'More Details'}
                  </h3>

                  <div className={styles.markdown}>
                    <ReactMarkdown>{detail}</ReactMarkdown>
                  </div>
                </section>
              ))}
            </ReadMore>
          </div>
        }
      />
    </PageMotion>
  )
}

export default ExperienceDetailPage