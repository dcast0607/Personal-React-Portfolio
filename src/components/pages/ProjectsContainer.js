import React from 'react';
import Calendar from '../images/MainCalendarPage.png';
import Restaurant from '../images/RestaurantPicker.png';
import MDGenerator from '../images/ReadMeGenerator.png';
import WeatherApp from '../images/PersonalWeatherApp.png';

// This page servers as the main content page for the end user
// on this page, we display a few projects that have been worked on 
// in the past and let the user click on those projects to get taken
// to the repo or a demo of that project.
const styles = {
    div:{
        alignItems: 'center',
        justifyContent: 'left',
    },
    h3: {
        textAlign: 'center',
    },
    img: {
        width: "70%",
        height: "40%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    hr: {
        size: "4px",
        width: "100%",
        color: "white",
    }
}

export default function Home() {
    return (
        <section className="projects">
            <div>
                <h3 style={styles.h3}>Personal Calendar Application</h3>
                <a href="https://evening-sea-69170.herokuapp.com/homepage/">
                    <img style={styles.img} alt="Calendar" src={Calendar} />
                </a>
                <hr style={styles.hr}/>
            </div>
            <div>
                <h3 style={styles.h3}>Indecisive Restaurant Picker</h3>
                <a href="https://dcast0607.github.io/Restaurant-Picker-Project/">
                    <img style={styles.img} alt="Restaurant" src={Restaurant} />        
                </a>
                <hr style={styles.hr}/>
            </div>
            <div>
                <h3 style={styles.h3}>ReadMe Generator</h3>
                <a href="https://github.com/dcast0607/Readme-Generator">
                    <img style={styles.img} alt="MDGenerator" src={MDGenerator} />
                </a>
                <hr style={styles.hr}/>
            </div>
            <div>
                <h3 style={styles.h3}>Personal Weather Dashboard</h3>
                <a href="https://dcast0607.github.io/Personal-Weather-App/">
                    <img style={styles.img} alt="WeatherApp" src={WeatherApp} />
                </a>
                <hr style={styles.hr}/>
            </div>
        </section>
    )
}