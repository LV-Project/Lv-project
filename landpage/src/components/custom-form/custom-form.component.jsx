import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import SubmitButton from '../submit-button/submit-button.component';
import './custom-form.styles.css'

function Form() {

    const message = [];
    const [input, setInput] = useState({
        name: '',
        email: '',
        content: '',
        send:false
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
        


        const usernameError = document.getElementsByClassName('first-ex');
        const emailError = document.getElementsByClassName('second-ex');
        const contentError = document.getElementsByClassName('third-ex');
        const req1 = document.getElementById('req1');
        const req2 = document.getElementById('req2');

        usernameError[0].style.opacity = '0';
        emailError[0].style.opacity = '0';
        contentError[0].style.opacity = '0';
        req1.style.textDecoration = 'none';
        req2.style.textDecoration = 'none';

        if (input.name.length === 0) {

            req1.style.textDecoration = 'underline';
            usernameError[0].style.opacity = '1';
            event.preventDefault();
            return console.log('failed');

        } else if (input.content.length === 0) {

            req1.style.textDecoration = 'underline';
            contentError[0].style.opacity = '1';
            event.preventDefault();
            return console.log('failed');

        } else if (input.email.length === 0) {
            req1.style.textDecoration = 'underline';
            emailError[0].style.opacity = '1';
            event.preventDefault();
            return console.log('failed');

        } else if (!input.email.includes('@') || !input.email.includes('.com') || input.email.length < 7) {
            event.preventDefault();
            req2.style.textDecoration = 'underline';
            emailError[0].style.opacity = '1';
            return console.log('failed');
            

        }

        setInput((preValues) => {
            return {
                ...preValues,
                send: true
            };
        });
        message.push(input);



        
        
        event.preventDefault();
        console.log('submit succesfull');
        console.log(input);
    }

    function vanish() {
        const myButton = document.getElementById('button');
        const myForm = document.getElementById('contact-me');
        

        myButton.classList.toggle('fade-out');
        myForm.classList.toggle('fade-in');


    }
    return (
        <div className='form-box'>
            {input.send?<h1 className='thanks'>Thanks!</h1>:
            <form className='contact-me' id='contact-me' onSubmit={handleSubmit}>
                <h1 className='form-title form-item'>Explain your project <i class="fas fa-pencil-alt"></i></h1>
                <div className='personal-info'>

                    <div className='requirements'>
                        <ul>
                            <li id='req1'>No empty fields</li>
                            <li id='req2'>Real email address</li>
                        </ul>
                    </div>

                    <div><i className="fas fa-exclamation error first-ex"></i></div>

                    <input
                        placeholder='Name'
                        type='text'
                        className='form-input input'
                        name='name'
                        id='name'
                        value={input.name}
                        onChange={handleChange}
                    />

                    <div><i className="fas fa-exclamation error second-ex"></i></div>

                    <input
                        placeholder='ContactM3@example.com'
                        type='emial'
                        className='form-input input'
                        name='email'
                        value={input.email}
                        onChange={handleChange}

                    />
                    <div><i className="fas fa-exclamation error third-ex"></i></div>
                </div>

                <textarea
                    rows="40"
                    cols="50"
                    name='content'
                    value={input.content}
                    onChange={handleChange}

                />

                <SubmitButton />
            </form>}

            <CustomButton vanish={vanish} >CONTACT ME</CustomButton>
        </div>
    );
}

export default Form;