# Not Me!

8 trò chọn người ngẫu nhiên, giao diện Việt/Anh, pastel xanh/hồng. Không cần npm hoặc tài khoản người chơi.

1. Ratatata Roulette
2. Lucky Wheel/Vòng quay nhân phẩm
3. Bomb Cat/Chạy đi các cháu ơi
4. Racing King/Vua tốc độ
5. Alien Summon/Người được chọn
6. Claw Machine/Gắp ai bây giờ?
7. Name Drop!/Gọi cái tên!
8. Squad Up!/Đồng đội đâu?

## Chơi ngay không có mạng

Mở `offline/not-me-offline.html` bằng Edge hoặc Chrome. Có thể chép file này vào USB và mở trên máy khác. Font, biểu tượng và âm thanh Bomb Cat đều đã nằm trong file. Lần đầu mở bản này không cần mạng.

## Đưa lên GitHub Pages

1. Giải nén ZIP. Tạo repository mới trên GitHub, ví dụ `not-me`.
2. Để dùng GitHub Pages với tài khoản GitHub Free, chọn repository Public.
3. Upload **nội dung bên trong thư mục đã giải nén**, gồm `index.html`, `sw.js`, `manifest.webmanifest`, thư mục `icons` và các file/thư mục còn lại. Không chỉ upload nguyên file ZIP. `index.html` phải ở ngay thư mục gốc của repository.
4. Mở **Settings → Pages → Deploy from a branch → main → /(root) → Save**.
5. Chờ GitHub cung cấp link và mở link đó. Không cần thêm domain riêng.

Hướng dẫn chính thức: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Cài thành app trên Windows và ghim taskbar

1. Có mạng trong lần đầu. Mở link GitHub Pages bằng **Microsoft Edge**.
2. Chờ dòng **Đã sẵn sàng chơi offline** hiện trong game.
3. Bấm **Cài app Windows**. Nếu Edge chưa hiện hộp cài, dùng **dấu ba chấm → More tools/Công cụ khác → Apps/Ứng dụng → Install this site as an app/Cài đặt trang này như một ứng dụng**. Cũng có thể bấm biểu tượng cài ứng dụng trên thanh địa chỉ nếu xuất hiện.
4. Sau khi cài, chọn **Pin to taskbar/Ghim vào thanh tác vụ**. Nếu cần, mở `edge://apps`, vào Details/Chi tiết của Not Me! và chọn Pin to taskbar.
5. Đóng cửa sổ app, tắt Wi-Fi và mở lại bằng biểu tượng taskbar để kiểm tra ngay trên máy sẽ dùng giảng dạy.

Hướng dẫn chính thức: https://support.microsoft.com/en-us/edge/install-manage-or-uninstall-apps-in-microsoft-edge

PWA cần HTTPS hoặc localhost để cài và lưu bản offline. Mở file HTML bằng đường dẫn file trực tiếp dùng để chơi offline; cài app và ghim taskbar theo quy trình ở trên từ link web.

## Nội dung được lưu

Danh sách, lượt đã gọi, ngôn ngữ và tùy chọn lưu trong trình duyệt của thiết bị đó. Chuyển từ link cũ sang GitHub Pages hoặc sang file offline không tự chuyển danh sách. Có thể copy danh sách vào ô Sửa danh sách ở nơi mới. Xóa dữ liệu trang web có thể xóa danh sách và bộ nhớ offline.

## Cập nhật sau này

Sửa `index.html` và các tài nguyên liên quan, tăng giá trị `VERSION` trong `sw.js`, rồi đẩy lên GitHub. Mở app khi có mạng để nhận bản mới. Bản HTML offline là một bản riêng, cần cập nhật lại khi mã game thay đổi.

Mọi đường dẫn PWA đều tương đối, hoạt động với repository Pages ở thư mục con. Font DejaVu và âm thanh được nhúng vào HTML. Giấy phép font trong `THIRD-PARTY-NOTICES.txt`.
