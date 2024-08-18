import styled from "styled-components";

export const CharactersWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 16px;
  justify-content: space-between;
  margin: 8px 0px;
`;

export const CharacterImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

export const CharacterStyled = styled.div`
  width: 100%;
  height: 100%;
`;

export const TabsWrapperStyled = styled.div`
  display: flex;
  gap: 16px;
  padding: 8px;
  background-color: red;
`;
