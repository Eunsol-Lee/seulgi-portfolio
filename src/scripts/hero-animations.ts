import { gsap } from './gsap-init';

export function initHero(): void {
  const hero = document.querySelector('.hero');
  const nameEl = document.querySelector<HTMLElement>('.hero__name');
  const eyebrow = document.querySelector('.hero__eyebrow');
  const tagline = document.querySelector('.hero__tagline');
  const scrollHint = document.querySelector('.hero__scroll-hint');

  if (!hero || !nameEl) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    if (eyebrow) gsap.set(eyebrow, { opacity: 1, y: 0 });
    if (tagline) gsap.set(tagline, { opacity: 1, y: 0 });
    if (scrollHint) gsap.set(scrollHint, { opacity: 1 });
    return;
  }

  // Soft fade-up + scale for v2 (not the hard clip-reveal of v1)
  gsap.set(nameEl, { opacity: 0, y: 30, scale: 0.97 });

  const tl = gsap.timeline({ delay: 0.2 });

  tl.to(nameEl, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1.2,
    ease: 'expo.out',
  })
  .to(eyebrow, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power3.out',
  }, '-=0.6')
  .to(tagline, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power3.out',
  }, '-=0.5')
  .to(scrollHint, {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out',
  }, '-=0.2');

  // Parallax + fade on scroll
  const heroInner = document.querySelector('.hero__inner');
  if (heroInner) {
    gsap.to(heroInner, {
      y: -60,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '60% top',
        scrub: 1,
      },
    });
  }

  // Scroll hint fades out
  if (scrollHint) {
    gsap.to(scrollHint, {
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: '20% top',
        scrub: true,
      },
    });
  }
}
