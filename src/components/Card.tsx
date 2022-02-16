import { Children, FC, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.button`
    height: 150px;
    background: coral;

`

type Props ={
children: ReactNode
}


export const Card:FC<Props> = ({children}) => {
 console.log("Hi");
  return   (<Container>Hi {children}</Container>)
}