import React, {Component} from 'react';
import {connect} from 'react-redux';

class ItemForm extends Component {

    state = {
        description: '',
        image_url: ''
    }

    handleChangeFor = (event, propToChange) => {
        this.setState({
            [propToChange]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_ITEM', payload: this.state});
        this.setState({
            description: '',
            image_url: ''
        })
    }

    render() {
        console.log(this.state);
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Description: </label>
                <textarea value={this.state.description} onChange={(event) => this.handleChangeFor(event, 'description')}></textarea>
                <br/>
                <label>Image Url: </label>
                <input type="text" value={this.state.image_url} onChange={(event) => this.handleChangeFor(event, 'image_url')} />
                <button type="submit">Submit</button>
            </form>
        );
    }
};

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(ItemForm);
