import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import AddUser from './components/AddUser'
import UserList from './components/UserList'

const App = () => {

  const [users, setUsers] = useState([])

  // Helper function
  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  const prevUser = usePrevious(users)

  const createContact = user => {
    user.numGamesPlayed = 0;

    setUsers((prevUser) => [...prevUser, user])
  }
  return (
    <div>
      <AddUser users={users} onAddUser={createContact} />
      <UserList users={users} />
    </div>
  );
}

export default App;
