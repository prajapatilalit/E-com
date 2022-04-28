import { v4 as uuid } from "uuid";
import jwt from "jsonwebtoken";
const jwtKey = "this is the my secret key";
let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const newUser = req.body;
  users.push({ ...newUser, id: uuid() });
  res.send("user added successfully");
};

export const loginUser = (req, res) => {
  if (req.body.password && req.body.email) {
    let user = users.find(
      (user) =>
        user.password === req.body.password && user.email === req.body.email
    );
    if (user) {
      jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          res.send("somthing went wrong");
        }
        res.send({ user, auth: token });
      });
    } else {
      res.send("user Not fount");
    }
  } else {
    res.send("user found");
  }
};
