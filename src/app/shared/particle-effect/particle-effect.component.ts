import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particle-effect',
  templateUrl: './particle-effect.component.html',
  styleUrls: ['./particle-effect.component.css']
})
export class ParticleEffectComponent implements OnInit {
  // Mảng chứa số lượng hạt (particles) bạn muốn tạo
  particleCount = 10; 
  particles: { id: number; delay: number; duration: number }[] = [];

  ngOnInit() {
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        id: i,
        // Ngẫu nhiên hóa thời gian trễ (delay) để hạt xuất hiện ngẫu nhiên
        delay: Math.random() * 10, 
        // Ngẫu nhiên hóa thời gian bay (duration) để tốc độ khác nhau
        duration: 8 + Math.random() * 8 
      });
    }
  }

  // Phương thức trả về biểu tượng ngẫu nhiên (trái tim, bong bóng...)
  getParticleSymbol(id: number): string {
    // Sử dụng các biểu tượng có màu hồng, trắng hoặc nhẹ nhàng
    const symbols = ['🤍', '💖']; 
    
    // Biểu tượng trái tim trắng ('🤍') sẽ làm nền trong suốt dễ dàng hơn
    return symbols[id % symbols.length]; 
}
}