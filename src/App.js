import React, {useState} from 'react';
import './App.css';
import Form from './component/form';
import Cards from './component/cards';

function App() {
  const [team, setTeams] = useState([])
  const [teamsEdit, setTeamsEdit] = useState({name:"", email: "", role:""})





  return (
    <div className = " App ">
      <Form team = {team} setTeams={setTeams} teamsEdit={teamsEdit}/>
      {team.map((member, index) => 
      <div>
        <Cards
        key={member.id}
        name={member.name}
        email={member.email}
        role={member.role}
        />
        <button onClick={() => setTeamsEdit(member)}> </button>        
        
        </div>)}



    </div>
  )
  
}
export default App;
