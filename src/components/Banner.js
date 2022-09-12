import React from 'react';

function Banner () {
    return(
<section class="mainBannerImageContainer">
    <img alt="banner" src={require('./images/IMG3628.jpg')} />
    <container class="headerBannerTextContainer">
        &nbsp;
        Carlsbad Flower Field
        &nbsp;
    </container>
</section>
    );
};

export default Banner;