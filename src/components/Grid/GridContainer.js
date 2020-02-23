import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from './Grid';
import { gridActions } from '../../ducks/grid';

const mapStateToProps = ({ grid }) => ({ grid: grid.grid });
const mapDispatchToProps = (dispatch) => bindActionCreators(
  { setNexStep: gridActions.setGrid },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Grid);
