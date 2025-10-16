// lightbox-modal.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lightbox-modal',
  template: `
    <div *ngIf="visible" 
         (click)="close()"
         class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] p-4 cursor-pointer transition-opacity duration-300">
      
      <div (click)="$event.stopPropagation()" class="max-w-full max-h-full relative">
        <img [src]="photoUrl" 
             alt="Ảnh Cưới Lớn" 
             class="max-w-[90vw] max-h-[90vh] object-contain shadow-2xl transition-transform duration-300 transform scale-100">
        
        <button (click)="close()" 
                class="absolute top-4 right-4 md:top-8 md:right-8 text-white text-4xl leading-none opacity-80 hover:opacity-100 transition-opacity focus:outline-none">
          &times;
        </button>
      </div>
    </div>
  `,
  styles: [''] // Không cần CSS riêng vì dùng Tailwind trong template
})
export class LightboxModalComponent {
  @Input() visible: boolean = false; // Trạng thái hiển thị
  @Input() photoUrl: string | null = null; // URL ảnh
  
  // Sự kiện gửi ra ngoài khi đóng
  @Output() closeEvent = new EventEmitter<void>();

  close(): void {
    this.closeEvent.emit();
  }
}