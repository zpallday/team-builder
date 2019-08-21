import React, { useState } from "react";


function Form({team, addTeam, teamEdit}) {

    const [member, setMember] = useState({name:"", email:"", role: ""});

    const handleCh = event => {
        const updateMember = {...member, [event.target.name]: event.target.value};
        if(teamEdit != null){
            setMember(teamEdit)
        }
        else{
            setMember(updateMember);
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log("team member", member);
        addTeam([...team, member]);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <label>
                name
                <input type="text" name="name" value={member.name}
                onChange={handleCh} required />
            </label>
            <label>
                Email
                <input type="email" name="email" value={member.email}
                onChange={handleCh}/>
            </label>
            <label>
                Role 
                <input type="text" name="role" value={member.role}
                onChange={handleCh}/>
            </label>
            <button type="submit">Submit</button>
        </Form>
    );
}

export default Form;