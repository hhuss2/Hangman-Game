import React, { useState } from 'react';
import WordDisplay from './components/WordDisplay';
import Keyboard from './components/Keyboard';
import GameStatus from './components/GameStatus';
import Hangman from './components/Hangman';
import './App.css';

const words = [
  "apple", "banana", "orange", "grape", "strawberry", "pineapple", "watermelon", "kiwi",
  "blueberry", "peach", "pear", "plum", "apricot", "cherry", "mango", "lemon", "lime",
  "melon", "coconut", "fig", "date", "grapefruit", "raspberry", "nectarine", 
  "lion", "tiger", "elephant", "giraffe", "monkey", "gorilla", "hippopotamus", "rhinoceros",
  "crocodile", "alligator", "koala", "kangaroo", "panda", "penguin", "cheetah", "leopard", "jaguar",
  "wolf", "fox", "bear", "whale", "dolphin", "shark", "octopus", "sparrow", "robin", "cardinal", "crow", 
  "eagle", "duck", "goose", "swan", "parrot", "turkey", "peacock", "horse", "dog", "cat", "fish", "bird", 
  "tree", "flower", "grass", "sun", "moon", "star", "sky", "cloud", "rain", "snow", "wind", "fire", "earth", 
  "water", "rock", "sand", "beach", "mountain", "hill", "valley", "ocean", "river", "lake", "stream", "forest", 
  "jungle", "desert", "cave", "bridge", "road", "street", "highway", "path", "trail", "garden", "park", "zoo", 
  "market", "store", "mall", "restaurant", "cafe", "hotel", "house", "home", "apartment", "room", "kitchen", 
  "bathroom", "bedroom", "garage", "closet", "window", "door", "wall", "floor", 
  "ceiling", "roof", "chair", "table", "desk", "sofa", "couch", "bed", "dresser", "mirror", "lamp", "light", 
  "fan", "heater", "television", "radio", "computer", "laptop", "phone", "cellphone", "tablet", 
  "keyboard", "mouse", "screen", "monitor", "printer", "scanner", "camera", "video", "game", "music", "movie", 
  "book", "novel", "magazine", "newspaper", "article", "story", "poem", "song", "painting", "drawing", "sketch", 
  "sculpture", "photograph", "film", "video", "game", "puzzle", "toy", "doll", "car", "truck", "bus", "van", 
  "bicycle", "motorcycle", "boat", "ship", "sailboat", "yacht", "submarine", "airplane", "helicopter", "rocket", 
  "train", "subway", "tram", "taxi", "ambulance", "firetruck", "policecar", "tractor", "bulldozer", "crane", 
  "forklift", "drone", "spaceship", "astronaut", "planet", "moon", "star", "sun", "galaxy", "universe", 
  "science", "biology", "chemistry", "physics", "mathematics", "astronomy", "geography", "history", "language", 
  "literature", "art", "music", "dance", "sport", "football", "soccer", "basketball", "volleyball", "tennis", 
  "golf", "baseball", "hockey", "rugby", "cricket", "badminton", "tabletennis", "swimming", "running", "jogging", 
  "walking", "hiking", "climbing", "cycling", "surfing", "skateboarding", "skiing", "snowboarding", "skating", 
  "fishing", "hunting", "diving", "yoga", "pilates", "meditation", "boxing", "karate", "taekwondo", "judo", 
  "aikido", "kungfu", "kickboxing", "muaythai", "wrestling", "rowing", "sailing", "canoeing", "kayaking", 
  "rafting", "caving", "mountaineering", "bungeejumping", "paragliding", "skydiving", "hanggliding", 
  "parachuting", "camping", "backpacking", "picnicking", "traveling", "exploring", "adventure", "journey", 
  "discovery", "expedition", "excursion", "trip", "voyage", "sightseeing", "tour", "vacation", "holiday", 
  "weekend", "getaway", "retreat", "resort", "spa", "beach", "mountain", "lake", "island", "countryside", 
  "forest", "jungle", "desert", "ocean", "sea", "river", "waterfall", "cave", "valley", "glacier", "canyon", 
  "volcano", "rainforest", "savanna", "tundra", "polar", "arctic", "antarctic", "temperate", "tropical", 
  "mediterranean", "alpine", "grassland", "plateau", "hill", "mountain", "range", "summit", "peak", "cliff", 
  "slope", "plain", "prairie", "meadow", "marsh", "swamp", "bog", "fen", "delta", "estuary", "mangrove", 
  "oasis", "peninsula", "island", "archipelago", "cape", "bay", "harbor", "lagoon", "cove", "gulf", "strait", 
  "channel", "sound", "fjord", "lake", "reservoir", "dam", "river", "stream", "brook", "creek", "canal", 
  "aqueduct", "waterfall", "pond", "pool", "spring", "well", "hot", "spring", "volcano", "crater", 
  "lava", "flow", "magma", "ash", "smoke", "eruption", "earthquake", "tsunami", "hurricane", "typhoon", 
  "tornado", "cyclone"];


function App() {
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const maxWrongGuesses = 6;

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (!word.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  const resetGame = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setWrongGuesses(0);
  };

  const isGameOver = wrongGuesses >= maxWrongGuesses;
  const isGameWon = word.split('').every(letter => guessedLetters.includes(letter));

  return (
    <div className="App">
      <h1>Hangman</h1>
      <Hangman wrongGuesses={wrongGuesses} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <Keyboard guessedLetters={guessedLetters} handleGuess={handleGuess} disabled={isGameOver || isGameWon} />
      <GameStatus 
        wrongGuesses={wrongGuesses} 
        maxWrongGuesses={maxWrongGuesses} 
        resetGame={resetGame} 
        isGameOver={isGameOver} 
        isGameWon={isGameWon}
        word={word}
      />
    </div>
  );
}

export default App;
