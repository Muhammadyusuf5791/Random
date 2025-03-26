const btn = document.getElementById('btn');
const box = document.getElementById('box');
const prizeBox = document.getElementById('prize-box');

const headings = [
    "🎉 10 mln so'm!", "🎊 Televizor!", "🎈 Yutqazdingiz!", "🏆 Telefon!", "🔥 4mln so'm!",
    "🎯 Damas!", "💻 Laptop!", "🎁 Sovg‘a qutisi!", "💰 1 mln so‘m!", "🚗 Malibu!",
    "🏍️ Motosikl!", "📱 iPhone!", "🎮 PlayStation!", "🏡 Uy!", "🛥️ Kema!",
    "💎 Brilliant uzuk!", "📷 Kamera!", "🖥️ Monitor!", "🛫 Sayohat!", "🎫 Kino bileti!"
];

let currentRotation = 0; // Doimiy aylanib turishi uchun

function myFunction() {
    let randomIndex = Math.floor(Math.random() * headings.length);
    let randomHeading = headings[randomIndex];

    let spins = 5 + Math.floor(Math.random() * 5); // 5-10 marta aylanish
    let extraRotation = spins * 360; // Necha gradusga aylanadi

    currentRotation += extraRotation; // Oldingi rotation'ga qo‘shamiz

    // Aylanish effekti qo‘shish
    box.style.transform = `rotate(${currentRotation}deg)`;

    // Yutuqlarni oldindan ko‘rsatish
    prizeBox.innerText = "Aylanyapti... 🎰";

    // Aylanish tugagandan keyin natijani chiqarish
    setTimeout(() => {
        prizeBox.innerText = randomHeading; // Yutuqni yuqorida ko‘rsatish
    }, 1000);
}

btn.addEventListener('click', myFunction);