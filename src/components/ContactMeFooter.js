import React from 'react';

const styles = {
    ul: {
        listStyle: "none",
        display: "inline",
    },
    li: {
        listStyle: "none",
    }
}

function MainPortfolioContainer() {
return (
    <section style={{backgroundColor: "salmon"}} id="contactMeContainer">
        <div class="row">
            <div styles={{ justifyContent: "center" }} class="col-1 contactMeTitleContainer">
                <span styles={{ fontSize: "24px", textAlign: "center"}}class="sectionTitle">
                    Contact Me
                </span>
            </div>
            <div class="col">
                <ul styles={styles.ul} class="contactMeDetails">
                    <li styles={styles.li} class="contactInformation">
                        <a class="contactInformationLink" href="tel:916-306-8749">916.306.8749</a>
                    </li>

                    <li styles={styles.li} class="contactInformation">
                        <a class="contactInformationLink" href="mailto:dancastro.java@gmail.com">Email Me</a>
                    </li>

                    <li class="contactInformation">
                        <a class="contactInformationLink" href="https://github.com/dcast0607">Github</a>
                    </li>
                    <li class="contactInformation">
                        <a class="contactInformationLink" href="https://www.linkedin.com/in/daniel-castro-101a13a1/">Linked In</a>
                    </li>
                    <li class="contactInformation">
                        <a class="contactInformationLink" href="./assets/documents/Daniel Castro Resume.docx">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
)
};


export default MainPortfolioContainer;