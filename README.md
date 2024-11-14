# vue-express-auth

Folders:
- `vuepost-without-auth`: a simple web app where you can create posts, no authentication required.
- `vuepost-with-auth`: the complete web app, requiring authentication to create and delete posts.

## Getting started

These instructions are valid for both `vuepost-without-auth` and `vuepost-with-auth`.

Requirements: Node.js and a MySQL instance.

1. Run the `backend/sql/db.sql` to create the `vuepost` database and its tables.
2. Open a terminal in `backend`, install dependencies with `npm i` and start the dev server with `npm run dev`.
3. Open another terminal in `frontend`, install dependencies with `npm i` and start the dev server with `npm run dev`.
4. Visit http://localhost:5173.

## Steps

This is a TO-DO list to implement the auth features presented in the seminar. The starting point is `vuepost-without-auth` and the end result should be the same as `vuepost-with-auth`.

1. **Backend** Install dependencies: `bcrypt`, `jsonwebtoken`, `cookie-parser`. For `cookie-parser`, also add the related middleware (`src/main.ts`).
    ```
    npm i bcrypt jsonwebtoken cookie-parser
    npm i -D @types/bcrypt @types/jsonwebtoken @types/cookie-parser
    ```
2. **Backend** Auth server utilities `setUser`, `getUser`, `unsetUser` in `src/utils/auth.ts`.
3. **Backend** Register API route with password encryption (`src/controllers/auth-controller.ts`).
4. **Frontend** Registration form `onSubmit` handler (`src/pages/register.vue`).
5. **Backend** Login API route (`src/controllers/auth-controller.ts`).
6. **Frontend** Login form `onSubmit` handler (`src/pages/register.vue`).
7. **Backend** Profile API route (`src/controllers/auth-controller.ts`).
8. **Backend** Logout API route (`src/controllers/auth-controller.ts`).
9.  **Frontend** `getUser` method in `src/app.vue` and `logout` method in `src/components/user-info`.
10. **Backend** Secure the auth API routes (`src/controllers/auth-controller.ts`).
11. **Backend** Secure the posts API routes (`src/controllers/posts-controller.ts`).
    - New post requires login.
    - Delete post requires login and being either the author or an admin.
12. **Frontend** Provide the user to all routes as a prop (`src/app.vue`).
13. **Frontend** Homepage: receive the `user` prop, conditionally show `PostForm` and set `canSubmit` in `PostItem` (`src/home.vue`).
14. **Frontend** Secure frontend routes (`src/main.ts`).
