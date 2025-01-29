# Project Planning and Setup

**Project: Student Management System**

## Define Project Requirements
Document the requirements for the Student Management System. Example requirements include:

- Users should be able to add, edit, and delete student records.
- Each student record should include fields like ID, name, age, and course.
- The application should have a user-friendly interface with form validations.
- Implement routing and animations for a better user experience.

## Project Structure

```
src/
  app/
    components/
    services/
    models/
  assets/
    data/
      db.json
    fonts/
```

## Installing Necessary Modules

To install the required Angular modules, run the following command:

```bash
npm install @angular/forms @angular/router @angular/animations @angular/common/http
```

## Define REST API

To set up a mock REST API using json-server, follow these steps:

1. Install json-server globally:

    ```bash
    npm install -g json-server
    ```

2. Create a JSON file (`db.json`) in the `src/assets/data/` directory with initial data for students:

    ```json
    {
      "students": [
        {
          "id": 1,
          "name": "John Doe",
          "age": 20,
          "course": "Computer Science"
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "age": 22,
          "course": "Mathematics"
        }
      ]
    }
    ```

3. Start json-server with the following command:

    ```bash
    json-server --watch src/assets/data/db.json
    ```

4. Access the API at [http://localhost:3000][def]. The endpoints will be generated based on the structure of your JSON file.

[def]: http://localhost:3000

### Using Postman to Test Endpoints

1. **GET all students:**
  - Method: GET
  - URL: `http://localhost:3000/students`

2. **GET a single student by ID:**
  - Method: GET
  - URL: `http://localhost:3000/students/:id`

3. **POST a new student:**
  - Method: POST
  - URL: `http://localhost:3000/students`
  - Body: Raw JSON
  ```json
  {
    "name": "Alice Johnson",
    "age": 21,
    "course": "Physics"
  }
  ```

4. **PUT to update a student:**
  - Method: PUT
  - URL: `http://localhost:3000/students/:id`
  - Body: Raw JSON
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "age": 21,
    "course": "Computer Science"
  }
  ```

5. **DELETE a student:**
  - Method: DELETE
  - URL: `http://localhost:3000/students/:id`

### Example Endpoints

- **GET all students:**

  ```http
  GET http://localhost:3000/students
  ```

- **GET a single student by ID:**

  ```http
  GET http://localhost:3000/students/:id
  ```

- **POST a new student:**

  ```http
  POST http://localhost:3000/students
  ```

  **Body (JSON):**

  ```json
  {
    "name": "Alice Johnson",
    "age": 21,
    "course": "Physics"
  }
  ```

- **PUT to update a student:**

  ```http
  PUT http://localhost:3000/students/:id
  ```

  **Body (JSON):**

  ```json
  {
    "id": 1,
    "name": "John Doe",
    "age": 21,
    "course": "Computer Science"
  }
  ```

- **DELETE a student:**

  ```http
  DELETE http://localhost:3000/students/:id
  ```
    ```

## Running Angular and json-server Concurrently

First, install the concurrently package, which allows you to run multiple commands simultaneously:

```bash
npm install concurrently --save-dev
```

Next, update the `package.json` file to include the json-server command in the start script:

```json
"start": "concurrently \"ng serve\" \"json-server --watch src/assets/data/db.json\""
```

Finally, run the following command to start both the Angular application and json-server concurrently:

```bash
npm start
```
