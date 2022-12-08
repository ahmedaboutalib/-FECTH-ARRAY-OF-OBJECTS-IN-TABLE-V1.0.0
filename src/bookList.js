import React, { useState } from "react";
import BookRow from "./bookRow";

const bookArray = [
  {
    id: 1,
    titre: "UML par la pratique",
    auteur: "Jean Dupent",
    prix: 200,
    pages:280
  },
  {
    id: 2,
    titre: "Learning ReactJS",
    auteur: "Davolio",
    prix: 300,
    pages:420
  },
];

const BookList = () => {
  const [books, setBooks] = useState(bookArray);

  const addBook = () => {
    setBooks([
      ...books,
      {
        id: 3,
        titre: "Python advanced",
        auteur: "Tariq",
        prix: 350,
        pages:330
      }
    ]);
  };

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Livres actuelement disponibles
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {books.map((h) => (
            <BookRow key={h.id} book={h} />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addBook}>
        Ajouter
      </button>
    </>
  );
};

export default BookList;