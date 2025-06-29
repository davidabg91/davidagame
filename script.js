// Система за превод
const translations = {
    bg: {
        player_count: "Брой играчи",
        start_game: "Започни играта",
        game_rules: "Правила на играта",
        game_starting: "ИГРАТА ЗАПОЧВА!",
        next_round: "СЛЕДВАЩ РУНД",
        next_player: "Следващ играч",
        change_round: "Смени рунда",
        results: "Резултати",
        new_game: "Нова игра",
        game_objective: "ЦЕЛ НА ИГРАТА",
        game_objective_text: "Играта е забавна социална игра, в която един от играчите е \"импостор\", а останалите виждат една и съща картинка. Импосторът трябва да се опитва да се вписва сред останалите, без да разкрие, че не вижда картинката.",
        how_to_play: "КАК СЕ ИГРАЕ",
        rule_1: "В началото на играта всеки играч получава тайна роля - детектив или импостор",
        rule_2: "Детективите виждат една и съща картинка, а импосторът получава карта \"Импостор\"",
        rule_3: "Играчите се редуват да казват дума, свързана с картинката",
        rule_4: "Импосторът трябва да слуша думите на другите и да дава общи думи, които да не го разкрият",
        rule_5: "Импосторът трябва да се опитва да разбере картинката от думите на другите играчи",
        impostor_rules: "ПРАВИЛА ЗА ИМПОСТОРА",
        impostor_rule_1: "Не вижда картинката, която другите играчи виждат",
        impostor_rule_2: "Трябва да внимателно слуша думите, които другите играчи казват",
        impostor_rule_3: "Трябва да се опитва да каже дума, която би била логична за картинката",
        impostor_rule_4: "Трябва да внимава да не разкрие, че не вижда картинката",
        impostor_rule_5: "Може да използва хитрости, за да изглежда по-достоверен",
        normal_player_rules: "ПРАВИЛА ЗА НОРМАЛНИТЕ ИГРАЧИ",
        normal_rule_1: "Виждат една и съща картинка",
        normal_rule_2: "Трябва да казват думи, свързани с картинката",
        normal_rule_3: "Могат да задават въпроси, за да разкрият импостора",
        normal_rule_4: "Трябва да внимават да не разкрият твърде много за картинката",
        normal_rule_5: "Могат да работят заедно, за да разкрият импостора",
        game_end: "КРАЙ НА ИГРАТА",
        game_end_text: "Играта приключва, когато:",
        end_condition_1: "Детективите се съгласят да посочат импостъра и печелят, ако повечето го разкрият",
        end_condition_2: "Или когато импосторът успее да остане неразкрит и печели",
        tips: "СЪВЕТИ",
        tip_1: "Внимавайте на детайлите в отговорите на другите играчи",
        tip_2: "Следете за несъответствия в думите, които се казват",
        tip_3: "Използвайте логика и интуиция",
        tip_4: "Наслаждавайте се на играта и бъдете креативни!",
        created_by: "Създадено от",
        player: "Играч",
        you_are_impostor: "Вие сте импостър!",
        min_players: "Моля, въведете поне 2 играча!",
        level_end: "Край на ниво",
        impostor_was: "Импостърът беше:",
        start_new_round: "Започни нов рунд",
        dont_tell_others: "Не казвайте нищо на другите играчи!",
        click_for_detective_rules: "Покажи правилата за детективите",
        click_for_impostor_rules: "Покажи правилата за импостърите",
        detective_rules_title: "Правила за детективите",
        detective_objective: "ЦЕЛ",
        detective_objective_text: "Целта на детективите е да разкрият импостъра сред играчите, като внимателно слушат думите, които се казват.",
        detective_how_to_play: "КАК СЕ ИГРАЕ",
        detective_rule_1: "Виждате една и съща картинка с другите детективи",
        detective_rule_2: "Казвайте думи, свързани с картинката, която виждате",
        detective_rule_3: "Внимавайте на думите, които другите играчи казват",
        detective_rule_4: "Анализирайте дали някой дава неясни или общи отговори",
        detective_rule_5: "Работете заедно с другите детективи за разкриване на импостъра",
        detective_tips: "СЪВЕТИ",
        detective_tip_1: "Внимавайте на фините следи в разговорите",
        detective_tip_2: "Наблюдавайте реакциите и езика на тялото на играчите",
        detective_tip_3: "Използвайте дедуктивно мислене за разкриване на импостъра",
        detective_tip_4: "Доверявайте се на инстинктите си и бъдете наблюдателни",
        impostor_rules_title: "Правила за импостърите",
        impostor_objective: "ЦЕЛ",
        impostor_objective_text: "Целта на импостъра е да остане неразкрит сред играчите, като внимателно слуша думите на другите и дава общи отговори.",
        impostor_how_to_play: "КАК СЕ ИГРАЕ",
        impostor_rule_1: "Не виждате картинката, която другите играчи виждат",
        impostor_rule_2: "Внимателно слушайте думите, които другите играчи казват",
        impostor_rule_3: "Опитвайте се да разберете каква е картинката от думите им",
        impostor_rule_4: "Казвайте общи думи, които да не ви разкрият",
        impostor_rule_5: "Избягвайте да казвате твърде специфични думи",
        impostor_tips: "СЪВЕТИ",
        impostor_tip_1: "Бъдете внимателни с отговорите си",
        impostor_tip_2: "Използвайте двусмислен език, за да скриете истинската си самоличност",
        impostor_tip_3: "Създайте правдоподобна прикриваща история",
        impostor_tip_4: "Доверявайте се на инстинктите си и бъдете предпазливи",
        registration_title: "Регистрация",
        registration_subtitle: "Създайте профил, за да продължите да играете",
        username: "Потребителско име",
        email: "Имейл адрес",
        password: "Парола",
        confirm_password: "Потвърди парола",
        age: "Възраст",
        favorite_game: "Любима игра",
        select_option: "Изберете опция",
        board_games: "Настолни игри",
        video_games: "Видео игри",
        card_games: "Карти",
        puzzle_games: "Пъзели",
        other: "Друго",
        accept_terms: "Приемам условията за ползване",
        newsletter: "Искам да получавам новини за нови игри",
        create_account: "Създай акаунт",
        already_have_account: "Вече имате акаунт?",
        login: "Вход",
        registration_required: "Регистрацията е задължителна за продължаване. Можете да се регистрирате или да натиснете 'Влезте' за да влезете с вече съществуващ профил.",
        registration_success: "Регистрацията е успешна! Можете да продължите да играете.",
        registration_error: "Грешка при регистрация. Моля, опитайте отново.",
        login_title: "Вход",
        login_subtitle: "Влезте в профила си",
        dont_have_account: "Нямате акаунт?",
        register: "Регистриране",
        login_success: "Влязохте успешно!",
        login_error: "Грешка при вход. Проверете потребителското име и паролата.",
        logout_success: "Излязохте от профила си!"
    },
    en: {
        player_count: "Number of Players",
        start_game: "Start Game",
        game_rules: "Game Rules",
        game_starting: "GAME STARTING!",
        next_round: "NEXT ROUND",
        next_player: "Next Player",
        change_round: "Change Round",
        results: "Results",
        new_game: "New Game",
        game_objective: "GAME OBJECTIVE",
        game_objective_text: "The game is a fun social game where one of the players is an \"impostor\" and the others see the same picture. The impostor must try to blend in with the others without revealing that they don't see the picture.",
        how_to_play: "HOW TO PLAY",
        rule_1: "At the beginning of the game, each player receives a secret role - detective or impostor",
        rule_2: "Detectives see the same picture, and the impostor receives a card \"Impostor\"",
        rule_3: "Players take turns saying a word related to the picture",
        rule_4: "The impostor must listen to the words of others and give general words that they don't reveal",
        rule_5: "The impostor must try to understand the picture from the words of other players",
        impostor_rules: "IMPOSTOR RULES",
        impostor_rule_1: "Does not see the picture that other players see",
        impostor_rule_2: "Must carefully listen to the words that other players say",
        impostor_rule_3: "Must try to say a word that would be logical for the picture",
        impostor_rule_4: "Must be careful not to reveal that they don't see the picture",
        impostor_rule_5: "Can use tricks to appear more credible",
        normal_player_rules: "NORMAL PLAYER RULES",
        normal_rule_1: "See the same picture",
        normal_rule_2: "Must say words related to the picture",
        normal_rule_3: "Can ask questions to reveal the impostor",
        normal_rule_4: "Must be careful not to reveal too much about the picture",
        normal_rule_5: "Can work together to reveal the impostor",
        game_end: "GAME END",
        game_end_text: "The game ends when:",
        end_condition_1: "Detectives agree to point out the impostor and win if most of them reveal him",
        end_condition_2: "Or when the impostor manages to remain unrevealed and wins",
        tips: "TIPS",
        tip_1: "Pay attention to details in other players' responses",
        tip_2: "Watch for inconsistencies in the words being said",
        tip_3: "Use logic and intuition",
        tip_4: "Enjoy the game and be creative!",
        created_by: "Created by",
        player: "Player",
        you_are_impostor: "You are the impostor!",
        min_players: "Please enter at least 2 players!",
        level_end: "Level End",
        impostor_was: "The impostor was:",
        start_new_round: "Start New Round",
        dont_tell_others: "Don't tell anything to other players!",
        detective_rules_title: "Detective Rules",
        detective_objective: "Objective",
        detective_objective_text: "The objective of the detectives is to reveal the impostor among the players by carefully listening to the words being said.",
        detective_how_to_play: "How to Play",
        detective_rule_1: "You see the same picture as other detectives",
        detective_rule_2: "Say words related to the picture you see",
        detective_rule_3: "Pay attention to the words that other players say",
        detective_rule_4: "Analyze whether someone gives unclear or general answers",
        detective_rule_5: "Work together with other detectives to reveal the impostor",
        detective_tips: "Tips",
        detective_tip_1: "Pay attention to subtle clues in the conversations",
        detective_tip_2: "Observe the players' reactions and body language",
        detective_tip_3: "Use deductive reasoning to identify the impostor",
        detective_tip_4: "Trust your instincts and be observant",
        detective_rules_content: "Detective rules content will be displayed here",
        impostor_rules_title: "Impostor Rules",
        impostor_objective: "Objective",
        impostor_objective_text: "The objective of the impostor is to remain undetected among the players by carefully listening to the words of others and giving general answers.",
        impostor_how_to_play: "How to Play",
        impostor_rule_1: "You don't see the picture that other players see",
        impostor_rule_2: "Carefully listen to the words that other players say",
        impostor_rule_3: "Try to understand what the picture is from their words",
        impostor_rule_4: "Say general words that don't reveal you",
        impostor_rule_5: "Avoid saying too specific words",
        impostor_tips: "Tips",
        impostor_tip_1: "Be careful with your responses",
        impostor_tip_2: "Use ambiguous language to hide your true identity",
        impostor_tip_3: "Create a plausible cover story",
        impostor_tip_4: "Trust your instincts and be cautious",
        impostor_rules_content: "Impostor rules content will be displayed here",
        registration_title: "Registration",
        registration_subtitle: "Create an account to continue playing",
        username: "Username",
        email: "Email",
        password: "Password",
        confirm_password: "Confirm Password",
        age: "Age",
        favorite_game: "Favorite Game",
        select_option: "Select Option",
        board_games: "Board Games",
        video_games: "Video Games",
        card_games: "Cards",
        puzzle_games: "Puzzles",
        other: "Other",
        accept_terms: "I accept the terms of use",
        newsletter: "I want to receive news about new games",
        create_account: "Create Account",
        already_have_account: "Already have an account?",
        login: "Login",
        registration_required: "Registration is required to continue. You can register or click 'Login' to sign in with an existing account.",
        registration_success: "Registration successful! You can continue playing.",
        registration_error: "Registration error. Please try again.",
        login_title: "Login",
        login_subtitle: "Login to your account",
        dont_have_account: "Don't have an account?",
        register: "Register",
        login_success: "You logged in successfully!",
        login_error: "Login error. Please check your username and password.",
        logout_success: "You logged out successfully!"
    }
};

let currentLanguage = 'bg';

// Функция за превод на текст
function translateText(key) {
    return translations[currentLanguage][key] || translations['bg'][key] || key;
}

// Функция за прилагане на превода
function applyTranslation() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translateText(key);
        if (element.tagName === 'INPUT' && element.type === 'placeholder') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Обновяваме динамични текстове
    updateDynamicTexts();
    
    // Обновяваме tooltip текстове
    updateTooltips();
}

// Функция за обновяване на динамични текстове
function updateDynamicTexts() {
    if (currentPlayerDisplay) {
        currentPlayerDisplay.textContent = `${translateText('player')} ${currentPlayer}`;
    }
}

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

// Променливи за регистрация
let isRegistrationShown = false;
let isUserRegistered = false;

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

// DOM елементи за регистрация
const registrationModal = document.getElementById('registration-modal');
const registrationForm = document.getElementById('registration-form');
const loginModal = document.getElementById('login-modal');
const loginForm = document.getElementById('login-form');
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');
const closeRegistration = document.getElementById('close-registration');
const closeLogin = document.getElementById('close-login');
const profileInfo = document.getElementById('profile-info');
const profileActions = document.getElementById('profile-actions');
const profileUsername = document.getElementById('profile-username');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const logoutBtn = document.getElementById('logout-btn');

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
    updateProfilePanel();
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
    console.log('=== Играта започва ===');
    console.log('isUserRegistered преди старт:', isUserRegistered);
    
    totalPlayers = parseInt(playerCountInput.value);
    
    // Запазване на броя играчи
    localStorage.setItem('lastPlayerCount', totalPlayers);
    
    if (totalPlayers < 2) {
        showModalMessage(translateText('min_players'));
        return;
    }

    currentPlayer = 1;
    currentLevel = 0;
    
    console.log('Инициализация:');
    console.log('- currentPlayer:', currentPlayer);
    console.log('- currentLevel:', currentLevel);
    console.log('- totalPlayers:', totalPlayers);
    
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
    currentPlayerDisplay.textContent = `${translateText('player')} ${currentPlayer}`;
    
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
    const level = gameLevels[currentLevel];
    const isImpostor = currentPlayer === level.impostor;
    
    // Обновяваме текста на играча
    currentPlayerDisplay.textContent = `${translateText('player')} ${currentPlayer}`;

    // Изчистваме контейнера първо
    imagesContainer.innerHTML = '';

    if (isImpostor) {
        // Импостърът не вижда изображението
        imagesContainer.innerHTML = `
            <div class="impostor-message">
                <i class="fas fa-user-secret impostor-icon"></i>
                <div>${translateText('you_are_impostor')} ${translateText('dont_tell_others')}</div>
            </div>`;
    } else {
        // Останалите играчи виждат изображението
        const imageCard = document.createElement('div');
        imageCard.className = 'image-card';
        imageCard.innerHTML = `<img src="${level.image}" alt="Image">`;
        imagesContainer.appendChild(imageCard);
    }
}

// Показване на екрана за край на нивото
function showLevelEnd() {
    console.log('=== showLevelEnd извикана ===');
    console.log('currentLevel преди:', currentLevel);
    
    const currentLevelData = gameLevels[currentLevel - 1];
    // Скриваме бутоните най-отдолу
    document.querySelector('.game-controls').style.display = 'none';
    // Създаваме бутона за нов рунд
    let newRoundBtn = document.getElementById('start-new-round');
    if (!newRoundBtn) {
        newRoundBtn = document.createElement('button');
        newRoundBtn.id = 'start-new-round';
        newRoundBtn.className = 'btn';
        newRoundBtn.textContent = translateText('start_new_round');
        newRoundBtn.style.marginTop = '20px';
        newRoundBtn.style.display = 'block';
        newRoundBtn.style.width = '100%';
    }
    imagesContainer.innerHTML = `
        <div class="level-end animate__animated animate__fadeIn">
            <h2 class="animate__animated animate__bounceIn">${translateText('level_end')} ${currentLevel}</h2>
            <div class="impostor-reveal animate__animated animate__fadeInUp">
                <div class="trophy-container animate__animated animate__tada animate__infinite">
                    <i class="fas fa-trophy trophy-icon"></i>
                </div>
                <i class="fas fa-user-secret impostor-icon animate__animated animate__pulse animate__infinite"></i>
                <p class="animate__animated animate__fadeIn">${translateText('impostor_was')}:</p>
                <div class="impostor-name animate__animated animate__heartBeat">${translateText('player')} ${currentLevelData.impostor}</div>
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

    // Показваме регистрацията веднага след първия рунд
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log('Проверка за регистрация след първи рунд:');
    console.log('- currentLevel:', currentLevel, '| Number(currentLevel) === 1:', Number(currentLevel) === 1);
    console.log('- isLoggedIn:', isLoggedIn);
    console.log('- registrationModal.style.display:', registrationModal.style.display);
    if (Number(currentLevel) === 1 && isLoggedIn !== 'true' && registrationModal.style.display !== 'block') {
        console.log('Показваме формата за регистрация, защото не си влязъл!');
        setTimeout(() => {
            showRegistration();
        }, 1000);
    } else {
        console.log('НЕ показваме формата за регистрация. Условията не са изпълнени.');
    }
    
    console.log('=== showLevelEnd завършена ===');
}

// Следващ играч
function nextPlayer() {
    currentPlayer++;
    console.log('=== nextPlayer извикана ===');
    console.log('currentPlayer:', currentPlayer, 'totalPlayers:', totalPlayers, 'currentLevel преди:', currentLevel);
    
    if (currentPlayer > totalPlayers) {
        // Край на нивото
        currentLevel++;
        console.log('Край на нивото - нов currentLevel:', currentLevel, 'totalLevels:', totalLevels);
        
        if (currentLevel >= totalLevels) {
            // Играта приключи
            console.log('Играта приключи, показваме резултати...');
            showResults();
        } else {
            // Показваме екрана за край на нивото
            console.log('Показваме край на нивото...');
            showLevelEnd();
        }
    } else {
        console.log('Продължаваме със следващия играч');
        showCountdown();
    }
    
    console.log('=== nextPlayer завършена ===');
}

// Показване на резултати
function showResults() {
    console.log('showResults извикана');
    console.log('currentLevel:', currentLevel);
    console.log('isUserRegistered:', isUserRegistered);
    
    gameScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    const lastLevelData = gameLevels[currentLevel - 1];
    resultsList.innerHTML = `
        <div class="result-item">
            <span class="player-name">${translateText('player')} ${lastLevelData.impostor}</span>
            <span class="score">${translateText('you_are_impostor')}</span>
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
    // Проверка дали потребителят е регистриран и влязъл
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isUserRegistered || !isLoggedIn) {
        console.log('Потребителят не е регистриран/влязъл, показваме регистрацията');
        showRegistration();
        return;
    }
    
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

// Затваряне на модалните прозорци при клик извън тях
window.addEventListener('click', (e) => {
    // Затваряне на модала за правилата
    if (e.target === rulesModal) {
        rulesModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    // Затваряне на регистрационния модал при клик извън него
    if (e.target === registrationModal) {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!isUserRegistered || !isLoggedIn) {
            showModalMessage(translateText('registration_required'));
            return;
        }
        hideRegistration();
    }
    // Затваряне на login модала при клик извън него
    if (e.target === loginModal) {
        hideLogin();
    }
});

// Функция за създаване на падащи емотикони
function createFallingEmoji() {
    const emojis = ['🎮', '🎯', '🎲', '🎪', '🎨', '🎭', '🎪', '🎯', '🎲', '🎮', '😄', '🎉', '✨', '💫', '🎊'];
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

// Функционалност за избор на език
const languageBtn = document.getElementById('language-btn');
const languageDropdown = document.getElementById('language-dropdown');
const currentLangSpan = document.getElementById('current-lang');
const languageOptions = document.querySelectorAll('.language-option');

// Показване/скриване на dropdown менюто
languageBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    languageDropdown.classList.toggle('show');
});

// Скриване на dropdown при клик извън него
document.addEventListener('click', () => {
    languageDropdown.classList.remove('show');
});

// Избор на език
languageOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        changeLanguage(lang);
        
        // Обновяване на активния език в dropdown
        languageOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        // Скриване на dropdown
        languageDropdown.classList.remove('show');
    });
});

// Функция за смяна на езика
function changeLanguage(lang) {
    currentLanguage = lang;
    currentLangSpan.textContent = lang.toUpperCase();
    
    // Запазване на избрания език в localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // Прилагане на превода
    applyTranslation();
    
    // Обновяване на динамични текстове
    updateDynamicTexts();
}

// Зареждане на запазения език при стартиране
window.addEventListener('load', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
    } else {
        // По подразбиране български
        changeLanguage('bg');
    }
    
    // Прилагане на превода при зареждане
    applyTranslation();
    
    // Добавяне на tooltip текстове
    updateTooltips();
    
    // Добавяне на event listeners за иконите
    setupRoleIcons();
    
    // Проверка за регистрация
    const isRegistered = localStorage.getItem('isRegistered');
    console.log('localStorage isRegistered:', isRegistered);
    
    if (isRegistered === 'true') {
        isUserRegistered = true;
        isRegistrationShown = true;
        console.log('Потребителят е регистриран от localStorage');
    } else {
        console.log('Потребителят не е регистриран');
    }
    
    console.log('Инициализация завършена - isUserRegistered:', isUserRegistered, 'isRegistrationShown:', isRegistrationShown);
    updateProfilePanel();
});

// Функция за обновяване на tooltip текстове
function updateTooltips() {
    const detectiveLogo = document.querySelector('.detective-logo');
    const impostorLogo = document.querySelector('.impostor-logo');
    
    if (detectiveLogo) {
        detectiveLogo.setAttribute('data-tooltip', translateText('click_for_detective_rules'));
    }
    if (impostorLogo) {
        impostorLogo.setAttribute('data-tooltip', translateText('click_for_impostor_rules'));
    }
}

// Функция за настройване на иконите за роли
function setupRoleIcons() {
    const detectiveLogo = document.querySelector('.detective-logo');
    const impostorLogo = document.querySelector('.impostor-logo');
    
    if (detectiveLogo) {
        detectiveLogo.addEventListener('click', () => {
            showDetectiveRules();
        });
    }
    
    if (impostorLogo) {
        impostorLogo.addEventListener('click', () => {
            showImpostorRules();
        });
    }
}

// Функция за показване на правилата за детективите
function showDetectiveRules() {
    const modal = document.getElementById('rules-modal');
    const modalContent = modal.querySelector('.modal-content');
    const modalTitle = modal.querySelector('h2');
    const rulesContent = modal.querySelector('.rules-content');
    
    modalTitle.textContent = translateText('detective_rules_title');
    
    rulesContent.innerHTML = `
        <h3>${translateText('detective_objective')}</h3>
        <p>${translateText('detective_objective_text')}</p>
        
        <h3>${translateText('detective_how_to_play')}</h3>
        <ol>
            <li>${translateText('detective_rule_1')}</li>
            <li>${translateText('detective_rule_2')}</li>
            <li>${translateText('detective_rule_3')}</li>
            <li>${translateText('detective_rule_4')}</li>
            <li>${translateText('detective_rule_5')}</li>
        </ol>
        
        <h3>${translateText('detective_tips')}</h3>
        <ul>
            <li>${translateText('detective_tip_1')}</li>
            <li>${translateText('detective_tip_2')}</li>
            <li>${translateText('detective_tip_3')}</li>
            <li>${translateText('detective_tip_4')}</li>
        </ul>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Функция за показване на правилата за импостърите
function showImpostorRules() {
    const modal = document.getElementById('rules-modal');
    const modalContent = modal.querySelector('.modal-content');
    const modalTitle = modal.querySelector('h2');
    const rulesContent = modal.querySelector('.rules-content');
    
    modalTitle.textContent = translateText('impostor_rules_title');
    
    rulesContent.innerHTML = `
        <h3>${translateText('impostor_objective')}</h3>
        <p>${translateText('impostor_objective_text')}</p>
        
        <h3>${translateText('impostor_how_to_play')}</h3>
        <ol>
            <li>${translateText('impostor_rule_1')}</li>
            <li>${translateText('impostor_rule_2')}</li>
            <li>${translateText('impostor_rule_3')}</li>
            <li>${translateText('impostor_rule_4')}</li>
            <li>${translateText('impostor_rule_5')}</li>
        </ol>
        
        <h3>${translateText('impostor_tips')}</h3>
        <ul>
            <li>${translateText('impostor_tip_1')}</li>
            <li>${translateText('impostor_tip_2')}</li>
            <li>${translateText('impostor_tip_3')}</li>
            <li>${translateText('impostor_tip_4')}</li>
        </ul>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Функция за показване на регистрацията
function showRegistration() {
    console.log('=== showRegistration извикана ===');
    console.log('isRegistrationShown:', isRegistrationShown);
    console.log('isUserRegistered:', isUserRegistered);
    
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log('isLoggedIn от localStorage:', isLoggedIn);
    
    console.log('Показваме регистрационния модал...');
    registrationModal.style.display = 'block';
    registrationModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Свързване на бутона "Вече имате акаунт?" след показване на модала
    setTimeout(() => {
        const loginLinkBtn = document.getElementById('login-link');
        if (loginLinkBtn) {
            console.log('Бутонът login-link е намерен след показване на модала!');
            // Премахваме стария слушател, ако има такъв
            loginLinkBtn.removeEventListener('click', handleLoginClick);
            // Добавяме нов слушател
            loginLinkBtn.addEventListener('click', handleLoginClick);
        } else {
            console.warn('Бутонът login-link не е намерен след показване на модала!');
        }
    }, 100);
    
    console.log('=== showRegistration завършена ===');
}

// Функция за обработка на клика върху бутона "Вече имате акаунт?"
function handleLoginClick(e) {
    e.preventDefault();
    e.stopPropagation();
    alert('Бутонът "Вече имате акаунт?" беше натиснат!');
    console.log('Бутонът "Вече имате акаунт?" беше натиснат!');
    hideRegistration();
    showLogin();
}

// Функция за скриване на регистрацията
function hideRegistration() {
    registrationModal.style.display = 'none';
    registrationModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Функция за показване на вход
function showLogin() {
    console.log('showLogin извикана');
    loginModal.style.display = 'block';
    loginModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Функция за скриване на вход
function hideLogin() {
    loginModal.style.display = 'none';
    loginModal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Помощни функции за работа с localStorage база
function getUsersDB() {
    return JSON.parse(localStorage.getItem('usersDB') || '[]');
}
function saveUsersDB(users) {
    localStorage.setItem('usersDB', JSON.stringify(users));
}
function setCurrentUser(username) {
    localStorage.setItem('currentUser', username);
}
function getCurrentUser() {
    return localStorage.getItem('currentUser');
}
function clearCurrentUser() {
    localStorage.removeItem('currentUser');
}

// Обработка на регистрационната форма
registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(registrationForm);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm-password');
    const age = formData.get('age');
    const favoriteGame = formData.get('favorite-game');
    const terms = formData.get('terms');
    const newsletter = formData.get('newsletter');
    
    // Валидация
    if (password !== confirmPassword) {
        showModalMessage('Паролите не съвпадат!');
        return;
    }
    if (parseInt(age) < 13) {
        showModalMessage('Трябва да сте на 13 години или повече!');
        return;
    }
    if (!terms) {
        showModalMessage('Трябва да приемете условията за ползване!');
        return;
    }
    // Проверка за уникалност на username и email
    const users = getUsersDB();
    if (users.find(u => u.username === username)) {
        showModalMessage('Потребителското име вече съществува!');
        return;
    }
    if (users.find(u => u.email === email)) {
        showModalMessage('Имейлът вече е използван!');
        return;
    }
    // Симулиране на "хеширане" на паролата (само за демо)
    const passwordHash = btoa(password);
    // Създаване на нов потребител
    const userData = {
        username,
        email,
        passwordHash,
        age,
        favoriteGame,
        newsletter: newsletter === 'on',
        registrationDate: new Date().toISOString()
    };
    users.push(userData);
    saveUsersDB(users);
    setCurrentUser(username);
    localStorage.setItem('isRegistered', 'true');
    localStorage.setItem('isLoggedIn', 'true');
    // Показване на съобщение за успех
    showModalMessage(translateText('registration_success'));
    // Скриване на регистрацията
    hideRegistration();
    // Маркиране като регистриран
    isUserRegistered = true;
    isRegistrationShown = true;
    // Продължаване на играта
    continueGameAfterRegistration();
});

// Функция за обновяване на панела за профил
function updateProfilePanel() {
    const username = getCurrentUser();
    const users = getUsersDB();
    const userData = users.find(u => u.username === username) || {};
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isUserRegistered && userData.username && isLoggedIn) {
        profileInfo.classList.remove('hidden');
        profileActions.classList.add('hidden');
        profileUsername.textContent = userData.username;
    } else {
        profileInfo.classList.add('hidden');
        profileActions.classList.remove('hidden');
        profileUsername.textContent = '';
    }
}

// Бутон за изход
logoutBtn.addEventListener('click', () => {
    clearCurrentUser();
    localStorage.removeItem('isRegistered');
    localStorage.removeItem('isLoggedIn');
    isUserRegistered = false;
    isRegistrationShown = false;
    updateProfilePanel();
    showModalMessage(translateText('logout_success'));
});

// Линк за преминаване от регистрация към вход
// (вече не е нужен, използваме директна функция switchToLogin)

// Линк за преминаване от вход към регистрация
registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    hideLogin();
    showRegistration();
});

// Бутон за затваряне на регистрационния модал
closeRegistration.addEventListener('click', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isUserRegistered || !isLoggedIn) {
        showModalMessage(translateText('registration_required'));
        return;
    }
    hideRegistration();
});

// Бутон за затваряне на login модала
closeLogin.addEventListener('click', () => {
    hideLogin();
});

// Обработка на login формата
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(loginForm);
    const username = formData.get('username');
    const password = formData.get('password');
    const users = getUsersDB();
    const user = users.find(u => u.username === username);
    if (user && user.passwordHash === btoa(password)) {
        setCurrentUser(username);
        localStorage.setItem('isLoggedIn', 'true');
        showModalMessage(translateText('login_success'));
        hideLogin();
        isUserRegistered = true;
        updateProfilePanel();
    } else {
        showModalMessage(translateText('login_error'));
    }
});

// Функция за продължаване на играта след регистрация
function continueGameAfterRegistration() {
    updateProfilePanel();
    console.log('Потребителят е регистриран, продължаваме играта...');
}

// Бутон за регистрация от панела
registerBtn.addEventListener('click', () => {
    showRegistration();
});

// Бутон за вход от панела
loginBtn.addEventListener('click', () => {
    showLogin();
});

// Функция за показване на модално съобщение
function showModalMessage(message, type = 'info') {
    // Създаваме модален елемент
    const modal = document.createElement('div');
    modal.className = 'message-modal';
    modal.innerHTML = `
        <div class="message-content">
            <div class="message-text">${message}</div>
            <button class="message-close-btn">OK</button>
        </div>
    `;
    
    // Добавяме в body
    document.body.appendChild(modal);
    
    // Показваме с анимация
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Затваряне при клик на бутона
    const closeBtn = modal.querySelector('.message-close-btn');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    });
    
    // Затваряне при клик извън съобщението
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        }
    });
}