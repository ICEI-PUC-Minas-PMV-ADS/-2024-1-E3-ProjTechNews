import React from "react";
import { EmptyListContainer, EmptyListMessage } from "./styles";

type Props = {
  message: string;
};

export function ListEmpty({ message }: Props) {
  return (
    <EmptyListContainer>
      <EmptyListMessage>{message}</EmptyListMessage>
    </EmptyListContainer>
  );
}
