import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { IoLocationOutline } from 'react-icons/io5';

import { CountdownTimer } from './../CountdownTimer/CountdownTimer';

import './Home.css';

export const Home = () => {
  // TODO get the upcomming concert 
  const up_data = {
    bg: {
      name: "цвЕтно",
      location: {
        address: 'Софийска градска художествена галерия',
        city: 'София',
        country: 'България',
      },
      description: `ЦвЕТНО настроение
      в полифоничните песни на "Елбетица", наситено с дълбок и ярък колорит.
      Една изящна художествена експозиция, една невероятна и цветна симбиоза на женската енергия на вдъхновени от музиката дами.
      Защото е цвЕтно в сърцата ни,
      песните ни са
      нашата Цветница -
      за вас!`,
      date: new Date(2023, 3, 9, 19, 30),
    },
    en: {
      name: "Colorfully",
      location: {
        address: 'Sofia City Art Gallery',
        city: 'Sofia',
        country: 'Bulgaria',
      },
      description: `ЦвЕТНО настроение
      в полифоничните песни на "Елбетица", наситено с дълбок и ярък колорит.
      Една изящна художествена експозиция, една невероятна и цветна симбиоза на женската енергия на вдъхновени от музиката дами.
      Защото е цвЕтно в сърцата ни,
      песните ни са
      нашата Цветница -
      за вас!`,
      date: new Date(2023, 3, 9, 19, 30),
    }
  }
  const { i18n, t } = useTranslation();

  const [upcomming, setUpcomming] = useState(up_data[i18n.language]);

  i18n.on('languageChanged', () => {
    setUpcomming(up_data[i18n.language]);
  })

  return (
    <section id="front" className="d-flex align-items-center justify-content-center">
      <Container>

        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <h2>{t('upcomming')}</h2>
            <br />
            <h1>{upcomming.name}</h1>
            <h2><IoLocationOutline className="theme-c" /> {upcomming.location.address}, {upcomming.location.city}, {upcomming.location.country}</h2>
            <br />
            <p>{upcomming.description}</p>
          </div>
        </div>

        <CountdownTimer targetDate={upcomming.date} message={t('startedMsg')} />

      </Container>
    </section>
  );
};