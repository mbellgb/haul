import React, { useState, useEffect } from "react";
import CardDeck from "../Layout/CardDeck";
import Card from "../Layout/Card";

const ThingItem = ({ name = "", content = "" }) => <Card title={name} />;

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
      <CardDeck>
        {things.map(thing => (
          <ThingItem {...thing} />
        ))}
      </CardDeck>
    </div>
  );
};
