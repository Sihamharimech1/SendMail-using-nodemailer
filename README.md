# SendMail-using-nodemailer
# Email Sender Service

This is a simple Node.js application using Express and Nodemailer to send emails via a RESTful API.

## Features

- Send emails through a simple web interface.
- RESTful API to send emails programmatically.
- Uses `.env` file for environment configuration to keep sensitive information secure.

## Prerequisites

Before running this project, make sure you have Node.js and npm (Node Package Manager) installed on your system.

## Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/email-sender-service.git
cd email-sender-service
npm install
Create a .env file in the root directory with the following content, replacing the values with your actual email credentials:

# .env file
GMAIL_USER=yourEmail@gmail.com
GMAIL_PASS=yourAppPassword

Note: Never commit this file or share your credentials publicly.

Usage
To start the server, run:

npm start

By default, the server will start on port 3000. You can visit http://localhost:3000 in your web browser to send emails using the provided form.

API Endpoints
POST /send

Sends an email to the specified recipient.
Request body should include to, subject, and text fields.
Contributing
Contributions are welcome. Please open an issue first to discuss what you would like to change or add.
