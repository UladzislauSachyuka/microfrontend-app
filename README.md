# Micro Frontend App
This project demonstrates the use of micro frontends in an app built using Vite, React and TypeScript with the help of Module Federation. It consists of independent applications that come together to provide functionality such as displaying a list of users and weather information.

## Project Structure

- **main-app**: Displays a list of users and weather information.
- **user-list**: Displays a list of users.
- **weather**: Displays weather information using OpenWeather API.
- **types**: Declared modules for shared React components.

## Features

- Micro Frontend architecture with Module Federation
- Integration with OpenWeather API for weather data

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/UladzislauSachyuka/microfrontend-app.git
   or
   git clone git@github.com:UladzislauSachyuka/microfrontend-app.git
   ```

2. Install dependencies, build and run the individual apps:
  - UserList (remote application)
     ```bash
     cd user-list
     yarn
     yarn build
     yarn preview
     ```
  - Weather (remote application)
    ```bash
    cd weather
    yarn
    yarn build
    yarn preview
    ```
  - MainApp (host application)
    ```bash
    cd main-app
    yarn
    yarn build
    yarn preview
    ```
  
3. Visit http://localhost:3000 to see the host application in action.
