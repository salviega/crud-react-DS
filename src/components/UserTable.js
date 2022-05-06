
const UserTable = ({users, deleteUser, editRow}) => {
    
    return ( 
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {   
                users.length > 0 ?
                users.map(user => {
                    return (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button
                                className="btn btn-warning"
                                onClick={() => editRow(user)} >
                                Edit
                            </button>
                            {'     '}
                            <button 
                                className="btn btn-danger"
                                onClick= {() => deleteUser(user.id)} >
                                Delete
                            </button>
                        </td>
                    </tr> 
                    )
                })
                : (
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )
            }
        </tbody>
      </table>
     );
}
 
export default UserTable;