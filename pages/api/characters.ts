import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import { headers } from 'next/dist/client/components/headers';

export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse
    ){
  try {
    const { name } = req.query;

    //cors 고려
    const response = await axios.get(`https://mapleutils-parser-api.vercel.app/api/characters?name=${name}&scopes=equip,symbol`, {
      withCredentials: true,
      //sameSite: 'none',
      headers: {
        'Set-Cookie': 'HttpOnly; Secure; SameSite=None;'
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json([{ error: 'Internal Server Error' }]);
  }
}
