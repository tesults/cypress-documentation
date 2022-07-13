import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { IconProps } from "./types";

// Note: some markdown links render statically when beside a component and NOT in a section header or table, etc. For these we wrap the anchor in this component for reusability
export default function Icon({ name, color, inline, url, callout, lesson, rwa }) {
  const iconName = name === "github" ? ["fab", "github"] : name;
  const space = inline ? '.25rem' : '0.5rem'

  let content;

  if (callout) {
    content = callout;
  } else if (lesson)  {
    content = 'Get the completed code for this lesson on GitHub';
  } else if (rwa) {
    content = 'Real World App (RWA)'
    url = 'https://github.com/cypress-io/cypress-realworld-app'
  } else {
    content = url;
  }

  return (
    <>
      <FontAwesomeIcon icon={iconName} color={color} />
      <a href={url} style={{ marginLeft: space }}>
        { content }
      </a>
    </>
  )
}
