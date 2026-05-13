# Booking-Site

A full-stack apartment booking marketplace. The project demonstrates a modern approach to web development, combining a native frontend experience with a containerized backend and a relational database.

## Key Technical Features
*   **Frontend:** Built with **HTML5**, **CSS3**, and **Vanilla JavaScript** to ensure high performance and zero external dependencies.
*   **Backend:** A RESTful API built with **Node.js**.
*   **Database:** Structured data management using **SQL**, with an initialization script provided in the `/database` directory.
*   **Infrastructure & DevOps:** The application is fully containerized using **Docker**. It includes a `Dockerfile` for the backend and a `docker-compose.yml` to orchestrate the entire services stack (app + database) with a single command.

## Project Structure
*   `/backend` - Node.js server source code and Docker configuration.
*   `/database` - SQL schema and data initialization scripts.
*   `index.html` & `script.js` - Core frontend logic and interface.

## How to Run
The easiest way to start the project is using Docker:
1. Navigate to the backend directory.
2. Run `docker-compose up`.