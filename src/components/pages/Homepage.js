import React from 'react';
import profile from '../images/IMG7022.jpg';

// This page is very simple, we display an image to the user
// and some text. This lets them know who the developer is and
// some basic information about that developer. 

// The biggest take away from this file is that to display an
// image we need to pass it as an object to the front-end. 

const styles = {
    span: {
        fontSize: "20px",
        color: "white",
    },
    image: {
        width: "80%",
        height: "65%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10px",
        borderRadius: "20px",
    }
}

export default function Homepage() {
    return(
        <section id="homepage" className="homepage-container">
            <div>
                <img style={styles.image} alt="Daniel" src={profile} />
            </div>
            <div>
                <span style={styles.span}>
                <br/>
                My name is Daniel , I am currently based out of San Diego and have been living here since 2014. 
                I moved to San Diego to attend UCSD for Biochemistry. Although, I did enjoy the field, I didn't 
                find myself finding the passion needed to continue working in that field. As a result, I sought 
                other opportunities and software development piqued my interest which is where development my 
                journey began. Software development has been an interesting and challenging journey so far but 
                it's been amazing.
                <br/>
                <br/>
                I've been working at an "E-Learn" company as part of the research and development team. I've 
                been with the company for just over 3 years now and my interest in software development has grown 
                immensely since having started there. The company is a Ruby on Rails shop but over the past few 
                years I've been learning a ton about full stack web development. I've exercised the knowledge that 
                I've learned to build some amazing applications. If you'd like to view these applications, please 
                click on the images below. Clicking on the image should take you to the deployed application.
                </span>
            </div>       
    </section> 
    )
}
