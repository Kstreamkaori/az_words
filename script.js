// データ（単語・画像URL・音声ファイル名）
const data = [
  {
    word: "at",
    image: "https://cdn.glitch.global/1d40a9e0-89ab-4243-b87a-fa0117ad6a73/at.png?v=1749121804356",
    sound: "at.mp3"
  },
  {
    word: "sit",
    image: "https://cdn.glitch.global/1d40a9e0-89ab-4243-b87a-fa0117ad6a73/sit.png?v=1749122152834",
    sound: "sit.mp3"
  },
  {
    word: "tap",
    image: "https://cdn.glitch.global/1d40a9e0-89ab-4243-b87a-fa0117ad6a73/tap.png?v=1749122142882",
    sound: "tap.mp3"
  }
];

let current = 0;

// 単語と画像を表示
function showWord() {
  const wordEl = document.getElementById("word");
  const imageEl = document.getElementById("image");

  wordEl.innerHTML = "";
  imageEl.style.visibility = "hidden"; // 読み込みまで非表示

  typeWriter(data[current].word, function () {
    imageEl.src = data[current].image;
    imageEl.onload = () => {
      imageEl.style.visibility = "visible";
    };
  });
}

// 音声再生
function playSound() {
  const audio = new Audio(data[current].sound);
  audio.play();
}

// 前の単語へ
function prevWord() {
  current = (current - 1 + data.length) % data.length;
  showWord();
}

// 次の単語へ
function nextWord() {
  current = (current + 1) % data.length;
  showWord();
}

// タイプライター風に1文字ずつ表示
function typeWriter(text, callback) {
  const wordEl = document.getElementById("word");
  let i = 0;

  function type() {
    if (i < text.length) {
      wordEl.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 500); // 表示間隔（ms）
    } else {
      if (typeof callback === "function") callback();
    }
  }

  type();
}

// 最初の単語を表示
window.onload = showWord;
