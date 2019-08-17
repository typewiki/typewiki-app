import * as React from 'react';
import { Navbar, Alignment, ButtonGroup, Button } from '@blueprintjs/core';
import { LoginDialog } from './LoginDialog';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [isLoginDialogOpen, showLoginDialog] = React.useState(false);
  const handleOpen = () => showLoginDialog(true);
  const handleClose = () => showLoginDialog(false);
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <ButtonGroup minimal={true}>
          <Button icon="document">Создать...</Button>
        </ButtonGroup>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <ButtonGroup minimal={true}>
          <LoginDialog isOpen={isLoginDialogOpen} onClose={handleClose} />
          <Button icon="log-in" onClick={handleOpen}>
            Войти
          </Button>
          {/*<Button icon="user">user</Button>*/}
        </ButtonGroup>
      </Navbar.Group>
    </Navbar>
  );
};
