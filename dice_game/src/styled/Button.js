import styled from "styled-components";
export const Button = styled.button`
  min-width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  color: #fff;
  border: none;
  float: right;
  font-size: 16px;
  border: 1px solid transparent; // yha hamne border isliye di hai kyonki vo hover karne par upar niche ho rha tha
  transition: 0.4s background ease-in;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: #fff;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButtonTwo = styled(Button)`
  min-width: 140px;
`;

export const OutlineButtonOne = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  min-width: 140px;
  &:hover {
    color: white;
    background-color: black;
    border: 1px solid transparent;
    /* transition: 0.3s background ease-in; */
  }
`;
