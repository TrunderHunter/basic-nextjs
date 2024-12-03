import React from "react";

const ManageUserPage = () => {
  return (
    <div>
      <h1>Manage User</h1>
      <form>
        <div>
          <label>First Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ManageUserPage;
