import React from "react";
import { useParams } from "react-router-dom";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";

const CardPage = () => {
  const { id } = useParams();

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        ID задачи: {id}
      </h2>
      <PopBrowse />
    </>
  );
};

export default CardPage;
