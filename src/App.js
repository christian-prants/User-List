import React, {useState} from 'react';
import AddUser from './Components/User/AddUser';
import ListUser from './Components/User/ListUser';
import Card from './Components/UI/Card';

import classes from './App.module.css';

const App = () => {

  const DUMMY = [ 
    {
        id: 0,
        userName: 'Christian Prants',
        userAge: 24
    }
]
  const [userData, setUserData] = useState(DUMMY);

  const addUserDataList = (data) => {
    setUserData(prevUserData => {return [data, ...prevUserData]});
  }

  return (
    <React.Fragment>
      <Card className={classes.App}>
          <div className={classes.AppUser}>
            <AddUser items={userData} onAddUserData={addUserDataList} />
          </div>
          <div className={classes.AppList}>
            <ListUser items={userData} />
          </div>
        </Card>
    </React.Fragment>
  );
}

export default App;
