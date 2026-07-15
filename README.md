# Top VPN Services 2026 — Tài liệu thiết kế

**Họ và tên:** Nguyễn Hoàng Sang  
**Vị trí ứng tuyển:** Thực tập sinh Fullstack  
**Đơn vị:** Công ty TNHH Truyền thông và Quảng cáo H2T  
**Công nghệ sử dụng:** React + Vite + Tailwind CSS v4 + Framer Motion  
**Chạy thử:** `npm run dev` → http://localhost:5173

---

## 1. Tham khảo thiết kế

Mình chọn 3 website để tham khảo, mỗi cái phụ trách một phần khác nhau trong trang.

### VPNet Theme — themelooks.net/demo/vpnet
Tham khảo phần: **Màn hình chào (Hero)**

Trang này có cách bố cục Hero khá hay: bên trái là tiêu đề và nút bấm, bên phải là hình minh hoạ sản phẩm. Nhìn vào là hiểu ngay trang đang nói về cái gì mà không cần đọc nhiều.

Màu sắc họ dùng là xanh navy đậm kết hợp xanh cyan — trông có vẻ bảo mật và chuyên nghiệp.

Điểm thú vị nhất là họ hiển thị thông tin thật của người dùng ngay trong Hero (địa chỉ IP, vị trí, trạng thái kết nối). Cách này khiến người dùng lập tức cảm thấy "ừ mình đang bị lộ thông tin" — từ đó có nhu cầu dùng VPN hơn. Mình học cách đặt nội dung tạo cảm giác cấp thiết ngay từ đầu trang.

---

### Proton VPN — protonvpn.com
Tham khảo phần: **Bảng so sánh VPN**

Thay vì dùng bảng HTML truyền thống (hàng ngang), ProtonVPN bố cục theo từng cột dọc — mỗi cột là một nhà cung cấp VPN. Cách này dễ đọc hơn nhiều vì mắt mình chỉ cần nhìn dọc xuống một cột là thấy hết thông tin của cái đó.

Cột ProtonVPN được làm nổi bật bằng viền màu và đổ bóng, trông như đang "nhô lên" so với các cột khác — cách này không cần phải ghi chú gì thêm mà người dùng vẫn hiểu ngay đây là lựa chọn được đề xuất.

Mỗi cột có nút "Dùng thử" riêng ngay bên dưới — người dùng không cần phải cuộn hay tìm kiếm thêm.

Mình học cách dùng một lớp card nằm chồng lên cột để tạo hiệu ứng highlight mà không làm vỡ bố cục lưới.

---

### GoodLayers Infinite — demo.goodlayers.com/infinite/main4
Tham khảo phần: **Quy trình đánh giá (How We Test)**

Trang này trình bày các bước theo hàng ngang — đọc theo chiều tự nhiên từ trái sang phải, dễ theo dõi hơn so với dạng danh sách dọc.

Khi di chuột vào mỗi card, nó nhấc nhẹ lên và đổ bóng đậm hơn. Hiệu ứng nhỏ thôi nhưng làm cho trang trông "sống" hơn nhiều.

Mình học cách dùng viền phát sáng chạy vòng quanh phần nội dung chi tiết để tạo cảm giác tương tác, thay vì chỉ hiển thị text tĩnh.

---

## 2. Hệ thống thiết kế (Design System)

### Bảng màu

| Tên màu | Mã hex | Dùng ở đâu |
|---|---|---|
| Trắng (warm) | #FFFFFF | Nền chính toàn trang, nền popup |
| Xám nhạt (cream) | #F8F9FA | Nền section xen kẽ, nền hàng bảng |
| Tím nhạt (lavender) | #C3ACD0 | Viền, đường phân cách |
| Tím thương hiệu (purple) | #674188 | Màu chính, nhãn, icon nhấn mạnh |
| Tím đậm (dark) | #2C1A4D | Tiêu đề, chữ quan trọng |
| Cam (orange) | #F97316 | Nút bấm chính (Try Now, Get Deal) |

Lý do chọn tone tím: màu tím thường gắn với sự bí ẩn, bảo mật, và chuyên nghiệp — phù hợp với sản phẩm VPN. Hầu hết các brand VPN khác dùng xanh navy hoặc xanh lá, nên tím giúp trang trông khác biệt hơn.

Lý do chọn cam cho nút CTA: cam nổi bật nhất khi đặt trên nền tím, người dùng nhìn vào là thấy ngay nút cần bấm.

---

### Font chữ

| Loại | Font | Cỡ chữ |
|---|---|---|
| Tiêu đề lớn | Outfit (đậm) | 3rem – 4.5rem |
| Tiêu đề nhỏ | Outfit (vừa) | 1rem – 1.5rem |
| Nội dung | Inter (thường) | 0.875rem – 1rem |
| Nút bấm | Outfit (đậm) | 0.875rem |
| Chú thích | Inter (thường) | 0.75rem |

Outfit được chọn cho tiêu đề vì trông hiện đại, gọn, phù hợp với chủ đề công nghệ. Inter được chọn cho nội dung vì font này được tối ưu riêng để đọc trên màn hình — chữ rõ ở mọi cỡ, không mỏi mắt.

---

### Khoảng cách

Tất cả khoảng cách đều theo hệ 8px: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96px`.

Dùng hệ này giúp mọi thứ trông đều và nhất quán — không có chỗ nào cảm giác bị chật hay thưa bất thường.

---

### Các thành phần cơ bản

**Nút bấm:**

```
Nút chính:      Nền cam, chữ trắng, bo tròn góc, chữ đậm
                Khi hover: thêm bóng + dịch lên nhẹ

Nút phụ:        Viền tím, chữ tím, bo tròn góc
                Khi hover: nền đổi sang tím, chữ trắng

Nút text:       Chỉ là chữ tím có gạch chân khi hover
```

**Thẻ card:**

```
Cột VPN:        Nền trắng, viền nhạt
                Cột được chọn (ProtonVPN): viền tím đậm, bóng nổi

Thẻ tính năng:  Nền xám nhạt, góc bo, padding 24px
                Khi hover: thêm bóng, nhấc lên nhẹ

Popup chi tiết: Nền trắng, viền nhạt, bóng đổ lớn
```

---

## 3. Bố cục trang chủ

### Cấu trúc từ trên xuống dưới

```
Header          Thanh điều hướng cố định — tự ẩn khi cuộn xuống, hiện lại khi cuộn lên
Hero            2 cột: trái (tiêu đề + nút) · phải (hình nhân vật) · nền hạt chuyển động
Bảng so sánh    5 cột VPN · ProtonVPN được làm nổi bật · mỗi cột có nút riêng
Tính năng       4 thẻ tính năng nổi bật
Quy trình       4 bước dạng tab ngang · phần chi tiết có viền phát sáng
Câu hỏi thường gặp   Accordion mở/đóng
Footer          Logo · Links · Ghi chú bản quyền
```

### Lý do bố cục như vậy

Bảng so sánh được đặt ngay sau Hero vì người vào trang review VPN thường đã biết mình muốn gì — họ muốn so sánh và chọn, không cần đọc nhiều nội dung giới thiệu trước. Đưa bảng lên sớm giúp người dùng tìm thấy thứ họ cần nhanh hơn.

Nút CTA màu cam được đặt ở đầu bảng và cuối mỗi cột vì đó là 2 điểm người dùng hay dừng lại khi đọc — đầu để nắm tổng quan, cuối để quyết định.

---

## 4. Tư duy lập trình

### Chia thành phần

```
App.jsx
├── Header.jsx               Thanh nav, logic ẩn/hiện khi cuộn
├── Hero.jsx
│   └── BoidsEcosystem.jsx   Animation hạt chuyển động trên canvas
├── VpnTable.jsx             Lưới 6 cột, trạng thái hover từng cột
│   └── VpnDetailsModal.jsx  Popup thông tin chi tiết
├── FeaturesGrid.jsx
├── HowWeTest.jsx
│   └── AnimatedBorderTrail.jsx  Viền SVG phát sáng chạy vòng
├── Faq.jsx
└── Footer.jsx
```

Dữ liệu VPN và các bước quy trình đều để trong `src/data/vpnData.js` — chỉ cần sửa một chỗ là toàn bộ trang cập nhật theo.

---

### Xử lý responsive

| Màn hình | Thay đổi bố cục |
|---|---|
| Điện thoại (dưới 640px) | Hero xếp dọc, bảng VPN cuộn ngang, quy trình 2 hàng 2 cột |
| Tablet (640–1024px) | Hero 2 cột nhỏ hơn, bảng cuộn ngang nếu không đủ chỗ |
| Máy tính (trên 1024px) | Toàn bộ layout đầy đủ, bảng 6 cột rộng hết màn hình |

---

### Scroll animation khi cuộn

Mỗi section sử dụng `whileInView` của Framer Motion — khi người dùng cuộn đến, tiêu đề và các card lần lượt trượt lên và hiện ra. Các card xuất hiện theo thứ tự với độ trễ tăng dần (stagger delay 100ms mỗi card) để trông tự nhiên hơn so với việc tất cả xuất hiện cùng lúc. Animation chỉ chạy một lần (`once: true`) để không bị lặp lại mỗi lần cuộn lên xuống.

---


## 5. Giải thích quyết định thiết kế

**Tại sao chọn màu tím?**

Màu tím thường được liên kết với sự bảo mật, bí ẩn, và cao cấp. Với một trang so sánh VPN — sản phẩm liên quan trực tiếp đến quyền riêng tư — thì màu này phù hợp về mặt cảm xúc. Ngoài ra, hầu hết VPN brands đang dùng xanh navy hoặc xanh lá, nên chọn tím giúp trang nhìn khác và dễ nhớ hơn.

**Tại sao chọn Outfit và Inter?**

Outfit có nét chữ hiện đại, gọn gàng — không quá cứng nhắc như các font serif nhưng cũng không quá bình thường. Dùng cho tiêu đề thì trông có "cá tính". Inter thì được tạo ra đặc biệt để dễ đọc trên màn hình — chữ rõ nét ở cỡ nhỏ, không gây mỏi mắt khi đọc nhiều.

**Nguồn cảm hứng chính:**

- ProtonVPN: cách làm bảng so sánh theo cột và tone màu tím
- VPNet Theme: bố cục Hero 2 cột, cách đặt nút CTA
- GoodLayers Infinite: bố cục bước quy trình ngang, hiệu ứng hover card

**Nếu có thêm thời gian, sẽ làm thêm gì?**

1. Thêm phần đánh giá từ người dùng thực — giúp tăng độ tin cậy
2. Cho phép lọc bảng theo nhu cầu (xem phim, chơi game, bảo mật) — bảng thay đổi nội dung theo
3. Tối ưu hiệu suất: tải popup khi cần, ảnh dạng WebP, tách code theo route

---

## Công nghệ sử dụng

| Phần | Công nghệ |
|---|---|
| Giao diện | React 18 + Vite |
| CSS | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icon | Lucide React |
| Hạt chuyển động | Canvas API (thuật toán Boids) |
| Font | Google Fonts: Outfit + Inter |
