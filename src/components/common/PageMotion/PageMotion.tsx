import { useRef, type PropsWithChildren } from 'react'
import { useGSAP } from '@/animations/gsap'
import { pageEnter } from '@/animations/pageEnter'

const PageMotion = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (ref.current) pageEnter(ref.current)
  }, { scope: ref })

  return <div ref={ref} style={{ width: '100%' }}>{children}</div>
}

export default PageMotion
