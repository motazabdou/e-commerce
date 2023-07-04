import { useState } from 'react';

const SignUpForm = () => {

    const [formFields, setFormFields] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form is here")
    }

    return (
        <div>
            <h1>Sign Up With E-mail</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name='displayName' value={displayName} />

                <label>E-mail</label>
                <input type="email" required onChange={handleChange} name='email' value={email} />

                <label>Password</label>
                <input type="password" required onChange={handleChange} name='password' value={password} />

                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword} />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm