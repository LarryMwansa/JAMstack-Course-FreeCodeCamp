// Bank some good vibe options
const vibes = [
  "...and you are awesome!",
  "...have a wonderful day!",
  "...and you've got this!",
  "...and so is this puppy! 🐶",
  "...I am capable of achieving great things!",
  "...I am deserving of love, happiness, and success!",
  "...I am confident in my abilities and trust in my decisions!",
  "...I embrace my uniqueness and celebrate my individuality!",
  "...I attract positive opportunities and experiences into my life!",
  "...I am grateful for all the blessings in my life, big and small!",
  "...I am worthy of abundance and prosperity!",
  "...I have the power to create the life of my dreams!",
  "...I am surrounded by loving and supportive people!",
  "...I am a strong, resilient, and beautiful person, inside and out!",
];

// choose a random good vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// display a good vibe
document.querySelector(".vibe").append(vibe);
