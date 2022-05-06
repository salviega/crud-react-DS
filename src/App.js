import React, {useState, useEffect} from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditYo from './components/EditUserForm';
import { v4 as uuidv4 } from 'uuid';

function App() {

  // Agregar usuarios

  const usersData = () => {
    if(localStorage.length === 0) {
      let users = [
        { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
        { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
        { id: uuidv4(), name: 'Ben', username: 'benisphere' },
      ]
      users.map(user => {
        localStorage.setItem(user.id, JSON.stringify(user))
      })
      let localStorageUsers = []
      for (var i = 0; i < localStorage.length; i++) {
        localStorageUsers.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }
      return localStorageUsers
      
    } else {
      let localStorageUsers = []
      for (var i = 0; i < localStorage.length; i++) {
        localStorageUsers.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }
      return localStorageUsers
    }
  } 

    //const usersData = []
  const [users, setUsers] = useState(usersData)

  useEffect(()=> {

    users.map((user) => localStorage.removeItem(user.id))
    users.map((user) => localStorage.setItem(user.id, JSON.stringify(user)))

    let usersIds = [];
      for (var i = 0; i < users.length; i++) {
        let userId = users[i].id;
        usersIds.push(userId);
      };

      let localStorageUsers = [];
      let localStorageUsersIds = [];
      for (var i = 0; i < localStorage.length; i++) {
        let localStorageUser = JSON.parse(localStorage.getItem(localStorage.key(i)));
        localStorageUsers.push(localStorageUser);
        localStorageUsersIds.push(localStorageUser.id);
      };

      localStorageUsers.map((localStorageUser) => {
        let foundUser = usersIds.includes(localStorageUser.id)
        if (foundUser === false) {
            localStorage.removeItem(localStorageUser.id);
        }
        
      });
    },[users])

  const addUser = (user) => {

    if (users.length < 1) {
      user.id = uuidv4()
      setUsers([
      ...users,
      user
      ])
    }
    if (users[users.length - 1] !== user.name && users[users.length - 1].username !== user.username) {
      user.id = uuidv4()
      setUsers([
      ...users,
      user
      ])
    } else {
      alert("Debe ingresar un nuevo usuario")
    }     
  }

  // Eliminar usuario
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  // Editar usuario
  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, name: '', username: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const editRow = user => {
    setEditing(true) 
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
        {editing ? (
          <div>
            <h2>Edit user</h2>
            <EditYo 
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser}  />
          </div>
        )}
      </div>
        <div className="flex-large">
          <h2>View users ({users.length})</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;

