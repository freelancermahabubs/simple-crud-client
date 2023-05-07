import React from "react";
import { json, useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();
  // console.log(loadedUser);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updatedUser = { name, email };
    console.log(updatedUser);
    fetch(`http://localhost:5000/users/${loadedUser?._id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ updatedUser }),
    })
      .then((res) => json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User Update Successfully");
        }
      });
  };

  return (
    <div className="bg-red-300">
      <h3>Update information of {loadedUser.name} </h3>
      <form onSubmit={handleUpdate}>
        <input
          className="bg-yellow-700 mb-3"
          type="text"
          defaultValue={loadedUser?.name}
          name="name"
        />
        <br />
        <input
          className="bg-yellow-700 mb-3"
          type="email"
          defaultValue={loadedUser?.email}
          name="email"
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
