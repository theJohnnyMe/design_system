import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: ${props => (props.marginBottom ? "15px" : "0")};
  margin-top: ${props => (props.marginTop ? "5px" : "0")};
`;

const LabelSC = styled.label`
  color: rgba(var(--grey-700), 1);
  font: var(--caption);
`;

const InputSC = styled.input`
  border: var(--border-secondary);
  border-radius: 3px;
  color: rgba(var(--grey-900), 1);
  font: var(--label-regular);
  padding: 10px 15px;
  outline: none;
  width: 100%;
  &:disabled {
    color: rgba(var(--grey-300), 1);
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Input = ({
  labelText,
  placeholder,
  type,
  value,
  onChange,
  disabled = false,
  marginBottom = false,
  marginTop = false
}) => {
  return (
    <InputWrapper marginBottom={marginBottom} marginTop={marginTop}>
      <LabelSC>{labelText}</LabelSC>
      <InputSC
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default Input;
