import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'ee275a60bcmsh02e88951a12e383p1ee182jsn0a5b1b218f2c'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => {createRequest('/coins')}
        })

    })
})

export const { useGetCryptosQuery } = cryptoApi;