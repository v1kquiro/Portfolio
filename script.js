// Matrix Background
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 16;
const columns = canvas.width / fontSize;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const charArray = characters.split('');
const drops = Array.from({ length: columns }).fill(0);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00FF00';
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, index) => {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const x = index * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
        }
        drops[index]++;
    });
}

setInterval(drawMatrix, 50);

// Loading Screen Logic
const loadingScreen = document.getElementById('loading-screen');
const loadingBar = document.getElementById('loading-bar');
const loadingText = document.getElementById('loading-text');
const mainContent = document.getElementById('main-content');

let progress = 0;
const loadingInterval = setInterval(() => {
    progress += 1;
    loadingBar.style.width = `${progress}%`;


    if (progress >= 35) {
        clearInterval(loadingInterval);
        loadingText.innerText = "Loading .exe files"
        
        console.log(progress)
    }

    if (progress >= 65) {
        clearInterval(loadingInterval);
        loadingText.innerText = "Uploading data"
    }

    if (progress >= 95) {
        clearInterval(loadingInterval);
        loadingText.innerText = "Downloading your info"
    }

    if (progress >= 100) {
        clearInterval(loadingInterval);
        loadingText.innerText = "Access Approved";

        loadingScreen.addEventListener('click', () => {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'flex';
        });
    }
}, 30);


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}