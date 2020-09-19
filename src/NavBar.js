import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import BuildIcon from '@material-ui/icons/Build';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import Grid from '@material-ui/core/Grid';
import WorkIcon from '@material-ui/icons/Work';

import { Link } from "react-router-dom";

import Email from './emailToolbar.png';
import GithubLogo from './githubToolbar.png';
import LinkedInLogo from './linkedinToolbar.png';

const useStyles = theme => ({
  menuButton: {
    marginRight: theme.spacing(9),
    color: '#5C5C5C',
  },
  leftContainer: {
    justifyContent: 'left',
    alignItems: 'left',
    align: 'left',
    display: 'flex',  
    textAlign: 'left', 
    float: 'left',
  },
  rightContainer: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    align: 'right',
    display: 'flex',  
    textAlign: 'right', 
    float: 'right',
    
  },
  title: {
    flexGrow: 1,
    variant: "h2",
    fontSize: '20px',
    fontFamily: 'Arial',
    color: '#5C5C5C',
    fontWeight: "fontWeightBold",
  },
  appbar: {
    // background: 'transparent',
  },
  buttons: {
    fontSize: '25px',
  }
});

class NavBar extends React.Component{

  constructor(props)
  {
      super(props);
      this.state = {
      }
  }

  render = () => {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="static" elevation={0} style={{ background: 'transparent', boxShadow: 'none'}}>
          <Toolbar>
            <Grid container spacing={3}>
              <Grid item xs={9} className={classes.leftContainer}>
                {/* Home */}
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button 
                      edge="start" 
                      className={classes.menuButton} 
                      aria-label="home"
                    >
                      <HomeRoundedIcon className={classes.buttons} />
                      <Typography className={classes.title}>
                        &nbsp;Home
                      </Typography>
                    </Button>
                  </Link>

                {/* Resume */}
                <Button 
                  edge="start" 
                  className={classes.menuButton} 
                  aria-label="resume"
                  onClick={event => window.open('https://drive.google.com/file/d/1id4mbLXODUvrWLKtsyObm7Uo8Fus8ZFH/view?usp=sharing')}
                >
                  <DescriptionRoundedIcon className={classes.buttons} />
                  <Typography className={classes.title}>
                    &nbsp;Resume
                  </Typography>
                </Button>

                {/* Experiences */}
                <Link to="/experiences" style={{ textDecoration: 'none' }}>
                  <Button 
                    edge="start" 
                    className={classes.menuButton} 
                    aria-label="experience" 
                  >
                    <WorkIcon className={classes.buttons} />
                    <Typography className={classes.title}>
                      &nbsp;Experiences
                    </Typography>
                  </Button>
                </Link>

                {/* Skills */}
                <Link to="/skills" style={{ textDecoration: 'none' }}>
                  <Button 
                    edge="start" 
                    className={classes.menuButton} 
                    aria-label="skills" 
                  >
                    <BuildIcon className={classes.buttons} />
                    <Typography className={classes.title}>
                      &nbsp;Skills
                    </Typography>
                  </Button>
                </Link>

                {/* Projects */}
                <Link to="/projects" style={{ textDecoration: 'none' }}>
                  <Button 
                    edge="start" 
                    className={classes.menuButton} 
                    aria-label="projects" 
                  >
                    <CodeRoundedIcon className={classes.buttons} />
                    <Typography className={classes.title}>
                      &nbsp;Projects
                    </Typography>
                  </Button>
                </Link>
              </Grid>


              <Grid item xs={3} className={classes.rightContainer}>
                <a href="mailto:lawhvictoria@gmail.com" style={{ alignItems: 'right', paddingRight: '24px' }}>
                  <img src={Email} alt="email" height='30px' />
                </a>

                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/lawvictoria/" target="_blank" style={{paddingRight: '20px'}}>
                  <img src={LinkedInLogo} alt="linkedIn" height='30px' />
                </a>

                <a rel="noopener noreferrer" href="https://github.com/lawhvictoria" target="_blank">
                  <img src={GithubLogo} alt="github" height='33px' />
                </a>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles)(NavBar);