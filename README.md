# BOT ARMY MANAGER APPLICATION

- The Bot Army Manager is a React-based application that allows users to manage a collection of bots by recruiting them into their army, viewing their stats.

- The app is backed by a JSON server and demonstrates concepts like state management, conditional rendering, and data fetching in React.

## Table of contents

1. Installation
2. Usage
3. Features
4. Code Overview
5. Technologies Used
6. License

## Installation

To run this app locally: 
- Clone this repository
- Navigate to the project folder
- Install the dependencies using `npm install`
- Start the server by running `npm start`

## Usage

The app is able to do the following:

1. **`Displays a list of bot cards`**: Data fetched from the json server is displayed in form of cards
2. **`Release bots from bot collection permanently`**: For each bot card in bot collection there is a delete button which deletes the bot from both the front and back-end
3. **`Pop-up section`**: Whenever the user clicks on the bot cards, a pop up containing stats of the selected bot shows up
4. **`Adds bots to "Your army"`**: By clicking the button recruit, you are able to add bot from bot collection and add them to your army
5. **`Release bots to "Your army"`**: Once a bot has served in your army, you can release them from duty by using the release button
6. **`Search functionality`**: In bot collection, you can search for bot by selecting a specific class
7. **`Sort functionality`**: In bot collection, you can sort the displayed bots by either their health, armor or damage.
8. **`Client Side Routing`**: The navbar has two page links, which can be used to navigate to you army or the bot collection.

## Features

1. **`Release bots from bot collection permanently`**: For each bot card in bot collection there is a delete button which deletes the bot from both the front and back-end
2. **`Adds bots to "Your army"`**: By clicking the button recruit, you are able to add bot from bot collection and add them to your army
3. **`Release bots to "Your army"`**: Once a bot has served in your army, you can release them from duty by using the release button
4. **`Search functionality`**: In bot collection, you can search for bot by selecting a specific class
5. **`Sort functionality`**: In bot collection, you can sort the displayed bots by either their health, armor or damage.
6. **`One Bot per Class`**: You can only choose one bot per class from bot collection to join your army
7. **`Alerts the user incase of wrong inputs`**: An alert is displayed when the user trys to add an already existing bot into their army, or when they try to add a bot of an already existing class
8. **`Client Side Routing`**: The application contains routes for different pages: bot collection and your army. The user is able to navigate to the two routes via the NavLink provided in the NavBar. 

## Code Overview

### Component Structure

App --->NavBar
    --->Outlet   ---> YourBotArmy
                 ---> BotCollection ---> Stats
                                    ---> RobotCard
                                    ---> SortBar
                                    ---> FilterBar

### App Component

- The App component serves as the main entry point and state manager for the application.
- Its responsibilities are:

**State Variables**
1. `robots`: Holds the list of all bots fetched from the server.
2. `recruits`: Stores bots currently in your army.
5. `selectedClass`: Tracks the currently selected class for filtering.
6. `sortBy`: Manages the sorting order of bots in the collection.

**Key Functions**
1.`useEffect`: Fetches the list of bots from the server. The dependency on robots is used to keep the state updated with the server's data.
2. `handleRecruit`: Adds a bot to the army after validating constraints.
3. `handleReleaseRecruit`: Removes a bot from the army.
4. `releaseFromDuty`: Permanently deletes a bot from the collection (both state and server).

### Components Brief Description

#### App

- Manages the application's global state.
- Renders the main UI components and has its route children

#### YourBotArmy

- Displays the recruited bots.
- Handles releasing bots from the army by clicking on the bot.

#### BotCollection

- Displays the list of all available bots.
- Allows recruiting bots via recruit button.
- Supports sorting and filtering of bots.

#### Stats

- Displays detailed information about a selected bot.
- Provides the ability to recruit the bot into the army.

## Technologies Used

- `React` - JavaScript library for building user interfaces.
- `React Hooks` - Used for managing state (useState) and side effects.
- `HTML` 
- `CSS`
- `JavaScript`

## License

This project is licensed under the MIT License