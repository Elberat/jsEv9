import { Card, CardActionArea, CardContent, CardMedia, Pagination, Slider, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MainContext } from '../../context/mainContext';
const ProductsList = () => {
    const { getProducts, products, pages } = useContext(MainContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [price, setPrice] = useState([1, 10000]);

    useEffect(() => {
        setSearchParams({
            q: search,
            _page: page,
            _limit: 1,
            price_gte: price[0],
            price_lte: price[1],
        });
    }, [search, page, price]);

    useEffect(() => {
        getProducts();
    }, [searchParams]);
    console.log(window.location.search);

    useEffect(() => {
        getProducts();
    }, []);
    console.log(price);
    return (
        <div style={{ marginTop: '20px' }}>
            <TextField value={search} onChange={e => setSearch(e.target.value)} type={'search'} label='Search input' />
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={price}
                onChange={(event, value) => setPrice(value)}
                valueLabelDisplay='auto'
                aria-labelledby='range-slider'
                min={1}
                max={10000}
                step={100}
            />
            {products.map(item => (
                <Card key={item.id} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia component='img' height='140' src={item.image}></CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant='h3' component='div'>
                                {item.title}
                            </Typography>
                            <Typography variant='h5' color='green'>
                                {item.price}сом
                            </Typography>
                            <Typography variant='h6' color='text.secondary'>
                                {item.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
            <Pagination
                page={page}
                onChange={(e, value) => setPage(value)}
                count={pages}
                variant='outlined'
                color='primary'
            />
        </div>
    );
};

export default ProductsList;
