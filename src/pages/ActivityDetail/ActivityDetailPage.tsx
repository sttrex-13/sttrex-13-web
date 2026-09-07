import { Navigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import PageGrid from '@/components/layout/PageGrid/PageGrid'
import PageMotion from '@/components/common/PageMotion/PageMotion'
import ReadMore from '@/components/common/ReadMore/ReadMore'
import { activities } from '@/data/activities'

import styles from './ActivityDetailPage.module.scss'
import GalleryImage from '@/components/common/GalleryImage/GalleryImage'

const ActivityDetailPage = () => {
  const { slug } = useParams()

  const activity = activities.find(
    (item) => item.slug === slug,
  )

  if (!activity) {
    return <Navigate to="/activities" replace />
  }

  const details = activity.details ?? []
  const links = activity.links ?? []
  const images = activity.images ?? []

  const hasMoreContent =
    Boolean(activity.about) ||
    details.length > 0 ||
    links.length > 0 ||
    images.length > 0

  const markdownComponents = {
    a: ({
      href,
      children,
    }: {
      href?: string
      children?: React.ReactNode
    }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.markdownLink}
      >
        {children}
      </a>
    ),
  }

  return (
    <PageMotion>
      <PageGrid
        left={
          <div className={styles.meta}>
            <p className={styles.title}>
              {activity.title}
            </p>

            {activity.role && (
              <p className={styles.muted}>
                {activity.role}
              </p>
            )}
          </div>
        }

        center={
          <p className={styles.date}>
            {activity.date ?? '—'}
          </p>
        }

        right={
          <div className={styles.copy}>
            {activity.summary && (
              <p className={styles.summary}>
                {activity.summary}
              </p>
            )}

            {hasMoreContent && (
              <ReadMore>
                <div className={styles.moreContent}>

                  {activity.about && (
                    <section className={styles.detailSection}>
                      <h3 className={styles.sectionTitle}>
                        About Activity
                      </h3>

                      <div className={styles.markdown}>
                        <ReactMarkdown
                          components={markdownComponents}
                        >
                          {activity.about}
                        </ReactMarkdown>
                      </div>
                    </section>
                  )}

                  {details.length > 0 && (
                    <section className={styles.detailSection}>
                      <h3 className={styles.sectionTitle}>
                        {activity.type === 'volunteer'
                          ? 'About Event'
                          : 'What I Worked On'}
                      </h3>

                      <div className={styles.markdown}>
                        {details.map((detail, index) => (
                          <ReactMarkdown
                            key={`${activity.slug}-detail-${index}`}
                            components={markdownComponents}
                          >
                            {detail}
                          </ReactMarkdown>
                        ))}
                      </div>
                    </section>
                  )}

                  {images.length > 0 && (
                    <section className={styles.detailSection}>
                      <h3 className={styles.sectionTitle}>
                        Gallery
                      </h3>

                      <div className={styles.gallery}>
                        {images.map((image, index) => (
                          <GalleryImage
                            key={`${activity.slug}-image-${index}`}
                            src={image}
                            alt={`${activity.title} ${index + 1}`}
                          />
                        ))}
                      </div>
                    </section>
                  )}

                  {links.length > 0 && (
                    <section className={styles.detailSection}>
                      <h3 className={styles.sectionTitle}>
                        Links
                      </h3>

                      <ul className={styles.linkList}>
                        {links.map((link) => (
                          <li key={link.url}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.markdownLink}
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>
              </ReadMore>
            )}
          </div>
        }
      />
    </PageMotion>
  )
}

export default ActivityDetailPage