import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemForm from '../ItemForm/ItemForm';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {

  componentDidMount() {
    const action = { type: 'GET_ITEMS' };
    this.props.dispatch(action);
    this.checkLoggedIn();
  }

  deleteItem = (user) => {
    console.log(user);
    this.props.dispatch({type: 'DELETE_ITEM', payload: user});
  }

  checkUser = (user) => {
    if (user.user_id === this.props.reduxState.user.id) {
      return (
          <button onClick={() => this.deleteItem(user)}>Delete</button>
      );
    }
  }

  checkLoggedIn = () => {
    console.log('in checkLoggedIn. this.props.reduxState.user.id =', this.props.reduxState.user.id )
    if (this.props.reduxState.user.id){
      return (<ItemForm />)
    }
  }

  render() {
    return (
      <div>
        {this.checkLoggedIn()}
        <ul>
          {this.props.reduxState.itemReducer.map(item =>
            <li key={item.id}>
              <p>{item.description}</p>
              <img src={item.image_url} alt={item.description} />
              {this.checkUser(item)}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapStateToProps)(InfoPage);

