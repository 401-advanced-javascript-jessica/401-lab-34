import React from 'react';
import { connect } from 'react-redux';
import Author from './Components/Author/Author'

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            author: '',
        }
    }

    handleChange = (event) => {
        const {value} = event.target;
        this.setState({author: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewAuthor(this.state.author);
    };


    render() {
        return (
            <>
                {
                    this.props.authors.map((author, idx) =>
                        <Author author={author} id={idx} />
                    )}
            <form onSubmit = {this.handleSubmit}>
            <input
                type='text'
                    value={this.state.author}
                    onChange={this.handleChange}
                    placeholder='Enter an Author Name'
                        />
                        <button type='submit'> Create a New Author</button>
            </form>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authors: state.authors,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createNewAuthor: (authorName) => {
            dispatch({
                type: 'AUTHOR_CREATE',
                payload: authorName,
            })
        },
        updateAuthor: (authorName, id) => {
            dispatch({
                type: 'AUTHOR_UPDATE',
                payload: {name: authorName, id: id}
            })
        },
        deleteAuthor: (authorName) => {
            dispatch({
                type: 'AUTHOR_DELETE',
                payload: authorName,
            })
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
