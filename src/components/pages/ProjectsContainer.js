import React from 'react';
import Calendar from '../images/MainCalendarPage.png';
import Restaurant from '../images/RestaurantPicker.png';
import MDGenerator from '../images/ReadMeGenerator.png';
import WeatherApp from '../images/PersonalWeatherApp.png';

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
                <img style={styles.img} alt="Calendar" src={Calendar} />
                <hr style={styles.hr}/>
            </div>
            <div>
                <h3 style={styles.h3}>Indecisive Restaurant Picker</h3>
                <img style={styles.img} alt="Restaurant" src={Restaurant} />
                <hr style={styles.hr}/>
            </div>
            <div>
                <h3 style={styles.h3}>ReadMe Generator</h3>
                <img style={styles.img} alt="MDGenerator" src={MDGenerator} />
                <hr style={styles.hr}/>
            </div>
            <div>
                <h3 style={styles.h3}>Personal Weather Dashboard</h3>
                <img style={styles.img} alt="WeatherApp" src={WeatherApp} />
                <hr style={styles.hr}/>
            </div>
        </section>
    )
}