# ⚡ Flawless ElectronForge + Vite + Vue 3 + TypeScript

A **flawless**, modern, and fast Electron application boilerplate using:

- 🧩 [Electron Forge](https://www.electronforge.io/) — for app lifecycle and packaging  
- ⚡ [Vite](https://vitejs.dev/) — lightning-fast frontend build tool  
- 🖼️ [Vue 3](https://vuejs.org/) — progressive JavaScript framework  
- 🟦 [TypeScript](https://www.typescriptlang.org/) — typed JS for better maintainability  

> Designed for stability, performance, and developer productivity.

---

## 🚀 Quick Start

### 📦 Install Dependencies

```bash
npm install
```

### 🧪 Run in Development Mode

```bash
npm start
```
This will:

- Start Electron with hot-reloading
- Launch the Vue 3 frontend via Vite dev server

### 📦 Build for Production

```bash
npm run package
```
Packages the app into a standalone executable using Electron Forge.


## 📁 Project Structure

```
├── src/
│   ├── main/       # Electron main process
│   ├── preload/    # Preload scripts
│   └── render/     # Vue 3 app
│   └── shared/     # Shared dir
├── types
├── forge.config.ts
├── tsconfig.json
├── ...
```

## ✅ Features

- Zero config Vue 3 + Vite + Electron integration
- HMR (Hot Module Replacement) in both main and renderer
- TypeScript support in all layers (main, preload, renderer)
- Preload script isolation for security (contextBridge)
- Easy packaging with electron-forge

---

## 🙌 Contributing

Whether it's:
- Reporting a bug
- Suggesting a feature
- Submitting a pull request

> Please fork the repository and open a pull request to suggest changes.

---

## 💬 Need Help or Found a Bug?

If you have any questions, ideas, or issues:
- [Open an issue](https://github.com/kabledev/flawless-electronforge-vite-vue3-ts/issues)

- Or feel free to start a discussion

---

## Support

If you find this project helpful, consider giving it a ⭐ on GitHub — it helps more than you think!

---

## Acknowledgements & Inspirations
- [electron-forge-vite-ts-vue](https://github.com/AngusLin10/electron-forge-vite-ts-vue) - hmr plugin

- [electron-vite-boilerplate](https://github.com/cawa-93/vite-electron-builder) 

- [Awesome Electron](https://github.com/sindresorhus/awesome-electron) 

- StackOverflow discussions & GitHub issues
- ChatGPT

## 📄 License

MIT License © 2025  
Free for personal and commercial use. Attribution appreciated but not required.

