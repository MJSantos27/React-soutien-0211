import React from 'react';

function SportCard(props) {
  console.log(props);
  return (
    <div className="SportCard">
      <h3>{props.sportName}</h3>
      <img
        src="https://www.thesportsdb.com/images/sports/basketball.jpg"
        alt="basketball"
      />
    </div>
  );
}

export default SportCard;
