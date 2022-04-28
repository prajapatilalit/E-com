import React, { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
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
          type="emai"
          name="email"
          onChange={(e) => setUser({ email: e.target.value })}
          value={user.email}
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

export default SignUp;
