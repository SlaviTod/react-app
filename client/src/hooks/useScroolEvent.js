import { useEffect, useState } from 'react';

const useScroolEvent = () => {
  const [scroolAction, setScroolAction] = useState(false);

  const handleScroll = () => {
    const scrooleHeader = window.scrollY > 100 ? true : false;

    if (scrooleHeader !== scroolAction) setScroolAction(scrooleHeader)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return scroolAction;
}


export { useScroolEvent };