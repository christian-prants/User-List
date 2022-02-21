// import React, { useState, useRef } from 'react'
import React, { useState } from 'react'
import Popup from '../PopUp/PopUp';
import Card from '../UI/Card';

import styles from './AddUser.module.css';

const AddUser = (props) => {
    // const nameInputRef = useRef();
    // const ageInputRef = useRef();

    const [inputUser, setInputUser] = useState('');
    const [inputAge, setInputAge] = useState('');

    const [isEmpty, setIsEmpty] = useState(false);

    const togglePopUp = () => {
        setIsEmpty(!isEmpty);
    }

    const changeUser = (event) => {
        setInputUser(event.target.value);
    }

    const changeAge= (event) => {
        setInputAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // const enteredName = (nameInputRef.current.value);
        // const enteredAge = (ageInputRef.current.value);

        if (inputUser === '' || inputAge === '') {
            return togglePopUp();
        }

        if (inputAge < 0) {
            return togglePopUp();
        }

        const userData = {
            id: Math.random(),
            userName: inputUser,
            userAge: inputAge            
        };
        props.onAddUserData(userData);

        setInputUser('');
        setInputAge('');
    }

    return (
        <React.Fragment>
            <Card className={styles.form_add_user}> 
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">usuário</label>
                    <input 
                        id="username" 
                        type="text" 
                        value={inputUser} 
                        onChange={changeUser} 
                        // ref={nameInputRef} 
                    />
                    
                    <label htmlFor="userage">idade (em anos)</label>
                    <input 
                        id="userage" 
                        type="number" 
                        value={inputAge} 
                        onChange={changeAge} 
                        // ref={ageInputRef} 
                    />

                    <button className={styles.form_add_user_btn}>Adicionar</button>
                </form>
            </Card>
            {isEmpty && <Popup
                content={
                    <>
                        <b>Entrada Inválida</b>
                        <p>O campo usuário e/ou idade, não pode ser vazio ou negativo.</p>
                    </>
                }
                onClose={togglePopUp}
            />}
        </React.Fragment>
    )
}

export default AddUser;
