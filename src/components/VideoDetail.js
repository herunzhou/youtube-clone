import React from 'react';

import { Paper, Typography } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const VideoDetail = ({ video }) => {
    if (!video) return <div>Loading...</div>

    const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`;

    const localTheme = createMuiTheme({
        palette: {
            type: "light",
        }
    })

    return (
        <React.Fragment>
            <ThemeProvider theme={localTheme}>
                <Paper elevation={16} style={{ height: '70%', backgroundColor: '#0e0e10' }}>
                    <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={videoSRC} />
                </Paper>
                <Paper elevation={16} style={{ padding: '15px', backgroundColor: '#0e0e10', color: 'white' }}>
                    <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle2">{video.snippet.description}</Typography>
                </Paper>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default VideoDetail;