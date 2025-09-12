import getConnection from "../config/db";
const handleCreateUser = async (data: {
  name: string;
  email: string;
  address: string;
}) => {
  const connection = await getConnection();

  try {
    const sql =
      "INSERT INTO `users`(`name`, `email`, `address`) VALUES (?, ?, ?)";
    const values = [data.name, data.email, data.address];
    const [result, fields] = await connection.execute(sql, values);
    return result;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
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

const handleDeleteUser = async (userId: string) => {
  const connection = await getConnection();
  try {
    const sql = "DELETE FROM `users` WHERE `id` = ?";
    const values = [userId];
    const [result] = await connection.execute(sql, values);
    return result;
  } catch (error) {
    console.error("Error deleting user:", error);
    return null;
  }
};

const getUserById = async (userId: string) => {
  const connection = await getConnection();
  try {
    const sql = "SELECT * FROM `users` WHERE `id` = ?";
    const values = [userId];
    const [result] = await connection.execute(sql, values);
    const users = result as any[];
    return users.length > 0 ? users[0] : null;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return null;
  }
};

const handleUpdateUser = async (
  userId: string,
  data: { name: string; email: string; address: string }
) => {
  const connection = await getConnection();
  try {
    const sql =
      "UPDATE `users` SET `name` = ?, `email` = ?, `address` = ? WHERE `id` = ?";
    const values = [data.name, data.email, data.address, userId];
    const [result] = await connection.execute(sql, values);
    return result;
  } catch (error) {
    console.error("Error updating user:", error);
    return null;
  }
};

export {
  handleCreateUser,
  getAllUser,
  handleDeleteUser,
  getUserById,
  handleUpdateUser,
};
