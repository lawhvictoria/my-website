import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from './NavBar.js'

import JavaLogo from './images/skills_logo/languages/java.png';
import SmlLogo from './images/skills_logo/languages/sml.png';
import ReactLogo from './images/skills_logo/languages/react.png';
import PythonLogo from './images/skills_logo/languages/python.png';
import MysqlLogo from './images/skills_logo/languages/mysql.png';
import MaterialUILogo from './images/skills_logo/languages/materialui.png';
import JSLogo from './images/skills_logo/languages/js.png';
import HtmlLogo from './images/skills_logo/languages/html.png';
import CssLogo from './images/skills_logo/languages/css.png';
import CLogo from './images/skills_logo/languages/c.png';

import VscodeLogo from './images/skills_logo/tools/vscode.png';
import SeleniumLogo from './images/skills_logo/tools/selenium.png';
import PowerbiLogo from './images/skills_logo/tools/powerbi.png';
import PostgresqlLogo from './images/skills_logo/tools/postgresql.png';
import GithubLogo from './images/skills_logo/tools/github.png';
import GcpLogo from './images/skills_logo/tools/gcp.png';
import AwsLogo from './images/skills_logo/tools/aws.png';
import ArduinoLogo from './images/skills_logo/tools/arduino.png';
import PostmanLogo from './images/skills_logo/tools/postman.png';
import JiraLogo from './images/skills_logo/tools/jira.png';
import GitLogo from './images/skills_logo/tools/git.png';
import OfficeLogo from './images/skills_logo/tools/office.png';
import SplunkLogo from './images/skills_logo/tools/splunk.png'

const styles = {
    pageTitle: {
        align: 'center',
        display: 'flex',  
        justifyContent:'center', 
        alignItems:'center',
        textAlign: 'center',
        paddingTop: '60px',
        paddingBottom: '85px',
        color: '#5C5C5C',
        fontFamily: 'Arial',
    },
    title: {
        align: 'center',
        display: 'flex',  
        justifyContent:'center', 
        alignItems:'center',
        textAlign: 'center', 
        color: '#5C5C5C',
    },
    language: {
        align: 'center',
        display: 'flex',  
        justifyContent:'center', 
        alignItems:'center',
        textAlign: 'center',
    },
    center: {
        align: 'center',
        justifyContent:'center', 
        alignItems:'center',
        textAlign: 'center',
        paddingRight: '100px',
        paddingLeft: '100px'
    },
    left: {
        align: 'left',
        justifyContent:'left', 
        alignItems:'left',
        textAlign: 'left',
    },
    logos: {
        align: 'center',
        display: 'inline-block',  
        justifyContent:'center', 
        alignItems:'center',
        textAlign: 'center', 
        height: '125px',
    },
    firstPaperBox: {
        backgroundColor: 'rgba(255,255,255,0.55)',
        marginLeft: '30px',
        marginRight: '30px',
        marginBottom: '50px',
        paddingTop: '25px',
        paddingBottom: '25px',
    },
    thirdPaperBox: {
        backgroundColor: 'rgba(255,255,255,0.55)',
        marginLeft: '30px',
        marginRight: '30px',
        marginBottom: '50px',
        padding: '15px',
        paddingRight: '18px',
        color: '#5C5C5C',
        align: 'center',
        display: 'flex',  
        justifyContent:'center', 
        alignItems:'center',
        fontSize: '18px',
    }
}

class Skills extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
        }
    }

    render = () => {
        const { classes } = this.props;

        return (
            <div style={{background: '#DFDEF7'}}>
                <div class="bgimg">
                        <NavBar />
                        <Typography 
                            className={classes.pageTitle}
                            variant="h2"
                        >
                            Skills
                        </Typography>                    
                </div>
                <div style={{paddingTop: '40px', paddingBottom: '40px'}}>
                    <Typography variant='h4' className={classes.title} style={{marginBottom: '20px'}}>
                        Software Engineering
                    </Typography>
                    <Grid container spacing={1} className={classes.center}>
                        <Grid item xs={6} className={classes.center} style={{color: '#5C5C5C'}}>
                            <Typography variant='h6' style={{paddingBottom: '6px'}}>UML</Typography>
                            <Typography variant='h6' style={{paddingBottom: '6px'}}>Functional Requirements</Typography>
                            <Typography variant='h6' style={{paddingBottom: '6px'}}>Non-functional Requirements</Typography>
                            <Typography variant='h6' style={{paddingBottom: '6px'}}>User Stories</Typography>
                            <Typography variant='h6' style={{paddingBottom: '6px'}}>Automated Continuous Integration</Typography>
                            <Typography variant='h6' style={{paddingBottom: '6px'}}>Decision-making Techniques</Typography>
                        </Grid>
                        <Grid item xs={6} className={classes.center} style={{color: '#5C5C5C'}}>
                            <Typography variant='h6' style={{paddingBottom: '6px'}}>Design Patterns</Typography>
                            <Typography variant='h6' style={{paddingBottom: '6px'}}>User Interface Prototyping</Typography>
                            <Typography variant='h6' style={{paddingBottom: '6px'}}>Unit/Regression/Integration Testing</Typography>
                            <Typography variant='h6' style={{paddingBottom: '6px'}}>Acceptance/GUI/Coverage Testing</Typography>
                            <Typography variant='h6' style={{paddingBottom: '6px'}}>Analytics</Typography>
                        </Grid>
                    </Grid>
                </div>

                <div style={{paddingTop: '40px', paddingBottom: '40px', backgroundColor: '#CFCEF3'}}>
                    <Typography variant='h4' className={classes.title} style={{marginBottom: '40px'}}>
                        Languages
                    </Typography>
                    <Typography variant='h5' className={classes.title} style={{marginBottom: '20px'}}>
                        Backend
                    </Typography>
                    <Grid container spacing={1} className={classes.center}>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={CLogo} alt='C' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">C</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={JavaLogo} alt='Java' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">Java</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={MysqlLogo} alt='MySQL' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">MySQL</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={PostgresqlLogo} alt='Postgresql' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">PostgreSQL</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={PythonLogo} alt='Python' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">Python</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={SmlLogo} alt='SML' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">Standard ML</div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Typography variant='h5' className={classes.title} style={{marginBottom: '20px', marginTop: '20px'}}>
                        Frontend
                    </Typography>
                    <Grid container spacing={1} className={classes.center}>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={CssLogo} alt='CSS' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">CSS</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={HtmlLogo} alt='HTML' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">HTML</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={JSLogo} alt='JavaScript' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">JavaScript</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={MaterialUILogo} alt='Material UI' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">Material UI</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={ReactLogo} alt='ReactJS' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">ReactJS</div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <div style={{paddingTop: '40px', paddingBottom: '40px'}}>
                    <Typography variant='h4' className={classes.title} style={{marginBottom: '40px'}}>
                        Software / Tools
                    </Typography>
                    <Grid container spacing={1} className={classes.center}>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={AwsLogo} alt='AWS' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">AWS</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={ArduinoLogo} alt='Arduino' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">Arduino</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={GcpLogo} alt='GCP' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">GCP</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={GitLogo} alt='Git' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">Git</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={GithubLogo} alt='Github' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">Github</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={JiraLogo} alt='Jira' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">JIRA</div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} className={classes.center} style={{marginTop:'55px'}}>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={OfficeLogo} alt='Office' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">Microsoft Office</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={PostmanLogo} alt='Postman' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">Postman</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={PowerbiLogo} alt='Powerbi' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">Power BI</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={SeleniumLogo} alt='Selenium' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">Selenium</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={SplunkLogo} alt='Splunk' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">Splunk</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div class="skillsbox">
                                <img src={VscodeLogo} alt='Vscode' className={classes.logos} />
                                <div class="skillsbox-layer_top">
                                    <div class="skillsbox-text">VS Code</div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Skills);