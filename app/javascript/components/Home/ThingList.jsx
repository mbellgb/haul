import React, { useState, useEffect } from "react";
import CardDeck from "../Layout/CardDeck";
import Card from "../Layout/Card";

const ThingItem = ({ name = "", updatedAt = null, ...props }) => {
  const updated = new Date(Date.parse(updatedAt));
  let subtitle = "";
  if (updated !== null) {
    console.log(updated);
    subtitle = updated.toISOString();
  }
  return <Card title={name} subtitle={subtitle} {...props} />;
};

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
        {things.map((thing, i) => (
          <ThingItem {...thing} transition={{ delay: i * 0.1 }} key={i} />
        ))}
      </CardDeck>
    </div>
  );
};
