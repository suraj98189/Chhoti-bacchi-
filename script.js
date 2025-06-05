const shayaris = [
  "Tum meri zindagi ki woh muskaan ho ❤️",
  "Tere bina subah adhuri lagti hai 🌅",
  "Tum ho toh har din special lagta hai 💫",
  "Main har din tumse aur bhi zyada pyaar karta hoon 🫶🏻",
  "Tere khayal se hi chehra muskurata hai 💖"
];

let index = 0;
function nextShayari() {
  index = (index + 1) % shayaris.length;
  document.getElementById("shayari").innerText = shayaris[index];
}
document.getElementById("shayari").innerText = shayaris[index];

function saveDiary() {
  const text = document.getElementById("diary").value;
  localStorage.setItem("swati-diary", text);
  alert("Saved 📝");
}
document.getElementById("diary").value = localStorage.getItem("swati-diary") || "";

function talk() {
  const input = document.getElementById("userInput").value.toLowerCase();
  let reply = "Hmm, batao aur? 😊";

  if (input.includes("miss")) reply = "Main bhi tumhe bahut miss karta hoon 😘";
  else if (input.includes("love")) reply = "I love you too jaan ❤️";
  else if (input.includes("angry")) reply = "Gussa mat ho baby 😔";
  else if (input.includes("sorry")) reply = "Koi baat nahi, tumhara Suraj maaf karega 😊";

  document.getElementById("botReply").innerText = reply;
}