const voiceButton = document.getElementById('activate-voice');
const inputField = document.getElementById('voice-input'); // Text input for voice typing

// Voice Recognition Setup
voiceButton.addEventListener('click', () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  recognition.start();

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    console.log(`Command received: ${command}`);

    // Command: Theme Change (Dark/Light)
    if (command.includes('dark mode')) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        alert('Switched to Dark Mode!');
      }
      // Command: Light Mode
      else if (command.includes('light')) {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        alert('Switched to Light Mode!');
      }

    // Command: Dynamic Theme Color
    else if (command.includes('change theme to')) {
      const color = command.replace('change theme to', '').trim();
      changeThemeColor(color); // Call helper function to change theme color
    }

    // Command: Use Specific Image Themes (Anim or Cherry Blossom)
    else if (command.includes('use ok theme')) {
      setBackgroundTheme('anim'); // Set Anim background theme
    } else if (command.includes('use cherry blossom theme')) {
      setBackgroundTheme('cherry-blossom'); // Set Cherry Blossom background theme
    }

    // Command: Scroll Page (Up/Down)
    else if (command.includes('scroll down')) {
      window.scrollBy(0, 500); // Scroll down by 500px
      alert('Scrolled Down!');
    } else if (command.includes('scroll up')) {
      window.scrollBy(0, -500); // Scroll up by 500px
      alert('Scrolled Up!');
    }

    // Command: Voice Typing for Text Input
    else if (command.includes('type')) {
      const textToType = command.replace('type', '').trim();
      inputField.value = textToType; // Set text in the input field
      alert(`Typed: ${textToType}`);
    }

    // Command: Reset Theme
    else if (command.includes('reset theme')) {
      resetTheme();
      alert('Theme reset to default!');
    }

    // Command Not Recognized
    else {
      alert(`Command not recognized: ${command}`);
    }
    
  };

  recognition.onerror = (error) => {
    console.error('Recognition error:', error);
    alert('Error occurred in recognition. Please try again.');
  };
});

// Helper Function: Change Theme Color
function changeThemeColor(color) {
  const root = document.documentElement;
  root.style.setProperty('--accent-color', color); // Change the accent color dynamically
  alert(`Theme color changed to ${color}!`);
}

// Helper Function: Set Background Theme (Anim or Cherry Blossom)
function setBackgroundTheme(theme) {
  const body = document.body;

  // Set background image based on theme
  if (theme === 'anim') {
    body.style.backgroundImage = "url('photos/ds1.jpg')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    alert('Switched to Anim theme!');
  } else if (theme === 'cherry-blossom') {
    body.style.backgroundImage = "url('photos/cherry-blossom.jpg')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    alert('Switched to Cherry Blossom theme!');
  }
}

// Helper Function: Reset Theme to Default
function resetTheme() {
  const body = document.body;
  body.style.backgroundImage = "none"; // Remove custom background image
  body.style.backgroundColor = "#f9f9f9"; // Default background color
  alert('Background reset to default!');
}
// Voice Recognition Setup
const appLaunchButton = document.getElementById('activate-app-launch');

appLaunchButton.addEventListener('click', () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  recognition.start();

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    console.log(`Command received: ${command}`);

    // Match Commands for Applications
    if (command.includes('open calculator')) { // Open Calculator
        window.open('calc.html', '_blank');
        }
    else if (command.includes('open calendar')) { // Open Calendar
        window.open('calendar.html', '_blank');
        }
    else if (command.includes('open weather')) { // Open Weather App
        window.open('weather.html', '_blank');
        }
    else if (command.includes('open notes')) { // Open Notes App
        window.open('notes.html', '_blank');
        }
    else if (command.includes('open todo list')) { // Open Todo List App
        window.open('todo.html', '_blank');
        }
    else if (command.includes('open email')) { // Open Email App
        window.open('email.html', '_blank');

        }

    // Match Commands for Websites
    else if (command.includes('open youtube')) {
      window.open('https://www.youtube.com', '_blank');
    } else if (command.includes('open github')) {
      window.open('https://www.github.com', '_blank');
    } else if (command.includes('open google')) {
      window.open('https://www.google.com', '_blank');
    }
    else if (command.includes('open linked in')) {
      window.open('https://www.linkedin.com', '_blank');
    }

    // Unknown Command
    else {
      alert(`Sorry, I didn't recognize the command: "${command}"`);
    }
  };

  recognition.onerror = (error) => {
    console.error('Recognition error:', error);
    alert('Error occurred in recognition. Please try again.');
  };
});
// Voice Search Functionality
function startVoiceSearch() {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new webkitSpeechRecognition(); // Initialize speech recognition
      recognition.lang = 'en-US'; // Set language
      recognition.interimResults = false; // Only final results
      recognition.continuous = false; // Stop after one input
  
      // Start recognition
      recognition.start();
  
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase(); // Convert speech to text
        console.log(`You said: ${transcript}`);
  
        if (transcript.startsWith('search for')) {
          const query = transcript.replace('search for', '').trim(); // Extract the query
          const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
          window.open(searchUrl, '_blank'); // Open Google search in a new tab
        } else {
          alert('Please start with "Search for" to perform a web search.');
        }
      };
  
      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event);
        alert('Error occurred in speech recognition. Please try again.');
      };
    } else {
      alert('Your browser does not support speech recognition.');
    }
  }
  
  // Attach the function to the button
  document.getElementById('activate-search').addEventListener('click', startVoiceSearch);
// Voice AI Answer Base
function startAIAnswerBase() {
  if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.start();

    recognition.onresult = (event) => {
      const userQuery = event.results[0][0].transcript.toLowerCase();
      console.log(`User asked: ${userQuery}`);

      // Show loading message
      const answerDiv = document.getElementById('ai-answer');
      answerDiv.textContent = 'Processing...';

      // Send query to backend
      fetch('http://127.0.0.1:5000/get-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: userQuery }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.answer) {
            answerDiv.textContent = `AI: ${data.answer}`;
          } else {
            answerDiv.textContent = `Error: ${data.error}`;
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          answerDiv.textContent = 'Error connecting to AI backend.';
        });
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event);
      alert('Error occurred in speech recognition. Please try again.');
    };
  } else {
    alert('Your browser does not support speech recognition.');
  }
}

// Attach the function to the button
// document.getElementById('activate-ai-answer').addEventListener('click', startAIAnswerBase);
// // Voice AI Answer Base
// function startAIAnswerBase() {
//     if ('webkitSpeechRecognition' in window) {
//       const recognition = new webkitSpeechRecognition();
//       recognition.lang = 'en-US';
//       recognition.interimResults = false;
//       recognition.continuous = false;
  
//       recognition.start();
  
//       recognition.onresult = (event) => {
//         const userQuery = event.results[0][0].transcript.toLowerCase();
//         console.log(`User asked: ${userQuery}`);
  
//         // Show loading message
//         const answerDiv = document.getElementById('ai-answer');
//         answerDiv.textContent = 'Processing...';
  
//         // Send query to backend
//         fetch('http://127.0.0.1:5000/get-answer', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ query: userQuery }),
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             if (data.answer) {
//               answerDiv.textContent = `AI: ${data.answer}`;
//             } else {
//               answerDiv.textContent = `Error: ${data.error}`;
//             }
//           })
//           .catch((error) => {
//             console.error('Error:', error);
//             answerDiv.textContent = 'Error connecting to AI backend.';
//           });
//       };
  
//       recognition.onerror = (event) => {
//         console.error('Speech recognition error:', event);
//         alert('Error occurred in speech recognition. Please try again.');
//       };
//     } else {
//       alert('Your browser does not support speech recognition.');
//     }
//   }
  
//   // Attach the function to the button
//   document.getElementById('activate-ai-answer').addEventListener('click', startAIAnswerBase);
    


