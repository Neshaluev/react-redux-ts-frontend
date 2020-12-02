import React from "react";
import Icon from "../Icon/Icon";

import "./search.scss";

type TPropsSearch = {
  handleSearch: (...args: any) => any
}

function Search({handleSearch}: handleSearch) {
  return (
    <div className="search--box">
      <input type="search" className="search--input" placeholder={"SEARCH"} onChange={e => handleSearch(e.target.value)}/>
      <Icon className="search--icon" name={"magnifier"} size={25} />
    </div>
  );
}

Search.defaultProps = {
  handleSearch: () => {}
}

export default Search;
