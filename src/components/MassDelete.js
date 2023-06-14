import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import $ from "jquery";

import { API_URL } from "../utils/constants";
import { AppContext } from "../App";

const MassDelete = () => {
  const [searchParams] = useSearchParams();
  const { update } = useContext(AppContext);

  async function handleClick() {
    const selectedIds = JSON.parse(searchParams.get("selectedIds"));

    try {
      await $.post(API_URL, { ids: selectedIds });
      update();
    } catch (error) {
      console.error(error);
    }
  }

  return <button onClick={handleClick}>MASS DELETE</button>;
};

export default MassDelete;
