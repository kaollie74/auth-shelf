import React, {Component} from 'react';
import { connect } from 'react-redux';
import ItemForm from '../ItemForm/ItemForm';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {

  componentDidMount() {
    const action = {type: 'GET_ITEMS'};
    this.props.dispatch(action)
  }

  render() {
    return (
      <div>
        <p>
          Shelf Page
        </p>
        <ItemForm />
      </div>
    )
    } 
  }

  const mapStateToProps = (reduxState) => ({
    reduxState
  });

  export default connect(mapStateToProps)(InfoPage);

