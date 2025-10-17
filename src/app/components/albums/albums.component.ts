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
    { url: 'assets/image_weding/wd1.jpg', description: 'Khoảnh khắc lãng mạn' },
    { url: 'assets/image_weding/wd2.jpg', description: 'Ánh mắt trao nhau' },
    { url: 'assets/image_weding/wd3.jpg', description: 'Nắm tay đi hết cuộc đời' },
    { url: 'assets/image_weding/wd4.jpg', description: 'Hạnh phúc giản đơn' },
    { url: 'assets/image_weding/wd5.jpg', description: 'Nụ cười rạng rỡ' },
    { url: 'assets/image_weding/wd6.jpg', description: 'Tình yêu vĩnh cửu' },
    { url: 'assets/image_weding/wd7.jpg', description: 'Tình yêu vĩnh cửu' },
    { url: 'assets/image_weding/wd8.jpg', description: 'Tình yêu vĩnh cửu' },
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
