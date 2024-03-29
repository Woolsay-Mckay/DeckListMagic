import React from 'react';
import { Card } from 'mtgsdk-ts';

import styles from './style.module.scss';
import CardImage from 'components/CardImage';

type AppProps = {
  card: Card;
  canAddCard?: (card: Card) => boolean;
  addCard?: (card: Card) => void;
  canRemoveCard?: (card: Card) => boolean;
  removeCard?: (card: Card) => void;
};
export default ({
  card,
  canAddCard = (): boolean => false,
  addCard = (): null => null,
  canRemoveCard = (): boolean => false,
  removeCard = (): null => null,
}: AppProps): JSX.Element => (
  <div className={styles.card}>
    {/* <img
      className={styles['card-image']}
      src={card.imageUrl || 'https://via.placeholder.com/265x370.png?text=Image non trouvée'}
    /> */}
    <CardImage alt={card.name} className={styles['card-image']} url={card.imageUrl} />

    <div className={styles['card-info']}>
      <div className={styles['card-name']}>{card.name}</div>
      {canAddCard(card) ? (
        <div className={styles['card-add']} onClick={(): void => addCard(card)}>
          <i className="fas fa-add" aria-hidden="true"></i> +
        </div>
      ) : null}
      {canRemoveCard(card) ? (
        <div className={styles['card-delete']} onClick={(): void => removeCard(card)}>
          <i className="fas fa-delete" aria-hidden="true"></i> -
        </div>
      ) : null}
    </div>
  </div>
);
