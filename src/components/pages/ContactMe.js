import React from 'react';
import Resume from '../docs/resume.docx';

// This page is very simple, what's happening here is that if the
// user has clicked on contact me, they are taken to a page where
// we display contact information. I also added a way to let the user
// download a resume. 

// We defined some base styles below.

const styles = {
    h2: {
        fontSize: "30px",
        color: "white",
        textAlign: "left",
    }, 
    h4: {
        textAlign: "center",
        fontSize: "24px",

    },
    contactDetails: {

    }
}

export default function ContactMe() {
    return (
    <section> 
        <div id="contact-me" className="contact-me-container">
            <h2 style={styles.h2}>Contact Me: </h2>
        </div>
        <div>
            <h4 style={styles.h4}>
                <a href="tel:916-306-8749">Phone: 619-306-8749</a>
            </h4>
        </div>
        <div>
            <h4 style={styles.h4}>
                <a href="mailto:dancastro.java@gmail.com">Email Me: dancastro.java@gmail.com</a>
            </h4>
        </div>
        <div>
            <h4 style={styles.h4}>
                <a href="https://github.com/dcast0607">Github Repository: https://github.com/dcast0607</a>
            </h4>
        </div>
        <div>
            <h4 style={styles.h4}>
                <a href={Resume}>Check out my resume!</a>
            </h4>
        </div>
    </section>

    )
};