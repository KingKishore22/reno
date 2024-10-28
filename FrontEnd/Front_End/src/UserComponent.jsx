import { useEffect,useState } from "react";
import axios from "axios";
const UserComponent = () => {
    const [users,setUsers]=useState([]);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
 
 
    const fetchUsers = async ()=>{
   const respose=await axios.get('http://localhost:5000/users');
   setUsers(respose.data)
    };
    
    const addUser = async ()=>{
        const respose=await axios.post('http://localhost:5000/users',{name,email});
        setUsers([...users,respose.data])
        setName("")
        setEmail("")

         };
        
         useEffect(()=>{
            fetchUsers();
         },[])

  return (
    <div>
     <h1>Users</h1>
     <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>{
        setName(e.target.value)
     }}></input>
     <input type="text" placeholder="Enter E-Mail" value={email} onChange={(e)=>{
        setEmail(e.target.value)
     }}></input>
     <button onClick={addUser}>AddUser</button>
     <ul>
                {users.map((user) => (
                    <h4 key={user.id}> {}
                        {user.name} {}
                    </h4>
                ))}
            </ul>
    </div>
  )
}
 
export default UserComponent