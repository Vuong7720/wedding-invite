import { Component } from '@angular/core';

@Component({
  selector: 'app-wedding-info-component',
  templateUrl: './wedding-info-component.component.html',
  styleUrls: ['./wedding-info-component.component.css']
})
export class WeddingInfoComponentComponent {
  groomEvent = {
    title: 'Lễ Đính Hôn',
    date: 'Thứ Bảy, 08/11/2025',
    time: '10:00 (10 giờ sáng)',
    locationName: 'Nhà Hàng Du Xuyên 1',
    address: 'CQ6R+67F, Hải thanh, Nghi Sơn, Thanh Hóa, Việt Nam',
    googleMapsLink: 'https://maps.app.goo.gl/P4tGeUXYj47bxzFeA' // Thay thế bằng link thực tế
  };

  brideEvent = {
    title: 'Lễ Thành Hôn',
    date: 'Thứ ba, 11/11/2025',
    time: '11:00 (11 giờ trưa)',
    locationName: 'Nhà Hàng Du Xuyên 1',
    address: 'CQ6R+67F, Hải thanh, Nghi Sơn, Thanh Hóa, Việt Nam',
    googleMapsLink: 'https://maps.app.goo.gl/P4tGeUXYj47bxzFeA' // Thay thế bằng link thực tế
  };
}
