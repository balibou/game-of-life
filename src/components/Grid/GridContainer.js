import { connect } from 'react-redux';
import Grid from './Grid';

const mapStateToProps = ({ data }) => ({ data: data.data });

export default connect(
  mapStateToProps,
)(Grid);
