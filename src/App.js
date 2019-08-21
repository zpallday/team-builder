import React, {useState} from 'react';
import './App.css';
import Form from './component/Form';

const  Team = [
  {name:"Zachary Peasley", email:"zpman95@hotmail.com", role:"Programmer"},
  {name:"Dave Smith", email:"Dave@google.com", role:"Doctor"},
  {name:"Mary Loius", email:"Mary@hotmail.com", role:"Nurse"},
]

const App = () => {
  const [teams, setTeams] = useState(Team)
  const removeTeamMembers = (overboardMem) => {
    const newTeam = teams(member => {
    if (member.email !== overboardMem.email){
      return member;
    }
  });
  setTeams(newTeam)
  
}
  return (
    

    <div className = " App ">
      <Form addTeamMember = {setTeams} team={teams} />
      {teams.map((member) => <div className = "member-card">
        <h1>Name: {member.name} </h1>
        <p>Email: {member.email}</p>
        <p>Role: {member.role} </p>
        <button onClick={() => removeTeamMembers(member)}>
          Man Down </button>        
        
        </div>)}



    </div>
  )
  
}
export default App;
