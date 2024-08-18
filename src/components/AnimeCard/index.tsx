import { useState } from "react";
import { AnimeCardProps } from "./interface";
import {
  AnimeCardStyled,
  AnimeTitleStyled,
  ImageStyled,
  ImageWrapperStyled,
} from "./styled";
import Modal from "../Modal";
import { Link } from "react-router-dom";

const AnimeCard = (props: AnimeCardProps) => {
  const { title, image, rating, mal_id } = props;

  return (
    <AnimeCardStyled>
      <div>
        <Link to={`anime/${mal_id}`}>
          <ImageWrapperStyled>
            <ImageStyled src={image} />
          </ImageWrapperStyled>
        </Link>
        <AnimeTitleStyled>{title}</AnimeTitleStyled>
      </div>
    </AnimeCardStyled>
  );
};

export default AnimeCard;
