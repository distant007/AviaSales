import { add, minutesToHours, format } from 'date-fns'

import styles from './AviaItemSegment.module.scss'
const AviaItemSegment = (props) => {
  const { segment } = props
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
export default AviaItemSegment
