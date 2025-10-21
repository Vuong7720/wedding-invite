import { Component } from '@angular/core';


interface QrInfo {
  bank: string;
  accountNumber: string;
  accountName: string;
  qrUrl: string;
  note: string;
}

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})

export class OtherComponent {
// Trạng thái hiển thị chung của Modal
  isModalVisible: boolean = false;
  // Trạng thái để xác định có đang hiển thị phần chọn Nhà Trai/Nhà Gái hay không
  isSelectionPhase: boolean = true; 
  // Dữ liệu QR đang được hiển thị
  currentQrInfo: QrInfo | null = null; 

  // Dữ liệu cho Nhà Trai và Nhà Gái
  groomQr: QrInfo = {
    bank: 'Vietinbank',
    accountNumber: '105870669836',
    accountName: 'Hồ Ngọc Thái (Nhà Trai)',
    qrUrl: 'assets/image_weding/qr_chure1.jpg', 
    note: 'Chúc mừng cô dâu chú rể trăm năm hạnh phúc!'
  };

  brideQr: QrInfo = {
    bank: 'MbBank',
    accountNumber: '0378260537',
    accountName: 'Nông Kim Ngân (Nhà Gái)',
    qrUrl: 'assets/image_weding/qr_codau2.jpg', 
    note: 'Chúc mừng cô dâu chú rể!'
  };

  // Mở Modal (luôn mở ở bước chọn ban đầu)
  openModal(): void {
    this.isModalVisible = true;
    this.isSelectionPhase = true;
    this.currentQrInfo = null;
  }

  // Đóng Modal hoàn toàn
  closeModal(): void {
    this.isModalVisible = false;
    this.isSelectionPhase = true; // Reset trạng thái
    this.currentQrInfo = null;
  }

  // Hiển thị QR Code của Nhà Trai hoặc Nhà Gái
  showQr(party: 'groom' | 'bride'): void {
    this.isSelectionPhase = false; // Chuyển sang giai đoạn hiển thị QR
    this.currentQrInfo = party === 'groom' ? this.groomQr : this.brideQr;
  }

  // Quay lại màn hình chọn Nhà Trai/Nhà Gái
  backToSelection(): void {
    this.isSelectionPhase = true;
    this.currentQrInfo = null;
  }

  // Xử lý đóng khi click ra ngoài
  closeModalOnBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}
