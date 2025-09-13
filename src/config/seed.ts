import { hashPassword } from "services/user.service";
import { prisma } from "./client";
import { ACCOUNT_TYPE } from "./constant";

const initDatabase = async () => {
  const countUsers = await prisma.user.count();
  const countRole = await prisma.role.count();

  if (countRole === 0) {
    await prisma.role.createMany({
      data: [
        { name: "USER", description: "User role" },
        { name: "ADMIN", description: "Admin role" },
      ],
    });
  }

  if (countUsers === 0) {
    const defaultPassword = await hashPassword("123456");
    const adminRole = await prisma.role.findFirst({
      where: { name: "ADMIN" },
    });
    const adminRoleId = adminRole ? adminRole.id : undefined;
    if (adminRoleId) {
      await prisma.user.createMany({
        data: [
          {
            fullName: "John Doe",
            username: "johndoe",
            password: defaultPassword,
            address: "123 Main St",
            accountType: ACCOUNT_TYPE.SYSTEM,
            roleId: adminRoleId,
          },
          {
            fullName: "Jane Smith",
            username: "janesmith",
            password: defaultPassword,
            address: "456 Oak Ave",
            accountType: ACCOUNT_TYPE.SYSTEM,
            roleId: adminRoleId,
          },
        ],
      });
    }
  }
  if (countUsers !== 0 || countRole !== 0) {
    console.log("Database already seeded");
  }
};
export default initDatabase;
