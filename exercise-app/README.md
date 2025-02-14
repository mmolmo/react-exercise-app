# Exercise Tracking App

This project displays a workout tracking application using Create React App, allowing users to track both repetition-based exercises (like push-ups) and duration-based exercises (like running or planks).

# Features
- Clean, responsive user interface with a modern design
- Two types of exercise tracking:
  - Repetition counting for exercises like push-ups and jumping jacks
  - Duration timing for exercises like running and planks
- Interactive exercise cards with background images and type indicators
- Real-time stopwatch functionality with hours, minutes, and seconds display
- Responsive design that works on both desktop and mobile devices
- Accessibility features including reduced motion support and proper focus management
- Custom styling with CSS variables for easy theme modification

# Installing Dependencies
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Run `npm install` to install all dependencies.

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Project Structure
```
/src
 ├── /components          # React components
 │   ├── MainMenuScreen   # Main menu with exercise selection
 │   ├── DurationScreen   # Timer for duration-based exercises
 │   └── RepetitionScreen # Counter for repetition-based exercises
 ├── /img                 # Material icons and assets
 └── App.js               # Main application component
```

## Styling
The application uses a custom CSS design system with:
- CSS variables for consistent theming
- Responsive design breakpoints
- Google Fonts integration (Inter, Roboto Mono)
- Material Design icons
- CSS transitions and hover effects
- Accessibility considerations including reduced motion support

## Credits
- Images: [Unsplash](https://unsplash.com) - Exercise background images
- Icons: Google Material Icons
- Fonts: Google Fonts (Inter, Roboto Mono)

## Browser Support
The application is built using modern CSS features and React, and supports:
- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- Responsive layouts for mobile and desktop devices
- Reduced motion preferences for accessibility
