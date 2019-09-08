import * as React from 'react';
import { Button, ButtonGroup, ControlGroup, Navbar } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { Routine } from 'redux-saga-routines';

interface HistoryNavbarProps {
  loading: boolean;
  fetchRevisions: Routine;
}

export const HistoryNavbar: React.FC<HistoryNavbarProps> = ({ fetchRevisions, loading }) => {
  return (
    <Navbar>
      <Navbar.Group>
        <ControlGroup>
          <ButtonGroup minimal={true}>
            <Button icon={IconNames.REFRESH} onClick={() => fetchRevisions()} disabled={loading} />
            <Button icon={IconNames.EYE_OPEN} />
            <Button icon={IconNames.REFRESH} />
          </ButtonGroup>
        </ControlGroup>
      </Navbar.Group>
    </Navbar>
  );
};
