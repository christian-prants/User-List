import React from 'react';

import ListUserItem from './ListUserItem';

import styles from './ListUser.module.css';

const ListUser = (props) => {

    if (props.items.length === 0) {
        return <h2>nenhum dado foi encontrado.</h2>
    }

    return (
        <ul className={styles.list_user}>
            <h3>USUÁRIOS</h3>
            {props.items.map((data) => (
                <ListUserItem 
                    key={data.id}
                    userName={data.userName} 
                    userAge={data.userAge} 
                />
            ))} 
        </ul>
    )
}

export default ListUser;
