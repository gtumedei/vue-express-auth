# vue-express-auth

Steps:
1. Install dependencies: bcrypt, jsonwebtoken, cookie-parser (plus add it in main.ts)
2. Auth server utilities (setAccessToken, decodeAccessToken, deleteAccessToken)
3. Register API route with password encryption
4. Registration form
5. Login API route
6. Login form
7. Profile API route
8. Logout API route
9. getUser method in app.vue and logout method in the UserInfo component
10. Guard to the auth API routes
11. Secure API routes: new post (requires login) and delete post (requires login and being either the author or an admin)
12. Provide the user to all routes as a prop
13. home.vue: receive user, conditionally show PostForm and set canSubmit in PostItem
14. Secure frontend routes
