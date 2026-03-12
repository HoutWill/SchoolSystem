# SchoolSystem

SchoolSystem is a mobile application built using React Native and Expo. The app provides functionalities for managing student profiles, grades, assignments, and more. It's designed to work across Android, iOS, and web platforms, making it versatile for educational environments.
------------------------------------------------------------------
```
LOGIN 

TEACHER username = teacher , password =123 
STUDENT username = Hout , password =123456
STUDENT username = sal , password =123456
STUDENT username = long , password =123456
```

------------------------------------------------------------------
## Features

- **Student Dashboard**: Display student information like grades, attendance, and assignments.
- **Profile Management**: Students can manage their personal information, including guardian details.
- **Homework Tracking**: Teachers can assign homework, and students can mark tasks as done.
- **Document Picker**: Students and teachers can upload and manage documents using the Expo Document Picker.
- **Cross-Platform**: Supports Android, iOS, and Web using Expo.

## Prerequisites

To run this project locally, ensure that the following tools are installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node package manager) or [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (for running React Native apps)

Make sure you also have Android Studio or Xcode set up for Android/iOS development.

## Installation

Follow these steps to get the project running locally:

### Step 1: Clone the repository

```bash
git clone https://github.com/HoutWill/SchoolSystem.git
cd SchoolSystem
```

Step 2: Install Dependencies

Install the required Node.js dependencies using npm or yarn:
```
npm install

```
# or
```
yarn install
```
Step 3: Run the project

You can now start the project on your preferred platform.

To start the app on your Android device/emulator:
```
npm run android
```
To start the app on your iOS device/simulator:
```
npm run ios
```
To run the app in the web browser:
```
npm run web
```
Step 4: Development Mode

To run the app in development mode:
```
npm start
```
This will start the Expo development server, and you can scan the QR code with the Expo Go app on your phone to test the app.

Folder Structure

Here is a breakdown of the project folder structure:
```
/assets            # Contains static resources like images, icons, etc.
/components        # Reusable UI components (e.g., buttons, headers)
/screens           # Main app screens (e.g., Dashboard, Profile, Results)
/navigation        # Navigation logic (e.g., tab navigator, stack navigator)
/utils             # Utility functions (e.g., validation, API helpers)
/config            # App configuration files (e.g., environment variables)
Dependencies
```
The project relies on the following libraries:

expo: Core Expo SDK for building and running the app.

expo-router: Simplified routing for the app.

expo-constants: Provides system constants like app version, device info, etc.

react-native-gesture-handler: Gesture handling for touch interactions.

react-native-reanimated: Advanced animations in React Native.

react-native-mmkv-storage: High-performance storage solution for React Native.

expo-document-picker: Pick documents from the device file system.

expo-splash-screen: Manage the app’s splash screen.

expo-status-bar: Handle the app’s status bar appearance.

react-native-tab-view: Tab view navigation for the app.
```
Full Dependency List:
{
  "@react-native-async-storage/async-storage": "2.2.0",
  "expo": "~54.0.32",
  "expo-constants": "~18.0.13",
  "expo-document-picker": "~14.0.8",
  "expo-linking": "~8.0.11",
  "expo-router": "~6.0.23",
  "expo-sharing": "~14.0.8",
  "expo-splash-screen": "~31.0.13",
  "expo-status-bar": "~3.0.9",
  "expo-system-ui": "~6.0.9",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "react-native-gesture-handler": "~2.28.0",
  "react-native-mmkv-storage": "^12.0.1",
  "react-native-pager-view": "6.9.1",
  "react-native-reanimated": "^4.2.2",
  "react-native-safe-area-context": "~5.6.0",
  "react-native-screens": "~4.16.0",
  "react-native-tab-view": "^4.2.2",
  "react-native-worklets": "^0.7.4"
}
```
Contributing

We welcome contributions! If you'd like to contribute, please follow these steps:

Fork the repo

Create your feature branch (git checkout -b feature/your-feature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/your-feature)

Open a Pull Request

Make sure to follow proper coding standards and write tests for your features/bug fixes.

License

This project is open-source and available under the MIT License. See the LICENSE
 file for more information.

Troubleshooting

If you encounter issues, try the following:

Ensure all dependencies are installed: Run npm install or yarn install.

Clear the cache: Sometimes, issues arise due to cached files. Run expo start -c to clear the cache.

Check Expo and React Native version compatibility: Make sure the versions of expo and react-native are compatible.

For further assistance, feel free to open an issue or reach out!


### Summary:
```
- **Setup instructions**: Clone the repo, install dependencies, and run the app on your desired platform (Android, iOS, or Web).
- **Dependencies**: List of dependencies required for the app, like `expo`, `react-native`, and others.
- **Folder structure**: A brief overview of the project directory structure.
- **Contributing**: How to contribute to the project.
```



