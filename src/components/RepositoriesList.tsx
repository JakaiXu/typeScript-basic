import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");

  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state: any) => state.repositories
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search..."
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          value={term}
        />
        <button type="button">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error &&
        !loading &&
        data.map((name: string) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
