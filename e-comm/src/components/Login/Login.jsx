import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          onChange={(e) => setUser({ userName: e.target.value })}
          value={user.userName}
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setUser({ password: e.target.value })}
          value={user.password}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Login;
