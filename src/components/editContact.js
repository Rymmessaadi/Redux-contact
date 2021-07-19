import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const EditContact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { id } = useParams();
    const onSubmit = data => {
        console.log(data);// recupérer la data lorsque on click sur le bouton 
    }

    return (
        <div className="container">
            <div className="row" >
                <h1 className="display-3 text-center my-5" >
                    Edit Contact {id}
                </h1>


                <div className="col-md-6 shadow mx-auto w-100 p-3 align-top">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="mb-3">

                            <input type="text" className="form-control" id="exampleInputUser2" placeholder="Name" name="UserName" {...register("UserName", { required: "This is required.", minLength: 3 })} />
                            <ErrorMessage errors={errors} name="UserName" />
                        </div>
                        <div className="mb-3">

                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" name="email"{...register("email", { required: "This is required." })} />

                            <ErrorMessage errors={errors} name="email" />

                        </div>
                        <div className="mb-3">

                            <input type="number" className="form-control" id="exampleInputNumber" placeholder="Phone" name="number" {...register("number", { required: "This is required." })} />
                            <ErrorMessage errors={errors} name="number" />
                        </div>



                        <p class="tpbutton btn-toolbar text-center">
                            <a class="btn navbar-btn btn-primary" href="#" target="_texturepack">Edit</a>
                            <a class="btn navbar-btn btn-default" href="/welcome" target="_texturepack">Cancel</a>
                        </p>

                    </form >

                </div>
            </div>
        </div >
    )
}


export default EditContact;