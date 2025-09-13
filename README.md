# Node.js Express EJS User Management Project

## Kiến thức cốt lõi cần nắm

1. **Express.js**

   - Tạo server, định nghĩa routes (GET, POST, PUT, DELETE)
   - Sử dụng middleware (body-parser, static files, error handling)
   - Cấu hình static để phục vụ file tĩnh (CSS, JS, images)

2. **Routing & Controllers**

   - Tách logic xử lý route vào controller
   - Sử dụng các hàm controller cho CRUD (tạo, đọc, cập nhật, xóa) user

3. **Service Layer**

   - Tách logic thao tác dữ liệu (database, xử lý nghiệp vụ) vào service

4. **View Engine (EJS)**

   - Render dữ liệu từ server ra HTML động
   - Truyền biến từ controller sang view
   - Sử dụng cú pháp EJS (`<%= %>`, `<% %>`) để hiển thị dữ liệu

5. **Static Files**

   - Đảm bảo cấu hình đúng để truy cập CSS, JS, images từ thư mục `public`

6. **Database (ORM hoặc trực tiếp)**

   - Kết nối, truy vấn, thao tác dữ liệu (CRUD)
   - Mapping dữ liệu từ DB lên view

7. **Quy trình CRUD**

   - Thêm, sửa, xóa, xem chi tiết user
   - Sau mỗi thao tác, redirect về trang chính để reload dữ liệu

8. **Cấu trúc thư mục**

   - Tách rõ controller, service, model, view, config

9. **Quản lý package**

   - Sử dụng `package.json` để quản lý dependencies (express, ejs, uuid, ...)

10. **Xử lý lỗi và bảo mật cơ bản**
    - Kiểm tra dữ liệu đầu vào, xử lý lỗi server, tránh lộ thông tin nhạy cảm

---

Nếu nắm vững các kiến thức trên, bạn sẽ làm chủ được project này và dễ dàng mở rộng, bảo trì hoặc nâng cấp.

## Hướng dẫn cập nhật DB MySQL với Prisma để thêm thuộc tính role cho user

1. **Cập nhật schema.prisma**

Thêm quan hệ role vào model User (nếu chưa có):

```prisma
model User {
  id          Int     @id @default(autoincrement())
  // ...existing fields...
  role   Role? @relation(fields: [roleId], references: [id])
  roleId Int?
}

model Role {
  id          Int    @id @default(autoincrement())
  name        String @db.VarChar(255)
  description String @db.VarChar(255)
  users User[]
}
```

2. **Chạy migrate để cập nhật DB**

```bash
npx prisma migrate dev --name add-role-to-user
```

3. **Cập nhật code**

- Sử dụng Prisma Client để thao tác với trường role và bảng Role.
- Khi tạo user, có thể gán roleId hoặc tạo role mới.

4. **Kiểm tra lại DB**

- Kiểm tra bảng users đã có cột roleId và quan hệ với bảng roles.

---

## Phân tích logic mới thêm và cần nắm

### 1. Logic phân quyền (Role)

- Thêm bảng Role và quan hệ giữa User và Role trong Prisma.
- Khi tạo user, cần xác định role (ví dụ: 'admin', 'user', ...).
- Khi lấy thông tin user, có thể truy vấn kèm role để phục vụ phân quyền hiển thị hoặc chức năng.
- Khi cập nhật/xóa user, cần kiểm tra quyền (role) nếu có logic bảo vệ.

### 2. Service xử lý role

- Service layer cần có hàm để lấy danh sách role, gán role cho user, kiểm tra role của user.
- Khi thao tác CRUD user, cần truyền kèm roleId nếu muốn gán quyền cho user.

### 3. Controller xử lý role

- Controller nhận dữ liệu role từ request, truyền xuống service để xử lý.
- Khi render view, truyền role để hiển thị đúng giao diện hoặc chức năng theo quyền.

### 4. View hiển thị role

- Trong EJS, có thể hiển thị role của user hoặc ẩn/hiện chức năng theo role.

### 5. Lưu ý khi mở rộng

- Nếu muốn phân quyền nâng cao (ví dụ: chỉ admin mới được xóa user), cần bổ sung logic kiểm tra role ở controller/service.
- Khi thêm role mới, cần cập nhật seed data hoặc giao diện quản lý role.

---
