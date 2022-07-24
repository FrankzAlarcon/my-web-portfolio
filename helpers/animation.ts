/* eslint-disable max-len */
interface AnimatedIconsProps extends SVGSVGElement{
  isAnimating?: boolean;
}

export function animationIcons() {
  if (typeof document === 'undefined') {
    return null;
  }
  const hero = document.getElementById('icons');
  const svgs:AnimatedIconsProps[] = Array.from((hero as HTMLElement).querySelectorAll('svg'));

  const w = window.innerWidth;
  const h = window.innerHeight;

  function animateBackgroundIcons() {
    const availableSvgs = svgs.filter((svg) => !svg.isAnimating);
    const svgToAnimate: AnimatedIconsProps = availableSvgs[Math.floor(Math.random() * availableSvgs.length)];
    if (!svgToAnimate) return;
    svgToAnimate.addEventListener(
      'animationend',
      () => {
        svgToAnimate.classList.remove('animate-moving-background');
        svgToAnimate.removeAttribute('style');
        svgToAnimate.isAnimating = false;
      },
      { once: true },
    );
    svgToAnimate.setAttribute(
      'style',
      `
              top: ${Math.floor(Math.random() * h)}px;
              left: ${Math.floor(Math.random() * w)}px;
          `,
    );
    svgToAnimate.classList.add('animate-moving-background');
    svgToAnimate.isAnimating = true;
  }

  setInterval(animateBackgroundIcons, 800);
  return animateBackgroundIcons();
}
