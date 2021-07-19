
import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const AddContact = () => {
    const contact = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const { register, formState: { errors } } = useForm()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !number || !name) {
            return toast.warning("Please fill in all fields!")
        }
        if (checkEmail) {
            return toast.warning("This email already exists!")
        }
        const data = {
            id: contact[contact.length - 1].id + 1,
            name,
            email,
            number
        };
        console.log(data);
        dispatch({ type: "ADD_CONTACT", payload: data })
        toast.success("Student added successfully");
        history.push("/welcome");

    }

    const checkEmail = contact.find(contacts => contacts.email === email && contacts);


    return (
        <div className="container">
            <div className="row" >
                <h1 className="display-3 text-center my-5" >
                    Add Contact
                </h1>


                <div className="col-md-6 shadow mx-auto w-100 p-3 align-top">
                    <form onSubmit={handleSubmit} >
                        <div className="mb-3">

                            <input type="text" className="form-control" id="exampleInputUser2" placeholder="Name" name="UserName" {...register("UserName", { required: "This is required.", minLength: 3 })} value={name} onChange={e => setName(e.target.value)} />
                            <ErrorMessage errors={errors} name="UserName" />
                        </div>
                        <div className="mb-3">

                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" name="email"{...register("email", { required: "This is required." })} value={email} onChange={e => setEmail(e.target.value)} />

                            <ErrorMessage errors={errors} name="email" />

                        </div>
                        <div className="mb-3">

                            <input type="number" className="form-control" id="exampleInputNumber" placeholder="Phone" name="number" {...register("number", { required: "This is required." })} value={number} onChange={e => setNumber(e.target.value)} />
                            <ErrorMessage errors={errors} name="number" />
                        </div>



                        <button type="submit" className="btn btn-primary" > Add Contact </button>
                        <br />

                    </form >

                </div>
            </div>
        </div >
    )
}



export default AddContact;