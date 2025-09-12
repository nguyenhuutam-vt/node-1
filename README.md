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
