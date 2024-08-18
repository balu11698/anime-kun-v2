import { useRef, useState } from "react";
import AnimeCard from "../../components/AnimeCard/index.tsx";
import Modal from "../../components/Modal/index.tsx";
import { useGetAnimeSeasonsNowQuery } from "../../data/services/anime";
import Drawer from "../../components/Drawer/index.tsx";
import { Link, useNavigate } from "react-router-dom";
import {
  AnimeDataWrapperStyled,
  HomeStyled,
  ParallaxImage,
  ParallaxImageStyled,
} from "./style.ts";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

const Seasons = () => {
  const [page, setPage] = useState(1);
  const { isLoading, data } = useGetAnimeSeasonsNowQuery(page);

  const { data: animeData } = data ?? {};
  const [visible, setVisible] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const parallaxRef = useRef<IParallax>(null);

  const scroll = (to: number) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(to);
    }
  };

  return (
    <HomeStyled>
      <Parallax
        ref={parallaxRef}
        pages={2}
        horizontal
        style={{ overflow: "hidden" }}
      >
        <ParallaxLayer offset={0} speed={0.2}>
          {animeData?.[0].title_english}
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6} onClick={() => scroll(1)}>
          <ParallaxImageStyled>
            <ParallaxImage src={animeData?.[0].images.webp.large_image_url} />
          </ParallaxImageStyled>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          {animeData?.[1].title_english}
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.6} onClick={() => scroll(0)}>
          <ParallaxImageStyled>
            <ParallaxImage src={animeData?.[1].images.jpg.large_image_url} />
          </ParallaxImageStyled>
        </ParallaxLayer>
      </Parallax>
      {/* <AnimeDataWrapperStyled>
        {animeData &&
          animeData.map((anime) => (
            <AnimeCard
              key={anime.title}
              title={anime.title}
              image={anime.images.jpg.image_url}
              rating={anime.rating}
              mal_id={anime.mal_id}
            />
          ))}
      </AnimeDataWrapperStyled> */}
      <div
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </div>
      <div
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Back
      </div>
      {/* <Modal visible={visible} setVisible={setVisible}>
        {selectedTitle}
      </Modal> */}
      {/* <Drawer visible={visible} setVisible={setVisible}>
        {selectedTitle}
      </Drawer> */}
    </HomeStyled>
  );
};

export default Seasons;
