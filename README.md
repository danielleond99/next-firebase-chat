# NextChat

NextChat is a real-time chat application built with Next.js 14, Firebase, and Tailwind CSS. It allows users to sign in with their Google account and participate in a global chat room.

## Features

- Google Authentication
- Real-time messaging
- Responsive design
- Dark mode

## Technologies Used

- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS
- Firebase (Authentication, Firestore, Analytics)

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/nextchat.git
   cd nextchat
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a Firebase project and obtain the configuration details.

4. Create a `.env` file in the root directory and add your Firebase configuration:

   ```
   NEXT_PUBLIC_FIREBASE_APIKEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTHDOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECTID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGEBUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APPID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENTID=your_measurement_id
   ```

5. Run the development server:

   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project can be easily deployed on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy your application.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
