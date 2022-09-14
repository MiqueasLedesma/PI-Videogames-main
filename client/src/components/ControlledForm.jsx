import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createGame } from '../Redux/actions';

const MyContainer = styled.div`
height: fit-content;
display: grid;
justify-content: center;
align-items: center;
background-size: cover;
`;

const MyForm = styled.form`
display: grid;
align-items: center;
justify-content: center;
width: 600px;
background-color: black;
`;

const MyInput = styled.input`
  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  width: 150px;
`;

const MyLabel = styled.label`
color: white;
`;

export const ControlledForm = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: '',
        description: '',
        rating: '',
        platforms: '',
        genres: '',
        released: ''
    });

    const [errors, setErrors] = useState({});

    const validate = (input) => {
        let errors = {};
        if (!input.name) {
            errors.name = 'Game Name is required';
        } else if (input.name.length < 4) {
            errors.name = 'Game Name must have at least 4 characters';
        };
        if (!input.description) {
            errors.description = 'Description is required';
        } else if (input.description.length < 8) {
            errors.description = 'Description must have at least 8 characters'
        };
        if (!input.rating) {
            errors.rating = 'Rating is required';
        } else if (!/^[1-5]$/.test(input.rating)) {
            errors.rating = 'Rating must be between 1 and 5';
        };
        if (!input.released) {
            errors.released = 'Released date is required';
        } else if (!/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/.test(input.released)) {
            errors.released = 'Released date must be dd-mm-aaaa';
        };
        return (errors);
    };

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.name === '' || input.rating === '' || input.released === '' || input.description === '') return alert('Form must be complete!')

        else if (errors.name === 'Game Name is required' || errors.description === 'Description must have at least 8 characters' || errors.rating === 'Rating is required' || errors.rating === 'Rating must be between 1 and 5' || errors.released === 'Released date is required' || errors.released === 'Released date must be dd-mm-aaaa') {
            let alertas = [];
            for (let err in errors) {
                alertas.push(errors[err])
            }
            return alert(alertas)
        }
        else {
            dispatch(createGame(input))
            console.log('Formulario valido!')
        }
    };

    return (
        <MyContainer>
            <MyForm action="" onSubmit={(e) => handleSubmit(e)}>
                <h1>Create Videogame!</h1>
                <MyLabel htmlFor='name'>name</MyLabel>
                <MyInput name="name" type="text" placeholder='name' value={input.name} onChange={(e) => handleChange(e)} />
                <MyLabel htmlFor="description">description</MyLabel>
                <MyInput name="description" type="text" placeholder='description' value={input.description} onChange={(e) => handleChange(e)} />
                <MyLabel htmlFor="released">released</MyLabel>
                <MyInput name="released" type="text" placeholder='release date' value={input.released} onChange={(e) => handleChange(e)} />
                <MyLabel htmlFor="platforms">platforms</MyLabel>
                <MyInput type="text" name="platforms" placeholder='platforms' value={input.platforms} onChange={(e) => handleChange(e)} />
                <MyLabel htmlFor="rating">rating</MyLabel>
                <MyInput type="text" name="rating" placeholder='rating' value={input.rating} onChange={(e) => handleChange(e)} />
                <MyLabel htmlFor="genres">genres</MyLabel>
                <MyInput type="text" name="genres" placeholder='genres' value={input.genres} onChange={(e) => handleChange(e)} />
                <button type="submit">Create!</button>
            </MyForm>
        </MyContainer>
    )
}
