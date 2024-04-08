# Todo-Angular-app

This is a simple todo application built with Angular. It allows users to manage tasks by adding, editing, deleting, and marking tasks as completed.

## Features

- Display a list of tasks with title, description, and status.
- Add new tasks with a form.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed.
- Basic styling for visual appeal.
- Routing for navigation between task list and task details/editing view.
- Service integration for managing tasks with data storage and retrieval.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation
### HTTP

1. Clone the repository:

   git clone https://github.com/VinodKumarDV/Todo-Angular-app.git

### SSH
    git@github.com:VinodKumarDV/Todo-Angular-app.git

2. Navigate to the project directory:
    cd Todo-Angular-app

3. Install dependencies:

#### NPM
    npm i / npm install

#### Yarn
    yarn install

4. Start the development server
##### NPM
    npm start / ng serve

##### Yarn
    yarn start/ ng serve

Open your browser and visit http://localhost:4200 to view the application.

###### Folder Structure

todo-app/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── task-form
│   │   │   │   ├── task-form.component.html
│   │   │   │   ├── task-form.component.ts
│   │   │   │   └── ...
│   │   │   ├── task-list
│   │   │   │   ├── task-list.component.html
│   │   │   │   ├── task-list.component.ts
│   │   │   │   └── ...
│   │   ├── services/
│   │   │   └──  task.service.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/
│   ├── main.ts/
│   ├── index.html
│   └──  styles.css
├── package-lock.json
├── package.json
├── angular.json
├── README.md
├── tailwind.config.js
└── ...
