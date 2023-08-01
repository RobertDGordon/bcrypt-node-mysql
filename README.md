# Introduction
This is a demo app for connecting NodeJS/Express to a MySQL Database, and uses Bcrypt to hash user passwords BEFORE storing them in the database

## How to run
1. npm i
2. Create a new database schema, in this example it's named `bcryptdb`
3. Set up your `.env` according to your local settings, see: `.env.example`
4. Run the command `npm run server`

## Bcrypt
See the files `/routes/authRoutes.js` and `/controllers/authController.js` for detailed step by step about how bcrypt works