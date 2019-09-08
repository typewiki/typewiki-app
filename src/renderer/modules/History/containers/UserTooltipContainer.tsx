import * as React from 'react';
import { connect } from 'react-redux';
import { UserTooltip } from '../components/UserTooltip';
import { fetchUsers } from '../../../routines';

const mapStateToProps = ({ users: { users } }: any, { user }: any) => ({
  isLoaded: !!users[user]
});

const mapDispatchToProps = {
  fetchUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTooltip);
