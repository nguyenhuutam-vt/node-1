import { ACCOUNT_TYPE } from "config/constant";
import { prisma } from "./../config/client";
import bcrypt from "bcrypt";
const saltRounds = 10;

const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};
//user
const handleCreateUser = async (data: {
  fullName: string;
  username: string;
  address: string;
  password: string;
  accountType: any;
  phone: string;
  avatar: string;
  role: number;
}) => {
  const defaultPassword = await hashPassword("123456");

  const newUser = await prisma.user.create({
    data: {
      fullName: data.fullName,
      username: data.username,
      address: data.address,
      password: defaultPassword,
      accountType: ACCOUNT_TYPE.SYSTEM,
      phone: data.phone,
      avatar: data.avatar,
      roleId: Number(data.role),
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
  data: {
    fullName?: string;
    username?: string;
    address?: string;
    phone?: string;
    role?: number;
    avatar?: string;
  }
) => {
  const editedUser = await prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: {
      fullName: data.fullName,
      username: data.username,
      address: data.address,
      phone: data.phone,
      roleId: Number(data.role),
      ...(data.avatar !== undefined && { avatar: data.avatar }),
    },
  });
  return editedUser;
};

//product
const handleCreateProduct = async (data: {
  name: string;
  price: number;
  avatar: string;
  detailDesc: string;
  shortDesc: string;
  quantity: number;
  // sold: number;
  factory: string;
  target: string;
}) => {
  const newProduct = await prisma.product.create({
    data: {
      name: data.name,
      price: Number(data.price),
      image: data.avatar,
      detailDesc: data.detailDesc,
      shortDesc: data.shortDesc,
      quantity: Number(data.quantity),
      // sold: Number(data.sold),
      factory: data.factory,
      target: data.target,
    },
  });
  return newProduct;
};

const getAllProduct = async () => {
  // Logic to get user by ID
  const products = await prisma.product.findMany(); //finadMany lay ra tat ca user
  return products;
};

const getProductById = async (productId: number) => {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  return product;
};

export {
  handleCreateUser,
  getAllUser,
  handleDeleteUser,
  getUserById,
  handleUpdateUser,
  getAllRole,
  hashPassword,
  handleCreateProduct,
  getAllProduct,
  getProductById,
};
