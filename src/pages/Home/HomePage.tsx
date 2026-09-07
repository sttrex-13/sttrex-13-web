import { useCallback, useRef, useState } from 'react'
import gsap from 'gsap'

import PageGrid from '@/components/layout/PageGrid/PageGrid'
import PageMotion from '@/components/common/PageMotion/PageMotion'
import TextLink from '@/components/common/TextLink/TextLink'
import { profile } from '@/data/profile'

import image1 from '@/assets/images/elements/1.png'
import image2 from '@/assets/images/elements/2.png'
import image3 from '@/assets/images/elements/3.png'
import image4 from '@/assets/images/elements/4.png'
import image5 from '@/assets/images/elements/5.png'
import image6 from '@/assets/images/elements/6.png'
import image7 from '@/assets/images/elements/7.png'
import image8 from '@/assets/images/elements/8.png'
import image9 from '@/assets/images/elements/9.png'
import image10 from '@/assets/images/elements/10.png'
import image11 from '@/assets/images/elements/11.png'
import image12 from '@/assets/images/elements/12.png'
import image13 from '@/assets/images/elements/13.png'
import image14 from '@/assets/images/elements/14.png'
import image15 from '@/assets/images/elements/15.png'

import styles from './HomePage.module.scss'

const LOCATION_IMAGES = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
] as const

type DropConfig = {
  id: number
  image: string
  x: number
  rotation: number
  startRotation: number
  scale: number
  delay: number
  duration: number
}

const randomBetween = (
  min: number,
  max: number,
): number =>
  Math.random() * (max - min) + min

const getImageWidth = (): number => {
  if (window.innerWidth <= 768) {
    return Math.min(
      window.innerWidth * 0.36,
      180,
    )
  }

  return Math.min(
    window.innerWidth * 0.14,
    220,
  )
}

const getRandomX = (): number => {
  const imageWidth = getImageWidth()
  const padding = 16

  const maxX =
    window.innerWidth -
    imageWidth -
    padding

  return randomBetween(
    padding,
    Math.max(padding, maxX),
  )
}

const createDropConfigs =
  (): DropConfig[] =>
    LOCATION_IMAGES.map(
      (image, index) => {
        const rotation =
          randomBetween(-20, 20)

        return {
          id: index,
          image,
          x: getRandomX(),

          rotation,

          startRotation:
            rotation +
            randomBetween(-25, 25),

          scale: randomBetween(
            0.85,
            1.15,
          ),

          delay: randomBetween(
            0,
            0.65,
          ),

          duration: randomBetween(
            1.2,
            1.8,
          ),
        }
      },
    )

const getDropDistance = (
  element: HTMLElement,
): number => {
  const rect =
    element.getBoundingClientRect()

  return (
    window.innerHeight -
    rect.top -
    rect.height
  )
}

const createDropAnimation = (
  element: HTMLElement,
  config: DropConfig,
) =>
  gsap.fromTo(
    element,
    {
      y:
        -window.innerHeight -
        randomBetween(100, 500),

      rotation:
        config.startRotation,

      opacity: 0,

      scale:
        config.scale * 0.9,
    },
    {
      y: getDropDistance(element),

      rotation:
        config.rotation,

      opacity: 1,

      scale:
        config.scale,

      duration:
        config.duration,

      delay:
        config.delay,

      ease: 'bounce.out',
    },
  )

const createExitAnimation = (
  elements: HTMLImageElement[],
  onComplete: () => void,
) => {
  const timeline = gsap.timeline({
    onComplete,
  })

  elements.forEach(
    (element, index) => {
      timeline.to(
        element,
        {
          y:
            window.innerHeight +
            element.offsetHeight +
            randomBetween(
              100,
              400,
            ),

          rotation:
            randomBetween(
              -60,
              60,
            ),

          opacity: 0,

          duration:
            randomBetween(
              0.7,
              1.1,
            ),

          ease: 'power3.in',
        },
        index * 0.025,
      )
    },
  )

  return timeline
}

const HomePage = () => {
  const [
    dropConfigs,
    setDropConfigs,
  ] = useState<DropConfig[]>([])

  const imageRefs =
    useRef<
      Array<HTMLImageElement | null>
    >([])

  const isVisible =
    dropConfigs.length > 0

  const showImages =
    useCallback(() => {
      const configs =
        createDropConfigs()

      setDropConfigs(configs)

      requestAnimationFrame(() => {
        configs.forEach(
          (config, index) => {
            const element =
              imageRefs.current[
              index
              ]

            if (!element) return

            createDropAnimation(
              element,
              config,
            )
          },
        )
      })
    }, [])

  const hideImages =
    useCallback(() => {
      const elements =
        imageRefs.current.filter(
          (
            element,
          ): element is HTMLImageElement =>
            Boolean(element),
        )

      if (!elements.length) {
        setDropConfigs([])
        return
      }

      createExitAnimation(
        elements,
        () => {
          setDropConfigs([])
          imageRefs.current = []
        },
      )
    }, [])

  const handleLocationClick =
    useCallback(() => {
      const action = isVisible
        ? hideImages
        : showImages

      action()
    }, [
      isVisible,
      hideImages,
      showImages,
    ])

  return (
    <PageMotion>
      <PageGrid
        left={
          <div
            className={
              styles.locationWrapper
            }
          >
            <button
              type="button"
              className={
                styles.locationButton
              }
              onClick={
                handleLocationClick
              }
              aria-expanded={
                isVisible
              }
            >
              {profile.location}
            </button>

            {dropConfigs.map(
              (config, index) => (
                <img
                  key={config.id}
                  ref={(element) => {
                    imageRefs.current[
                      index
                    ] = element
                  }}
                  src={config.image}
                  alt=""
                  aria-hidden="true"
                  className={
                    styles.locationImage
                  }
                  style={{
                    left: `${config.x}px`,
                  }}
                />
              ),
            )}
          </div>
        }
        center={
          <div
            className={
              styles.links
            }
          >
            <div
              className={
                styles.group
              }
            >
              <p>
                Currently Software
                Developer at{' '}
                <TextLink
                  external
                  to={
                    profile.companyLink
                  }
                >
                  {profile.company}
                </TextLink>
                .
              </p>


              <TextLink to="/experience">
                Work Experience
              </TextLink>

              <TextLink to="/activities">
                Activities &amp;
                Volunteer
              </TextLink>

              <TextLink to="/projects">
                Project
              </TextLink>
              <TextLink
                external
                to="https://github.com/sttrex-13"
              >
                Github
              </TextLink>

              <TextLink
                external
                to="https://medium.com/@sttrex.13.st"
              >
                Medium
              </TextLink>

              <TextLink
                external
                to="https://www.linkedin.com/in/sutee-vpt/"
              >
                LinkedIn
              </TextLink>

              <a
                href={`tel:${profile.phone}`}
              >
                {profile.phone}
              </a>
              <a href="#resume">
                View Resume
              </a>
            </div>

          </div>
        }
      />
    </PageMotion>
  )
}

export default HomePage