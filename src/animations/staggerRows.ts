import { gsap } from '@/animations/gsap'

export const staggerRows = (targets: gsap.TweenTarget) =>
  gsap.fromTo(
    targets,
    { opacity: 0, y: 8 },
    { opacity: 1, y: 0, stagger: 0.045, duration: 0.4, ease: 'power2.out' },
  )
