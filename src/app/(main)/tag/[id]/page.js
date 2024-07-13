import React from "react";
import { TagData } from "./feed";

export default function page({ params }) {
  const tag = params.id;
  return (
    <div>
      <TagData tag={tag} />
    </div>
  );
}
