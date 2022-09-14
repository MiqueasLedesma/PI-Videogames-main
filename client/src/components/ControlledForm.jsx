import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createGame } from '../Redux/actions';

const MyContainer = styled.div`
  margin-top: -21px;
  justify-content: center;
  background-color: #333;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 100%;
  height: 100%;
  text-align: center;
  font-family: arial;
`;

const MyForm = styled.form`
  justify-content: center;
  background-color: #212121;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 100%;
  height: 100%;
  text-align: center;
  font-family: arial;
`;




export const ControlledForm = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: '',
        description: '',
        rating: '',
        platforms: '',
        genres: '',
        released:''
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
        if (errors.name === 'Game Name is required' || errors.description === 'Description must have at least 8 characters' || errors.rating === 'Rating is required' || errors.rating === 'Rating must be between 1 and 5') console.log(errors);
        else {
            dispatch(createGame(input))
            console.log('Formulario valido!')
        }
    };

    return (
        <MyContainer>
            <MyForm action="" onSubmit={(e) => handleSubmit(e)}>
                <h1>Create Videogame!</h1>
                <hr />
                <label htmlFor='name'>name</label>
                <input name="name" type="text" placeholder='name' value={input.name} onChange={(e) => handleChange(e)} />
                <br />
                <hr />
                <label htmlFor="description">description</label>
                <input name="description" type="text" placeholder='description' value={input.description} onChange={(e) => handleChange(e)} />
                <br />
                <hr />
                <label htmlFor="released">released</label>
                <input name="released" type="text" placeholder='release date' value={input.released} onChange={(e) => handleChange(e)} />
                <br />
                <hr />

                <label htmlFor="platforms">platforms</label>
                <input type="text" name="platforms" placeholder='platforms' value={input.platforms} onChange={(e) => handleChange(e)} />
                <br />
                <hr />

                <label htmlFor="rating">rating</label>
                <input type="text" name="rating" placeholder='rating' value={input.rating} onChange={(e) => handleChange(e)} />
                <br />
                <hr />
                <label htmlFor="genres">genres</label>
                <input type="text" name="genres" placeholder='genres' value={input.genres} onChange={(e) => handleChange(e)} />
                <br />
                <hr />
                <button type="submit">Create!</button>
            </MyForm>
        </MyContainer>
    )
}
