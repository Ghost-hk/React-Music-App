import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibrarystatus, librarystatus }) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setLibrarystatus(!librarystatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
