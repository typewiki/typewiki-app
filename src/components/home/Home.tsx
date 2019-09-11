import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { COUNTER } from 'components/Routes';
import { info } from 'electron-log';

const Home = () => {
  useEffect(() => info('Rendering Home component'), []);
  const { t } = useTranslation();

  const [showAlert, setShowAlert] = useState(false);
  const handleClickMe = () => setShowAlert(true);

  return (
    <div>
      <p>{t('cmps.home.card-description')}</p>
      <p>
        <Trans i18nKey="cmps.home.play">
          Play with the{' '}
          <Link to={COUNTER} data-tid="counter-link">
            Counter
          </Link>{' '}
          thing
        </Trans>
      </p>
    </div>
  );
};

export default Home;
