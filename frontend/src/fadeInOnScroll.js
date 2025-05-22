// useFadeInOnScroll.js
import { useEffect } from 'react';

const useFadeInOnScroll = () => {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');
    const appearOnScroll = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    faders.forEach(fader => appearOnScroll.observe(fader));

    return () => {
      faders.forEach(fader => appearOnScroll.unobserve(fader));
    };
  }, []);
};

export default useFadeInOnScroll;
