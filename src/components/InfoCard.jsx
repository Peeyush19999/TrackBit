import React from 'react';

const isother = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: 'center', padding: '0 10%' }}>
      Try saying: <br /> 
      Add {isother ? 'Income ' : 'Expense '} 
      for {isother ? '₹80 ' : '₹50 '}  
      in Category {isother ? 'Salary ' : 'Travel '}
      for {isother ? 'Monday ' : 'Thursday '}
    </div>
  );
};

export default InfoCard;