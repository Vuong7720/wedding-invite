import { Component } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent {
stories = [
    {
      title: 'Nơi Tình Yêu Bắt Đầu <3',
      date: 'October 04, 2020',
      content: 'Còn nhớ chiều bất chợt đổ xuống khu đồ da SALA...',
      imageUrl: 'assets/images/hangout1.jpg', // Thay thế bằng đường dẫn ảnh thực tế
    },
    {
      title: 'Chuyến đi chơi xa cùng nhau lần đầu tiên',
      date: 'December 05, 2020',
      content: 'Lần đầu cùng đi du lịch cưng ơi! Đà Lạt, trời đổ mưa từ sáng sớm...',
      imageUrl: 'assets/images/hangout2.jpg', // Thay thế bằng đường dẫn ảnh thực tế
    },
    // Thêm 5 câu chuyện còn lại (story-3 đến story-7)
    {
      title: 'Cùng nhay đi đến những chân trời mới',
      date: 'October 22, 2022',
      content: 'Cùng nhau đi du lịch, khám phá những vùng đất mới, chân trời tình yêu của chúng ta thêm gắn bó...',
      imageUrl: 'assets/images/hangout3.jpg',
    },
  ];
}
