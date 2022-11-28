// import { useEffect } from "react";
import { add, minutesToHours, format } from 'date-fns'
import { Currency } from 'react-intl-number-format'

import defaultImg from '../../images/s7.svg'

import styles from './AviaItem.module.scss'
const AviaItem = (props) => {
  const segment = props.segment
  const nameImg = props.nameImg
  const img = nameImg !== undefined ? `https://pics.avs.io/99/36/${nameImg}.png` : defaultImg
  const firstWay = <Road segment={segment[0]} />
  const secondWay = <Road segment={segment[1]} />
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
const Road = ({ segment }) => {
  const arrStops = segment.stops
  const stops = arrStops.reduce((accumulator, currentValue) => accumulator + ',' + currentValue, '')

  const wayHours = minutesToHours(segment.duration)
  const wayMin = segment.duration % 60
  const wayTime = format(new Date(segment.date), 'HH:mm')
  const wayTimeEnd = format(
    add(new Date(segment.date), {
      hours: wayHours,
      minutes: wayMin,
    }),
    'HH:mm'
  )
  const transfers =
    stops.length > 1 ? `${arrStops.length} пересадки` : arrStops.length === 1 ? '1 пересадка' : 'Без пересадок'
  return (
    <div className={styles.road}>
      <div>
        <p className={styles.name}>
          {segment.origin} – {segment.destination}
        </p>
        <p className={styles.info}>
          {wayTime} - {wayTimeEnd}
        </p>
      </div>
      <div>
        <p className={styles.name}>В пути</p>
        <p className={styles.info}>
          {wayHours}ч {wayMin}м
        </p>
      </div>
      <div>
        <p className={styles.name}>{transfers}</p>
        <p className={styles.info}>{stops.slice(1)}</p>
      </div>
    </div>
  )
}

export default AviaItem
