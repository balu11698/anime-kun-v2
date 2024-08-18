import { useState } from "react";
import AnimeCard from "../../components/AnimeCard/index.tsx";
import Modal from "../../components/Modal/index.tsx";
import { useGetAnimeSeasonsNowQuery } from "../../data/services/anime";
import Drawer from "../../components/Drawer/index.tsx";
import { Link, useNavigate } from "react-router-dom";
import { AnimeDataWrapperStyled, HomeStyled } from "./style.ts";

const Seasons = () => {
  const [page, setPage] = useState(1);
  const { isLoading, data } = useGetAnimeSeasonsNowQuery(page);

  const { data: animeData } = data ?? {};
  const [visible, setVisible] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  return (
    <HomeStyled>
      <AnimeDataWrapperStyled>
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
      </AnimeDataWrapperStyled>
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
