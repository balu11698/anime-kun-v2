import { useState } from "react";
import Drawer from "../../components/Drawer";
import {
  useGetAnimeCharacterQuery,
  useGetAnimeCharactersQuery,
} from "../../data/services/anime";
import {
  CharacterImageStyled,
  CharacterStyled,
  CharactersWrapperStyled,
} from "./style";

const Characters = (props) => {
  console.log(props.id, "id");
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(
    null
  );
  const { data } = useGetAnimeCharactersQuery(props.id);
  const { data: characterData } = useGetAnimeCharacterQuery(selectedCharacter, {
    skip: !selectedCharacter,
  });
  const { data: charactersData } = data ?? {};

  const [visible, setVisible] = useState(false);

  const onCharacterClick = (id: number) => {
    console.log(id, "selected id");
    setSelectedCharacter(id);
    setVisible(true);
  };

  console.log(characterData);

  return (
    <div>
      {charactersData && (
        <CharactersWrapperStyled>
          {charactersData.map((character) => (
            <CharacterStyled>
              <CharacterImageStyled
                src={character.character.images.jpg.image_url}
                onClick={() => onCharacterClick(character.character.mal_id)}
              />
            </CharacterStyled>
          ))}
        </CharactersWrapperStyled>
      )}
      {selectedCharacter && (
        <Drawer visible={visible} setVisible={setVisible}>
          <div>{characterData?.data?.about}</div>
        </Drawer>
      )}
    </div>
  );
};

export default Characters;
