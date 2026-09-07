import { useRef, useState } from 'react'
import { gsap } from '@/animations/gsap'
import styles from './ReadMore.module.scss'

type Props = {
  children: React.ReactNode
}

const ReadMore = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const toggle = () => {
    const el = contentRef.current
    if (!el) return

    if (!expanded) {
      gsap.set(el, { display: 'block' })
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.5, ease: 'power3.inOut' },
      )
    } else {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.inOut',
        onComplete: () => gsap.set(el, { display: 'none' }),
      })
    }

    setExpanded((v) => !v)
  }

  return (
    <div className={styles.wrap}>
      <button type="button" className={styles.button} onClick={toggle} aria-expanded={expanded}>
        Read More {expanded ? '−' : '+'}
      </button>
      <div ref={contentRef} className={styles.content} style={{ display: 'none', height: 0, overflow: 'hidden' }}>
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  )
}

export default ReadMore
