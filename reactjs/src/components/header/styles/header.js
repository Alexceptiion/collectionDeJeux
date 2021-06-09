
import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
display: flex;
flex-direction: column;
background: url(${({ src }) => (src ? `../images/misc/${src}.jpg` :
    '../images/misc/library.jpg')}) top left / cover no-repeat;
`;

export const Frame = styled.div``;

export const Container = styled.div`
display: flex;
margin 0 56px;
height: 194px;
padding: 18px 0;
justify-content: space-between;
align-items: center;

a {
  display: flex; 
}

@media (max-width: 1000px) {
  margin: 0 30px;
}
`;

export const Logo = styled.img`
height: 250px;
width: 308px;
margin-right: 40px;

@media (min-width: 1449px) {
  height: 263px;
  width: 357px;
}
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #fe5700;
  width: 104px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #cb4500;
  }
`;
