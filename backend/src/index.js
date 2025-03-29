import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";

// Import Routers
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js";
import projectRoutes from "./routes/project.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import notificationRoutes from "./routes/notification.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

// Connect Database
connectDB();

// Base Route
app.get("/", (req, res) => {
    res.send("Task Management API is running...");
});

// Use Routers
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/notifications", notificationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
