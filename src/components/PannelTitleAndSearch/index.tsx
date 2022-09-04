import React, { useState } from "react";
import { TbSearch, TbBell } from "react-icons/tb";
import * as S from "./styles";

interface Props {
  title: string;
}
export default function PannelTitleAndSearch(props: Props) {
  const [Searching, setSearching] = useState(false);
  const [SearchQuery, setSearchQuery] = useState("");

  function handleSearchButton() {
    if (!Searching) {
      setSearching(true);
      return;
    }
    if (Searching && SearchQuery === "") {
      setSearching(false);
      return;
    }
    console.log(`Searching for ${SearchQuery}`);
    setSearchQuery("");
  }

  return (
    <S.Component>
      <h3 className="PannelTitle">{props.title}:</h3>
      {Searching && <S.SearchInput value={SearchQuery} onChange={(e) => setSearchQuery(e.target.value)} autoFocus onBlur={() => setSearching(false)} />}
      <S.Icons>
        <TbSearch onClick={handleSearchButton} />
        <TbBell />
      </S.Icons>
    </S.Component>
  );
}
