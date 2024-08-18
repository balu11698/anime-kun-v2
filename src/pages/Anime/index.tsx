import { useParams } from "react-router-dom";
import { useGetAnimeFullQuery } from "../../data/services/anime";
import { useState } from "react";
import Characters from "./characters";
import Episodes from "./episodes";
import { TabsWrapperStyled } from "./style";

const Anime = () => {
  const { id } = useParams();
  const { data } = useGetAnimeFullQuery(id as unknown as number);
  const { data: animeData } = data ?? {};
  const tabs = [
    { name: "Overview", element: <div></div> },
    { name: "Episodes", element: <Episodes id={id as unknown as number} /> },
    {
      name: "Characters",
      element: <Characters id={id as unknown as number} />,
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onTabClick = (tab: (typeof tabs)[0]) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div>{animeData?.title_english}</div>
      <TabsWrapperStyled>
        {tabs.map((tab) => (
          <div onClick={() => onTabClick(tab)}>{tab.name}</div>
        ))}
      </TabsWrapperStyled>
      {activeTab.element}
    </>
  );
};

export default Anime;
