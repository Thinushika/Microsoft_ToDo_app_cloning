import { Box } from '@material-ui/core';
import { withThemeCreator } from '@material-ui/styles';
import React from 'react'
import styles from "../../styles/Home.module.css";

function AppBar() {
    return (
        <div className={styles.appBar}>
            {/* logo box */}
            <div className={styles.appIconBox}></div>
            {/* search box */}
            {/* icons box */}
        </div>
    )
}

export default AppBar
