import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <p>& copy; 2016 & middot; Hashnode & middot; LinearBytes Inc.</p>
        {/* <p><FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/@mern_io" target="_Blank">@mern_io</a></p> */}
      </div>
    );
  }
}

export default Footer;
