import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      updatedAuthor: '',
    };
  }

    handleChange = (event) => {
      const { value } = event.target;
      this.setState({ author: value });
    };

    handleUpdateAuthor = (event) => {
      const { value } = event.target;
      this.setState({ updatedAuthor: value });
    };

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.createNewAuthor(this.state.author);
      this.setState({ author: '' });
    };

    handleUpdate = (event) => {
      event.preventDefault();
      const { id } = event.target;
      this.props.updateAuthor(this.state.updatedAuthor, id);
    };

    handleDelete = (event) => {
      event.preventDefault();
      const { id } = event.target;
      console.log(id);
      this.props.deleteAuthor(id);
    }


    render() {
      return (
        <>
                {
                    this.props.authors.map((author, idx) => <form>
                            <li>Name: {author.name}
                                <input
                                    type='text'
                                    value={this.state.updatedAuthor}
                                    onChange={this.handleUpdateAuthor}
                                />
                                <input id={author.id} type='button' value='Update' onClick={this.handleUpdate}/>
                                <input id={author.id} type='button' value='Delete' onClick={this.handleDelete}/>
                            </li>
                        </form>)}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewAuthor: (authorName) => {
      dispatch({
        type: 'AUTHOR_CREATE',
        payload: authorName,
      });
    },
    updateAuthor: (authorName, id) => {
      dispatch({
        type: 'AUTHOR_UPDATE',
        payload: { name: authorName, id },
      });
    },
    deleteAuthor: (id) => {
      dispatch({
        type: 'AUTHOR_DELETE',
        payload: id,
      });
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
