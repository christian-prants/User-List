import React from 'react'
import styles from './ListUserItem.module.css';

const ListUserItem = (props) => {
    return (
        <div className={styles.list_user_item}>
            
                <h2>{props.userName}</h2>
                <h2>{props.userAge} anos</h2>
            
        </div>
    )
}

export default ListUserItem;
