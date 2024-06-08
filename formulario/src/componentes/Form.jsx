import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import './Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <Input
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    name="name"
                />
                <Input
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    name="email"
                />
                <Button onClick={handleSubmit} label="Submit" />
            </form>
        </div>
    );
};

export default Form;

