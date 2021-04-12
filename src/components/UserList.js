import React, {useState} from 'react';
import User from './User';
import {usePrevious} from '../utile/usePrevious';

const UserList = ({users}) => {
  const [showGamesPlayed, setShowGamesPlayed] = useState(true)

  const oldGamePlayed = usePrevious(showGamesPlayed);

  const toggleGamesPlayedPanel = () => {
    // setShowGamesPlayed(!showGamesPlayed)
    setShowGamesPlayed(oldGamePlayed => (!oldGamePlayed));
  };

  const gamesPlayedButton = (
    <div>
    <button className="smallButton" onClick={toggleGamesPlayedPanel}>
      {showGamesPlayed ? 'Hide ' : 'Show '}
      the Number of Games Played
    </button>
  </div>
  )
  return (
    <div>
      <h1>Users</h1>
      {users && users.length > 0 ? gamesPlayedButton : ''}
      <ol>
        {users.map(user => (
          <User key={user.username} user={user} showGamesPlayed={showGamesPlayed} />
        ))}
      </ol>
    </div>
  );
}

export default UserList;