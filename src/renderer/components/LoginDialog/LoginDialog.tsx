import * as React from 'react';
import {
  Button,
  Classes,
  Dialog,
  FormGroup,
  IDialogProps,
  InputGroup,
  Intent
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import './LoginDialog.scss';

export interface ILoginDialogProps extends Pick<IDialogProps, 'isOpen' | 'onClose'> {}

export const LoginDialog: React.FC<ILoginDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog
      autoFocus={true}
      icon={IconNames.LOG_IN}
      title="Войти"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={Classes.DIALOG_BODY}>
        <div className="login-form">
          <FormGroup label="Имя учётной записи" labelFor="user-name">
            <InputGroup
              autoFocus={true}
              id="user-name"
              leftIcon={IconNames.USER}
              placeholder="Введите имя вашей учётной записи..."
              type="text"
            />
          </FormGroup>
          <FormGroup
            helperText={<a href="#">Сбросить ваш пароль?</a>}
            label="Пароль"
            labelFor="user-password"
          >
            <InputGroup
              id="user-password"
              leftIcon={IconNames.KEY}
              rightElement={<Button disabled={true} icon={IconNames.UNLOCK} minimal={true} />}
              placeholder="Введите свой пароль..."
              type="password"
            />
          </FormGroup>
          <Button fill={true} intent={Intent.PRIMARY} large={true}>
            Войти
          </Button>
        </div>
      </div>
    </Dialog>
  );
};
