import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

const Pagination = ({ count, currentPage, updateCurrentPage }) => {
  let arr = new Array(count).fill(0);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <button
        disabled={currentPage === 1}
        onClick={() => updateCurrentPage(currentPage - 1)}
      >
        <ChevronLeftIcon boxSize={6} />
      </button>

      {arr.map((el, i) => (
        <button
          key={i}
          style={{
            borderBottom: currentPage === i + 1 ? "1px solid red" : "none",
          }}
          onClick={() => updateCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={currentPage === count}
        onClick={() => updateCurrentPage(currentPage + 1)}
      >
        <ChevronRightIcon boxSize={6} />
      </button>
    </div>
  );
};

export default Pagination;
