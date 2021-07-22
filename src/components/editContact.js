import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const EditContact = ({ contacts, editContact }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { id } = useParams();
    const history = useHistory();

    const currentContact = contacts.find(
        (contact) => contact.id === parseInt(id)
    );

    useEffect(() => {
        setName(currentContact.name);
        setEmail(currentContact.email);
        setNumber(currentContact.number);
    }, [currentContact]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmitt = (e) => {
        e.preventDefault();
        const checkContactEmailExists = contacts.filter((contact) =>
            contact.email === email && contact.id !== currentContact.id
                ? contact
                : null
        );
        const checkContactPhoneExists = contacts.filter((contact) =>
            contact.number === number && contact.id !== currentContact.id
                ? contact
                : null
        );

        if (!email || !name || !number) {
            return toast.warning("Please fill in all fields!!");
        }
        if (checkContactEmailExists.length > 0) {
            return toast.error("This email already exists!!");
        }
        if (checkContactPhoneExists.length > 0) {
            return toast.error("This phone number already exists!!");
        }

        const data = {
            id: currentContact.id,
            email,
            name,
            number,
        };

        editContact(data);
        toast.success("Contact updated successfully!!");
        history.push("/");
    };



    return (

        <div className="container">
            <div className="row" >
                <h1 className="display-3 text-center my-5" >
                    Edit Contact {id}
                </h1>



                <div className="col-md-6 shadow mx-auto w-100 p-3 align-top">
                    {currentContact ? (
                        <form onSubmit={handleSubmitt}>
                            <div className="mb-3">

                                <input type="text" className="form-control" id="exampleInputUser2" placeholder={"Name"} name="UserName" value={name} {...register("UserName", { required: "This is required.", minLength: 3 })} onChange={(e) => setName(e.target.value)} />
                                <ErrorMessage errors={errors} name="UserName" />
                            </div>
                            <div className="mb-3">

                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" value={email} name="email"{...register("email", { required: "This is required." })} onChange={(e) => setEmail(e.target.value)} />

                                <ErrorMessage errors={errors} name="email" />

                            </div>
                            <div className="mb-3">

                                <input type="number" className="form-control" id="exampleInputNumber" placeholder={"Number"} name="number" value={number} {...register("number", { required: "This is required." })} onChange={(e) => setNumber(e.target.value)} />
                                <ErrorMessage errors={errors} name="number" />
                            </div>



                            <p className="tpbutton btn-toolbar text-center">
                                <a className="btn navbar-btn btn-primary" href="#" target="_texturepack">Edit</a>
                                <a className="btn navbar-btn btn-default" href="/welcome" target="_texturepack" onClick={() => history.push("/")}>Cancel</a>
                            </p>

                        </form >
                    ) : (
                        <h1 className="text-center">No Contact Found</h1>
                    )}

                </div>
            </div>
        </div >
    )
}
const mapStateToProps = (state) => ({
    contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
    editContact: (data) => {
        dispatch({ type: "EDIT_CONTACT", payload: data });
    },
});



export default connect(mapStateToProps, mapDispatchToProps)(EditContact);