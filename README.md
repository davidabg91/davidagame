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