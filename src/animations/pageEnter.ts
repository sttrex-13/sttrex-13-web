import { gsap } from '@/animations/gsap'

export const pageEnter = (target: gsap.TweenTarget) =>
  gsap.fromTo(
    target,
    { opacity: 0, y: 12 },
    { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' },
  )
