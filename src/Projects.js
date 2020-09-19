import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import NavBar from './NavBar.js'

import webcrawlerImage from './images/project_images/webcrawler.png';
import bunny from './images/project_images/bunny.png';
import systemsRun from './images/project_images/systems_run.png';
import battleship from './images/project_images/battleship.png';
import mastermind from './images/project_images/mastermind.jpg';
import cshell from './images/project_images/cshell.png';
import vrlocity from './images/project_images/vrlocity.png';
import capstone from './images/project_images/capstone.png';
import lzw from './images/project_images/lzw.png';
import hotel_reservation from './images/project_images/hotel_reservation.png';
import senior_project from './images/project_images/senior_project.png';
import power_supply from './images/project_images/power_supply.png';

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
    skillTitle:{
        align: 'center',
        display: 'flex',  
        justifyContent:'center', 
        alignItems:'center',
        textAlign: 'center', 
        paddingTop: '15px',
        color: '#5C5C5C',
        fontFamily: 'Arial',
        marginBottom: '20px',
    },
    project_grid: {
        align: 'center',
        display: 'flex',  
        justifyContent:'center', 
        alignItems:'center',
        textAlign: 'center',
    },
    projectsSection: {
        background: '#E9E0F6',
        fontFamily: 'Arial',
        paddingBottom: '50px',
    },
    image: {
        height: '280px',
        width: '300px',
    },
    code_button: {
        align: 'center',
        justifyContent:'center', 
        textAlign: 'center', 
    },
};

class Projects extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            webcrawler_popup: false,
            image_processing_popup:  false,
            hotel_popup: false,
            systems_run_popup: false,
            battleship_popup: false,
            cshell_popup: false,
            lzw_popup: false,
            senior_project_popup: false,
            capstone_popup: false,
            vrlocity_popup: false,
            mastermind_popup: false,
            power_supply_popup: false,
        }
    }

    greyOut = (project_name) => {

    }

    render = () => {
        const { classes } = this.props;

        return (
            <>
                <div className={classes.projectsSection}>
                    <div class="bgimg">
                        <NavBar />
                        <Typography 
                            className={classes.pageTitle}
                            variant="h2"
                        >
                            Projects
                        </Typography>                    
                    </div>
                    <Grid container spacing={5} style={{marginTop: '30px'}}>
                        <Grid container item xs={12} spacing={0} className={classes.project_grid}>
                            <Grid item xs={3}>
                                <div class="hvrbox" onClick={() => {this.setState({'hotel_popup': true})}}>
                                    <img 
                                        class="hvrbox-layer_bottom"
                                        className={classes.image} 
                                        src={hotel_reservation} 
                                        alt='Hotel Reservation System' 
                                    />
                                    <div class="hvrbox-layer_top">
                                        <div class="hvrbox-text">Hotel Reservation System</div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div class="hvrbox" onClick={() => {this.setState({'capstone_popup': true})}}>
                                    <img 
                                        className={classes.image} 
                                        src={capstone} 
                                        alt='Data Discovery Workbench' 
                                    />
                                    <div class="hvrbox-layer_top">
                                        <div class="hvrbox-text">Data Discovery Workbench</div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div class="hvrbox" onClick={() => {this.setState({'senior_project_popup': true})}}>
                                    <img 
                                        className={classes.image} 
                                        src={senior_project} 
                                        alt='Fish Recognition'
                                    />
                                    <div class="hvrbox-layer_top">
                                        <div class="hvrbox-text">Fish Recognition</div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div class="hvrbox" onClick={() => {this.setState({'vrlocity_popup': true})}}>
                                    <img 
                                        className={classes.image} 
                                        src={vrlocity} 
                                        alt='VRLocity'
                                    />
                                    <div class="hvrbox-layer_top">
                                        <div class="hvrbox-text">VRLocity</div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={0} className={classes.project_grid}>
                            <Grid item xs={3}>
                                <div class="hvrbox" onClick={() => {this.setState({'systems_run_popup': true})}}>
                                    <img 
                                        className={classes.image} 
                                        src={systemsRun} 
                                        alt='Systems Run Game'
                                    />
                                    <div class="hvrbox-layer_top">
                                        <div class="hvrbox-text">Systems Run Game</div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div class="hvrbox" onClick={() => {this.setState({'lzw_popup': true})}}>
                                    <img 
                                        className={classes.image} 
                                        src={lzw} 
                                        alt='LZW' 
                                    />
                                    <div class="hvrbox-layer_top">
                                        <div class="hvrbox-text">LZW</div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div class="hvrbox" onClick={() => {this.setState({'cshell_popup': true})}}>
                                    <img 
                                        className={classes.image} 
                                        src={cshell} 
                                        alt='C Shell'
                                    />
                                    <div class="hvrbox-layer_top">
                                        <div class="hvrbox-text">C Shell</div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div class="hvrbox" onClick={() => {this.setState({'battleship_popup': true})}}>
                                    <img 
                                        className={classes.image} 
                                        src={battleship} 
                                        alt='Battleship Game'
                                    />
                                    <div class="hvrbox-layer_top">
                                        <div class="hvrbox-text">Battleship Game</div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={0} className={classes.project_grid}>
                            <Grid item xs={3}>
                                <div class="hvrbox" onClick={() => {this.setState({'mastermind_popup': true})}}>
                                    <img 
                                        className={classes.image} 
                                        src={mastermind} 
                                        alt='Mastermind Game'
                                    />
                                    <div class="hvrbox-layer_top">
                                        <div class="hvrbox-text">Mastermind Game</div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div class="hvrbox" onClick={() => {this.setState({'power_supply_popup': true})}}>
                                    <img 
                                        className={classes.image} 
                                        src={power_supply} 
                                        alt='Power Supply IME 156'
                                    />
                                    <div class="hvrbox-layer_top">
                                        <div class="hvrbox-text">Power Supply</div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div class="hvrbox" onClick={() => {this.setState({'webcrawler_popup': true})}}>
                                    <img 
                                        className={classes.image} 
                                        src={webcrawlerImage} 
                                        alt='web crawler' 
                                    />
                                    <div class="hvrbox-layer_top">
                                        <div class="hvrbox-text">Web Crawler</div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div class="hvrbox" onClick={() => {this.setState({'image_processing_popup': true})}}>
                                    <img 
                                        className={classes.image} 
                                        src={bunny} 
                                        alt='CPE 101'
                                    />
                                    <div class="hvrbox-layer_top">
                                        <div class="hvrbox-text">Image Processing</div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>

                {/* Web Crawler */}
                <Dialog open={this.state.webcrawler_popup}>
                    <DialogTitle>Web Crawler</DialogTitle>
                    <DialogContent>
                        <DialogContentText><i>
                            Python
                        </i></DialogContentText>
                        <DialogContentText>
                            <ul>
                                <li>
                                    Developed an automated script in Java that takes an initial input (URL), 
                                    then downloads the robots.txt and builds an exceptions list. The script scans 
                                    the page for URL links, and determines if the URL is allowed: If the URL 
                                    is allowed, the script adds the URL to the URL queue. The script visits
                                    the URL in the queue and repeat the process.
                                </li>
                            </ul>
                        </DialogContentText>
                    </DialogContent>
                    <DialogContent className={classes.code_button}>
                        <Button 
                            variant="contained" 
                            color="primary"
                            href="https://github.com/lawhvictoria/Webcrawler"
                            target="_blank"
                            className={classes.code_button}
                        >
                            Code Repository
                        </Button>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=> {this.setState({webcrawler_popup: false})}}>Close</Button>
                    </DialogActions>
                </Dialog>


                {/* Image Processing */}
                <Dialog open={this.state.image_processing_popup}>
                    <DialogTitle>Image Processing</DialogTitle>
                    <DialogContent>
                        <DialogContentText><i>
                            Python
                        </i></DialogContentText>
                        <DialogContentText>
                            <ul>
                                <li>
                                    Created a Python program to draw spheres with different shades of 
                                    colors along with diffuse, light, ambient, shadow, specular, and 
                                    roughness by calculating the size of each pixel, and the distance 
                                    between the eye-point and object itself. I programmed the spheres 
                                    through the use of Object Oriented Programming and Unit testing.
                                </li>
                            </ul>
                        </DialogContentText>
                    </DialogContent>
                    <DialogContent className={classes.code_button}>
                        <Button 
                            variant="contained" 
                            color="primary"
                            href="https://github.com/lawhvictoria/image_processing"
                            target="_blank"
                            className={classes.code_button}
                        >
                            Code Repository
                        </Button>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=> {this.setState({image_processing_popup: false})}}>Close</Button>
                    </DialogActions>
                </Dialog>

                {/* Hotel Reservation System */}
                <Dialog open={this.state.hotel_popup}>
                    <DialogTitle>Hotel Reservation System</DialogTitle>
                    <DialogContent>
                        <DialogContentText><i>
                            Java | MySQL | JDBC
                        </i></DialogContentText>
                        <DialogContentText>
                            <ul>
                                <li>
                                    Built and designed a Java application for a hotel reservation system 
                                    using the JDBC API to connect to a MySQL database to execute queries, 
                                    and parse through and manipulate the outputted result set. 
                                </li>
                            </ul>
                        </DialogContentText>
                    </DialogContent>
                    <DialogContent className={classes.code_button}>
                        <Button 
                            variant="contained" 
                            color="primary"
                            href="https://github.com/lawhvictoria/Hotel-Reservation-System"
                            target="_blank"
                            className={classes.code_button}
                        >
                            Code Repository
                        </Button>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=> {this.setState({hotel_popup: false})}}>Close</Button>
                    </DialogActions>
                </Dialog>

                {/* Battleship */}
                <Dialog open={this.state.battleship_popup}>
                    <DialogTitle>Battleship Game</DialogTitle>
                    <DialogContent>
                        <DialogContentText><i>
                            C
                        </i></DialogContentText>
                        <DialogContentText>
                            <ul>
                                <li>
                                    Developed a battleship host that communicates with two players using
                                    synchronized pipes and displays real-time game statistics
                                </li>
                            </ul>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=> {this.setState({battleship_popup: false})}}>Close</Button>
                    </DialogActions>
                </Dialog>

                {/* Systems Run */}
                <Dialog open={this.state.systems_run_popup}>
                    <DialogTitle>Systems Run Game</DialogTitle>
                    <DialogContent>
                        <DialogContentText><i>
                            Java
                        </i></DialogContentText>
                        <DialogContentText>
                            <ul>
                                <li>
                                    Wrote user stories, functional and nonfunctional requirements to 
                                    define how I should implement the game.
                                </li>
                                <li>
                                    Created UI prototypes, use cases diagrams, class diagrams, sequence 
                                    diagram, and state diagram to reflect the functionalities of the
                                    different buttons and controls, and to represent the different 
                                    processes and objects that live simultaneously during the game.
                                </li>
                                <li>
                                    Implemented the game in Java, and tested the functionalities 
                                    through integration testing, regression testing, and acceptance testing.
                                </li>
                            </ul>
                        </DialogContentText>
                    </DialogContent>
                    <DialogContent className={classes.code_button}>
                        <Button 
                            variant="contained" 
                            color="primary"
                            href="https://github.com/lawhvictoria/SystemsRun"
                            target="_blank"
                            className={classes.code_button}
                        >
                            Code Repository
                        </Button>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=> {this.setState({systems_run_popup: false})}}>Close</Button>
                    </DialogActions>
                </Dialog>

                {/* C Shell */}
                <Dialog open={this.state.cshell_popup}>
                    <DialogTitle>C Shell</DialogTitle>
                    <DialogContent>
                        <DialogContentText><i>
                            C
                        </i></DialogContentText>
                        <DialogContentText>
                            <ul>
                                <li>
                                    Wrote a basic shell program like bash that is able to execute single 
                                    commands and their arguments as well as pipelines of commands and 
                                    their arguments. It also supports redirection of stdin and stdout.
                                </li>
                            </ul>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=> {this.setState({cshell_popup: false})}}>Close</Button>
                    </DialogActions>
                </Dialog>

                {/* LZW */}
                <Dialog open={this.state.lzw_popup}>
                    <DialogTitle>LZW Compression Algorithm</DialogTitle>
                    <DialogContent>
                        <DialogContentText><i>
                            C
                        </i></DialogContentText>
                        <DialogContentText>
                            <ul>
                                <li>
                                    Wrote a fully-featured program that compresses given files using the LZW algorithm. 
                                </li>
                            </ul>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=> {this.setState({lzw_popup: false})}}>Close</Button>
                    </DialogActions>
                </Dialog>

                {/* Mastermind */}
                <Dialog open={this.state.mastermind_popup}>
                    <DialogTitle>Mastermind Game</DialogTitle>
                    <DialogContent>
                        <DialogContentText><i>
                            C
                        </i></DialogContentText>
                        <DialogContentText>
                            <ul>
                                <li>
                                    Wrote a program that that emulates the game known as Mastermind.
                                </li>
                            </ul>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=> {this.setState({mastermind_popup: false})}}>Close</Button>
                    </DialogActions>
                </Dialog>

                {/* Senior Project */}
                <Dialog open={this.state.senior_project_popup}>
                    <DialogTitle>Deep Learning in Fish Recognition</DialogTitle>
                    <DialogContent>
                        <DialogContentText><i>
                            Firebase | GCP | Python
                        </i></DialogContentText>
                        <DialogContentText>
                            <ul>
                                <li>
                                    Design and implemented a web application that can identify the 
                                    different species of fish local to the Central Coast of California.
                                </li>
                                <li>
                                    Applied supervised learning through Google Cloud Platform AutoML 
                                    to train and develop a machine-learning model.
                                </li>
                                <li>
                                    Hosted and deployed the application using Firebase.
                                </li>
                            </ul>
                        </DialogContentText>
                    </DialogContent>
                    <DialogContent className={classes.code_button}>
                        <Button 
                            variant="contained" 
                            color="primary"
                            href="https://drive.google.com/file/d/1YkTwgYy8tSGrboDfXcdtzDRk9uIOhNy8/view?usp=sharing"
                            target="_blank"
                            className={classes.code_button}
                        >
                            Final Paper
                        </Button>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=> {this.setState({senior_project_popup: false})}}>Close</Button>
                    </DialogActions>
                </Dialog>

                {/* Data Discovery Workbench */}
                <Dialog open={this.state.capstone_popup}>
                    <DialogTitle>Data Discovery Workbench</DialogTitle>
                    <DialogContent>
                        <DialogContentText><i>
                            Python | ReactJS
                        </i></DialogContentText>
                        <DialogContentText>
                            <ul>
                                <li>
                                    Selected data sets will be fed into the Data Classifier which will 
                                    use established Machine Learning techniques to identify classes of 
                                    information contained in the data sets.
                                </li>
                                <li>
                                    I created endpoints to connect the frontend to the backend using Python 
                                    REST APIs With Flask.
                                </li>
                                <li>
                                    I created a GitBook to instruct new users on how to use the application, 
                                    list the licensing, and receive feedback on the application.
                                </li>
                                <li>
                                    Tested the application and fixed bugs in the application.
                                </li>
                            </ul>
                        </DialogContentText>
                    </DialogContent>
                    <DialogContent className={classes.code_button}>
                        <Button 
                            variant="contained" 
                            color="primary"
                            href="https://github.com/Flashhhhhhhhhh"
                            target="_blank"
                            className={classes.code_button}
                        >
                            Code Repository
                        </Button>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=> {this.setState({capstone_popup: false})}}>Close</Button>
                    </DialogActions>
                </Dialog>

                {/* VRlocity */}
                <Dialog open={this.state.vrlocity_popup}>
                    <DialogTitle>VRLocity</DialogTitle>
                    <DialogContent>
                        <DialogContentText><i>
                            HTC Vive | Oculus Rift
                        </i></DialogContentText>
                        <DialogContentText>
                            <ul>
                                <li>
                                    Designed, implemented, and tested a series of tasks to gauge the 
                                    efficiency of a VR system versus a computer through the use of 
                                    a HTC Vive and a MacBook Pro. 
                                </li>
                                <li>
                                Created a series of sequence diagrams to track the flow of the tasks, 
                                and to eliminate any possible bias in during testing.
                                </li>
                                <li>
                                    Derived a model for the interactions for an Oculus Rift controller to 
                                    use in the Google Earth VR application.
                                </li>
                            </ul>
                        </DialogContentText>
                    </DialogContent>
                    <DialogContent className={classes.code_button}>
                        <Button 
                            variant="contained" 
                            color="primary"
                            href="https://drive.google.com/file/d/1SvXuUFe8B-e6cSQ37P5grivm0NLYtUvj/view?usp=sharing"
                            target="_blank"
                            className={classes.code_button}
                        >
                            Final Paper
                        </Button>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=> {this.setState({vrlocity_popup: false})}}>Close</Button>
                    </DialogActions>
                </Dialog>

                {/* Power Supply */}
                <Dialog open={this.state.power_supply_popup}>
                    <DialogTitle>Power Supply</DialogTitle>
                    <DialogContent>
                        <DialogContentText><i>
                            Java | Arudino IDE | DipTrace
                        </i></DialogContentText>
                        <DialogContentText>
                            <ul>
                                <li>
                                    Constructed a working, dual-output, variable DC power supply.
                                </li>
                                <li>
                                    Used concepts such as CAD/CAM design to design a Power Supply 
                                    Printed Circuit Board using a software tool named DipTrace.
                                </li>
                                <li>
                                    Soldered resistors onto PCB, Crimp wires, and practice various techniques.
                                </li>
                            </ul>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=> {this.setState({power_supply_popup: false})}}>Close</Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

export default withStyles(styles)(Projects);