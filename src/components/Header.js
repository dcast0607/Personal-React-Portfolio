import React from 'react';
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';

const styles = {
    header: {

    },
    h1: {
        textAlign: "center",
    }
}

function Header() {
  return (
    <header styles={styles.h1} className="header">
      <h1>Daniel Castro's Amazing React Portfolio</h1>
    </header>
  );
}

export default Header;
