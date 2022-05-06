import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = ({addUser}) => {
    
    const { register, formState: { errors }, handleSubmit} = useForm();


    const onSubmit = ((data, e) => {
        addUser(data)
        e.target.reset()
    })

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
            {
                ...register("name", 
                {
                    required: {value: true, message: 'Campo Requerido'},
                })
            } 
            />
            <p id="vacio">{errors.name?.message}</p>
        <label>Username</label>
        <input 
            {
                ...register("username", 
                {
                    required: {value: true, message: 'Campo Requerido'},
                })
            }
            />
            <p id="vacio">{errors.username?.message}</p>
        <button type="submit">Add new user</button>
      </form>
     );
}
 
export default AddUserForm;