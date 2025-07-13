This is a simple REST API built with Node.js and Express.js, following standard backend development practices.

🚀 Features

CRUD operations (Create, Read, Update, Delete)

Express.js routing structure

Environment variable management with dotenv

Security middlewares (helmet, hpp, cors, xss-clean)

Rate limiting to prevent abuse

Modular route and controller architecture

🛠️ Technologies Used

Node.js

Express.js

dotenv

helmet

hpp

cors

express-rate-limit

xss-clean


📁 Project Structure

rest_api/
├── src/
│   ├── controllers/
│   │   └── productControllers.js
│   ├── routes/
│   │   └── productRoutes.js
│
├── app.js
├── index.js
├── package.json
├── .env
└── README.md

📫 API Endpoints

Base URL

http://localhost:5000/api/v1

Available Routes

Method

Route

Description

POST

/create-product

Create a new product

🛡️ Security

✔️ helmet – Sets secure HTTP headers✔️ hpp – Prevents HTTP Parameter Pollution attacks✔️ cors – Enables Cross-Origin Resource Sharing✔️ express-rate-limit – Limits repeated requests to public APIs✔️ xss-clean – Prevents cross-site scripting attacks


🔔 Note

✅ Remember to add .env to .gitignore to keep your secrets safe.
