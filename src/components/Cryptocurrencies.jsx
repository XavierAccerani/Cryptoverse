import React, { useState } from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input} from 'antd';


import { useGetCryptosQuery } from '../services/cryptoApi';


function Cryptocurrencies() {
    const {data: cryptosList, isFetching} = useGetCryptosQuery(10);
    const [ cryptos, setCryptos ] = useState(cryptosList?.data?.coins);

// 58 01

    console.log("cryptos : ", cryptos) 

    return (
        <div>
            Cryptocurrencies
        </div>
    )
}

export default Cryptocurrencies
