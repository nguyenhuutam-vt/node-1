import { ACCOUNT_TYPE } from "config/constant";
import { prisma } from "./../config/client";

const handleCreateUser = async (
  data: {
    fullName: string;
    username: string;
    address: string;
    password: string;
    accountType: any;
    phone: string;
    avatar: string;
  },
) => {
  const newUser = await prisma.user.create({
    data: {
      fullName: data.fullName,
      username: data.username,
      address: data.address,
      password: "123456",
      accountType: ACCOUNT_TYPE.SYSTEM,
      phone: data.phone,
      avatar: data.avatar,
    },
  });
  return newUser;
};

const getAllUser = async () => {
  // Logic to get user by ID
  const user = await prisma.user.findMany(); //finadMany lay ra tat ca user
  return user;
};

const getAllRole = async () => {
  // Logic to get all roles
  const roles = await prisma.role.findMany(); //findMany lay ra tat ca role
  return roles;
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
      fullName: data.name,
      username: data.email,
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
  getAllRole,
};
