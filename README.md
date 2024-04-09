


# Web Project

This project uses the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to register, log in, complete their profile (including uploading an image, and sends a thank you message via Gmail upon registration.
![Screenshot_9-4-2024_215236_localhost](https://github.com/Nandu-ramineni/dribble/assets/123319320/60b993ca-464a-4f96-a5b3-b658a1d1bce1)
![Screenshot_9-4-2024_21533_localhost](https://github.com/Nandu-ramineni/dribble/assets/123319320/7ece3b85-1a7d-45d3-8580-d59b27fa06ae)
![Screenshot (495)](https://github.com/Nandu-ramineni/dribble/assets/123319320/21dad712-22e1-43e1-adb9-93a2f43ba830)

## Features

- User registration and authentication
- User profile completion with the ability to upload an image
- Thank you message sent via Gmail upon successful registration
- Dribbble-like design and functionality
- 
```
## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mern-dribbble-clone.git
   ```

2. Navigate into the project directory:

   ```bash
   cd mern-dribbble-clone
   ```

3. Install server dependencies:

   ```bash
   npm install
   ```

4. Navigate to the client directory:

   ```bash
   cd client
   ```

5. Install client dependencies:

   ```bash
   npm install
   ```

6. Go back to the root directory:

   ```bash
   cd backend
   npm install
   ```

7. Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   DB_USERNAME=....
   DB_PASSWORD=....
   CLOUDINARY_CLOUD_NAME=....
   CLOUDINARY_API_KEY=......
   CLOUDINARY_API_SECRET=....
   ```

8. Start the server:

   ```bash
   cd backend
   npm start
   ```

9. In a separate terminal, start the client:

   ```bash
   cd frontend
   npm run dev
   ```

10. Open your browser and navigate to `http://localhost:5173` to view the application.

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- Multer and cloudinary for file uploads
- Emailjs for sending email
- Tailwind CSS and MUI for styling

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Make sure to replace placeholders like `your-username`, `your_mongodb_uri`, `your_jwt_secret`, `your_gmail_address`, and `your_gmail_password` with appropriate values specific to your project. Additionally, you may want to add more detailed instructions or information depending on the specific requirements and functionalities of your project.
