import TextLink from '@/components/common/TextLink/TextLink'
import type { Experience } from '@/types/experience'
import styles from './ExperienceRow.module.scss'

type Props = { experience: Experience }

const ExperienceRow = ({ experience }: Props) => (
  <div className={`${styles.row} js-list-row`}>
    <TextLink to={`/experience/${experience.slug}`}>{experience.company}</TextLink>
    <span>{experience.role}</span>
    <span className={styles.period}>{experience.period}</span>
  </div>
)

export default ExperienceRow
