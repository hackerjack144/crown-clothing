import React, {useState} from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { SignUpContainer,SignUpTitle } from './contact.styles'; 

const ContactPage = () => {

  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    message: ''
})
const { displayName, email, message } = userCredentials;


const handleChange = event => {
  const { name, value } = event.target;

  setCredentials({ ...userCredentials, [name]: value });
};

  return (
    <SignUpContainer>
      <SignUpTitle>Contact Us</SignUpTitle>
      <form className='sign-up-form'>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Enater Your Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='textarea'
          name='message'
          value={message}
          onChange={handleChange}
          label='Enter your message'
          required
        />
        
        <CustomButton type='submit'>CONTACT US</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default ContactPage;
