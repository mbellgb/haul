import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs/react";
import CardDeck from ".";
import Card from "../Card";

const stories = storiesOf("Card", module);
stories.addDecorator(withKnobs);
stories.add("Card Deck", () => (
  <>
    <CardDeck>
      {Array.from({ length: number("Cards", 5) }, (_, i) => (
        <Card
          key={i}
          title={`Test title ${i + 1}`}
          transition={{ delay: i * 0.1 }}
        />
      ))}
    </CardDeck>
    <h1>Other stuff</h1>
  </>
));
