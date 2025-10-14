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
      title: 'Câu Chuyện Thứ 3',
      date: 'Ngày/tháng/năm',
      content: 'Nội dung câu chuyện thứ 3...',
      imageUrl: 'assets/images/hangout3.jpg',
    },
    {
      title: 'Câu Chuyện Thứ 3',
      date: 'Ngày/tháng/năm',
      content: 'Nội dung câu chuyện thứ 3...',
      imageUrl: 'assets/images/hangout4.jpg',
    },
    {
      title: 'Câu Chuyện Thứ 3',
      date: 'Ngày/tháng/năm',
      content: 'Nội dung câu chuyện thứ 3...',
      imageUrl: 'assets/images/hangout5.jpg',
    },
    {
      title: 'Câu Chuyện Thứ 3',
      date: 'Ngày/tháng/năm',
      content: 'Nội dung câu chuyện thứ 3...',
      imageUrl: 'assets/images/hangout6.png',
    },
    {
      title: 'Câu Chuyện Thứ 3',
      date: 'Ngày/tháng/năm',
      content: 'Nội dung câu chuyện thứ 3...',
      imageUrl: 'assets/images/hangout7.jpg',
    },
  ];
}
