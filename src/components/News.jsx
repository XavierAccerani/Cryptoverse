import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment'; 

import { useGetCryptoNewsQuery  } from '../services/cryptoNewsApi';



const { Text, Title } = Typography;
const { Option } = Select; 

function News( { simplified } ) {
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100 });

// 1 16 55

    console.log('res du cryptonews : ', cryptoNews)
    return (
        <div>
            News
        </div>
    )
}

export default News
