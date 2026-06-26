# 📦 PlugHub - Как создать .EXE установщик

## ✅ Способ 1️⃣: Обновить electron-builder (САМЫЙ ПРОСТОЙ)

### Шаг 1: Обновите electron-builder на новую версию
```bash
npm uninstall electron-builder
npm install -D electron-builder@latest
```

### Шаг 2: Очистите кэш
```bash
rmdir /s "%appdata%\Local\electron-builder"
```

### Шаг 3: Соберите приложение
```bash
npm run build && npm run electron-build
```

### Шаг 4: Готово!
Файл появится в: `dist/PlugHub-0.1.0.exe`

---

## ✅ Способ 2️⃣: GitHub Actions (РЕКОМЕНДУЕТСЯ)

### Шаг 1: Создайте файл `.github/workflows/build.yml`

```yaml
name: Build

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: windows-latest
    
    strategy:
      matrix:
        node-version: [18.x]
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
    
    - name: Build Electron
      run: npm run electron-build
      env:
        CSC_IDENTITY_AUTO_DISCOVERY: false
    
    - name: Upload artifacts
      uses: actions/upload-artifact@v3
      with:
        name: plughub-windows
        path: dist/*.exe
```

### Шаг 2: Push на GitHub
```bash
git add .github/workflows/build.yml
git commit -m "Add build workflow"
git push
```

### Шаг 3: GitHub автоматически соберёт .exe!

Скачайте из: GitHub Actions → Artifacts

---

## ✅ Способ 3️⃣: Собрать на Linux/macOS

Баг с winCodeSign только на Windows.

Если у вас есть Mac или Linux, просто запустите:
```bash
npm run electron-build
```

И будет .exe для Windows!

---

## ✅ Способ 4️⃣: Использовать Docker

Создайте `Dockerfile`:
```dockerfile
FROM node:18

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN npm run electron-build

CMD ["ls", "-la", "dist/"]
```

Запустите:
```bash
docker build -t plughub .
docker run -v %cd%\dist:/app/dist plughub
```

---

## 🔧 Если Способ 1️⃣ не работает:

### Проверьте версию electron-builder:
```bash
npm list electron-builder
```

Должна быть версия **25.0.0** или выше.

### Обновитесь принудительно:
```bash
npm cache clean --force
npm install -D electron-builder@25.1.0
npm run electron-build
```

---

## 📋 Полный процесс (Способ 1️⃣ пошагово):

```bash
# 1. Перейдите в папку
cd C:\Users\podkop\Desktop\key\plughub

# 2. Обновите electron-builder
npm uninstall electron-builder
npm install -D electron-builder@latest

# 3. Очистите кэш
rmdir /s %appdata%\Local\electron-builder

# 4. Соберите React
npm run build

# 5. Создайте .exe
npm run electron-build

# 6. Готово!
# Файл: dist/PlugHub-0.1.0.exe
```

---

## ✨ Что получится:

```
dist/
├── PlugHub-0.1.0.exe          ← Установщик (150-200 MB)
├── PlugHub-0.1.0-Setup.exe    ← NSIS инсталлер
└── (другие файлы)
```

---

## 🚀 Использование .exe:

### Установить:
```
1. Двойной клик на PlugHub-0.1.0.exe
2. Следуйте инструкциям
3. Ярлык на рабочем столе
4. Готово!
```

### Отправить друзьям:
```
1. Скопируйте PlugHub-0.1.0.exe
2. Отправьте по почте/облаку
3. Они устанавливают как обычную программу
```

---

## 🎯 САМЫЙ БЫСТРЫЙ СПОСОБ:

```bash
cd C:\Users\podkop\Desktop\key\plughub
npm install -D electron-builder@latest
rmdir /s %appdata%\Local\electron-builder
npm run dist
```

**Готово через 5-10 минут!** ✅

