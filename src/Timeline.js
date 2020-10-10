import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/styles';
import ReactCardFlip from 'react-card-flip';
import { Typography } from '@material-ui/core';
import NavBar from './NavBar.js'

import NBCLogo from './images/company_logos/nbc.png';
import CPLogo from './images/company_logos/calpoly.png';
import MCLogo from './images/company_logos/mastercard.png';
import KaiserLogo from './images/company_logos/kaiser.png';
import QualcommLogo from './images/company_logos/qualcomm.png'

const styles = {
    pageTitle: {
        align: 'center',
        justifyContent:'center', 
        alignItems:'center',
        textAlign: 'center', 
        paddingTop: '60px',
        paddingBottom: '85px',
        color: '#5C5C5C',
        fontFamily: 'Arial',
        marginBottom: '20px',
    },
    projectsSection: {
        background: '#E3DAE7',
        fontFamily: 'Arial',
        paddingBottom: '50px',
    },
    position: {
        fontFamily: 'Arial',
        color: '#5C5C5C',
        align: 'center',
        justifyContent:'center', 
        alignItems:'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '25px',
    },
    location: {
        fontFamily: 'Arial',
        color: '#8D8D8D',
        align: 'center',
        justifyContent:'center', 
        alignItems:'center',
        textAlign: 'center',
        fontStyle: "italic",
        fontSize: '20px',
    },
    description: {
        fontFamily: 'Arial',
        color: '#5C5C5C',
        align: 'left',
        justifyContent:'left', 
        alignItems:'left',
        textAlign: 'left',
        fontSize: '16px',
    },
};

const NBCIcon = () => (
    <Icon>
        <img 
            src={NBCLogo} 
            height={53} 
            alt="nbc logo" 
            style={{width: '100%', height: '100%', objectFit: 'contain'}}
        />
    </Icon>
);
const CPIcon = () => (
    <Icon>
        <img style={{width: '100%', height: '100%', objectFit: 'contain'}} src={CPLogo} height={60} alt="cal poly logo" />
    </Icon>
);
const MCIcon = () => (
    <Icon>
        <img style={{width: '100%', height: '100%', objectFit: 'contain'}} src={MCLogo} height={32} alt="mastercard logo" />
    </Icon>
);
const KaiserIcon = () => (
    <Icon>
        <img style={{width: '100%', height: '100%', objectFit: 'contain'}} src={KaiserLogo} height={43} alt="kaiser logo" />
    </Icon>
);
const QualcommIcon = () => (
    <Icon>
        <img style={{width: '100%', height: '100%', objectFit: 'contain'}} src={QualcommLogo} height={43} alt="qualcomm logo" />
    </Icon>
);

class Timeline extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            threatIntel: false,
            adSalesTech: false,
            dataIntern: false,
            mcIntern: false,
            ta: false,
            kaiserIntern: false,
            qualcomm: false,
        }
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
                            Experiences
                        </Typography>                    
                    </div>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#FFFFFF', color: '#5C5C5C', fontFamily: 'Nunito' }}
                            iconStyle={{ background: '#FFFFFF', paddingTop: '11px' }}
                            icon={<NBCIcon />}
                        >
                            <ReactCardFlip isFlipped={this.state.adSalesTech} flipDirection="horizontal">
                                <div onMouseEnter={() => {this.setState({adSalesTech: true})}}>
                                    <h1 className={classes.position}>Full Stack Engineer</h1>
                                    <h2 className={classes.location} style={{color: '#7D7D7D'}}>NBCUniversal | New York, NY</h2>
                                    <h2 className={classes.location} style={{color: '#7D7D7D'}}>March 2020 - Present</h2>
                                </div>
                                <div onMouseLeave={() => {this.setState({adSalesTech: false})}}>
                                    <ul className={classes.description}>
                                        <li>
                                            Developed a cloud-based (AWS) internal web application, F.I.T., that 
                                            allows the business to efficiently manage the “Own the Moment” YouTube 
                                            ad product, saving the company $171,000+ annually.
                                        </li>
                                        <li>
                                            Created a service that automates the categorization of the company’s 
                                            expansive YouTube portfolio on their ad server, allowing the business 
                                            to quickly analyze inventory.
                                        </li>
                                        <li>
                                            Set up a cronjob that analyzes the categorized content on the ad server using a 
                                            customized depth-first search algorithm.
                                        </li>
                                        <li>
                                            Built a propriety search engine that allows the business to quickly and 
                                            accurately examine business-viable content across all NBCU YouTube content 
                                            owners/brands.
                                        </li>
                                        <li>
                                            Setup and deployed several microservices into AWS EC2 instances to support F.I.T.
                                        </li>
                                        <li>
                                            Encrypted all the AWS services that the application uses including S3, RDS, and EC2.
                                        </li>
                                    </ul>
                                </div>
                            </ReactCardFlip>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#FFFFFF', color: '#5C5C5C', fontFamily: 'Nunito' }}
                                iconStyle={{ background: '#FFFFFF', paddingTop: '11px' }}
                                icon={<NBCIcon />}
                        >
                            <ReactCardFlip isFlipped={this.state.threatIntel} flipDirection="horizontal">
                                <div onMouseEnter={() => {this.setState({threatIntel: true})}}>
                                    <h1 className={classes.position}>Threat Intelligence Analyst</h1>
                                    <h2 className={classes.location} style={{color: '#7D7D7D'}}>NBCUniversal | Universal City, CA</h2>
                                    <h2 className={classes.location} style={{color: '#7D7D7D'}}>July 2019 - March 2020</h2>
                                </div>
                                <div onMouseLeave={() => {this.setState({threatIntel: false})}}>
                                    <ul className={classes.description}>
                                        <li>Prioritized and assessed intelligence tips in the NBCU environment and 
                                            communicated impact, remediation, etc. to business units in a concise and 
                                            digestible format for technical and executive stakeholders.
                                        </li>
                                        <li>
                                            Vetted malicious indicators of compromise with the assistance of enrichment 
                                            services like VirusTotal and DomainTools and issued blocks as appropriate.
                                        </li>
                                        <li>
                                            Conducted research using open-source intelligence to gather information about 
                                            threat actors and malware-related criminal activities that may target 
                                            NBCUniversal brands, employees, and events (including Democratic Debate news 
                                            coverage and the Tokyo 2020 Olympics).
                                        </li>
                                        <li>
                                            Designed and developed a webform using ReactJS that allows analysts to more 
                                            easily set up social media monitoring for brands, talent, and events.
                                        </li>
                                    </ul>
                                </div>
                            </ReactCardFlip>
                        </VerticalTimelineElement>
                        
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#FFFFFF', color: '#5C5C5C', fontFamily: 'Nunito' }}
                            iconStyle={{ background: '#FFFFFF'}}
                            icon={<CPIcon />}
                        >
                            <h1 className={classes.position}>B.S. Software Engineering</h1>
                            <h2 className={classes.location} style={{color: '#5C5C5C'}}>California Polytechnic State University</h2>
                            <h2 className={classes.location} style={{color: '#5C5C5C'}}>San Luis Obispo, CA</h2>
                            <h2 className={classes.location} style={{color: '#7D7D7D'}}>June 2019</h2>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#FFFFFF', color: '#5C5C5C', fontFamily: 'Nunito' }}
                            iconStyle={{ background: '#FFFFFF', paddingTop: '11px' }}
                            icon={<NBCIcon />}
                        >
                            <ReactCardFlip isFlipped={this.state.dataIntern} flipDirection="horizontal">
                                <div onMouseEnter={() => {this.setState({dataIntern: true})}}> 
                                    <h1 className={classes.position}>Data Analytics Intern</h1>
                                    <h2 className={classes.location} style={{color: '#7D7D7D'}}>NBCUniversal | Universal City, CA</h2>
                                    <h2 className={classes.location} style={{color: '#7D7D7D'}}>June 2018 - August 2018</h2>
                                </div>
                                <div onMouseLeave={() => {this.setState({dataIntern: false})}}>
                                    <ul className={classes.description}>
                                        <li>
                                            Generated time Gantt charts using Power BI for all the sources involved 
                                            in the Extract, Transform and Load (ETL) process.
                                        </li>
                                        <li>
                                            Presented a proposal suggesting solutions to reduce the data latency in 
                                            the ETL process to the Director of the Analytics department.
                                        </li>
                                        <li>
                                            Implemented my solutions into the ETL process and reduced the data latency 
                                            by 6 hours per source.
                                        </li>
                                        <li>
                                            Validated over 1000 movie titles in order to ensure that the machine learning 
                                            model’s data is accurate.
                                        </li>
                                        <li>
                                            Created a Chrome extension that has a pop-up trivia when browsing certain 
                                            websites and award the user when they view a certain video on YouTube using 
                                            JSON, HTML, JavaScript and YouTube API.
                                        </li>
                                    </ul>
                                </div>
                            </ReactCardFlip>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#FFFFFF', color: '#5C5C5C', fontFamily: 'Nunito' }}
                            iconStyle={{ background: '#FFFFFF', paddingLeft: '2px'}}
                            icon={<MCIcon />}
                        >
                            <ReactCardFlip isFlipped={this.state.mcIntern} flipDirection="horizontal">
                                <div onMouseEnter={() => {this.setState({mcIntern: true})}}> 
                                    <h1 className={classes.position}>Software Engineer Intern</h1>
                                    <h2 className={classes.location} style={{color: '#7D7D7D'}}>Mastercard | O'Fallon, MO</h2>
                                    <h2 className={classes.location} style={{color: '#7D7D7D'}}>June 2017 - September 2017</h2>
                                </div>
                                <div onMouseLeave={() => {this.setState({mcIntern: false})}}>
                                    <ul className={classes.description}>
                                        <li>
                                            Reduced debugging time 2 hours per incident by creating a Splunk dashboard 
                                            displaying necessary server log data.
                                        </li>
                                        <li>
                                            Developed Java program to extract manifest information from different 
                                            artifacts in Masterpass environments.
                                        </li>
                                        <li>
                                            Defined regular expressions to extract required information from manifest 
                                            files through Splunk.
                                        </li>
                                        <li>
                                            Developed and debugged search queries in Splunk dashboard to monitor 
                                            environment safety and availability for high visibility projects.
                                        </li>
                                        <li>
                                            Collaborated with over 70 Mastercard employees including vendors, and 
                                            the president of Operations and Technology to develop an education pathway 
                                            on Artificial Intelligence and Machine Learning for Mastercard employees.
                                        </li>
                                        <li>
                                            Created a concept mobile application using Invision and Figma for the Boys 
                                            and Girls Club of Greater St. Louis as part of the intern innovation challenge.
                                        </li>
                                    </ul>
                                </div>
                            </ReactCardFlip>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#FFFFFF', color: '#5C5C5C', fontFamily: 'Nunito' }}
                            iconStyle={{ background: '#FFFFFF'}}
                            icon={<CPIcon />}
                        >
                            <ReactCardFlip isFlipped={this.state.ta} flipDirection="horizontal">
                                <div onMouseEnter={() => {this.setState({ta: true})}}> 
                                    <h1 className={classes.position}>Teaching Assistant</h1>
                                    <h2 className={classes.location} style={{color: '#7D7D7D'}}>Cal Poly | San Luis Obispo, CA</h2>
                                    <h2 className={classes.location} style={{color: '#7D7D7D'}}>April 2016 - March 2017</h2>
                                </div>
                                <div onMouseLeave={() => {this.setState({ta: false})}}>
                                    <ul className={classes.description}>
                                        <li>
                                            Teach and supervise 3 hour lab sessions, where students work on coding an 
                                            Arduino, and building a LED disco box project from scratch.
                                        </li>
                                        <li>
                                            Guide students on how to progress with their projects and demonstrate how 
                                            to safely use lab equipment such as drills, turret punches, metal benders, 
                                            soldering irons, crimpers and etc.
                                        </li>
                                        <li>
                                            Test and fix defective LED disco box from previous quarters.
                                        </li>
                                        <li>
                                            Work with a group of students and instructors on redeveloping the class 
                                            curriculum. Work with different Arduino (Arduino Mega, Arduino Uno, 
                                            Ardunio Due) and different printed circuit board designs to maximize the LED 
                                            light intensity, and to reduce the number of defective LED disco box.
                                        </li>
                                        <li>
                                            Write instructional guides on:
                                            <ul>
                                                <li>how to assemble the LED disco box</li>
                                                <li>how to properly wire the Arduino to the printed circuit board</li>
                                                <li>how to test and fix the LED disco box if problems arise</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </ReactCardFlip>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#FFFFFF', color: '#5C5C5C', fontFamily: 'Nunito' }}
                            iconStyle={{ background: '#FFFFFF'}}
                            icon={<KaiserIcon />}
                        >
                            <ReactCardFlip isFlipped={this.state.kaiserIntern} flipDirection="horizontal">
                                <div onMouseEnter={() => {this.setState({kaiserIntern: true})}}> 
                                    <h1 className={classes.position}>Cloud Ops and DevOps Intern</h1>
                                    <h2 className={classes.location} style={{color: '#7D7D7D'}}>Kaiser Permantente | Pleasanton, CA</h2>
                                    <h2 className={classes.location} style={{color: '#7D7D7D'}}>June 2016 - December 2016</h2>
                                </div>
                                <div onMouseLeave={() => {this.setState({kaiserIntern: false})}}>
                                    <ul className={classes.description}>
                                        <li>
                                            Worked on a web crawler that takes in keywords and looks for websites that 
                                            match those specific keywords. (See Projects section for more details)
                                        </li>
                                        <li>
                                            Working hands-on, and collaboratively with software/system/cloud engineers, 
                                            architects, and technical leads to automate deployment, configuration, and 
                                            testing of applications, web-services, and underlying support systems/platforms.
                                        </li>
                                        <li>
                                            Partnered with project/deployment managers, technical leads and architects in 
                                            troubleshooting issues and ensuring successful go-live launch and releases.
                                        </li>
                                        <li>
                                            Collaborated with the development, product quality, and operations teams to 
                                            ensure adequate level of health monitoring for all production systems, 
                                            including infrastructure, platform components and deployed applications.
                                        </li>
                                    </ul>
                                </div>
                            </ReactCardFlip>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#FFFFFF', color: '#5C5C5C', fontFamily: 'Nunito' }}
                            iconStyle={{ background: '#FFFFFF', paddingTop: '10px' }}
                            icon={<QualcommIcon />}
                        >
                            <ReactCardFlip isFlipped={this.state.qualcomm} flipDirection="horizontal">
                                <div onMouseEnter={() => {this.setState({qualcomm: true})}}> 
                                    <h1 className={classes.position}>EmpowHERment Summit</h1>
                                    <h2 className={classes.location} style={{color: '#7D7D7D'}}>Qualcomm | San Diego, CA</h2>
                                    <h2 className={classes.location} style={{color: '#7D7D7D'}}>July 2015</h2>
                                </div>
                                <div onMouseLeave={() => {this.setState({qualcomm: false})}}>
                                    <p className={classes.description}>
                                        I participated in the Qualcomm Empowherment Summit. My team and I worked on 
                                        creating a mobile application on Android platform for the organization NCWIT. 
                                        Our goal was to connect all members of NCWIT together as well as provide a place 
                                        for them to find internships, events, meet ups etc.
                                    </p>
                                </div>
                            </ReactCardFlip>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </>
        );
    }
}

export default withStyles(styles)(Timeline);