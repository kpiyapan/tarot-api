const http = require("http");

const cards = [
  "The Fool — การเริ่มต้นใหม่ โอกาสใหม่ กล้าลองสิ่งใหม่",
  "The Magician — ทุกอย่างอยู่ในมือคุณแล้ว ลงมือทำได้เลย",
  "The High Priestess — ฟังสัญชาตญาณ ความลับกำลังเปิดเผย",
  "The Empress — ความรัก ความอุดมสมบูรณ์ สิ่งดี ๆ กำลังเติบโต",
  "The Emperor — ความมั่นคง การควบคุม วางแผนให้ชัด",
  "The Lovers — ความรัก หรือการตัดสินใจครั้งสำคัญ",
  "The Chariot — ความสำเร็จจากความพยายาม สู้ต่อไป",
  "Strength — อดทน ใช้ใจนำ ไม่ใช่อารมณ์",
  "The Hermit — ถึงเวลาทบทวนตัวเอง อยู่กับตัวเอง",
  "Wheel of Fortune — ดวงกำลังเปลี่ยน อะไรใหม่กำลังมา",
  "Justice — ความยุติธรรม สิ่งที่ทำไว้จะสะท้อนกลับ",
  "The Hanged Man — มุมมองใหม่ อาจต้องยอมเสียบางอย่าง",
  "Death — การเปลี่ยนแปลงครั้งใหญ่ เริ่มต้นใหม่",
  "Temperance — หาจุดสมดุล ใจเย็นเข้าไว้",
  "The Devil — ระวังความยึดติด หรือสิ่งล่อลวง",
  "The Tower — การเปลี่ยนแปลงฉับพลัน ตั้งสติ",
  "The Star — ความหวัง กำลังดีขึ้นแล้ว",
  "The Moon — ความไม่ชัดเจน อย่าเพิ่งตัดสินใจ",
  "The Sun — ความสุข ความสำเร็จ โคตรปัง",
  "Judgement — โอกาสครั้งที่สอง การตื่นรู้",
  "The World — สำเร็จครบวงจร จบสวย",
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
