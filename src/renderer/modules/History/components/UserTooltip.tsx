import * as React from 'react';
import { Classes, Position, Tooltip } from '@blueprintjs/core';
import UserTooltipContentContainer from '../containers/UserTooltipContentContainer';

interface UserTooltipProps {
  username: string;
  isLoaded?: boolean;
  children: React.ReactNode;
}

export const UserTooltip: React.FC<UserTooltipProps> = ({
  children,
  user,
  fetchUsers,
  isLoaded = false
}: any) => {
  return (
    <Tooltip
      className={Classes.TOOLTIP_INDICATOR}
      content={<UserTooltipContentContainer username={user} />}
      position={Position.BOTTOM}
      lazy={true}
      onOpening={() => !isLoaded && fetchUsers(user)}
    >
      {children}
    </Tooltip>
  );
};
