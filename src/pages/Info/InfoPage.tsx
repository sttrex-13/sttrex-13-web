import PageGrid from '@/components/layout/PageGrid/PageGrid'
import PageMotion from '@/components/common/PageMotion/PageMotion'
import { gsap, useGSAP } from '@/animations/gsap'
import { profile } from '@/data/profile'
import { useRef } from 'react'
import styles from './InfoPage.module.scss'
import ReactMarkdown from 'react-markdown'
import profileImage from '@/assets/images/profile/profile-000.jpg'

const InfoPage = () => {
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!imageRef.current) return
    gsap.fromTo(imageRef.current, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: .9, ease: 'power4.inOut' })
  }, { scope: imageRef })

  return (
    <PageMotion>
      <PageGrid
        left={<p>{profile.location}</p>}
        center={
          <div ref={imageRef} className={styles.imageWrap}>
            <img src={profileImage} alt="Sutee Vapeetam" loading="lazy"
              draggable={false}
              onContextMenu={(event) => event.preventDefault()} />
          </div>
        }
        right={
          <div className={styles.bio}>
            <ReactMarkdown>
              {profile.biography.join('\n\n')}
            </ReactMarkdown>
          </div>
        }
      />
    </PageMotion>
  )
}

export default InfoPage
