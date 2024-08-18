import styled from "styled-components";

export const HomeStyled = styled.div`
  /* padding: 8px; */
`;

export const AnimeDataWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 16px;
  justify-content: space-between;
  margin: 8px 0px;
`;

export const ParallaxImageStyled = styled.div`
  position: absolute;
  right: 0;
  width: 400px;
  mask-image: linear-gradient(
    270deg,
    transparent 0,
    rgb(32, 31, 49) 30%,
    rgb(32, 31, 49) 70%,
    transparent
  );
  width: 300px;
`;

export const ParallaxImage = styled.img`
  width: inherit;
  object-fit: cover;
  aspect-ratio: 2 / 3;
`;
