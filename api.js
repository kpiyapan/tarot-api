const http = require("http");

const cards = [
  // Major (22)
  "The Fool — เริ่มต้นใหม่ กล้าลอง",
  "The Magician — ลงมือทำ คุณมีของ",
  "The High Priestess — ฟังสัญชาตญาณ",
  "The Empress — ความรัก ความอุดมสมบูรณ์",
  "The Emperor — ความมั่นคง วางแผน",
  "The Lovers — ความรัก/การตัดสินใจ",
  "The Chariot — สำเร็จจากความพยายาม",
  "Strength — ใจแข็ง อดทน",
  "The Hermit — ทบทวนตัวเอง",
  "Wheel of Fortune — ดวงเปลี่ยน",
  "Justice — ยุติธรรม ผลกรรม",
  "The Hanged Man — มุมมองใหม่",
  "Death — เปลี่ยนแปลงใหญ่",
  "Temperance — สมดุล ใจเย็น",
  "The Devil — ระวังยึดติด",
  "The Tower — เปลี่ยนฉับพลัน",
  "The Star — ความหวัง",
  "The Moon — ไม่ชัดเจน",
  "The Sun — สำเร็จ ปัง",
  "Judgement — โอกาสใหม่",
  "The World — จบสวย",

  // Cups (14)
  "Ace of Cups — รักเริ่มต้น",
  "2 of Cups — คู่กัน",
  "3 of Cups — ฉลอง",
  "4 of Cups — เบื่อหน่าย",
  "5 of Cups — เสียใจ",
  "6 of Cups — อดีต",
  "7 of Cups — ตัวเลือก",
  "8 of Cups — เดินจาก",
  "9 of Cups — สมหวัง",
  "10 of Cups — ครอบครัวสุข",
  "Page of Cups — ข่าวรัก",
  "Knight of Cups — โรแมนติก",
  "Queen of Cups — อ่อนไหว",
  "King of Cups — คุมอารมณ์",

  // Swords (14)
  "Ace of Swords — ความจริง",
  "2 of Swords — ลังเล",
  "3 of Swords — เจ็บใจ",
  "4 of Swords — พัก",
  "5 of Swords — ขัดแย้ง",
  "6 of Swords — ไปต่อ",
  "7 of Swords — แอบแฝง",
  "8 of Swords — ติดกับ",
  "9 of Swords — เครียด",
  "10 of Swords — จุดจบ",
  "Page of Swords — ระวังคำพูด",
  "Knight of Swords — เร็วแรง",
  "Queen of Swords — ตรงไปตรงมา",
  "King of Swords — ใช้เหตุผล",

  // Pentacles (14)
  "Ace of Pentacles — เงินมา",
  "2 of Pentacles — สมดุลเงิน",
  "3 of Pentacles — ร่วมมือ",
  "4 of Pentacles — หวง",
  "5 of Pentacles — ขาดแคลน",
  "6 of Pentacles — ให้/รับ",
  "7 of Pentacles — รอผล",
  "8 of Pentacles — ขยัน",
  "9 of Pentacles — มั่นคง",
  "10 of Pentacles — รวยยาว",
  "Page of Pentacles — เรียนรู้",
  "Knight of Pentacles — ช้าแต่ชัวร์",
  "Queen of Pentacles — ดูแลดี",
  "King of Pentacles — มั่งคั่ง",

  // Wands (14)
  "Ace of Wands — เริ่มโปรเจกต์",
  "2 of Wands — วางแผน",
  "3 of Wands — โอกาสมา",
  "4 of Wands — ฉลองสำเร็จ",
  "5 of Wands — แข่งขัน",
  "6 of Wands — ชนะ",
  "7 of Wands — ปกป้อง",
  "8 of Wands — เร็วมาก",
  "9 of Wands — ใกล้สำเร็จ",
  "10 of Wands — ภาระหนัก",
  "Page of Wands — ไอเดียใหม่",
  "Knight of Wands — ลุย",
  "Queen of Wands — มั่นใจ",
  "King of Wands — ผู้นำ"
];

const port = process.env.PORT || 3000;

function drawRandom(arr, n) {
  const result = [];
  const used = new Set();
  while (result.length < n) {
    const i = Math.floor(Math.random() * arr.length);
    if (!used.has(i)) {
      used.add(i);
      result.push(arr[i]);
    }
  }
  return result;
}

http
  .createServer((req, res) => {
    if (req.url === "/tarot") {
      const draw = drawRandom(cards, 3);
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(
        "🔮 ไพ่ของคุณ: " +
          draw
            .map((c) => {
              const [name, desc] = c.split(" — ");
              return `${name} → ${desc}`;
            })
            .join(" | "),
      );
    } else {
      res.writeHead(404);
      res.end("Not Found");
    }
  })
  .listen(port);

console.log("API RUNNING");
