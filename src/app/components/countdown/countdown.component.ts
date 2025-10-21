import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {
// THAY THẾ NGÀY NÀY BẰNG NGÀY CƯỚI THỰC TẾ CỦA BẠN (Năm, Tháng-1, Ngày, Giờ, Phút)
  // Ví dụ: 11/11/2025 lúc 10:30 sáng
  private weddingDate = new Date(2025, 10, 11, 10, 0).getTime(); 
  
  // Biến hiển thị
  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  
  // Biến để quản lý interval (quan trọng cho OnDestroy)
  private countdownInterval: any;

  ngOnInit(): void {
    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.weddingDate - now;

    // Nếu thời gian đã hết
    if (distance < 0) {
      clearInterval(this.countdownInterval);
      this.days = this.hours = this.minutes = this.seconds = '00';
      // Bạn có thể đặt một thông báo khác ở đây, ví dụ: "The Big Day Is Here!"
      return;
    }

    // Tính toán thời gian
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // Định dạng số (thêm số 0 ở đầu nếu < 10)
    this.days = this.formatTime(d);
    this.hours = this.formatTime(h);
    this.minutes = this.formatTime(m);
    this.seconds = this.formatTime(s);
  }

  formatTime(time: number): string {
    return time < 10 ? '0' + time : time.toString();
  }

  ngOnDestroy(): void {
    // Dọn dẹp interval khi component bị hủy để tránh rò rỉ bộ nhớ
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
}
