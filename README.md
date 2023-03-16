# SWAPI Search App with ReactJs and TypeScript

SWAPI (Star Wars API) Search App with ReactJs and Typescript Exercise.

## Resources

- Coding assignment project (Feb 2023), built on this template: [SWAPI Search App with ReactJs and TypeScript](https://github.com/metalevel-tech/prj-ts-react-swapi)
- My first touch with TypeScript (Feb 2023), base of this template: [Create TODO App with ReactJs and Typescript Exercise](https://github.com/metalevel-tech/exc-ts-react-todo-app)
- Automation with GitHub Actions: [Deploy to GitHub Pages and Automate with GitHub Actions](https://github.com/metalevel-tech/exc-js-react-tic-tac-toe#deploy-to-github-pages-with-github-actions)

## Setup the Project

### Install ReactJs and Typescript by [Vite](https://vitejs.dev/guide/why.html)

```bash
npm create vite@latest
# ✔ Project name: … template-react-ts-vite
# ✔ Select a framework: › React
# ✔ Select a variant: › TypeScript
cd template-react-ts-vite/
npm install
```

- Create start command in [`package.json`](package.json) file as follows:

  ```json
  "scripts": {
      "start": "vite --host 0.0.0.0 --port 300",
  }
  ```

- Clean the `src/` and `public/` directories and start working on the project.

### Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```bash
npm i @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
npm i @headlessui/react @heroicons/react
```

### Setup the Git Repository and Push to GitHub

```bash
# git config --global init.defaultBranch master
git init
git add -A
git commit -m "Initial commit"
git branch -M master
git remote add origin git@github.com:metalevel-tech/template-react-ts-vite.git
git push -u origin master
```
