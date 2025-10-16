import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  
  // Mảng chứa đường dẫn ảnh cưới của bạn
  // THAY THẾ 'URL_ANH_...' bằng đường dẫn URL thực tế
  photos = [
    { url: 'assets/images/codau.jpg', description: 'Khoảnh khắc lãng mạn' },
    { url: 'assets/images/chure.jpg', description: 'Ánh mắt trao nhau' },
    { url: 'assets/images/w1.jpg', description: 'Nắm tay đi hết cuộc đời' },
    { url: 'assets/images/w3.jpg', description: 'Hạnh phúc giản đơn' },
    { url: 'assets/images/w4.jpg', description: 'Nụ cười rạng rỡ' },
    { url: 'assets/images/wed-1.jpg', description: 'Tình yêu vĩnh cửu' },
    // Thêm bao nhiêu ảnh tùy thích
  ];

  ngOnInit(): void {
    // Logic khởi tạo (nếu cần)
  }
  
  // BIẾN MỚI: Quản lý trạng thái Modal
  isModalVisible: boolean = false;
  selectedPhotoUrl: string | null = null;

  // Mở Lightbox
  openLightbox(photoUrl: string): void {
    this.selectedPhotoUrl = photoUrl;
    this.isModalVisible = true;
  }
  
  // Đóng Lightbox
  closeLightbox(): void {
    this.isModalVisible = false;
    this.selectedPhotoUrl = null;
  }
}
