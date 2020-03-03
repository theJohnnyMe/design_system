import React from "react";
import Input from "./../components/input.js";
import Box from "./../components/box.js";
import { H2 } from "./../components/typography.js";
import { PrimaryButton } from "./../components/buttons.js";

const LayoutOne = () => {
  return (
    <div className="u-p3">
      <Box>
        <H2 className="u-pb2">Account email</H2>
        <Input
          marginTop
          labelText="Your email"
          disabled
          type="email"
          value="nikola.mirkovic.johnny@gmail.com"
        />
        <H2 className="u-mt3">Account information</H2>
        <Input marginTop marginBottom labelText="Your first name" type="text" />
        <Input marginTop marginBottom labelText="Your last name" type="text" />
        <PrimaryButton>Update</PrimaryButton>
      </Box>
    </div>
  );
};

export default LayoutOne;
