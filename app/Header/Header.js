import React from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'react-router-dom'

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
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
          <Link href="/" ><FormattedMessage id="siteTitle" /></Link>
        </h1>
        <div className={styles['user-type']}>
          <h2>
            <Link href="/owner"><FormattedMessage id="owner" /></Link>
          </h2>
          <h2>
            <Link href="/resident"><FormattedMessage id="resident" /></Link>
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

export default Header;
