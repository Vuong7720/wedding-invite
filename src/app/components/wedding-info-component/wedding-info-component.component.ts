import { Component } from '@angular/core';

@Component({
  selector: 'app-wedding-info-component',
  templateUrl: './wedding-info-component.component.html',
  styleUrls: ['./wedding-info-component.component.css']
})
export class WeddingInfoComponentComponent {
// Thông tin Lễ Thành Hôn (Nhà Trai)
  groomEvent = {
    title: 'LỄ THÀNH HÔN (NHÀ TRAI)',
    date: 'Thứ Bảy, 08/11/2025',
    time: '18:00 (6 giờ tối)',
    locationName: 'Nhà Hàng Tiệc Cưới ABC',
    address: 'Số 123 Đường XYZ, Quận 1, TP. Hồ Chí Minh',
    googleMapsLink: 'https://maps.app.goo.gl/ddERYpxLAKxeTzkk7' // Thay thế bằng link thực tế
  };

  // Thông tin Tiệc Cưới (Nhà Gái)
  brideEvent = {
    title: 'TIỆC CƯỚI (NHÀ GÁI)',
    date: 'Chủ Nhật, 09/11/2025',
    time: '11:00 (11 giờ trưa)',
    locationName: 'Trung Tâm Hội Nghị DEF',
    address: 'Số 456 Đường QRS, Quận 7, TP. Hồ Chí Minh',
    googleMapsLink: 'https://maps.app.goo.gl/n4ryKL5s2Y1jE7h7A' // Thay thế bằng link thực tế
  };
}
