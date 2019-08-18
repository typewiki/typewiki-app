import * as React from 'react';
import { Button, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import './LoginForm.scss';
import { InjectedFormProps } from 'redux-form';
import { required } from 'redux-form-validators';
import { FormGroupField } from './FormGroupField';

export const LoginForm: React.FC<InjectedFormProps> = ({ handleSubmit }) => {
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <FormGroupField
        autoFocus={true}
        label="Имя учётной записи"
        name="username"
        type="text"
        placeholder="Введите имя вашей учётной записи..."
        validate={[required({ message: 'Поле обязательно для заполнения' })]}
        leftIcon={IconNames.USER}
      />
      <FormGroupField
        label="Пароль"
        name="password"
        type="password"
        placeholder="Введите свой пароль..."
        validate={[required({ message: 'Поле обязательно для заполнения' })]}
        helperText={<a href="#">Сбросить ваш пароль?</a>}
        leftIcon={IconNames.KEY}
      />
      <Button type="submit" fill={true} intent={Intent.PRIMARY} large={true}>
        Войти
      </Button>
    </form>
  );
};
