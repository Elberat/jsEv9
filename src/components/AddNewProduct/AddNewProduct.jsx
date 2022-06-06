import { Box, Button, Container, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../../context/mainContext';

const AddNewProduct = () => {
    const navigate = useNavigate();
    const { createProduct } = useContext(MainContext);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    function handleValues() {
        let newProduct = {
            title,
            price,
            description,
            image,
        };
        if (!title.trim() || !price.trim() || !description.trim() || !image.trim()) {
            alert('Заполните поля!');
            return;
        }
        createProduct(newProduct);
        navigate('/list');
    }
    return (
        <Container>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} padding={'30px'}>
                <InputLabel htmlFor='outlined-adornment-amount'>Title</InputLabel>
                <OutlinedInput
                    id='outlined-adornment-amount'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    startAdornment={<InputAdornment position='start'>Name</InputAdornment>}
                    label='Amount'
                />
                <InputLabel htmlFor='outlined-adornment-amount'>Price</InputLabel>
                <OutlinedInput
                    id='outlined-adornment-amount'
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                    label='Amount'
                />
                <InputLabel htmlFor='outlined-adornment-amount'>Description</InputLabel>
                <OutlinedInput
                    id='outlined-adornment-amount'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    startAdornment={<InputAdornment position='start'>...</InputAdornment>}
                    label='Amount'
                />
                <InputLabel htmlFor='outlined-adornment-amount'>Image</InputLabel>
                <OutlinedInput
                    id='outlined-adornment-amount'
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    startAdornment={<InputAdornment position='start'>...</InputAdornment>}
                    label='Amount'
                />
                <Button onClick={handleValues} style={{ marginTop: '10px' }} variant='contained'>
                    Contained
                </Button>
            </Box>
        </Container>
    );
};

export default AddNewProduct;
