import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './custom-form.styles.css'

function Form() {

    const message = [];
    const [input, setInput] = useState({
        name: '',
        email: '',
        content: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setInput((preValues) => {
            return {
                ...preValues,
                [name]: value
            };
        });
    }

    function handleSubmit(event) {
        message.push(input);
        console.log(message[0]);
        event.preventDefault();
        setInput({
            name: '',
            email: '',
            content: ''
        })
        vanish();
    }

    function vanish() {
        const myButton = document.getElementById('button');
        const myForm = document.getElementById('contact-me');

        myButton.classList.toggle('fade-out');
        myForm.classList.toggle('fade-in');
    }




    return (
        <div className='form-box'>
            <form className='contact-me' id='contact-me' onSubmit={handleSubmit}>
                <h1 className='form-title form-item'>Explain your project &nbsp;&nbsp;&nbsp;<i class="fas fa-pencil-alt"></i></h1>
                <div className='personal-info'>
                    <input
                        placeholder='Name'
                        type='text'
                        className='form-input'
                        name='name'
                        value={input.name}
                        required
                        onChange={handleChange}
                    />
                    <input
                        placeholder='Email'
                        type='text'
                        className='form-input'
                        name='email'
                        value={input.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <textarea
                    rows="40"
                    cols="50"
                    name='content'
                    value={input.content}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>

            <CustomButton vanish={vanish} >Contact me!</CustomButton>
        </div>
    );
}

export default Form;