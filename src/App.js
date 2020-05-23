import React from 'react';

import { Grid, Paper } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { SearchBar, VideoList, VideoDetail } from './components';

import youtube from './api/youtube';


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    theme = createMuiTheme({
        palette: {
            type: "light",
        }
    })

    componentDidMount() {
        this.handleSubmit('javascript')
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: "",
                q: searchTerm,
            }
        })

        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    }

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video,
        })
    }

    render() {
        const { selectedVideo, videos } = this.state;
        return (
            <ThemeProvider theme={this.theme}>
                <Paper>
                    <Grid justify="center" container spacing={10}>
                        <Grid item xs={12}>
                            <Grid container spacing={10}>
                                <Grid item xs={12}>
                                    <SearchBar onFormSubmit={this.handleSubmit} />
                                </Grid>
                                <Grid item xs={8}>
                                    <VideoDetail video={selectedVideo} />
                                </Grid>
                                <Grid item xs={4}>
                                    <VideoList videos={videos} onVideoSelect={this.onVideoSelect}></VideoList>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </ThemeProvider>
        )
    }
}

export default App;