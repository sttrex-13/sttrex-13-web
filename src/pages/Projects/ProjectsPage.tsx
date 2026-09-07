import { useRef } from 'react'
import PageGrid from '@/components/layout/PageGrid/PageGrid'
import PageMotion from '@/components/common/PageMotion/PageMotion'
import { projects } from '@/data/projects'
import { useGSAP } from '@/animations/gsap'
import { staggerRows } from '@/animations/staggerRows'
import styles from './ProjectsPage.module.scss'

const ProjectsPage = () => {
  const ref = useRef<HTMLDivElement>(null)
  useGSAP(() => { staggerRows('.js-list-row') }, { scope: ref })

  return (
    <PageMotion>
      <div ref={ref}>
        <PageGrid
          left={<p>Project</p>}
          center={
            <div className={styles.list}>
                  Comming soon...
              {projects.map((project, index) => (
                <button type="button" key={`${project}-${index}`} className="js-list-row">
                  <span>{project}</span><span className={styles.arrow}>↗</span>
                </button>
              ))}
            </div>
          }
        />
      </div>
    </PageMotion>
  )
}

export default ProjectsPage
