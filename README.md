# Odd One Out Game

Забавна социална игра за разкриване на импостъра, създадена от DavidaX.

## Описание

Odd One Out е интерактивна игра, в която един от играчите е тайно избран като "импостор" и не вижда същата картинка като останалите. Целта е да разкриете кой е импосторът или да останете неразкрит, ако сте импосторът.

## Функции

- Поддръжка за 3-8 играчи
- Автоматичен избор на импостор
- Интерактивен интерфейс
- Многоезична поддръжка (Български/Английски)
- Responsive дизайн за мобилни устройства
- Система за регистрация и вход

## Технологии

- HTML5
- CSS3
- JavaScript (ES6+)
- Netlify за hosting

## Deployment в Netlify

### Автоматично Deployment

1. Качете кода в GitHub/GitLab/Bitbucket
2. Отидете на [netlify.com](https://netlify.com)
3. Кликнете "New site from Git"
4. Изберете вашия repository
5. Настройките са автоматично конфигурирани

### Ръчно Deployment

1. Отидете на [netlify.com](https://netlify.com)
2. Кликнете "New site from Git" или "Deploy manually"
3. Качете всички файлове от проекта
4. Сайтът ще бъде автоматично публикуван

## Файлова структура

```
Game/
├── index.html          # Главна HTML страница
├── script.js           # JavaScript логика
├── style.css           # Основни стилове
├── comic-button.css    # Стилове за комикс бутони
├── styles.css          # Допълнителни стилове
├── images/             # Папка с изображения
├── game_rules.txt      # Правила на играта
├── netlify.toml        # Netlify конфигурация
├── _redirects          # Netlify redirects
├── _headers            # HTTP headers
└── README.md           # Този файл
```

## Конфигурация

Проектът включва следните Netlify файлове:

- `netlify.toml` - Основна конфигурация
- `_redirects` - Прави SPA routing
- `_headers` - HTTP headers за сигурност и кеширане

## Поддръжка

За въпроси и поддръжка, моля свържете се с DavidaX.

## Лиценз

© 2024 DavidaX. Всички права запазени. 

# Odd One Out - iOS App

## Описание
Odd One Out е игра за намиране на различния елемент сред група от подобни. Играта е конвертирана в iOS приложение с помощта на Capacitor.

## Тестване на iOS приложението

### Вариант 1: PWA версия (без Mac)
1. Стартирай сървъра: `npm run web:serve`
2. Намери IP адреса на компютъра: `ipconfig`
3. На iPhone/iPad отвори: `http://[IP]:3000`
4. Натисни "Share" бутона и избери "Add to Home Screen"
5. Приложението ще се инсталира като нативно iOS приложение

### Вариант 2: iOS Simulator (с Mac)
1. Инсталирай Xcode на Mac
2. Изпълни: `npm run ios:open`
3. В Xcode избери симулатор (iPhone/iPad)
4. Натисни Run бутона

### Вариант 3: TestFlight (за публично тестване)
1. Build в Xcode: Product → Archive
2. Upload в App Store Connect
3. Създай TestFlight версия
4. Добави тестъри по email
5. Тестърите получават линк за инсталиране

### Вариант 4: Реално устройство (с Mac)
1. Свържи iPhone с Mac
2. В Xcode избери твоето устройство
3. Натисни Run за директно инсталиране

## iOS Build Инструкции

### Предварителни изисквания
1. **Xcode** - инсталиран на Mac
2. **CocoaPods** - за управление на iOS зависимости
3. **Node.js** и **npm** - за управление на JavaScript зависимости

### Стъпки за build

1. **Инсталиране на зависимости:**
   ```bash
   npm install
   ```

2. **Синхронизиране на iOS проект:**
   ```bash
   npm run ios:build
   ```

3. **Отваряне в Xcode:**
   ```bash
   npm run ios:open
   ```

4. **Build за release:**
   - Отвори проекта в Xcode
   - Избери target "App"
   - Избери "Any iOS Device" като destination
   - Product → Archive
   - Следвай стъпките за upload в App Store

### Конфигурация за App Store

1. **App Icon:**
   - Добави app icon в `www/images/app-icon.png` (1024x1024px)
   - Xcode ще генерира всички размери автоматично

2. **Bundle Identifier:**
   - Текущият bundle ID е: `com.davidagame.oddoneout`
   - Можеш да го промениш в `capacitor.config.json`

3. **App Store Connect:**
   - Създай ново приложение в App Store Connect
   - Използвай същия bundle identifier
   - Добави описания, скрийншоти и метаданни

### Полезни команди

```bash
# Синхронизиране на промени
npm run ios:build

# Отваряне в Xcode
npm run ios:open

# Тестване на симулатор (ако имаш Xcode)
npm run ios:run

# PWA тестване
npm run web:serve
```

## Структура на проекта

```
├── www/                 # Уеб файлове за приложението
│   ├── index.html      # Главна HTML страница
│   ├── script.js       # JavaScript логика
│   ├── style.css       # CSS стилове
│   └── images/         # Изображения
├── ios/                # iOS нативен проект
├── capacitor.config.json # Capacitor конфигурация
└── package.json        # Node.js зависимости
```

## Поддръжка

За въпроси и проблеми, моля свържи се с разработчика. 