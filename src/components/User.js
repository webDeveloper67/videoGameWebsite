import React from 'react'

const User = ({user, showGamesPlayed}) => {
  return (
    <li className="user">
      <p>Username: {user.username}</p>
      <p>Number of Games Played: {showGamesPlayed ? user.numGamesPlayed : '*'}</p>
    </li>
  );
}

export default User;