import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
  width: 300px;
`;

const MyLabel = styled.label`
color: white;
`;

const MyButton = styled.button`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background-color: black;
transition: 0.4s;
&:hover {
  background-color: #04AA6D;
  padding: 14px 18px;
};
`;

export const ControlledForm = () => {

    const dispatch = useDispatch();

    const reduxState = useSelector(state => state.genres);

    const [input, setInput] = useState({
        name: '',
        description: '',
        rating: '',
        platforms: [],
        genres: [],
        released: ''
    });

    const [errors, setErrors] = useState({});

    const listOfPlatforms = ['PC', 'XBOX-360', 'XBOX-ONE', 'PS5', 'PS4', 'PS3', 'NINTENDO'];

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
        };
    };

    const handleSelect1 = (e) => {
        if (input.genres.includes(e.target.value)) return alert(`Can't choose the same genre!`);
        if (input.genres.length >= 2) return alert(`Can't choose more genres!`)
        setInput((genres) => {
            return {
                ...genres,
                genres: [...input.genres, e.target.value]
            };
        });
    };

    const handleSelect2 = (e) => {
        if (input.platforms.includes(e.target.value)) return alert(`can't choose the same platform!`);
        if (input.platforms.length >= 5) return alert(`can't choose more platforms!`)
        setInput((platforms) => {
            return {
                ...platforms,
                platforms: [...input.platforms, e.target.value]
            }
        })
    }

    const uniqueStyle = {
        color: 'white',
        listStyleType: 'none'
    };

    return (
        <MyContainer>
            <MyForm action="" onSubmit={(e) => handleSubmit(e)}>
                <h1>Create Videogame!</h1>
                <MyLabel htmlFor='name'>name:</MyLabel>
                <MyInput name="name" type="text" placeholder='name' value={input.name} onChange={(e) => handleChange(e)} />
                <MyLabel htmlFor="description">description:</MyLabel>
                <MyInput name="description" type="text" placeholder='description' value={input.description} onChange={(e) => handleChange(e)} />
                <MyLabel htmlFor="released">released:</MyLabel>
                <MyInput name="released" type="text" placeholder='dd-mm-aaaa' value={input.released} onChange={(e) => handleChange(e)} />
                <MyLabel htmlFor="rating">rating:</MyLabel>
                <MyInput type="text" name="rating" placeholder='rating' value={input.rating} onChange={(e) => handleChange(e)} />
                <br />
                <select value={input.platforms} onChange={(e) => handleSelect2(e)}>
                    <option>
                        Platforms:
                    </option>
                    {
                        listOfPlatforms.map(e => <option key={listOfPlatforms.indexOf(e)} value={e}>
                            {e}
                        </option>)
                    }
                </select>
                <ul>
                    {
                        input.platforms.map((e) => <li style={uniqueStyle} key={input.platforms.indexOf(e)}>{e}</li>)
                    }
                </ul>
                <br />




                <select value={input.genres} onChange={(e) => handleSelect1(e)}>
                    <option>
                        Genres:
                    </option>
                    {
                        reduxState && reduxState.map(e => <option key={reduxState.indexOf(e)} value={e}>
                            {e}
                        </option>)
                    }
                </select>
                <ul>
                    {
                        input.genres[0] && input.genres.map((e) => <li style={uniqueStyle} key={input.genres.indexOf(e)}>{e}</li>)
                    }
                </ul>
                <MyButton type="submit">Create!</MyButton>
            </MyForm>
        </MyContainer>
    )
}
