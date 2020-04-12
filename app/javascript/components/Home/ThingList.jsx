import React, { useState, useEffect } from "react";

const ThingItem = ({ name = "", content = "" }) => (
  <div>
    <h3>{name}</h3>
    <p>{content}</p>
  </div>
);

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [things, setThings] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("/api/v1/things")
      .then(res => res.json())
      .then(things => {
        setIsLoading(false);
        setThings(things);
      })
      .catch(err => setError(err));
  }, [isLoading]);
  return isLoading ? (
    <div>
      <p>Loading...</p>
    </div>
  ) : (
    <div>
      {error && <p>{error}</p>}
      {things.map(thing => (
        <ThingItem {...thing} />
      ))}
    </div>
  );
};
