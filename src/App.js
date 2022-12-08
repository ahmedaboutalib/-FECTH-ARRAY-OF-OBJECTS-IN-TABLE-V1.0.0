import Banner from "./banner";
import BookList from "./bookList";
import './bootstrap.min.css';

const App = () => {
  return (
    <div className="container">
      <Banner>
        <div>Nos livres sont les meilleurs</div>
      </Banner>
      <BookList />
    </div>
  );
};

export default App;