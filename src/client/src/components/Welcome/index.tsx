import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

const Welcome = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                Welcome to Web Template Studio
            </div>
            <div className={styles.body}>
                Web Template Studio is a VS Code extension that quickly provides web developers with boilerplate code, easy to use templates, and automates the Azure deployment process, all within this wizard.
            </div>
            <Link to="/SelectWebApp">
                Get Started
            </Link>
        </div>
    )
}

export default Welcome;