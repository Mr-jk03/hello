const lines = [
  "Chào bạn !, Bạn có thư từ",
  "Giang Xuan Cuong bạn đọc nhé !"
];

const typingTextElement = document.querySelector(".typing-text");
let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
          typingTextElement.innerHTML += lines[lineIndex][charIndex];
          charIndex++;
          setTimeout(typeLine, 100); // Điều chỉnh tốc độ gõ chữ
      } else {
          typingTextElement.innerHTML += "<br>";
          charIndex = 0;
          lineIndex++;
          setTimeout(typeLine, 500); // Thời gian nghỉ giữa các dòng
      }
  }
}

typeLine();

// Lấy phần tử ảnh và nút
const imgElement = document.querySelector('.img-element');
const btnElement = document.querySelector('.btn');

// Thêm class 'show' cho ảnh sau khi hoàn thành typing
setTimeout(() => {
  imgElement.classList.add('show');
}, lines.length * 500 + (lines.length - 1) * 100); // Sau khi typing xong, ấn định thời gian để ảnh xuất hiện

// Hiển thị nút "Đọc" sau khi ảnh hoàn tất hiệu ứng
imgElement.addEventListener('transitionend', () => {
  btnElement.style.display = 'block'; // Hiển thị nút sau khi ảnh hoàn tất hiệu ứng
  btnElement.style.opacity = 1; // Làm nút hiển thị dần
});

