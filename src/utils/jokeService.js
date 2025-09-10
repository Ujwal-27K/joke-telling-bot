// Service to fetch jokes from various APIs
export const fetchRandomJoke = async () => {
  try {
    // Using JokeAPI as it's free and doesn't require authentication
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single');
    
    if (!response.ok) {
      throw new Error('Failed to fetch joke');
    }
    
    const data = await response.json();
    
    // Handle different joke types
    if (data.type === 'single') {
      return data.joke;
    } else if (data.type === 'twopart') {
      return `${data.setup} ${data.delivery}`;
    }
    
    throw new Error('Invalid joke format');
  } catch (error) {
    console.error('Error fetching joke:', error);
    
    // Fallback jokes in case API is unavailable
    const fallbackJokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "Why did the scarecrow win an award? He was outstanding in his field!",
      "Why don't eggs tell jokes? They'd crack each other up!",
      "What do you call a fake noodle? An impasta!",
      "Why did the math book look so sad? Because it had too many problems!",
      "What do you call a bear with no teeth? A gummy bear!",
      "Why don't skeletons fight each other? They don't have the guts!",
      "What do you call a fish wearing a bowtie? Sofishticated!",
      "Why did the cookie go to the doctor? Because it felt crumbly!",
      "What do you call a sleeping bull? A bulldozer!"
    ];
    
    return fallbackJokes[Math.floor(Math.random() * fallbackJokes.length)];
  }
};
