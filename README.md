# Junior Developer Test task

## Technologies

This project is built using React. I used Visual Studio Code as the editor and Postman to test API data.

## Getting Started

### Install dependencies

```bash
cd ./signcoders-test-task
npm install
```

### Running the Application

```bash
cd ./signcoders-test-task
npm start
```

This will start the development server on port 3000. Open your browser and navigate to http://localhost:3000 to view app.

## Notes

Each component has its own index.js file. This allows importing components like this:
```bash
import UserTable from "../Components/UserTable";
```
instead of writing the folder and filename twice:
```bash
import UserTable from "../Components/UserTable/UserTable";
```

