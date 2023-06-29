# KYConnect - User-Friendly Customer Onboarding App
KYConnect is a user-friendly and secure customer onboarding application that integrates OCR (Optical Character Recognition), barcode decoding, and face verification for personal detail validation. It provides a seamless and efficient way to validate customer identification documents such as Aadhar and PAN cards.
## Link to Hosted Website (best viewed on mobile)
https://kyconnectspitclient.onrender.com/

## Key Features

- Aadhar and PAN card verification: KYConnect implements a verification process for Aadhar and PAN cards by sending OTPs (One-Time Passwords) to registered mobile numbers, ensuring the authenticity of the provided information.
- OCR integration: The application utilizes Tesseract, a popular OCR library, to extract text from scanned documents accurately. This enables automatic population of customer details into the system, reducing manual data entry.
- Barcode decoding: KYConnect leverages the Pyzbar library to decode barcodes present on identification documents swiftly. This facilitates easy and error-free retrieval of critical information from the documents.
- Face verification: DeepFace, a Python library, is integrated into KYConnect for face verification. This ensures that the customer's face matches the photo on their identification document, adding an additional layer of security.
- Confirmation email:The confirmation email feature in KYConnect is implemented using the Nodemailer library, a popular Node.js module for sending emails. Nodemailer provides a simple and efficient way to send automated emails, ensuring reliable delivery and seamless communication with customers.

![4](https://github.com/Kaustubh1504/KYConnect/assets/122547394/458e0fe8-3e8a-4b7c-b872-c7a6f979fcba)
![3](https://github.com/Kaustubh1504/KYConnect/assets/122547394/8a05ad16-bc31-4393-b503-a8e0dac582e3)
![1](https://github.com/Kaustubh1504/KYConnect/assets/122547394/c1df03e0-57f8-4597-8b49-07bb8c0bb15a)
![2](https://github.com/Kaustubh1504/KYConnect/assets/122547394/1dd661e2-b667-424a-b3b2-e0e8a574fb15)
## Tech Stack

- Backend: MERN stack (MongoDB, Express.js, React.js, Node.js)
- OCR: Tesseract
- Barcode decoding: Pyzbar
- Face verification: DeepFace

## Installation and Setup

1. Clone the repository:

   ```
   git clone https://github.com/Kaustubh1504/KYConnect.git
   ```

2. Navigate to the project directory:

   ```
   cd KYConnect
   ```

3. Install the required dependencies for the backend:

   ```
   cd backend
   npm install
   ```

4. Start the backend server:

   ```
   npm start
   ```

5. Install the required dependencies for the frontend:

   ```
   cd ../frontend
   npm install
   ```

6. Start the frontend development server:

   ```
   npm start
   ```

7. Open your web browser and visit `http://localhost:3000` to access KYConnect.
