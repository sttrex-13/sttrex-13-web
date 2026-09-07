import { useRef } from 'react'
import PageGrid from '@/components/layout/PageGrid/PageGrid'
import PageMotion from '@/components/common/PageMotion/PageMotion'
import ExperienceRow from '@/components/experience/ExperienceRow/ExperienceRow'
import { experiences } from '@/data/experience'
import { useGSAP } from '@/animations/gsap'
import { staggerRows } from '@/animations/staggerRows'
import styles from './WorkExperiencePage.module.scss'

const WorkExperiencePage = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const odt = experiences.filter((x) => x.group === 'ODT Sites')
  const freelance = experiences.filter((x) => x.group === 'Freelance')

  useGSAP(() => { staggerRows('.js-list-row') }, { scope: contentRef })

  return (
    <PageMotion>
      <div ref={contentRef}>
        <PageGrid
          left={<p>Work Experience</p>}
          center={
            <div className={styles.fullWidthContent}>
              <section>
                <h2>ODT Sites</h2>
                <div className={styles.rows}>{odt.map((item) => <ExperienceRow key={item.slug} experience={item} />)}</div>
              </section>
              <section className={styles.freelance}>
                <h2>Freelance</h2>
                <div className={styles.rows}>{freelance.map((item) => <ExperienceRow key={item.slug} experience={item} />)}</div>
              </section>
            </div>
          }
        />
      </div>
    </PageMotion>
  )
}

export default WorkExperiencePage
