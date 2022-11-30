import { Currency } from 'react-intl-number-format'

import AviaItemSegment from '../AviaItemSegment/AviaItemSegment'
import defaultImg from '../../assets/images/s7.svg'

import styles from './AviaItem.module.scss'
const AviaItem = (props) => {
  const segment = props.segment
  const nameImg = props.nameImg
  const img = nameImg !== undefined ? `https://pics.avs.io/99/36/${nameImg}.png` : defaultImg
  const firstWay = <AviaItemSegment segment={segment[0]} />
  const secondWay = <AviaItemSegment segment={segment[1]} />
  return (
    <>
      <div className={styles.header}>
        <p className={styles.price}>
          <Currency as="span" maximumFractionDigits={3} currency="RUB">
            {props.price}
          </Currency>
        </p>
        <img src={img} alt="#" />
      </div>
      <div className={styles.content}>
        {firstWay}
        {secondWay}
      </div>
    </>
  )
}

export default AviaItem
