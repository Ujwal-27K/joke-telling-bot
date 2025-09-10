# 🤖 Joke Telling Bot Web App

A full-featured voice-enabled joke telling bot built with React and the Web Speech API. This application demonstrates the integration of speech synthesis, speech recognition, and modern web APIs to create an interactive voice assistant experience.

## ✨ Features

### Core Functionality
- **Random Joke Generation**: Fetches jokes from JokeAPI with family-friendly filtering
- **Text-to-Speech**: Reads jokes aloud using the Web Speech API
- **Voice Commands**: Responds to "Tell me a joke" voice commands
- **Keyboard Shortcuts**: Press 'J' key to get a joke
- **Fallback System**: Built-in jokes when API is unavailable

### Voice Customization
- **Multiple Voices**: Choose from available system voices
- **Language Support**: Select different languages and accents
- **Speed Control**: Adjust speech rate (0.5x - 2x)
- **Pitch Control**: Modify voice pitch (0.5x - 2x) 
- **Volume Control**: Set volume level (0% - 100%)

### User Experience
- **Modern UI**: Dark theme with gradient backgrounds
- **Real-time Feedback**: Visual indicators for loading, speaking, and listening states
- **Responsive Design**: Works on desktop and mobile devices
- **Accessible Controls**: Clear labels and keyboard navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Modern web browser with Web Speech API support

### Installation

1. **Navigate to project directory**
   ```bash
   cd joke-telling-bot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🎯 How to Use

### Getting Jokes
1. **Click Button**: Press "Tell Me a Joke!" button
2. **Keyboard**: Press the 'J' key anywhere on the page
3. **Voice Command**: Click "🎤 Voice Command" and say "Tell me a joke"

### Customizing Voice
1. **Select Voice**: Choose from available system voices in the dropdown
2. **Adjust Speed**: Use the speed slider to make speech faster or slower
3. **Change Pitch**: Modify the pitch for different voice tones
4. **Set Volume**: Control the audio level

### Controls
- **Stop Speaking**: Click "Stop Speaking" to interrupt current joke
- **Voice Recognition**: Browser will ask for microphone permission on first use

## 🛠 Technical Implementation

### Architecture
- **React Hooks**: Uses modern React patterns with functional components
- **Web Speech API**: Leverages browser's built-in speech capabilities
- **Async/Await**: Clean error handling for API calls
- **Custom Services**: Modular design with separate service files

### Key Files
- `src/App.js` - Main application component
- `src/utils/jokeService.js` - Joke fetching logic
- `src/utils/speechService.js` - Web Speech API wrapper
- `src/App.css` - Modern styling and animations

### Browser Compatibility
- **Speech Synthesis**: Supported in all modern browsers
- **Speech Recognition**: Chrome, Edge, Safari (with webkit prefix)
- **Fallback**: Graceful degradation when features aren't available

## 🎨 Design Features

- **Dark Theme**: Easy on the eyes with professional appearance
- **Gradient Backgrounds**: Subtle animated backgrounds
- **Glassmorphism**: Frosted glass effects on panels
- **Responsive Layout**: Adapts to different screen sizes
- **Interactive Elements**: Hover effects and smooth transitions

## 📱 API Integration

### JokeAPI
- **Endpoint**: `https://v2.jokeapi.dev/joke/Any`
- **Filtering**: Excludes inappropriate content
- **Fallback**: Local jokes when API is unavailable
- **Error Handling**: Graceful degradation

### Web Speech API
- **SpeechSynthesis**: Text-to-speech functionality
- **SpeechRecognition**: Voice command processing
- **Voice Selection**: Multiple language and accent options
- **Event Handling**: Start, end, and error callbacks

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`
Builds the app for production to the `build` folder. Creates optimized production build.

### `npm test`
Launches the test runner in interactive watch mode.

## 🔧 Customization

### Adding New Jokes
Edit the fallback jokes array in `src/utils/jokeService.js`

### Changing Voice Commands
Modify the recognition logic in `src/utils/speechService.js`

### Styling Updates
Update CSS variables in `src/App.css` for theme changes

## 🌟 Future Enhancements

- **Joke Categories**: Filter jokes by type (programming, dad jokes, etc.)
- **Favorites System**: Save and replay favorite jokes
- **Social Sharing**: Share jokes on social media
- **Multi-language**: Support for non-English jokes
- **Custom Voices**: Integration with premium TTS services
- **Joke Ratings**: User feedback system

---

**Enjoy the jokes! 😄**
