import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = ({currentUser, updateUser}) => {
    
    console.log(currentUser)

    const { register, formState: { errors }, handleSubmit, setValue } = useForm({
        defaultValues: currentUser
    });

    setValue('name', currentUser.name)
    setValue('username', currentUser.username)

    const onSubmit = ((data, e) => {

        data.id = currentUser.id
        updateUser(currentUser.id, data)

        // limpiar datos
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
            } />
            <p>{errors.name?.message}</p>
        <label>Username</label>
        <input 
            {
                ...register("username", 
                {
                    required: {value: true, message: 'Campo Requerido'},
                })
            } />
            <p>{errors.username?.message}</p>
        <button 
            className="btn btn-primary"
            type="submit">Edit new user</button>
      </form>
     );
}
 
export default EditUserForm;