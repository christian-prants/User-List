import React from "react";
import ReactDOM from 'react-dom';
import styles from './PopUp.module.css';

const Popup = (props) => {

  const Backdrop = () => {
    return (
      <div className={styles.backdrop}></div>
    )
  };

  const PopUp = (props) => {
    return (
      <div className={styles.popup_box}>
            <div className={styles.box}>
                <span className={styles.close_icon} onClick={props.onClose}>x</span>
                {props.content}
            </div>
      </div>
    )
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop'))}
      {ReactDOM.createPortal(
        <PopUp 
          onClose={props.onClose} 
          content={props.content}
        />, 
        document.getElementById('error-pop-up')
      )}
    </React.Fragment>
  );
};
 
export default Popup;