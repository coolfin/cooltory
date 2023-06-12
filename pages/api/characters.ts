import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse
    ){
  try {
    const { name } = req.query;

    //cors 고려
    const response = await axios.get(`https://mapleutils-parser-api.vercel.app/api/characters?name=${name}`, {
      withCredentials: true
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json([{ error: 'Internal Server Error' }]);
  }
}
