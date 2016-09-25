import React, { PropTypes, Component } from 'react';
import { Match, Link } from 'react-router';
import { connect } from 'react-redux';
import { firebase as db, helpers } from 'redux-react-firebase';

import Place from 'containers/Place';

const { isLoaded, dataToJS } = helpers;

const mapStateToProps = (state) => ({
  places: dataToJS(state.firebase, 'places'),
});

@db(['places#orderBykey=rating'])
@connect(mapStateToProps)

export default class Topics extends Component {
  static propTypes = {
    pathname: PropTypes.string,
    pattern: PropTypes.string,
    places: PropTypes.object,
  };

  render() {
    const { pathname, places } = this.props;

    if (!isLoaded(places)) return null;

    return (
      <div className="Places">
        <h2>Places</h2>
        <ul>{Object.values(places).map((place, index) => {
          const key = Object.keys(places)[index];
          return (
            <li key={index}>
              <Link to={`${pathname}/${key}`}>{place.name}</Link>
            </li>
          );
        })}</ul>

        <Match pattern={`${pathname}/:placeId`} component={Place} />
      </div>
    );
  }
}
