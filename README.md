This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Preview to the finish product
[proj-inventory-tracker.vercel.app](https://inventory-tracker-blue-nine.vercel.app/)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## install  mui
npm install @mui/material @emotion/react @emotion/styled

https://mui.com/material-ui/getting-started/installation/

## install roboto font (mui)
npm install @fontsource/roboto

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


## To Install firebase
```bash
npm install firebase
```

https://firebase.google.com/docs/web/setup?hl=en&authuser=0&_gl=1*iumunu*_ga*Mjg4ODIzMTMxLjE3MjIyODI0OTY.*_ga_CW55HF8NVT*MTcyMjM2ODk0Ni4yLjEuMTcyMjM2OTEzMy4yMi4wLjA.


npm install firebase

import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);

# Install firestore (database)



# Add components on the app
* Box, Typography, 
[Modal](https://mui.com/material-ui/react-modal/)

# Hiding API keys
https://www.youtube.com/watch?v=17UVejOw3zA


## Deploying a staged production build

On the terminal, Install vercel CLI
```bash
npm i -g vercel
vercel build
vercel deploy --prebuilt
#Deploy the build outputs in .vercel/output produced by vercel build.
```

Add, commit, and push to your github repo

Go to vercel website and add your project


[Source: Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.


```bash
python -m venv openai-env
```

Then activate using this cmd:
```bash
source openai-env/bin/activate
```

## Install the OpenAI Python library
```bash
pip install --upgrade openai



# Adding authentication
https://next-auth.js.org/getting-started/example

npm install next-auth


## installing postgresql on mac
brew install postgresql

to start the service:
brew services start postgresql@14

to stop the service (recommended):
brew services start postgresql@14

## Setting up the database using Prisma
Next steps:
* To run the database on PORT # 5432
docker run --rm -p 5432 -e POSTGRES_HOST_AUTH_METHOD=trust postgres
* To run prisma migration:
```bash
npx prisma migrate dev --name init
```
1. Set the DATABASE_URL in the .env file to point to your existing database.
If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your databases:
postgresql, mysql, sqlite, ssqlserver, mongodb or cockroached
3. run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can start querying your database



## tech stacks and services
NEXT.JS
POSTGRESS (database)
VERCEL (deployment)
NEXT-AUTH (sign in authentication)
Prisma ()

# To access react camer-pro
https://www.npmjs.com/package/react-camera-pros

To install
npm install --save react-camera-pro