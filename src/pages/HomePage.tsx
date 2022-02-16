import { Link } from "react-router-dom";
import styled from "styled-components";
import { NewCardPage } from ".";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  height: 100vh;
`;

const StyledLink = styled(Link)`
text-decoration: none;

`;

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
height: 32px;
background: pink;
border-radius: 6px;
border: 1px solid green;
color: red;

&:hover{background: #ffc0fc;}
&:active{background: #c0ffecfa;}
`;

enum ROUTES  {
    Home = "home",
    NewCard = "cards/new"
}

export function HomePage() {
    return (<Wrapper>
    <Title>
      Welcome to Vocab Cards!
    </Title>
    <Button >
    <StyledLink to={ROUTES.NewCard}>Add new card </StyledLink> 
    </Button>
  </Wrapper>);


}