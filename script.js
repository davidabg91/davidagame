// Масив с изображения на различни обекти
const images = [
    // Локални изображения
    'images/frame-harirak-iPwHUd19R38-unsplash.jpg', // маса (table)
    'images/blend-archive-HGJMNY7tBDw-unsplash.jpg', // легло (bed)
    'images/engin-akyurt-JBicrgiurjs-unsplash.jpg', // диван (sofa)
    'images/luc-bercoth-zpJH4ogbTOo-unsplash.jpg', // книга (book)
    'images/raymond-burrage-x7kiHTL-HgM-unsplash.jpg', // химикал (pen)
    'images/tokenstreet-3MqoqyR62bQ-unsplash.jpg', // чаша (cup)
    'images/vinicius-amnx-amano-4iNoeQqrLgM-unsplash.jpg', // чиния (plate)
    'images/william-warby-UWznDqb7S9w-unsplash.jpg', // телефон (phone)
    'images/andy-watkins-ZDRXR3MxyJM-unsplash.jpg', // компютър (computer)
    'images/milos-lopusina-5R8ybt85yOQ-unsplash.jpg', // клавиатура (keyboard)
    'images/mostafa-amini-nasab-uSvuZ7Ovo5M-unsplash.jpg', // мишка (mouse)
    'images/nicolas-hippert-J4eTN9GqhzI-unsplash.jpg', // монитор (monitor)
    'images/meghna-r-RkyUcxT73gs-unsplash.jpg', // слушалки (headphones)
    'images/chris-barbalis-Lqe8gq2jbhA-unsplash.jpg', // зарядно (charger)
    'images/maria-lupan-jGTIP-92Tmc-unsplash.jpg', // часовник
    'images/hari-krishnan-f1BMuugVyyM-unsplash.jpg', // чадър
    
    // Изображения от сайта
    'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?w=400&h=300&fit=crop', // маса (table)
    'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?w=400&h=300&fit=crop', // легло (bed)
    'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?w=400&h=300&fit=crop', // диван (sofa)
    'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?w=400&h=300&fit=crop', // книга (book)
    'https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?w=400&h=300&fit=crop', // чаша (cup)
    'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?w=400&h=300&fit=crop', // чиния (plate)
    'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?w=400&h=300&fit=crop', // телефон (phone)
    'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=400&h=300&fit=crop', // компютър (computer)
    'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?w=400&h=300&fit=crop', // клавиатура (keyboard)
    'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?w=400&h=300&fit=crop', // мишка (mouse)
    'https://images.pexels.com/photos/18105/pexels-photo.jpg?w=400&h=300&fit=crop', // монитор (monitor)
    'https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?w=400&h=300&fit=crop', // слушалки (headphones)
    'https://images.pexels.com/photos/3651371/pexels-photo-3651371.jpeg?w=400&h=300&fit=crop', // зарядно (charger)
    'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg', // часовник
    'https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_640.jpg'  // чадър
];

let currentPlayer = 1;
let totalPlayers = 0;
let currentLevel = 0;
let totalLevels = 31; // Променено от 32 на 31, тъй като премахнахме едно изображение
let gameLevels = [];
let impostorIndex = 0;
let countdownInterval;
let isCountdownActive = false;

// DOM елементи
const setupScreen = document.getElementById('setup-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const playerCountInput = document.getElementById('player-count');
const decreasePlayersBtn = document.getElementById('decrease-players');
const increasePlayersBtn = document.getElementById('increase-players');
const startGameBtn = document.getElementById('start-game');
const nextRoundBtn = document.getElementById('next-round');
const endGameBtn = document.getElementById('end-game');
const newGameBtn = document.getElementById('new-game');
const currentPlayerDisplay = document.getElementById('current-player');
const timerDisplay = document.getElementById('timer');
const imagesContainer = document.getElementById('images-container');
const resultsList = document.getElementById('results-list');

// Променям текста на бутона
nextRoundBtn.textContent = 'Следващо ниво';

// Генериране на нивата при зареждане на страницата
function generateGameLevels() {
    gameLevels = [];
    let availableImages = [...images];
    
    // Разбъркваме масива с изображения
    for (let i = availableImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [availableImages[i], availableImages[j]] = [availableImages[j], availableImages[i]];
    }
    
    // Създаваме 16 нива
    for (let i = 0; i < totalLevels; i++) {
        // Ако свършат изображенията, добавяме нови от оригиналния масив
        if (availableImages.length === 0) {
            availableImages = [...images];
            // Разбъркваме отново
            for (let j = availableImages.length - 1; j > 0; j--) {
                const k = Math.floor(Math.random() * (j + 1));
                [availableImages[j], availableImages[k]] = [availableImages[k], availableImages[j]];
            }
        }
        
        // Генерираме импостър само ако имаме зададен брой играчи
        const impostor = totalPlayers > 0 ? Math.floor(Math.random() * totalPlayers) + 1 : 1;
        
        gameLevels.push({
            image: availableImages.pop(),
            impostor: impostor
        });
    }
}

// Зареждане на последния брой играчи
window.addEventListener('load', () => {
    const savedPlayerCount = localStorage.getItem('lastPlayerCount');
    if (savedPlayerCount) {
        playerCountInput.value = savedPlayerCount;
    }
    generateGameLevels();
});

// Увеличаване на броя играчи
increasePlayersBtn.addEventListener('click', () => {
    const currentCount = parseInt(playerCountInput.value);
    if (currentCount < 8) {
        playerCountInput.value = currentCount + 1;
    }
});

// Намаляване на броя играчи
decreasePlayersBtn.addEventListener('click', () => {
    const currentCount = parseInt(playerCountInput.value);
    if (currentCount > 2) {
        playerCountInput.value = currentCount - 1;
    }
});

// Слушател за клавиша SPACE
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && gameScreen.classList.contains('hidden') === false) {
        e.preventDefault();
        // Проверяваме дали броенето е активно
        if (isCountdownActive) {
            return; // Ако броенето е активно, не позволяваме натискането на SPACE
        }
        // Проверяваме дали сме на екрана за край на нивото
        if (imagesContainer.querySelector('.level-end')) {
            // Преминаваме към следващото ниво
            currentPlayer = 1;
            showCountdown();
        } else {
            nextPlayer();
        }
    }
});

// Започване на играта
startGameBtn.addEventListener('click', () => {
    totalPlayers = parseInt(playerCountInput.value);
    
    // Запазване на броя играчи
    localStorage.setItem('lastPlayerCount', totalPlayers);
    
    if (totalPlayers < 2) {
        alert('Моля, въведете поне 2 играча!');
        return;
    }

    currentPlayer = 1;
    currentLevel = 0;
    
    // Генерираме нови нива
    generateGameLevels();
    
    setupScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    showCountdown();
});

// Показване на обратен брояч
function showCountdown() {
    let count = 3;
    isCountdownActive = true; // Започваме броенето
    imagesContainer.innerHTML = `<div class="countdown">${count}</div>`;
    currentPlayerDisplay.textContent = `Играч ${currentPlayer}`;
    
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            imagesContainer.innerHTML = `<div class="countdown">${count}</div>`;
        } else {
            clearInterval(countdownInterval);
            isCountdownActive = false; // Край на броенето
            showPlayerScreen();
        }
    }, 1000);
}

// Показване на екрана на играча
function showPlayerScreen() {
    currentPlayerDisplay.textContent = `Играч ${currentPlayer}`;
    imagesContainer.innerHTML = '';

    if (currentPlayer === gameLevels[currentLevel].impostor) {
        // Импостърът не вижда изображението
        imagesContainer.innerHTML = `
            <div class="impostor-message">
                <i class="fas fa-user-secret impostor-icon"></i>
                <div>Вие сте импостър! Не казвайте нищо на другите играчи!</div>
            </div>`;
    } else {
        // Останалите играчи виждат изображението
        const imageCard = document.createElement('div');
        imageCard.className = 'image-card';
        imageCard.innerHTML = `<img src="${gameLevels[currentLevel].image}" alt="Image">`;
        imagesContainer.appendChild(imageCard);
    }
}

// Показване на екрана за край на нивото
function showLevelEnd() {
    const currentLevelData = gameLevels[currentLevel - 1];
    imagesContainer.innerHTML = `
        <div class="level-end">
            <h2>Край на ниво ${currentLevel}</h2>
            <div class="impostor-reveal">
                <i class="fas fa-user-secret impostor-icon"></i>
                <p>Импостърът беше:</p>
                <div class="impostor-name">Играч ${currentLevelData.impostor}</div>
            </div>
            <p class="next-level-hint">Натиснете SPACE за следващото ниво</p>
        </div>
    `;
}

// Следващ играч
function nextPlayer() {
    currentPlayer++;
    if (currentPlayer > totalPlayers) {
        // Край на нивото
        currentLevel++;
        if (currentLevel >= totalLevels) {
            // Играта приключи
            showResults();
        } else {
            // Показваме екрана за край на нивото
            showLevelEnd();
        }
    } else {
        showCountdown();
    }
}

// Показване на резултати
function showResults() {
    gameScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    const lastLevelData = gameLevels[currentLevel - 1];
    resultsList.innerHTML = `
        <div class="result-item">
            <span class="player-name">Играч ${lastLevelData.impostor}</span>
            <span class="score">Импостър</span>
        </div>
    `;
}

// Нова игра
newGameBtn.addEventListener('click', () => {
    resultsScreen.classList.add('hidden');
    setupScreen.classList.remove('hidden');
    resetGame();
});

// Рестартиране на играта
function resetGame() {
    currentPlayer = 1;
    totalPlayers = 0;
    currentLevel = 0;
    clearInterval(countdownInterval);
    generateGameLevels();
}

// Функция за преминаване към следващото ниво
function nextLevel() {
    currentLevel++;
    if (currentLevel >= totalLevels) {
        // Играта приключи
        showResults();
    } else {
        // Показваме екрана за край на нивото
        showLevelEnd();
    }
}

// Актуализирам логиката за натискане на бутона
nextRoundBtn.addEventListener('click', () => {
    nextLevel();
}); 