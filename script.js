// データ（単語・画像URL・音声ファイル名）
const data = [
  {
    word: "at",
    image: "assets/at.png",
    sound: "at.mp3"
  },
  {
    word: "sit",
    image: "assets/sit.png",
    sound: "sit.mp3"
  },
  {
    word: "tap",
    image: "assets/tap.png",
    sound: "tap.mp3"
  },
  {
  word: "spit",
  image: "assets/spit.png",
  sound: "assets/spit.mp3"
},
{
  word: "pant",
  image: "assets/pant.png",
  sound: "assets/pant.mp3"
},
{
  word: "ant",
  image: "assets/ant.png",
  sound: "assets/ant.mp3"
},
{
  word: "pan",
  image: "assets/pan.png",
  sound: "assets/pan.mp3"
},
{
  word: "snap",
  image: "assets/snap.png",
  sound: "assets/snap.mp3"
},
{
  word: "pants",
  image: "assets/pants.png",
  sound: "assets/pants.mp3"
},
{
  word: "tin",
  image: "assets/tin.png",
  sound: "assets/tin.mp3"
},
{
  word: "pin",
  image: "assets/pin.png",
  sound: "assets/pin.mp3"
},
{
  word: "spin",
  image: "assets/spin.png",
  sound: "assets/spin.mp3"
},
{
  word: "cat",
  image: "assets/cat.png",
  sound: "assets/cat.mp3"
},
{
  word: "can",
  image: "assets/can.png",
  sound: "assets/can.mp3"
},
{
  word: "skip",
  image: "assets/skip.png",
  sound: "assets/skip.mp3"
},
{
  word: "snack",
  chunks: ["s", "n", "a", "ck"],
  image: "assets/snack.png",
  sound: "assets/snack.mp3"
},
{
  word: "sick",
  image: "assets/sick_hamster.png",
  sound: "assets/sick.mp3"
},
{
  word: "nest",
  image: "assets/nest.png",
  sound: "assets/nest.mp3"
},
{
  word: "net",
  image: "assets/net.png",
  sound: "assets/net.mp3"
},
{
  word: "pen",
  image: "assets/pen.png",
  sound: "assets/pen.mp3"
},
{
  word: "tent",
  image: "assets/tent.png",
  sound: "assets/tent.mp3"
},
{
  word: "neck",
  image: "assets/neck.png",
  sound: "assets/neck.mp3"
},
{
  word: "tennis",
  chunks: ["t", "e", "nn", "i", "s"],
  image: "assets/tennis.png",
  sound: "assets/tennis.mp3"
},
{
  word: "hat",
  image: "assets/hat.png",
  sound: "assets/hat.mp3"
}

];


let current = 0;

// 単語と画像を表示


 function showWord() {
  const wordEl = document.getElementById("word");
  const imageEl = document.getElementById("image");

  wordEl.innerHTML = "";
  imageEl.style.visibility = "hidden";

  const wordData = data[current]; // ← ここだけ追加

  typeWriter(wordData, function () {
    imageEl.src = wordData.image;
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

// タイプライター風にチャンク表示
function typeWriter(wordData, callback) {
  const wordEl = document.getElementById("word");
  wordEl.innerHTML = ""; // 表示リセット

  const chunks = wordData.chunks || wordData.word.split(""); // chunksがなければ1文字ずつ
  let i = 0;

  function type() {
    if (i < chunks.length) {
      wordEl.innerHTML += chunks[i];
      i++;
      setTimeout(type, 500); // 表示スピード
    } else {
      if (typeof callback === "function") callback();
    }
  }

  type();
}



// 最初の単語を表示
window.onload = showWord;
