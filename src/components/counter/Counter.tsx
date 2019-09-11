import React, { useEffect } from 'react';
import { useAsyncCallback } from 'react-async-hook';
import { useTranslation } from 'react-i18next';
import { info } from 'electron-log';

const Counter = () => {
  useEffect(() => info('Rendering Counter component'), []);
  const { t } = useTranslation();

  return (
    <div>
      <h1 data-tid="counter"></h1>
      <div></div>
    </div>
  );
};

export default Counter;
