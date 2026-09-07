import type { ReactNode } from 'react'
import styles from './PageGrid.module.scss'

type Props = {
  left?: ReactNode
  center?: ReactNode
  right?: ReactNode
  className?: string
}

const PageGrid = ({ left, center, right, className = '' }: Props) => (
  <div className={`${styles.grid} ${className}`}>
    <div className={styles.left}>{left}</div>
    <div className={styles.center}>{center}</div>
    <div className={styles.right}>{right}</div>
  </div>
)

export default PageGrid
