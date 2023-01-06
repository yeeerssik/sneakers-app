import React from 'react';
import styles from './Card.module.scss';

console.log(styles);

function Card({ title, path, price, onFavorite, onPlus }) {
    const [isAdded, setIsAdded] = React.useState(false); // хук useState()

    const onClickPlus = () => {
        onPlus({ title, path, price });
        setIsAdded(!isAdded);
    }

    return (
        <div className={ styles.card }>
            <div className={ styles.favorite }>
                <img src="/img/heart-unliked.svg" alt="Heart" />
            </div>
            <img width={133} height={112} src={ path } alt="Sneakers" />
            <h5>{ title }</h5>
            <div className="cardBottom d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{ price }</b>
                </div>
                <img className={ styles.plus } onClick={ onClickPlus } src={ isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg" } alt="Plus" />
            </div>
        </div>
    );
}

export default Card;
