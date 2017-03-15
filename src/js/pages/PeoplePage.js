import React from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { injectIntl, intlShape } from 'react-intl';

import { loadSingle as loadPerson } from '../redux/modules/people';

/*
  This component uses asyncConnect to load data before displaying itself
  For the moment, this is dummy student data from the WordPress API

  The students prop is not coming from asyncConnect, but from the redux state "students"
  asyncConnect is mainly used to delay rendering the page until data has been fetched
*/
class PeoplePage extends React.Component {
  static propTypes = {
    students: React.PropTypes.object,
    intl: intlShape.isRequired
  };
  static defaultProps = {
  };

  render() {
    const { person } = this.props;
     return (
      <pre>
          <Helmet title={person.title.rendered} />
          {JSON.stringify(person, null, 4)}
      </pre>
    );
  }
}

const MapToStateProps = (state, props) => {
    return {
        person: state.people.peopleById[props.params.slug]
    };
};

export default asyncConnect([
  {
    promise: ({ store: { dispatch }, params }) => dispatch(loadPerson(params.slug)),
    deferred: true
  }
])(connect(MapToStateProps)(PeoplePage));
