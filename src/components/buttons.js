import styled from "styled-components";

const Button = styled.button`
  border-radius: 3px;
  font: var(--label-regular);
  padding: 10px 0;
  width: 100%;
`;

const PrimaryButton = styled(Button)`
  background: var(--btn-primary-bg);
  color: rgba(var(--grey-50), 1);
`;

const SecondaryButton = styled(Button)`
  background: rgba(var(--gray-50), 1);
  border: var(--border-secondary);
  color: rgba(var(--gray-900), 1);
`;

export { PrimaryButton, SecondaryButton };
