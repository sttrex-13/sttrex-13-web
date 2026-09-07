import { useRef } from 'react'
import PageGrid from '@/components/layout/PageGrid/PageGrid'
import PageMotion from '@/components/common/PageMotion/PageMotion'
import ActivityList from '@/components/activity/ActivityList/ActivityList'
import { activities } from '@/data/activities'
import { useGSAP } from '@/animations/gsap'
import { staggerRows } from '@/animations/staggerRows'
import styles from './ActivitiesPage.module.scss'

const ActivitiesPage = () => {
  const ref = useRef<HTMLDivElement>(null)
  const activityItems = activities.filter((x) => x.type === 'activity')
  const volunteerItems = activities.filter((x) => x.type === 'volunteer')

  useGSAP(() => { staggerRows('.js-list-row') }, { scope: ref })

  return (
    <PageMotion>
      <div ref={ref}>
        <PageGrid
          left={<p>Activities &amp; Volunteer</p>}
          center={
            <div className={styles.groups}>
              <section>
                <h2>Activities</h2>
                <ActivityList items={activityItems} />
              </section>
              <section>
                <h2>Volunteer</h2>
                <ActivityList items={volunteerItems} />
              </section>
            </div>
          }
        />
      </div>
    </PageMotion>
  )
}

export default ActivitiesPage
