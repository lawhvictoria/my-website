import React from 'react';
import Typist from 'react-typist';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import 'react-typist/dist/Typist.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ParticlesBg from 'particles-bg';
import NavBar from './NavBar.js'

import aboutme0 from './images/aboutme/aboutme0.jpg';
import aboutme1 from './images/aboutme/homeImage.jpg';
import aboutme3 from './images/aboutme/aboutme3.jpg';
import aboutme5 from './images/aboutme/aboutme5.jpg';
import aboutme6 from './images/aboutme/aboutme6.jpg';
import aboutme7 from './images/aboutme/aboutme7.jpg';

const styles = {
    title: {
        align: 'center',
        display: 'flex',  
        justifyContent:'center', 
        alignItems:'center',
        textAlign: 'center', 
        fontFamily: 'Arial',
        color: '#5C5C5C',
        fontSize: '80px',
    },
    aboutMe: {
        width: '75%', 
        alignContent: 'center', 
        justifyContent:'center', 
        align: 'center', 
        alignItems:'center', 
        textAlign: 'center', 
        display: 'flex', 
        margin: 'auto',
        background: 'transparent',
        backgroundColor: 'transparent',
    },
};

class Home extends React.Component {
    render = () => {
        const { classes } = this.props;

        return (
            <>
            <NavBar />
            <div style={{ alignContent: 'center', justifyContent:'center', align: 'center', alignItems:'center', textAlign: 'center', alignSelf: 'center' }}>
                <div style={{ alignContent: 'center', justifyContent:'center', align: 'center', alignItems:'center', textAlign: 'center', alignSelf: 'center' }}>
                    <Typography variant="h1" component="h1" className={classes.title}>
                        Hello World!
                    </Typography>
                    <Typography variant="h1" component="h1" className={classes.title} style={{paddingTop: '15px'}}>
                        <Typist style={{blink: true, show: true, element: '|', hideWhenDone: false, hideWhenDoneDelay: 3 }}>
                            > My name is Victoria Law
                        </Typist>
                    </Typography>
                    <div className="carousel-outer" 
                        style={{ alignContent: 'center', 
                                justifyContent:'center', 
                                align: 'center', 
                                alignItems:'center', 
                                textAlign: 'center', 
                                alignSelf: 'center',
                                display: 'flex',
                                paddingTop: '45px', 
                                paddingBottom: '45px'
                            }}>
                        <Carousel
                            showArrows={false}
                            showStatus={false}
                            showIndicators={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            showThumbs={false}
                            width="260px"
                            style={{ justifyContent:'center', align: 'center', alignItems:'center', textAlign: 'center' }}
                        >
                            <img style={{ borderRadius: 2000/ 2 }} src={aboutme1} alt=''/>
                            <img style={{ borderRadius: 2000/ 2 }} src={aboutme0} alt=''/>
                            <img style={{ borderRadius: 2000/ 2 }} src={aboutme3} alt=''/>
                            <img style={{ borderRadius: 2000/ 2 }} src={aboutme5} alt=''/>
                            <img style={{ borderRadius: 2000/ 2 }} src={aboutme6} alt=''/>
                            <img style={{ borderRadius: 2000/ 2 }} src={aboutme7} alt=''/>
                        </Carousel>
                    </div>
                    <div className={classes.aboutMe}>
                        <Typography variant="body1" component="body1" style={{color: '#5C5C5C', fontSize: '21px' }}>
                            I graduated from Cal Poly San Luis Obispo with a Bachelor of Science 
                            degree in Software Engineering. I am currently a full stack 
                            engineer at NBCUniversal. I am driven by my sense of curiosity 
                            to explore and experiment with new technologies. The world constantly 
                            fascinates me, and I am motivated to be part of the few people at the 
                            frontier of human knowledge. In my free time, I like to travel the world
                            and cook up different recipes.
                        </Typography>
                    </div>
                </div>
                <ParticlesBg color="#AA78D9" num={150} type="cobweb" bg={true} />
            </div>
            </>
        );
    }
}


export default withStyles(styles)(Home);