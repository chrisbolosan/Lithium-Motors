import React from "react";
import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: "558BAD";
`;

export default function Loading() {
  return (
    <>
      <MoonLoader css={override} size={150} />
    </>
  );
}
