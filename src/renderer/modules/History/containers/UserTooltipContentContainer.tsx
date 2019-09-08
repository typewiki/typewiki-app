import * as React from 'react';
import { connect } from 'react-redux';
import { UserTooltipContent, UserTooltipContentProps } from '../components/UserTooltipContent';

const mapStateToProps = (
  { users: { loading, users } }: any,
  { username }: UserTooltipContentProps
) => ({
  loading,
  user: users[username]
});

export default connect(mapStateToProps)(UserTooltipContent);
