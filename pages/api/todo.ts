// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { createTodo, deleteTodo, updateTodo } from '../../lib/db';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === "POST") {
    const data = JSON.parse(req.body);
    await createTodo(data);
    return res.status(200).json({ message: 'Success' })
  }
  
  if(req.method === "DELETE") {
    const id = JSON.parse(req.body)
    await deleteTodo(id);
    return res.status(200).json({message: 'Success'})
  }

  if(req.method === "PUT") {
    const {description, id} = JSON.parse(req.body)
    await updateTodo(description, id)
    return res.status(220).json({message: 'Success'})
  }

}
