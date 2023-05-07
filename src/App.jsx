import "./App.css";

function App() {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("User Add SuccessFully");
          form.reset(data);
        }
      });
  };

  return (
    <div className="bg-teal-600">
      <h1>Simple Crud</h1>
      <form onSubmit={handleAddUser}>
        <input className="bg-slate-400" type="text" name="name" />
        <br />
        <input className="bg-slate-400 mt-3" type="email" name="email" />
        <br />
        <input type="submit" value="Add User" />
        <br />
      </form>
    </div>
  );
}

export default App;
