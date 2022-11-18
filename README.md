# Warehouse

Frontend assignment application

## Installation

Using package manager of your choice (Node version: LTS)

```bash
#from project root
yarn install
cd server/
yarn install

```

## Usage

#### Backend

```bash
#from project root
cd server/
node server.js
```

#### Frontend

```bash
#from project root
yarn dev
```

#### Application

- From any web browser with javascript enabled: http://localhost:3000
- email: admin, username: admin

## Libraries

#### Development

- Vite: Frontend building tool with very handy features for production (e.g hmr)
- prettier: Code styling
- eslint: Code analysis for identifying issues
- husky: Runs `eslint` and `prettier` before every commit to ensure code correctness for shared code
- typescript

#### Regular

- axios: my HTTP client of choice
- bootstrap: nice components
- bootstrap icons: picked a random icon library
- react-router: routing
- redux-toolkit: state manager, simpler setup than `redux`

## Implementation decisions

- I chose to create a simple mock backend because I felt it was out of scope for this assignment. However I did include a jwt token which is handled inside the application. It is used to verify that a user is signed in and, in a full scale application, would be sent as a header with requests for protected routes
- The server folder is placed inside the project's main folder for convenience, they do not interact in any way besides the api calls. Ideally it would be elsewhere to avoid confusion
- Usage of `typescript` to showcase knowledge of it
- `prettier`, `eslint` and `typescript` configurations were based on preference
- Folder/project structure and naming conventions of files is based on my previous job's standards
- Usage of `bootstrap` to showcase knowledge of use of component libraries
- For the above reason, In some cases, there are inconsistencies in the methods used to achieve a specific effect for showcasing reasons. For example I add custom classes and styling to bootstrap components to show usage of css. In an app I would rarely do this and instead make use of bootstrap props (e.g `variant`, `type`)
- Due to hardware restrains, I couldn't test the application on different monitor sizes

## Possible improvements

- More attention to styling
- Fleshed out main component to showcase crud operations on backend data
- `jest` and `react-testing-library` for unit tests. `Cypress` for e2e
- mobile responsive design
