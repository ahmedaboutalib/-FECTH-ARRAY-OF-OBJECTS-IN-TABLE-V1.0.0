
const BookRow = ({ book }) => {
  return (
    <tr>
      <td>{book.titre}</td>
      <td>{book.auteur}</td>
      <td>{book.prix}</td>
    </tr>
  );
};

export default BookRow;