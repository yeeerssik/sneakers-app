import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex">         
          <Card />

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="cardBottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>25 990 тг.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 тг.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers" />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="cardBottom d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>17 999 тг.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
