import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://63b582c90f49ecf508a75960.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    let arr = [...cartItems, obj]
    let items = [
      ...new Map(arr.map((item) => [ item["title"], item])).values()
    ];
    setCartItems(items);
    
  }

  return (
    <div className="wrapper clear">
      { cartOpened && <Drawer items={cartItems} onClose={ () => setCartOpened(false)} />}
      <Header onClickCart={ () => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder="Поиск..."/>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          { items.map((item, index) => (
            <Card
              key={index} 
              title={ item.title } 
              price={ item.price } 
              path={ item.path }
              onFavorite={ (obj) => console.log(obj) } 
              onPlus={ (obj) => onAddToCart(obj) } />
          )) }         
        </div>
      </div>
    </div>
  );
}

export default App;
