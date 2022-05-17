import React, { useState, useEffect } from "react";

const axios = require("axios").default;

function Books() {
  const [todos, setTodos] = useState([]);
  async function getUser() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      setTodos(response.data);
      //   console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  if (todos) {
    console.log(todos);
    //     todos.map((todo) => {
    //       console.log(todo.id, todo.title);
    //     });
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {/* {todos.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))} */}

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">USER ID</th>
            <th scope="col">TITLE</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item) => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
