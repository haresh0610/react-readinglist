import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const CustomNavbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>You have {books.length} books to read through</p>
    </div>
  );
};

export default CustomNavbar;
