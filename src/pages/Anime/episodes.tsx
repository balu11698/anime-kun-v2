import { useState } from "react";
import {
  useGetAnimeEpisodeByIdQuery,
  useGetAnimeEpisodesQuery,
} from "../../data/services/anime";
import Modal from "../../components/Modal";

const Episodes = (props) => {
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const { data } = useGetAnimeEpisodesQuery(props.id);
  const { data: episodeData } = useGetAnimeEpisodeByIdQuery(
    { animeId: props.id, id: selectedEpisode },
    { skip: !selectedEpisode }
  );
  console.log(episodeData);

  const onEpisodeClick = (id: number) => {
    setSelectedEpisode(id);
    setVisible(true);
  };

  return (
    <div>
      {data?.data?.map((episode) => (
        <div onClick={() => onEpisodeClick(episode.mal_id)}>
          {episode.title}
        </div>
      ))}
      <Modal visible={visible} setVisible={setVisible}>
        {episodeData?.data?.synopsis}
      </Modal>
    </div>
  );
};

export default Episodes;
