// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const cryptoApiHeaders = {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': 'ee275a60bcmsh02e88951a12e383p1ee182jsn0a5b1b218f2c'
// }

// const baseUrl = 'https://coinranking1.p.rapidapi.com/'

// const createRequest = (url) => ({url, headers: cryptoApiHeaders})

// export const cryptoApi = createApi({
//     reducerPath: 'cryptoApi',
//     baseQuery: fetchBaseQuery({ baseUrl }),
//     endpoints: (builder) => ({
//         getCryptos: builder.query({
//             query: () => {createRequest('/exchanges')}
//         })

//     })
// })
// export const { useGetCryptosQuery } = cryptoApi;
// console.log('usegetcryptoquery : ',useGetCryptosQuery )




var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     symbols: 'BTC',
//     uuids: 'Qwsogvtv82FCd',
//     tiers: '1',
//     tags: 'defi',
//     orderBy: 'marketCap',
//     search: 'Bitco',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
  headers: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'ee275a60bcmsh02e88951a12e383p1ee182jsn0a5b1b218f2c'
  }
};

axios.request(options).then(function (response) {
	console.log("LA REPONSE :",response.data);
}).catch(function (error) {
	console.error("erreur au niveau du request ",error);
});