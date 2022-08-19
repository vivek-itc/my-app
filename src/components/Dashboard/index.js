import * as React from 'react';
import Box from '@mui/material/Box';
import YoutubeEmbed from "./../Youtube"
import "./styles.css";


export default function Dashboard() {
    return (
        <Box component="main" sx={{ p: 5 }}>
            <h2>happy krishna janmashtami</h2>
            <YoutubeEmbed embedId="vZxAy0BGbWw" />
            <h4>Thanks</h4>
        </Box>
    )
}