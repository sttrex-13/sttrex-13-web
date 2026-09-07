import type { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'
import styles from './TextLink.module.scss'

type Props = PropsWithChildren<{ to: string; external?: boolean }>

const TextLink = ({ to, external, children }: Props) => {
  if (external) {
    return <a className={styles.link} href={to} target="_blank" rel="noreferrer">{children}</a>
  }
  return <Link className={styles.link} to={to}>{children}</Link>
}

export default TextLink
