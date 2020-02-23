import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from './Grid';
import { gridActions } from '../../ducks/grid';

const mapStateToProps = ({ grid }) => ({
  grid: grid.grid, isPlaying: grid.isPlaying, counter: grid.counter,
});
const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setNexStep: gridActions.setGrid,
    pauseGrid: gridActions.pauseGrid,
    playGrid: gridActions.playGrid,
    goToNextStep: gridActions.goToNextStep,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Grid);
