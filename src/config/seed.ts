import { prisma } from "./client";

const initDatabase = async () => {
  const countUsers = await prisma.user.count();
  if (countUsers === 0) {
    await prisma.user.createMany({
      data: [
        {
          fullName: "John Doe",
          username: "johndoe",
          password: "password",
          address: "123 Main St",
          accountType: "USER",
        },
        {
          fullName: "Jane Smith",
          username: "janesmith",
          password: "password",
          address: "456 Oak Ave",
          accountType: "ADMIN",
        },
      ],
    });
  } else {
    console.log("Database already seeded");
  }
};
export default initDatabase;
