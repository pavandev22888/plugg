# PlugHub Setup Guide

## 📋 Что было реализовано

### ✅ Основной функционал
- ✓ Приложение на Electron + React + TypeScript
- ✓ Тёмная тема в стиле VSCode/Spotify
- ✓ Поддержка 4 DAW: FL Studio, Reaper, Ableton Live, Logic Pro
- ✓ Кроссплатформенность (Windows + macOS)

### ✅ Система управления плагинами
- ✓ Поиск и установка плагинов с GitHub
- ✓ Список установленных плагинов
- ✓ Удаление плагинов
- ✓ Фильтрация по категориям

### ✅ PlugHub Marketplace (NEW!)
- ✓ Загрузка собственных VST3 плагинов
- ✓ Скачивание плагинов от сообщества
- ✓ Система оценок (1-5 звёзд)
- ✓ Отслеживание количества загрузок
- ✓ Система тегов для поиска
- ✓ Удаление своих плагинов

### ✅ Система автообновлений (NEW!)
- ✓ Автоматическая проверка обновлений при запуске
- ✓ Уведомление о доступных обновлениях
- ✓ Скачивание обновлений в фоне
- ✓ Установка обновлений с перезагрузкой приложения

### ✅ Дополнительные функции
- ✓ Система логирования
- ✓ Управление конфигурацией DAW
- ✓ Красивый UI с Tailwind CSS
- ✓ Типизированный код на TypeScript

## 🚀 Быстрый старт

### 1. Установка зависимостей
```bash
cd C:\Users\podkop\Desktop\key\plughub
npm install
```

### 2. Запуск dev сервера
```bash
npm run dev
```
Откроется приложение на http://localhost:5173

### 3. Сборка для продакшена
```bash
npm run build
npm run electron-build
```

## 📂 Структура файлов

### Main Process (Electron)
```
src/main/
├── index.ts           # Точка входа Electron, создание окна
├── installer.ts       # Логика установки/удаления плагинов
├── detector.ts        # Детектор DAW и их путей
├── github.ts          # Работа с GitHub API через Octokit
├── updater.ts         # Система автообновлений (electron-updater)
├── marketplace.ts     # Маркетплейс: загрузка, скачивание, оценки
└── preload.ts         # Preload скрипт для безопасного IPC
```

### Renderer (React Frontend)
```
src/renderer/
├── App.tsx                    # Главный компонент с маршрутизацией
├── index.tsx                  # Точка входа React
├── main.css                   # Tailwind CSS + базовые стили
├── pages/
│   ├── Home.tsx              # GitHub плагины, поиск и фильтрация
│   ├── Marketplace.tsx        # PlugHub маркетплейс (upload/download)
│   ├── Installed.tsx          # Установленные плагины
│   └── Settings.tsx           # Настройки DAW и обновления
└── components/
    ├── Sidebar.tsx            # Левая панель навигации
    ├── PluginCard.tsx         # Карточка плагина с установкой
    └── UpdateCheck.tsx        # Компонент проверки обновлений
```

### Shared
```
src/shared/
└── types.ts           # TypeScript интерфейсы для типизации
```

## 🔌 IPC Команды

### Core
- `get-daw-paths` - получить пути DAW
- `get-plugins` - получить плагины с GitHub
- `install-plugin` - установить плагин
- `uninstall-plugin` - удалить плагин
- `get-installed` - получить установленные плагины

### Marketplace
- `get-marketplace-plugins` - получить плагины маркетплейса
- `upload-plugin` - загрузить плагин
- `download-marketplace-plugin` - скачать плагин
- `rate-plugin` - оценить плагин
- `delete-plugin` - удалить плагин
- `select-vst3-file` - диалог выбора файла

### Updater
- `check-updates` - проверить обновления
- `download-update` - скачать обновление
- `install-update` - установить обновление

## 🎨 UI/UX

### Цветовая схема
- Background: #111827 (gray-900)
- Secondary: #1F2937 (gray-800)
- Border: #374151 (gray-700)
- Primary: #2563EB (blue-600)
- Accent: #10B981 (green-600)

### Компоненты
- Sidebar с навигацией
- Plugin Cards с информацией
- Forms для загрузки плагинов
- Rating system (звёзды)
- Update notifications

## 📦 Зависимости

### Production
- `react` - UI библиотека
- `react-dom` - React для DOM
- `electron` - Desktop приложение
- `electron-updater` - Автообновления
- `octokit` - GitHub API
- `axios` - HTTP клиент
- `uuid` - UUID генератор
- `formidable` - Парсинг форм

### Dev
- `typescript` - Типизация
- `vite` - Сборщик
- `tailwindcss` - CSS framework
- `electron-builder` - Сборка приложения

## 🔐 Безопасность

- Context isolation включена в Electron
- Preload скрипт для безопасного IPC
- Все файлы плагинов хранятся локально
- Нет отправки данных на внешние серверы

## 📝 Следующие шаги

1. **Полная интеграция GitHub**
   - Реальная загрузка плагинов из GitHub Releases
   - Кэширование плагинов

2. **Backend сервер** (опционально)
   - Хостинг маркетплейса на облаке
   - Синхронизация между компьютерами
   - Аналитика популярности плагинов

3. **Расширенные фильтры**
   - Поиск по автору
   - Сортировка по рейтингу/загрузкам
   - Сохранённые плагины

4. **Плагины для DAW**
   - Встроенный браузер плагинов прямо в DAW
   - Управление версиями плагинов

5. **Сообщество**
   - Комментарии на плагинах
   - Форум обсуждений
   - User profiles

## 🐛 Известные ограничения

- Автообновления требуют правильной конфигурации electron-builder
- Маркетплейс работает локально (нужен backend для облака)
- GitHub API требует GitHub token для большого количества запросов

## 📞 Контакты

Для вопросов и предложений создавайте Issues в репозитории.

---

**PlugHub** - Сообщество для VST3 плагинов 🎵✨
