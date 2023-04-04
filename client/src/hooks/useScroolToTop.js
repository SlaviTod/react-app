import { useEffect, useState } from 'react';

const useScroolToTop = () => {
    const [showScroolToTop, setShowScroolToTop] = useState(false);

    const handleScroll = () => {
        const shouldBeShown = window.scrollY > 0 ? true : false;

        if(shouldBeShown !== showScroolToTop) setShowScroolToTop(shouldBeShown);
    }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      
      return () => window.removeEventListener('scroll', handleScroll)
      })
    return showScroolToTop;
}


export { useScroolToTop };