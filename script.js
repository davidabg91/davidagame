// Масив с изображения на различни обекти
const images = [
    // Локални изображения - само тези, които съществуват в папката images
    'images/engin-akyurt-JBicrgiurjs-unsplash.jpg', // диван (sofa)
    'images/luc-bercoth-zpJH4ogbTOo-unsplash.jpg', // книга (book)
    'images/raymond-burrage-x7kiHTL-HgM-unsplash.jpg', // химикал (pen)
    'images/vinicius-amnx-amano-4iNoeQqrLgM-unsplash.jpg', // чиния (plate)
    'images/william-warby-UWznDqb7S9w-unsplash.jpg', // телефон (phone)
    'images/andy-watkins-ZDRXR3MxyJM-unsplash.jpg', // компютър (computer)
    'images/mostafa-amini-nasab-uSvuZ7Ovo5M-unsplash.jpg', // мишка (mouse)
    'images/maria-lupan-jGTIP-92Tmc-unsplash.jpg', // часовник
    'images/kukla-radostina-xodeshta-govoreshta-muzikalna-kukla-01-2508x2676.jpg', // кукла
    'images/gotvarska-pecka-tok-crown-54am-a-class-multifunctional--4-tok--bal-image_60868467dab13_800x800.jpeg', // печка
    'images/18686404_605.jpg', // стол
    'images/0345705001580038918_2077471_920x708.webp', // лампа
    'images/heart-157895_640.webp', // сърце
    'images/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_.jpg', // филм
    'images/240326-pirates-ch-1328-2b4d4f.jpg', // пирати
    'images/Carrot-PNG-Free-Download.png', // морков
    // Добавяме нови изображения от папката images
    'images/109880.jpg',
    'images/1462104889_5_559x345.jpg',
    'images/1592629345176.jpg',
    'images/16285000-1200x1200.jpg',
    'images/1920x1080.jpg',
    'images/192214242602_1.webp',
    'images/1f553d40df009d63a7173e1503338586-10621444.jpeg',
    'images/1O6MddXigTPgeTa4X6ML_22_8fe9cdd68abc282b5281bbf0c117e39a_image.jpg',
    'images/23.12.patna_.jpg',
    'images/660_a14dcd47fbf3d95d0fcd47814e2984ef.jpg',
    'images/69520__820x465__800x0__822ca60cda69b42b4519e3ab8ad3eea16d4ba2e4.webp',
    'images/768x432.jpg',
    'images/82719_715_.jpg',
    'images/cover-1651176103038.jfif',
    'images/DSC09690.jpg',
    'images/dyrven-kluch-50-sm (2)-1000x1000.png',
    'images/dzojstik-playstation-dualsense-wireless-image_5fad0e950bc55_800x800.jpeg',
    'images/figura-nintendo-amiibo---mario-[super-mario]-31.jpg',
    'images/images.jfif',
    'images/insect-6666145_1280.jpg',
    'images/instantpot-recepta-pukanki.jpg',
    'images/kakwi dokumenti sa neobhodimi pri vnos na kola ot sasht-800x480-crop.jpg',
    'images/kino-arena-pleven-1024x768.jpg-696x522.webp',
    'images/kissclipart-vector-graphics-clipart-clip-art-f0f8396a3753b30d.png',
    'images/kiulcheta-zlato.jpg',
    'images/lego_tree_house_large_crop_2-e1675159262131.jpg',
    'images/moliv-za-staklo-240-mm-image_66a0bf4e25b30_800x800.jpeg',
    'images/p1150898.jpg',
    'images/plane_wp-copy.webp',
    'images/playing-basketball.jpg',
    'images/pojarna_kola_iveco.jpg',
    'images/PP-31381-tropical-island-maldives-800x655.jpg',
    'images/skis.jpg',
    'images/spondz-bob-kvadratni-gasi-bebe-11sm-image_616ac52401c3c_1920x1920.jpeg',
    'images/thumb6_aD7tej.jpg',
    'images/unnamed.jpg',
    'images/снимки-на-стари-телевизори-10.jpg'
];
let currentPlayer = 1;
let totalPlayers = 0;
let currentLevel = 0;
let totalLevels = 50; // Актуализирано според новия брой изображения
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
const nextPlayerButton = document.getElementById('next-player-button');
const newGameBtn = document.getElementById('new-game');
const currentPlayerDisplay = document.getElementById('current-player');
const timerDisplay = document.getElementById('timer');
const imagesContainer = document.getElementById('images-container');
const resultsList = document.getElementById('results-list');

// Модален прозорец за правилата
const rulesModal = document.getElementById('rules-modal');
const showRulesBtn = document.getElementById('show-rules');
const closeModalBtn = document.querySelector('.close-modal');

// Променям текста на бутона
nextPlayerButton.textContent = 'Следващ играч';

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
    // Скриваме бутоните най-отдолу
    document.querySelector('.game-controls').style.display = 'none';
    // Създаваме бутона за нов рунд
    let newRoundBtn = document.getElementById('start-new-round');
    if (!newRoundBtn) {
        newRoundBtn = document.createElement('button');
        newRoundBtn.id = 'start-new-round';
        newRoundBtn.className = 'btn';
        newRoundBtn.textContent = 'Започни нов рунд';
        newRoundBtn.style.marginTop = '20px';
        newRoundBtn.style.display = 'block';
        newRoundBtn.style.width = '100%';
    }
    imagesContainer.innerHTML = `
        <div class="level-end animate__animated animate__fadeIn">
            <h2 class="animate__animated animate__bounceIn">Край на ниво ${currentLevel}</h2>
            <div class="impostor-reveal animate__animated animate__fadeInUp">
                <div class="trophy-container animate__animated animate__tada animate__infinite">
                    <i class="fas fa-trophy trophy-icon"></i>
                </div>
                <i class="fas fa-user-secret impostor-icon animate__animated animate__pulse animate__infinite"></i>
                <p class="animate__animated animate__fadeIn">Импостърът беше:</p>
                <div class="impostor-name animate__animated animate__heartBeat">Играч ${currentLevelData.impostor}</div>
                <div class="confetti-container">
                    <i class="fas fa-star confetti"></i>
                    <i class="fas fa-star confetti"></i>
                    <i class="fas fa-star confetti"></i>
                </div>
            </div>
        </div>
    `;
    // Добавяме бутона след .game-controls
    const gameControls = document.querySelector('.game-controls');
    if (gameControls.nextSibling) {
        gameControls.parentNode.insertBefore(newRoundBtn, gameControls.nextSibling);
    } else {
        gameControls.parentNode.appendChild(newRoundBtn);
    }
    // Слушател за бутона
    newRoundBtn.onclick = () => {
        currentPlayer = 1;
        document.querySelector('.game-controls').style.display = '';
        newRoundBtn.remove();
        showCountdown();
    };
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
nextPlayerButton.addEventListener('click', () => {
    console.log('Level end element:', imagesContainer.querySelector('.level-end'));
    if (imagesContainer.querySelector('.level-end')) {
        nextLevel();
    } else {
        nextPlayer();
    }
});

// Функция за показване на надписа "СЛЕДВАЩ РУНД"
function showNextRoundMessage() {
    const message = document.getElementById('next-round-message');
    
    // Премахваме всички класове
    message.classList.remove('hidden', 'hide', 'show');
    
    // Започваме с малък размер и невидим
    message.style.transform = 'translate(-50%, -50%) scale(0.5)';
    message.style.opacity = '0';
    message.style.filter = 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))';
    
    // Показваме елемента
    message.classList.remove('hidden');
    
    // Анимация за появяване
    setTimeout(() => {
        message.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        message.style.transform = 'translate(-50%, -50%) scale(1.1)';
        message.style.opacity = '1';
        message.style.filter = 'drop-shadow(0 0 30px rgba(255, 255, 255, 1))';
    }, 10);
    
    // Скриваме надписа след 2 секунди
    setTimeout(() => {
        // Анимация за изчезване
        message.style.transform = 'translate(-50%, -50%) scale(1.5)';
        message.style.opacity = '0';
        message.style.filter = 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.6)) blur(5px)';
        
        // След анимацията за скриване, добавяме hidden класа
        setTimeout(() => {
            message.classList.add('hidden');
            message.style.transition = '';
        }, 500);
    }, 2000);
}

// Добавяме функционалност за бутона "Смени рунда"
document.getElementById('end-game').addEventListener('click', () => {
    // Показваме надписа "СЛЕДВАЩ РУНД"
    showNextRoundMessage();
    
    // Изчакваме 2 секунди преди да продължим
    setTimeout(() => {
        currentLevel++;
        if (currentLevel >= totalLevels) {
            showResults();
        } else {
            currentPlayer = 1;
            showCountdown();
        }
    }, 2000);
});

// Показване на модалния прозорец
showRulesBtn.addEventListener('click', () => {
    rulesModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Предотвратява скролване на фона
});

// Затваряне на модалния прозорец
closeModalBtn.addEventListener('click', () => {
    rulesModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Възстановява скролването
});

// Затваряне на модалния прозорец при клик извън него
window.addEventListener('click', (e) => {
    if (e.target === rulesModal) {
        rulesModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Затваряне на модалния прозорец при натискане на Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && rulesModal.style.display === 'block') {
        rulesModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Функция за създаване на падащи емотикони
function createFallingEmoji() {
    const emojis = ['🎮', '🎯', '🎲', '🎪', '🎨', '🎭', '🎪', '🎯', '🎲', '🎮', '😄', '🎉', '✨', '🌟', '💫', '🎊'];
    const container = document.getElementById('emoji-container');
    
    const emoji = document.createElement('div');
    emoji.className = 'falling-emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + '%';
    emoji.style.animationDuration = (Math.random() * 2 + 2) + 's'; // 2-4 секунди
    
    container.appendChild(emoji);
    
    // Премахване на емотикона след анимацията
    setTimeout(() => {
        if (emoji.parentNode) {
            emoji.parentNode.removeChild(emoji);
        }
    }, 5000);
}

// Стартиране на падащите емотикони
function startFallingEmojis() {
    // Създаване на емотикон на всеки 1-2 секунди
    setInterval(() => {
        if (Math.random() < 0.7) { // 70% шанс за създаване
            createFallingEmoji();
        }
    }, 1000);
}

// Стартиране на ефекта когато страницата се зареди
document.addEventListener('DOMContentLoaded', function() {
    startFallingEmojis();
});

// Функция за показване на екрана "ИГРАТА ЗАПОЧВА!"
function showGameStartScreen() {
    const gameStartScreen = document.getElementById('game-start-screen');
    gameStartScreen.classList.remove('hidden');
    gameStartScreen.classList.add('show');
    
    // Спиране на падащите емотикони временно
    const emojiContainer = document.getElementById('emoji-container');
    emojiContainer.style.display = 'none';
    
    // След 3 секунди скриване на екрана и стартиране на играта
    setTimeout(() => {
        gameStartScreen.classList.add('hide');
        setTimeout(() => {
            gameStartScreen.classList.add('hidden');
            gameStartScreen.classList.remove('show', 'hide');
            
            // Възстановяване на падащите емотикони
            emojiContainer.style.display = 'block';
            
            // Стартиране на играта
            startGame();
        }, 500);
    }, 3000);
}

// Модифициране на функцията за стартиране на играта
function startGame() {
    // Оригиналната логика за стартиране на играта
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    
    const playerCount = parseInt(document.getElementById('player-count').value);
    players = [];
    currentPlayerIndex = 0;
    currentRound = 1;
    
    for (let i = 1; i <= playerCount; i++) {
        players.push({
            name: `Играч ${i}`,
            score: 0,
            isImpostor: false
        });
    }
    
    // Избиране на импостор
    const impostorIndex = Math.floor(Math.random() * players.length);
    players[impostorIndex].isImpostor = true;
    
    updateCurrentPlayer();
    loadRandomImage();
    startTimer();
}

// Модифициране на event listener за бутона "Започни играта"
document.getElementById('start-game').addEventListener('click', function() {
    showGameStartScreen();
});