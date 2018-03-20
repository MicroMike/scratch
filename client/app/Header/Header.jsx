import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { switchLanguage } from '../../modules/Intl/IntlActions'

// Import Style
import styles from './Header.css';

class Header extends Component {
  render() {
    const languageNodes = this.props.intl.enabledLanguages.map(
      lang => <li key={lang} onClick={() => this.props.switchLanguage(lang)} className={lang === this.props.intl.locale ? 'styles.selected' : ''}>{lang}</li>
    );

    return (
      <div className={styles.header}>
        <div className={styles['language-switcher']}>
          <ul>
            <li><FormattedMessage id="switchLanguage" /></li>
            {languageNodes}
          </ul>
        </div>
        <div className={styles.content}>
          <h1 className={styles['site-title']}>
            <Link to="/" ><FormattedMessage id="siteTitle" /></Link>
          </h1>
          <div className={styles['user-type']}>
            <h2>
              <Link to="/owner"><FormattedMessage id="owner" /></Link>
            </h2>
            <h2>
              <Link to="/resident"><FormattedMessage id="resident" /></Link>
            </h2>
          </div>
          {/*
              context.router.isActive('/', true)
                ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
                : null
            */}
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {switchLanguage: switchLanguage}
)(Header);
