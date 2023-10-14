import { useState } from "react";
import "./App.scss";
import { useQuery } from "./graphql/index";

function App() {
  const [count, setCount] = useState(0);

  const authors = useQuery({})?.authors;

  return (
    <>
      <h1>Look at Networks Tab</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Whenever there's a state change, there seems to be a refetch on
          GraphQL.
        </p>
      </div>
      <p className="read-the-docs">
        {authors?.map((author) => (
          <div key={author.id}>{author.name}</div>
        ))}
      </p>
    </>
  );
}

export default App;
