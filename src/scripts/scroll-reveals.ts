import { gsap } from './gsap-init';

export function initScrollReveals(): void {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    showAllInstant();
    return;
  }

  initRevealClass();
  initProjectItems();
  initBlogCards();
}

function initRevealClass(): void {
  const revealEls = document.querySelectorAll<HTMLElement>('.reveal');
  if (!revealEls.length) return;

  revealEls.forEach((el) => {
    const delay = parseFloat(el.dataset.revealDelay ?? '0');
    const duration = parseFloat(el.dataset.revealDuration ?? '0.8');

    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });
}

function initProjectItems(): void {
  const projectItems = document.querySelectorAll('.project-item');
  if (!projectItems.length) return;

  gsap.to(projectItems, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: { each: 0.1, from: 'start' },
    scrollTrigger: {
      trigger: '.projects__list',
      start: 'top 82%',
      toggleActions: 'play none none none',
    },
  });
}

function initBlogCards(): void {
  const blogCards = document.querySelectorAll('.blog-card');
  if (!blogCards.length) return;

  gsap.to(blogCards, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: { each: 0.12, from: 'start' },
    scrollTrigger: {
      trigger: '.blog-index__grid',
      start: 'top 82%',
      toggleActions: 'play none none none',
    },
  });
}

function showAllInstant(): void {
  const selectors = [
    '.reveal',
    '.project-item',
    '.blog-card',
  ];

  selectors.forEach((sel) => {
    const els = document.querySelectorAll(sel);
    if (els.length) gsap.set(els, { opacity: 1, y: 0 });
  });
}
