Project Title: ClientFlowAI – A MEN Stack Client Management App

Overview:
ClientFlowAI is a full-stack client management tool built with the MEN (MongoDB, Express, Node.js) stack using EJS as the templating engine. The app allows users to create, view, edit, and delete clients, as well as attach notes to each client. It includes user authentication, session handling, and a clean UI with responsive styling.

Features:

User authentication: Sign-up, Sign-in, Sign-out

Create, Read, Update, Delete (CRUD) for clients

CRUD for client notes

Styled views using custom CSS and Flexbox

Separate views for index, show, new, and edit clients

Session management with express-session

Middleware: express, method-override, dotenv, morgan, bcrypt

Technologies Used:

MongoDB

Mongoose

Express

Node.js

EJS

CSS

Git and GitHub

Heroku for deployment

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
