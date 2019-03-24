import React from 'react';
import qs from 'qs';
import { connect } from 'react-redux';
import * as selectors from '../../selectors';

class NewGameButton extends React.Component {
  render() {
    const { gameTask: { level } } = this.props;
    const queryParamsString = qs.stringify({ level, type: 'withRandomPlayer' });
    const gameUrl = `/games?${queryParamsString}`;

    return (
      <button
        type="button"
        className="btn btn-secondary btn-block"
        data-method="post"
        data-csrf={window.csrf_token}
        data-to={gameUrl}
      >
        New Game
      </button>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    gameTask: selectors.gameTaskSelector(state),
  }
};

export default connect(mapStateToProps)(NewGameButton);
