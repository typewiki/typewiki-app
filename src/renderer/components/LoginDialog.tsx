import * as React from 'react';
import { Classes, Dialog, IDialogProps } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import LoginForm from '../forms/LoginForm';

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
        <LoginForm />
      </div>
    </Dialog>
  );
};
