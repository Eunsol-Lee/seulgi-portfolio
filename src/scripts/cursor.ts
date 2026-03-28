import { gsap } from './gsap-init';

export function initCursor(): void {
  // Skip on touch devices
  if (!window.matchMedia('(hover: hover)').matches) return;

  const cursorEl = document.getElementById('cursor');
  if (!cursorEl) return;

  const dot = cursorEl.querySelector<HTMLElement>('.cursor__dot');
  const circle = cursorEl.querySelector<HTMLElement>('.cursor__circle');

  if (!dot || !circle) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let circleX = mouseX;
  let circleY = mouseY;
  let currentState = '';

  // Move cursor to mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    gsap.set(cursorEl, { x: mouseX, y: mouseY });
  });

  // Circle lerp via GSAP ticker
  gsap.ticker.add(() => {
    circleX += (mouseX - circleX) * 0.15;
    circleY += (mouseY - circleY) * 0.15;
    gsap.set(circle, { x: circleX - mouseX, y: circleY - mouseY });
  });

  // State management
  function setState(state: string): void {
    if (currentState === state) return;
    cursorEl!.classList.remove('is-link', 'is-project', 'is-image');
    if (state) cursorEl!.classList.add(state);
    currentState = state;
  }

  // Hover bindings
  function bindHover(selector: string, state: string): void {
    document.querySelectorAll(selector).forEach((el) => {
      el.addEventListener('mouseenter', () => setState(state));
      el.addEventListener('mouseleave', () => setState(''));
    });
  }

  bindHover('a:not(.project-item__link)', 'is-link');
  bindHover('button', 'is-link');
  bindHover('.project-item, .project-item__link', 'is-project');
  bindHover('img', 'is-image');

  // Magnetic effect on nav links
  const MAGNETIC_MAX = 8;
  document.querySelectorAll<HTMLElement>('.nav__link, .nav__lang-toggle').forEach((el) => {
    el.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = Math.max(rect.width, rect.height);
      const pull = Math.max(0, 1 - dist / radius);
      const ox = dx * pull * (MAGNETIC_MAX / (radius / 2));
      const oy = dy * pull * (MAGNETIC_MAX / (radius / 2));

      gsap.to(el, { x: ox, y: oy, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)', overwrite: 'auto' });
    });
  });

  // Hide on window leave
  document.addEventListener('mouseleave', () => {
    gsap.to(cursorEl, { opacity: 0, duration: 0.2 });
  });
  document.addEventListener('mouseenter', () => {
    gsap.to(cursorEl, { opacity: 1, duration: 0.2 });
  });
}
