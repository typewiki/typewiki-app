import * as React from 'react';
import {
  Button,
  Classes,
  FormGroup,
  InputGroup,
  Intent,
  Position,
  Tooltip
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import './LoginForm.scss';
import { Field, InjectedFormProps, WrappedFieldsProps } from 'redux-form';
import { required, email } from 'redux-form-validators';

export const LoginForm: React.FC<InjectedFormProps> = ({ handleSubmit }) => {
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <FormGroup label="Имя учётной записи" labelFor="user-name">
        <Field
          name="username"
          component={({ input, meta: { touched, error } }: any) => (
            <Tooltip
              content={<span className="bp3-text-small">{error}</span>}
              intent={Intent.DANGER}
              position={Position.BOTTOM}
              isOpen={!!touched && !!error}
              targetTagName="div"
            >
              <InputGroup
                autoFocus={true}
                id="user-name"
                leftIcon={IconNames.USER}
                placeholder="Введите имя вашей учётной записи..."
                type="text"
                {...input}
              />
            </Tooltip>
          )}
          type="text"
          placeholder="First Name"
          validate={[required({ message: 'Поле обязательно для заполнения' })]}
        />
      </FormGroup>
      <FormGroup
        helperText={<a href="#">Сбросить ваш пароль?</a>}
        label="Пароль"
        labelFor="user-password"
      >
        <Field
          name="password"
          component={({ input }: any) => (
            <InputGroup
              id="user-password"
              leftIcon={IconNames.KEY}
              rightElement={<Button disabled={true} icon={IconNames.UNLOCK} minimal={true} />}
              placeholder="Введите свой пароль..."
              type="password"
              {...input}
            />
          )}
          type="text"
          placeholder="First Name"
        />
      </FormGroup>
      <Button type="submit" fill={true} intent={Intent.PRIMARY} large={true}>
        Войти
      </Button>
    </form>
  );
};
