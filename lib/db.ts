import { prisma } from "./prisma";

export interface Todo {
  id: number;
  description: string;
}

export async function getAllTodos() {
  const data = await prisma.todo.findMany();
  return data;
}

export async function createTodo(description: string) {
  await prisma.todo.create({
    data:{
      description
    }
  })
}

export async function deleteTodo(id: number){
  await prisma.todo.delete({
    where:{
      id
    } 
  })
}

export async function updateTodo(description: string, id: number){
  await prisma.todo.update({
    data:{
      description
    },
    where:{
      id
    }
  })
}
