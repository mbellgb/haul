import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  array,
  number,
  boolean,
} from "@storybook/addon-knobs/react";
import Card, { DocumentCard, TextCard, ListCard, StashCard } from ".";

const contexts = ["work", "work/client_company"];
const defaultStories = storiesOf("Card/Card", module);

defaultStories.addDecorator(withKnobs);

defaultStories.add("default", () => (
  <Card
    title={text("Title", "Client Company Invoice - September 2018")}
    contexts={array("Contexts", contexts)}
    progress={number("Progress", 5)}
    progressMax={number("Progress Max", 10)}
    background={text(
      "Background",
      "linear-gradient(45deg,var(--color-red),var(--color-orange))",
    )}
    backgroundShade={boolean("Background Shade", false)}
  />
));

defaultStories.add("with image background", () => (
  <Card
    title={text("Title", "Client Company Invoice - September 2018")}
    contexts={array("Contexts", contexts)}
    progress={number("Progress", 5)}
    progressMax={number("Progress Max", 10)}
    background={text("Background", "url(https://unsplash.it/1920/1080?random)")}
    backgroundShade={boolean("Background Shade", true)}
  />
));

const documentStories = storiesOf("Card/Document Card", module);
documentStories.addDecorator(withKnobs);
documentStories.add("default", () => (
  <DocumentCard
    title={text("Title", "Client Company Invoice - September 2018")}
    contexts={array("Contexts", contexts)}
    background={text(
      "Background",
      "linear-gradient(45deg,var(--color-blue),var(--color-lightblue))",
    )}
    backgroundShade={boolean("Background Shade", false)}
  />
));

const textStories = storiesOf("Card/Text Card", module);
textStories.addDecorator(withKnobs);
textStories.add("default", () => (
  <TextCard
    title={text("Title", "Client Company Invoice - September 2018")}
    contexts={array("Contexts", contexts)}
    background={text(
      "Background",
      "linear-gradient(45deg,var(--color-orange),var(--color-yellow))",
    )}
    backgroundShade={boolean("Background Shade", false)}
  />
));

const listStories = storiesOf("Card/List Card", module);
listStories.addDecorator(withKnobs);
listStories.add("default", () => (
  <ListCard
    title={text("Title", "Shopping List")}
    contexts={array("Contexts", contexts)}
    background={text(
      "Background",
      "linear-gradient(45deg,var(--color-blue),var(--color-purple))",
    )}
    backgroundShade={boolean("Background Shade", false)}
    progress={number("Progress", 5)}
    progressMax={number("Progress Max", 10)}
  />
));

const stashStories = storiesOf("Card/Stash Card", module);
stashStories.addDecorator(withKnobs);
stashStories.add("default", () => (
  <StashCard
    title={text("Title", "Holiday Photos 2018")}
    contexts={array("Contexts", contexts)}
    background={text(
      "Background",
      "linear-gradient(45deg,var(--color-orange),var(--color-purple))",
    )}
    backgroundShade={boolean("Background Shade", false)}
  />
));
