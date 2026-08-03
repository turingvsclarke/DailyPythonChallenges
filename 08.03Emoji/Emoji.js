function getEmojiPhrase(str) {
  
  const emoji = {
  "👶": "baby",
  "🐱": "cat",
  "🐕": "dog",
  "🐟": "fish",
  "🥵": "hot",
  "🧊": "ice",
  "🪨": "rock",
  "🦈": "shark",
  "🍲": "soup",
  "⭐": "star"
  };

  let result=[];
  for(const s of str){
    result.push(emoji[s]);
  }
  console.log(result);
  return result.join(" ");
}