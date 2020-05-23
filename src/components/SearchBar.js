import React from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value,
        })
    }

    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();
    }

    render() {
        return (
            <Paper elevation={16} style={{ padding: "20px", backgroundColor: '#0e0e10' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange} inputProps={{ style: { fontSize: 35 } }} InputLabelProps={{ style: { fontSize: 35 } }} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar;