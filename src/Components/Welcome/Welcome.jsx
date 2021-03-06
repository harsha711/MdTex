import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import OpenMarkdown from '../OpenMarkdown/OpenMarkdown'
import OpenTex from '../OpenTex/OpenTex'
import './Welcome.css'
import New from './New';
import Launch from './Open'
import {Container, Grid, Typography} from '@material-ui/core'
import { Add, InfoOutlined, GitHub, MicNone } from '@material-ui/icons';
class Welcome extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/newmd" component={Md} />
                    <Route path="/newtex" component={Tex} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>       

            
                
        );
    }
}


const Home = () => (
    <Container className="something">
    <Grid
     container
     direction="row"
     spacing="1"
     justify="flex-start"
     >
         <Grid item xs={3}>
            <New />
         </Grid>
         <Grid item xs={3}>
            <Launch />
         </Grid>
         <Grid item xs={3}>
             <InfoOutlined style={{ fontSize: 55 }}></InfoOutlined>
             <Typography variant="h6" component="h6" gutterBottom>
             Help
             </Typography>
         </Grid>
         <Grid item xs={3}>
             <GitHub style={{ fontSize: 55 }}></GitHub>
             <Typography variant="h6" component="h6" gutterBottom>
             Github
             </Typography>
         </Grid>
     </Grid>
</Container>

)

const Md = () => (
    <OpenMarkdown markdown="#this is markdown"></OpenMarkdown>
)

const Tex = () => (
    <OpenTex tex="tex imdeed"></OpenTex>
)

export default Welcome;