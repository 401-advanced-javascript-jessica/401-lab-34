import React from 'react';
import { connect } from 'react-redux';

class Author extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            author: this.props.author.name,
            authorUpdate: '',
            id: this.props.author.id
        }

    }

    handleChange = (event) => {
        const {value} = event.target;
        this.setState({authorUpdate: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
        const {value} = event.target;

        if(value === 'Update'){
            this.props.updateAuthor(this.state.newAuthor);
        } else if (value === 'Delete'){
            this.props.deleteAuthor(this.state.author)
        }
    };

    render(){
        return (
                    <form onSubmit = {this.handleSubmit}>
                        <li id={this.state.id}>Name: {this.state.author}
                            <input
                                type='text'
                                value={this.state.authorUpdate}
                                onChange={this.handleChange}
                                placeholder={this.state.author}
                            />
                            <input type='button' value='Update' onClick="handleUpdate"/>
                            <input type='button' value='Delete' onClick="handleDelete"/>
                        </li>
                    </form>

                )
    }



}

export default Author;