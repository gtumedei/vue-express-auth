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

These instructions are also useful if you want to add authentication to an existing application.

### Backend

1. Install dependencies: `bcrypt`, `jsonwebtoken`, `cookie-parser`. For `cookie-parser`, also add the related middleware (`src/main.ts`).
    ```
    npm i bcrypt jsonwebtoken cookie-parser
    npm i -D @types/bcrypt @types/jsonwebtoken @types/cookie-parser
    ```
2. Auth server utilities `setUser`, `getUser`, `unsetUser` in `src/utils/auth.ts`.
3. Register API route with password encryption (`src/controllers/auth-controller.ts`).
4. Login API route (`src/controllers/auth-controller.ts`).
5. Profile API route (`src/controllers/auth-controller.ts`).
6. Logout API route (`src/controllers/auth-controller.ts`).
7. Secure the auth API routes (`src/controllers/auth-controller.ts`).
8. Secure the posts API routes (`src/controllers/posts-controller.ts`).
    - New post requires login.
    - Delete post requires login and being either the author or an admin.

### Frontend

If you want, you can implement frontend features as you are working on the backend ones. The progress required on the backend for each feature to work is mentioned next to the feature itself.

1. Registration form `onSubmit` handler (`src/pages/register.vue`)\
   Requires **step 3** on the backend.
2. Login form `onSubmit` handler (`src/pages/login.vue`).\
   Requires **step 4** on the backend.
3. `getUser` method in `src/app.vue`.\
   Requires **step 5** on the backend.
4. `logout` method in `src/components/user-info`.\
   Requires **step 6** on the backend.
5. Provide the user to all routes as a prop (`src/app.vue`).\
   Requires **step 7** on the backend.
6. Homepage: receive the `user` prop, conditionally show `PostForm` and set `canDelete` in `PostItem` (`src/home.vue`).\
   Requires **step 8** on the backend.
7. Secure frontend routes (`src/main.ts`).\
   Requires **step 8** on the backend.
