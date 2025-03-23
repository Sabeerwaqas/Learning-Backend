// import dotenv from "dotenv";
// import connectDB from "./db/index.js";
import app from "./app.js";

// dotenv.config();

// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT || 5000, () => {
//       console.log(`Server is running on PORT ${process.env.PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log("MongoDB Connection Failed!!", error);
//   });

let userData = [{ id: Date.now(), username: "Sabeer", position: "Developer" }];

// -----> Get all users <----- \\

app.get("/", (req, res) => {
  res.send(userData);
});

// -----> Add user <----- \\

app.post("/add-user", (req, res) => {
  let data = {
    id: Date.now(),
    username: req?.body?.username,
    position: req?.body?.position,
  };
  try {
    userData.push(data);
    res.send(200);
  } catch (error) {
    console.log(error);
  }
});

// app.put("/update-user", (req, res) => {
//   const { id, username, position } = req?.body;

//   const userId = userData?.filter((item) => item?.id === id);

//   userData[userId].username = username;
//   userData[userId].position = position;
// });

app.put("/update-user", (req, res) => {
  const { id, username, position } = req.body;

  const userID = userData.findIndex((item) => item.id === id);

  if (userID === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  userData[userID].username = username;
  userData[userID].position = position;

  return res.json({
    message: "User updated successfully",
    updatedUser: userData[userID],
  });
});

app.delete("/delete-user", (req, res) => {
  const { id } = req.body;

  const userID = userData.findIndex((item) => item?.id === id);

  userData.splice(userID, 1);

  return res.json({ message: "User deleted successfully." });
});

app.listen(3000, () => {
  console.log(`App is running on PORT 3000`);
});
