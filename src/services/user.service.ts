import { prisma } from "./../config/client";
import getConnection from "../config/db";

const handleCreateUser = async (data: {
  name: string;
  email: string;
  address: string;
}) => {
  const newUser = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      address: data.address,
    },
  });
  return newUser;
};

const getAllUser = async () => {
  // Logic to get user by ID
  const user = await prisma.user.findMany(); //finadMany lay ra tat ca user
  return user;
};

const handleDeleteUser = async (userId: string) => {
  const deletedUser = await prisma.user.delete({
    where: {
      id: Number(userId),
    },
  });
  return deletedUser;
};

const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
};

const handleUpdateUser = async (
  userId: string,
  data: { name: string; email: string; address: string }
) => {
  const editedUser = await prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: {
      name: data.name,
      email: data.email,
      address: data.address,
    },
  });
  return editedUser;
};

export {
  handleCreateUser,
  getAllUser,
  handleDeleteUser,
  getUserById,
  handleUpdateUser,
};
