import * as React from 'react';
import { connect } from 'react-redux';
import { fetchRevisions } from '../../../routines';
import { HistoryNavbar } from '../components/HistoryNavbar';

const mapStateToProps = ({ history: { revisions, loading } }: any) => ({
  loading
});

const mapDispatchToProps = {
  fetchRevisions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryNavbar);
