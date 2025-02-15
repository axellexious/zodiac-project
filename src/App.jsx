import React, { useState, useEffect } from "react";
import "./App.css";
// import zodiac images
import dragonImage from "./assets/images/dragon.png";
import roosterImage from "./assets/images/rooster.png";
import goatImage from "./assets/images/goat.png";
import horseImage from "./assets/images/horse.png";
import monkeyImage from "./assets/images/monkey.png";
import oxImage from "./assets/images/ox.png";
import ratImage from "./assets/images/rats.png";
import snakeImage from "./assets/images/snake.png";
import tigerImage from "./assets/images/tiger.png";
import rabbitImage from "./assets/images/rabbit.png";
import dogImage from "./assets/images/dog.png";
import pigImage from "./assets/images/pig.png";
// import background images (di kompleto)
import horseBG from "./assets/images/horsebg.webp";
import monkeyBG from "./assets/images/monkeybg.webp";
import oxBG from "./assets/images/oxbg.webp";
import ratBG from "./assets/images/ratbg.webp";
import snakeBG from "./assets/images/snakebg.webp";

// array for zodiac signs, duhhh!! what more do you want, ffs
const zodiacSigns = [
  "Rat",
  "Ox",
  "Tiger",
  "Rabbit",
  "Dragon",
  "Snake",
  "Horse",
  "Goat",
  "Monkey",
  "Rooster",
  "Dog",
  "Pig",
];

// generic description for each zodiac sign, as if its even believable in the first place *screams
const horoscopes = {
  Rat: "You're quick-witted and resourceful!",
  Ox: "Hard work and determination define you.",
  Tiger: "You're brave and ambitious!",
  Rabbit: "You're gentle and compassionate.",
  Dragon: "Confidence and energy fuel you.",
  Snake: "Wisdom and mystery surround you.",
  Horse: "You're free-spirited and energetic.",
  Goat: "You're creative and kind-hearted.",
  Monkey: "Clever and curious, you love challenges.",
  Rooster: "You're hardworking and honest.",
  Dog: "You're loyal and protective.",
  Pig: "You're generous and good-natured.",
};

// Zodiac Sign Images
// minimalist images import for a clean and slick UI... I don't even f*cking know man
const zodiacImages = {
  Rat: ratImage,
  Ox: oxImage,
  Tiger: tigerImage,
  Rabbit: rabbitImage,
  Dragon: dragonImage,
  Snake: snakeImage,
  Horse: horseImage,
  Goat: goatImage,
  Monkey: monkeyImage,
  Rooster: roosterImage,
  Dog: dogImage,
  Pig: pigImage,
};

// Zodiac Background Images
// can't even find a uniform image for all backgrounds to use for this smh
const zodiacBackgrounds = {
  Rat: ratBG,
  Ox: oxBG,
  Tiger: "",
  Rabbit: "",
  Dragon: "",
  Snake: snakeBG,
  Horse: horseBG,
  Goat: "",
  Monkey: monkeyBG,
  Rooster: "",
  Dog: "",
  Pig: "",
};

// const compatibilityData = {
//   Rat: { Ox: 85, Dragon: 90, Monkey: 80, Horse: 40, Goat: 50 },
//   Ox: { Rat: 85, Snake: 88, Rooster: 92, Goat: 45, Dog: 55 },
//   Tiger: { Horse: 89, Dog: 85, Monkey: 60, Ox: 40, Snake: 50 },
//   Rabbit: { Goat: 90, Pig: 88, Dog: 80, Rooster: 45, Snake: 50 },
//   Dragon: { Rat: 90, Monkey: 85, Rooster: 88, Ox: 50, Dog: 55 },
//   Snake: { Ox: 88, Rooster: 85, Dragon: 80, Tiger: 50, Rabbit: 50 },
//   Horse: { Tiger: 89, Goat: 85, Dog: 80, Rat: 40, Rooster: 50 },
//   Goat: { Rabbit: 90, Horse: 85, Pig: 80, Rat: 50, Ox: 45 },
//   Monkey: { Rat: 80, Dragon: 85, Snake: 75, Tiger: 60, Pig: 50 },
//   Rooster: { Ox: 92, Dragon: 88, Snake: 85, Rabbit: 45, Horse: 50 },
//   Dog: { Tiger: 85, Rabbit: 80, Horse: 80, Ox: 55, Dragon: 55 },
//   Pig: { Rabbit: 88, Goat: 80, Monkey: 50, Rooster: 45, Snake: 50 },
// };

// Function to calculate Zodiac Sign
// this is WRONG but I've gone past the point of correcting it, I'm losing my mind
const getZodiacSign = (year) => {
  if (year < 1900 || year > 2100) return null;
  return zodiacSigns[(year - 1900) % 12];
};

// Function to generate Lucky Numbers (fraud)
// lmao, zodiac signs aren't even real so why should I make this real too
// i mean, if people believe in zodiac signs then they for sure will believe in this
const getLuckyNumbers = () => {
  return Array.from({ length: 3 }, () => Math.floor(Math.random() * 100) + 1);
};

const App = () => {
  const [birthYear, setBirthYear] = useState("");
  const [zodiacSign, setZodiacSign] = useState(null);
  const [luckyNumbers, setLuckyNumbers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Change background when zodiac sign changes
    if (zodiacSign) {
      document.body.style.backgroundImage = `url(${zodiacBackgrounds[zodiacSign]})`;
    } else {
      document.body.style.backgroundImage = `url("")`;
    }
  }, [zodiacSign]);

  const handleCalculate = () => {
    const year = parseInt(birthYear);
    if (isNaN(year) || year < 1900 || year > 2100) {
      setError(
        "Please enter a valid birth year (1900-2100). you old as hell 💀"
      );
      setZodiacSign(null);
      setLuckyNumbers([]);
    } else {
      setError("");
      const sign = getZodiacSign(year);
      setZodiacSign(sign);
      setLuckyNumbers(getLuckyNumbers());
    }
  };

  return (
    <div className="container">
      <h1>Zodiac Sign Calculator</h1>
      <input
        type="number"
        value={birthYear}
        onChange={(e) => setBirthYear(e.target.value)}
        placeholder="Enter your birth year"
      />
      <button onClick={handleCalculate}>Find My Sign</button>

      {error && <p className="error">{error}</p>}

      {zodiacSign && (
        <div className="zodiac-result">
          <h2>{zodiacSign}</h2>
          <img
            src={zodiacImages[zodiacSign]}
            alt={zodiacSign}
            className="zodiac-image"
          />
          <p>{horoscopes[zodiacSign]}</p>
          <h3>Lucky Numbers:</h3>
          <p>{luckyNumbers.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

// const getCompatibility = (sign1, sign2) => {
//   if (!sign1 || !sign2) return null;
//   if (sign1 === sign2)
//     return { score: 95, message: "A perfect match! Same signs attract." };

//   const score =
//     compatibilityData[sign1]?.[sign2] ||
//     compatibilityData[sign2]?.[sign1] ||
//     60;

//   let message = "";
//   if (score >= 85) {
//     message = "Excellent match! Your energies align well.";
//   } else if (score >= 70) {
//     message = "A good match with some effort!";
//   } else if (score >= 50) {
//     message = "Neutral compatibility. It could work with patience.";
//   } else {
//     message = "Challenging match. Be ready for some differences!";
//   }

//   return { score, message };
// };

// const [compareSign, setCompareSign] = useState("");
// const [compatibilityResult, setCompatibilityResult] = useState(null);

// const handleCompare = () => {
//   const result = getCompatibility(zodiacSign, compareSign);
//   setCompatibilityResult(result);
// };

// {
//   zodiacSign && (
//     <div className="compatibility-section">
//       <h3>Check Compatibility</h3>
//       <select
//         value={compareSign}
//         onChange={(e) => setCompareSign(e.target.value)}
//       >
//         <option value="">Select a Sign</option>
//         {zodiacSigns.map((sign) => (
//           <option key={sign} value={sign}>
//             {sign}
//           </option>
//         ))}
//       </select>
//       <button onClick={handleCompare} disabled={!compareSign}>
//         Check
//       </button>

//       {compatibilityResult && (
//         <div className="compatibility-result">
//           <h4>Compatibility with {compareSign}</h4>
//           <p>Score: {compatibilityResult.score}%</p>
//           <p>{compatibilityResult.message}</p>
//         </div>
//       )}
//     </div>
//   );
// }

export default App;
// nightmare nightmare nightmare nightmare nightmare nightmare nightmare nightmare nightmare
