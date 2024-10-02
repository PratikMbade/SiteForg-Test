import React from "react";
import { string } from "zod";
import { Callout } from "nextra/components";

const HighLightedPoints = ({
  description,
  emoji,
}: {
  description: string;
  emoji: string;
}) => {
  return (
    <div>
      <Callout emoji={emoji}>
      {description}
      </Callout>
    </div>
  );
};

export default HighLightedPoints;
