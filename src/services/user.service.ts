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

export { handleCreateUser, getAllUser };
