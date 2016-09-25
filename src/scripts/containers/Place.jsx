import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { firebase as db, helpers } from 'redux-react-firebase';

const { isLoaded, dataToJS } = helpers;

const mapStateToProps = (state, props) => ({
  place: dataToJS(state.firebase, `places/${props.params.placeId}`),
});

const mapPropsToFirebase = (props) => ([
  `places/${props.params.placeId}`,
]);

@db(mapPropsToFirebase)
@connect(mapStateToProps)

export default class Topic extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    place: PropTypes.object,
  };

  render() {
    const { place } = this.props;

    if (!isLoaded(place)) return null;

    return (
      <div className="Place">
        <h3>{place.name}</h3>
        <span>{place.rating}</span>
      </div>
    );
  }
}
