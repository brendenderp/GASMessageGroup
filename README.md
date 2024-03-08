# GASMessageGroup


## Overview

This is a simple chat application developed entirely using Google Apps Script. The app provides a real-time chat experience where users can log in, send messages, and view messages from other users.

## Features

- **Real-time Messaging:** Experience seamless real-time messaging with other users.
- **User Authentication:** Log in with a username to participate in the chat.
- **Mobile and Desktop Styles:** The app adapts its UI based on the device type for a better user experience.
- **Loading Screen:** A loading screen is displayed during the initial loading of the app.
- **Message Timestamps:** Messages include timestamps for better context.
- **Message Scroll:** The page auto-scrolls to the latest messages for improved visibility.

## Technologies Used

- **Google Apps Script:** Backend scripting for Google Workspace applications.
- **HTML/CSS/JavaScript:** Frontend components and user interaction.
- **Google Sheets:** Storage for message data.

## Getting Started

Im sure a better way is possible but for now what Id suggest is. 
1. Create a new project in Google app scripts.
2. Add new HTML files with exact matching names as the files in this repo (Do not include README or LICENCE)
3. Copy paste the contents of each repo file to its matching.
4. Deploy as test deployment.


## Usage

1. Access the app by opening the link provided once you deploy
2. Log in with a unique username.
3. Send messages and view messages from other users in real-time.

## Issues
* Currently theres no user verification. I didnt want to implement passwords because I dont trust myself yet with storing that information and I want to learn more about data security before proceeding
* Spam is compltely possible and theres no prevention in place.
* Full page loading... WHen you first open up the chat ALL messages are loaded at once and this could be hundreds. 

## Contributing

Contributions are welcome! Please open an issue to discuss potential changes or fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to [Google Apps Script](https://developers.google.com/apps-script) for enabling server-side scripting within Google Workspace.
- Inspiration from real-time chat applications.

