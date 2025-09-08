import { get } from "http";
import getConnection from "../config/db";
const handleCreateUser = (data: {
  name: string;
  email: string;
  password: string;
}) => {
  // Logic to handle user creation
  console.log("User data received:", data);
};

const getAllUser = async () => {
  // Logic to get user by ID
  const connection = await getConnection();
  try {
    const [result] = await connection.execute("SELECT * FROM users");
    return result;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export { handleCreateUser, getAllUser };
