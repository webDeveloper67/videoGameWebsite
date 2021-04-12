import React, {useState, useRef, useEffect} from 'react'

const AddUser = ({onAddUser, users}) => {

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: ''
  })

  const [userExists, setUserExists] = useState(false)


  // Helper function
  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  const curreState = usePrevious(user)

  const {firstName, lastName, username} = user;



  const handleInputChange = e => {
    const {name, value} = e.target;

    setUser((curreState) => ({
      ...curreState,
        [name]: value
    }))
  }

    // Check if user exist
    const contactExists = currUsername => {
      if(users && users.length !== 0) {
  
        const usersArr = users;
    
        for(let user of usersArr) {
          if(user.username === currUsername) {
            return true;
          }
        }
        return false;
      }
    }

  const handleSubmit = e => {
    e.preventDefault();

    const userExists = contactExists(username)

    if(!userExists) {
      onAddUser(user)
    }
    setUserExists(userExists)
  }

  const isDisabled = () => {
    return firstName === '' || lastName === '' || username === '';
  };
  return (
    <div>
      <h1>New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={firstName}
            onChange={handleInputChange}
           />
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <button disabled={isDisabled()}>Add</button>
      </form>
      {userExists ? (
        <p className="error">You cannot add a user that already exists.</p>
      ) : (
        ''
      )}
    </div>
  );
}

export default AddUser;