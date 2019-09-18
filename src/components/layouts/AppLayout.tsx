import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HOME, COUNTER } from 'components/Routes';
import logo from 'resources/logo.png';
import { routine } from '../../store/routines';
import { Routine } from 'redux-saga-routines';
import { connect } from 'react-redux';

interface Props {
  children: React.ReactNode;
  routine: Routine;
}

const AppLayout: React.FC<Props> = (props: Props) => {
  const { t, i18n } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(!collapsed);
  const setEnglish = () => i18n.changeLanguage('en-US');
  const setSpanish = () => i18n.changeLanguage('es');

  const handleClickMe = () => props.routine();

  return (
    <>
      <button onClick={handleClickMe}>fdfdsfds</button>
      <div>
        <Link to={HOME} data-tid="logo">
          <img src={logo} alt="logo" />
          {!collapsed && <span>Electron App</span>}
        </Link>
      </div>

      <Link to={HOME} data-tid="nav-home">
        <span>{t('cmps.app-layout.home', 'Home')}</span>
      </Link>

      <Link to={COUNTER} data-tid="nav-counter">
        <span>{t('cmps.app-layout.counter', 'Counter')}</span>
      </Link>
    </>
  );
};

export default connect(
  null,
  { routine },
)(AppLayout);
