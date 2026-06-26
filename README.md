# PlugHub - VST3 Plugin Manager

Современный менеджер VST3 плагинов для популярных DAW с поддержкой загрузки пользовательских плагинов и автообновлений.

## 🎯 Возможности

- 🔍 **Browse GitHub** - Поиск и установка плагинов с GitHub
- 🎨 **PlugHub Marketplace** - Загрузка и скачивание плагинов от сообщества
- ⭐ **Rating System** - Система оценок для плагинов
- 📥 **Auto Updates** - Автоматические обновления приложения
- 💾 **Plugin Management** - Управление установленными плагинами
- 🖥️ **Multi-DAW Support** - Поддержка FL Studio, Reaper, Ableton Live, Logic Pro
- 🌙 **Dark Theme** - Красивый тёмный интерфейс

## 🖥️ Поддерживаемые DAW

- FL Studio
- Reaper
- Ableton Live
- Logic Pro

## 🛠️ Установка

```bash
npm install
```

## 🚀 Разработка

```bash
npm run dev
```

## 📦 Сборка

```bash
npm run build
npm run electron-build
```

## 📁 Структура проекта

```
src/
├── main/
│   ├── index.ts          # Electron main process
│   ├── installer.ts      # Логика установки плагинов
│   ├── detector.ts       # Детектор DAW
│   ├── github.ts         # GitHub API
│   ├── updater.ts        # Система автообновлений
│   ├── marketplace.ts    # Маркетплейс плагинов
│   ├── preload.ts        # Preload скрипт IPC
│   └── ipc.ts            # IPC обработчики
├── renderer/
│   ├── App.tsx           # Главный компонент
│   ├── index.tsx         # Точка входа React
│   ├── main.css          # Стили Tailwind
│   ├── pages/
│   │   ├── Home.tsx      # Страница GitHub плагинов
│   │   ├── Marketplace.tsx # Маркетплейс
│   │   ├── Installed.tsx # Установленные плагины
│   │   └── Settings.tsx  # Настройки
│   └── components/
│       ├── Sidebar.tsx        # Боковая панель
│       ├── PluginCard.tsx     # Карточка плагина
│       └── UpdateCheck.tsx    # Проверка обновлений
└── shared/
    └── types.ts          # TypeScript типы

```

## 🎨 Технологии

- **Frontend**: React + TypeScript + Tailwind CSS
- **Desktop**: Electron
- **API**: Octokit (GitHub API)
- **Updates**: electron-updater
- **Database**: JSON файлы

## 🔧 Основные функции

### Browse GitHub
Поиск и установка плагинов напрямую с GitHub репозиториев.

### Upload Plugin
Загрузите свой VST3 плагин в PlugHub Marketplace:
1. Перейдите в PlugHub Market
2. Нажмите "+ Upload Plugin"
3. Заполните информацию
4. Выберите VST3 файл
5. Опубликуйте!

### Rating System
Оценивайте плагины от 1 до 5 звёзд. Рейтинг помогает сообществу найти лучшие плагины.

### Auto Updates
Приложение автоматически проверяет наличие обновлений при запуске.

## 📝 Использование

### Установка плагина из GitHub
1. Откройте вкладку "Browse GitHub"
2. Найдите нужный плагин
3. Выберите DAW
4. Нажмите "Install"

### Загрузка плагина на PlugHub
1. Откройте вкладку "PlugHub Market"
2. Нажмите "+ Upload Plugin"
3. Заполните детали плагина
4. Выберите .vst3 файл
5. Опубликуйте

### Установка из PlugHub Market
1. Найдите плагин в PlugHub Market
2. Нажмите "⬇️ Download"
3. Выберите место для сохранения

## 🔐 Безопасность

- Приложение работает локально
- Плагины скачиваются с надёжных источников (GitHub)
- Все данные хранятся локально на вашем компьютере

## 📄 Лицензия

MIT

## 🤝 Вклад

Мы приветствуем вклады! Пожалуйста:

1. Fork репозиторий
2. Создайте ветку для вашей фишки
3. Коммитьте ваши изменения
4. Push в ветку
5. Откройте Pull Request

## 📞 Поддержка

Если у вас есть вопросы или проблемы, пожалуйста создайте Issue.

---

**PlugHub** - Сделано для музыкантов, разработчиков и продюсеров. 🎵

