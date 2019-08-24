import  React, { useState } from 'react';
import './App.css';
import Form from './component/form.js';

const data = [
  {
    name: 'Jeremy Brady',
    email: 'jeremy.brady702@gmail.com',
    role: 'TL',
    id: 1
},
{
    name: 'Benita',
    email: 'Benita@nomail.com',
    role: 'student',
    id: 2
},
{
    name: 'Brad',
    email: 'Brad@nomail.com',
    role: 'student',
    id: 3
},
{
    name: 'Ian',
    email: 'Ian@nomail.com',
    role: 'student',
    id: 4
},
{
    name: 'Julie',
    email: 'Julie@nomail.com',
    role: 'student',
    id: 5
},
{
    name: 'Nick',
    email: 'Nick@nomail.com',
    role: 'student',
    id: 6
},
{
    name: 'Rebecca',
    email: 'Rebecca@nomail.com',
    role: 'student',
    id: 7
},
{
    name: 'Zach',
    email: 'Zach@nomail.com',
    role: 'student',
    id: 8
}

]

const App = () => {

  const [team, updateTeam] = useState(data);

  const removeTeamMember = (overboardMem) => {
    const newTeam = team.filter(member => {
      if (member.email !== overboardMem.email){
        return member;
      }
    });
    updateTeam(newTeam);
  }

  return (


    <div className = "App">
      <Form addTeam={updateTeam} team={team}/>

      {team.map((member) =>  <div className = "member-card">
                              
    <h3>Name: {member.name}</h3>
    <p>Email: {member.email}</p>
    <p>Role: {member.role}</p>
    <button onClick={() => removeTeamMember(member)}> Remove </button>
    </div>)}
    </div>   
  );
}

export default App;