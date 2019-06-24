import React from 'react';

export default function StudentName(props){
// const name = 'Sally';
console.log(props);
  return (
    <li>
      Name: {props.name}
    </li>
  );
}