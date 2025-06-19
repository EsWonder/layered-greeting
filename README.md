# 🧱 Layered Architecture - Multi-Layer Application Example

This project demonstrates a basic **Layered Architecture** using **Node.js**. The application is divided into separate layers:

- **Presentation Layer**: receives and shows output.
- **Service Layer**: contains business logic.
- **Data Layer**: simulates data retrieval (e.g., database).


---

## 🧠 How It Works

- The **data layer** holds the mock user data.
- The **service layer** processes that data and builds a message.
- The **presentation layer** displays the message to the user.
- The **app.js** file calls the presentation layer to start the flow.

---

## 💻 Run the App

Open a terminal and execute:

```bash
node app.js

```
Expected Output:

```bash
Hola, Sebastian. Tienes 24 años.
```

## 📝 Summary
This project demonstrates the Layered Architecture pattern, where responsibilities are clearly separated.
It's scalable and clean, ideal for applications that grow in complexity over time.

## Link the DockerHub

```bash
https://hub.docker.com/r/eswonder/layered-greeting
```
