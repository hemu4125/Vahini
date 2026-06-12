import React from "react";

function LoginPage() {
  return (
    <div>
      <h2>Login Page</h2>

      <form>
        <label>Email:</label>
        <br />
        <input type="email" placeholder="Enter Email" />
        <br />
        <br />

        <label>Password:</label>
        <br />
        <input type="password" placeholder="Enter Password" />
        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;