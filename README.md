<div align="center"> 
    <img src="https://drive.google.com/uc?export=download&id=1diDpkdadEnYG7Rdc4ozfAUN9uA1UVDyj" alt="Logo" width="80" height="80">
    <h1>Sky Chat</h1>
</div>

This is a real-time chat that can be used by any person and business, with a brief installation and sufficient knowledge you can adapt this project and transform it however you want.

With a minimalist design and some functions such as registration and login with GitHub and Google, and internally the application has the advantage of creating groups, changing profile images, sending messages simultaneously with another user, and also knowing if the user is active and has read your message.




## Tech Stack

**This app was built with:** NextJS, TypeScript, Tailwind CSS, Prisma and MongoDB.


## Installation

This document and application is developed for Nextjs version 14.0.4.

1. Clone the repository
```bash
    git clone https://github.com/Jalch0/sky-chat-app.git
```
2. Install the NPM packages
```bash
    npm install
```
3. Create new file .env and add your database in MongoDB
```bash
    DATABASE_URL="ENTER YOUR DATABASE"
```
4. Setup prisma
```bash
    npx prisma db push
```
5. Create new file .env and add your api keys
```bash
    NEXTAUTH_SECRET="NEXTAUTH_SECRET"
    GITHUB_ID="ENTER YOUR API"
    GITHUB_SECRET="ENTER YOUR API"
    GOOGLE_CLIENT_ID="ENTER YOUR API"
    GOOGLE_CLIENT_SECRET="ENTER YOUR API"
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="ENTER YOUR API"
    NEXT_PUBLIC_PUSHER_APP_KEY="ENTER YOUR API"
    PUSHER_APP_ID="ENTER YOUR API"
    PUSHER_SECRET="ENTER YOUR API"
```
4. Finally run the project
```bash
    npm run dev
```



    
## Screenshots

![App Screenshot](https://drive.google.com/uc?export=download&id=1NTe5l32bXPIgRI_2W-bzI4AoINOk2q-7)

![App Screenshot](https://drive.google.com/uc?export=download&id=1bGXbHJi_Q4Rcjn9DlvOo97VjY219b4jE)

![App Screenshot](https://drive.google.com/uc?export=download&id=1CtvcklGClh1gS1gscYgUbIJSvgpVftUV)

![App Screenshot](https://drive.google.com/uc?export=download&id=1cCHy6zFQdFl5LW3sJNTKNaMpsaT89qNE)

![App Screenshot](https://drive.google.com/uc?export=download&id=1fS3Erl5sNKqf1WSjHqPw8IuKZwyPGjzF)


## Feedback

If you have any feedback, please reach out to us at jlabradorchacon@gmail.com


## Acknowledgements

 - [Next Auth](https://next-auth.js.org/)
 - [Next Cloudinary](https://next.cloudinary.dev/)
 - [Pusher](https://pusher.com/)
 - [React Icons](https://react-icons.github.io/react-icons/)
 - [React Hot Toast](https://react-hot-toast.com/)
 - [Clsx](https://www.npmjs.com/package/clsx)


