import React from "react";
import { useForm } from "react-hook-form";
import { createMessage } from "../../firebase/firebase";

import CustomButton from "../custom-button/custom-button.component";
import SubmitButton from "../submit-button/submit-button.component";
import './custom-react-form.styles.css';


export default function ReactForm() {
    const { register, handleSubmit, watch, formState } = useForm();
    const { errors, isSubmitSuccessful } = formState;
    
    const onSubmit = (data) => {
        createMessage(data);
        console.log(data);
    }

    function vanish() {
        const myButton = document.getElementById('button');
        const myForm = document.getElementById('contact-me');
        myButton.classList.toggle('fade-out');
        myForm.classList.toggle('fade-in');
    }

    return (
        <div>
            <CustomButton vanish={vanish}> CONTACT ME</CustomButton>
            
            {!isSubmitSuccessful?<form id='contact-me' className='contact-me' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='formTitle'>&nbsp;Tell me about your project...</h1>
                <input
                    placeholder='Full Name'
                    className={!errors.fullName ? ' ' : 'required'}
                    {...register('fullName', { required: true })}
                />
                <span>{!errors.fullName ? ' ' : <i class="fas fa-exclamation exclamation-name"></i>}</span>
                <input
                    placeholder='Company Name (optional)'
                    {...register('company')}
                />
                <input
                    name="email"
                    placeholder='Email'
                    className={!errors.email ? ' ' : 'required'}
                    {...register('email', {
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
                <span>{!errors.email ? ' ' : <i class="fas fa-exclamation exclamation-email"></i>}</span>
                <textarea
                    {...register('project', { required: true })}
                    placeholder={!errors.project ? ' ' : 'This field is required.'}
                    className={!errors.project ? ' ' : 'required'}
                    rows="10" cols="75"
                />
                <span>{!errors.project ? ' ' : <i class="fas fa-exclamation exclamation-project"></i>}</span>
                <SubmitButton></SubmitButton>
                
            </form>:<div className='formTitle'><h1 className='formTitle'>Thank you, I'll be in touch shortly.</h1><i class="far fa-check-circle"></i></div>}
        </div>
    );
}