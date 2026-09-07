import TextLink from '@/components/common/TextLink/TextLink'
import type { Activity } from '@/types/activity'
import styles from './ActivityList.module.scss'

type Props = { items: Activity[] }

const ActivityList = ({ items }: Props) => (
  <div className={styles.list}>
    {items.map((item) => (
      <div className="js-list-row" key={item.slug}>
        <TextLink to={`/activities/${item.slug}`}>{item.title}</TextLink>
      </div>
    ))}
  </div>
)

export default ActivityList
