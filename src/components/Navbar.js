import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
// const styles = {
//   card: {
//     margin: 20,
//     background: '#000000',
//   },
//   heading: {
//     background: '#9a74db',
//     minHeight: 50,
//     lineHeight: 3.5,
//     fontSize: '1.2rem',
//     color: 'white',
//     padding: '0 20px',
//   },
// };

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
<section id="navigationBar">
    <nav class="container-fluid">
        <nav class="navbar narvbar-primary navbar-expand" style={{backgroundColor: "black" }}>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" style={{ color: "white" }} href="#aboutMeContainer">About Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style={{ color: "white" }} href="#workSectionContainer">Work</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style={{ color: "white" }} href="#contactMeContainer">Contact Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" style={{ color: "white" }} href="https://github.com/dcast0607">Coding Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    </nav>
</section>
  );
}

export default Navbar;