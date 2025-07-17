# ClientFlowAI – A MEN Stack Client Management App

## Overview
ClientFlowAI is a full-stack client management tool built using the MEN stack (MongoDB, Express.js, Node.js) with EJS for templating. It allows authenticated users to create, view, edit, and delete clients and their associated notes.

---

## Install dependencies:
```bash
npm install
```

---

## Create a `.env` file in the root directory:
```env
PORT=3000
MONGODB_URI=your-mongodb-uri
SESSION_SECRET=your-secret-string
```

---

## Run the app locally:
```bash
npm run dev
```
App will run at: `http://localhost:3000`

---

## Scripts
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js -e css,ejs,js,json"
}
```

---

## Folder Structure
```
├── controllers/
│   ├── auth.js
│   ├── clients.js
│   └── notes.js
├── models/
│   ├── user.js
│   ├── client.js
│   └── note.js
├── routes/
│   ├── authRoutes.js
│   ├── clientRoutes.js
│   └── noteRoutes.js
├── views/
│   ├── auth/
│   │   ├── sign-in.ejs
│   │   └── sign-up.ejs
│   ├── clients/
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   ├── show.ejs
│   │   └── edit.ejs
│   ├── notes/
│   │   └── edit.ejs
│   └── home.ejs
├── public/
│   └── stylesheets/
│       ├── style.css
│       ├── client-index.css
│       ├── client-show.css
│       ├── client-form.css
│       └── auth-sign.css
├── .env
├── package.json
└── server.js
```

---

## Deployment (Heroku)

### Ensure your `package.json` has the correct start script:
```json
"start": "node server.js"
```

### Commit your code:
```bash
git init
git add .
git commit -m "Initial commit"
```

### Deploy to Heroku:
```bash
heroku create clientflowai
git push heroku main
heroku open
```

---

## Known Issues / Stretch Goals

- ❌ Navbar was attempted but not rendered correctly. Removed for now.
- ❌ Flash messages not implemented (login errors, signup success, etc.)
- ❌ No mobile responsiveness or media queries
- ❌ No user profile management
- ❌ No password reset feature
- ❌ Cannot sort or filter clients by category/date
- ❌ No archives or favorite notes functionality
- ❌ No success/error UI validation for forms

---

## Credits
Developed by Daniel Sangronis  
General Assembly – Software Engineering Bootcamp  
Unit 2 Full-Stack Project


How to Use:

Clone the repository.

Run npm install to install dependencies.

Create a .env file with the following:
PORT=3000
MONGODB_URI=your-mongodb-uri
SESSION_SECRET=your-session-secret

Run npm run dev for development using nodemon, or npm start to launch the app normally.

Visit http://localhost:3000 to interact with the app.

Folder Structure:

server.js

models/

client.js

note.js

user.js

controllers/

clients.js

notes.js

auth.js

views/

clients/

index.ejs

new.ejs

edit.ejs

show.ejs

auth/

sign-in.ejs

sign-up.ejs

notes/

edit.ejs

home.ejs

public/

stylesheets/

style.css

client-index.css

client-show.css

client-form.css

auth-sign.css

routes/

authRoutes.js

clientRoutes.js

noteRoutes.js

Known Issues / Stretch Goals (Unfinished):

The navigation bar (navbar partial) was attempted but did not render correctly across views. Was excluded for now.

Flash messages for errors/success not yet implemented.

Mobile responsiveness could be improved.

Better error handling and user feedback in forms.

Filtering and sorting clients by category or date.

Ability to archive or favorite specific notes.

Edit user account or reset password.

Deployment:
The app was deployed to Heroku using the Heroku CLI. Ensure your package.json includes a "start" script as follows:
"start": "node server.js"
Then run:
git init
heroku create
git add .
git commit -m "Deploy app"
git push heroku main
heroku open

Credits:
Developed by Daniel Sangronis during the General Assembly Software Engineering Bootcamp – Unit 2 Project.

Done. Let me know if you want a version formatted for GitHub later.
