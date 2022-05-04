import Styles from "./Card.module.scss";
import pin from "../images/pin.png";
const Card = (props) => {
  const { img, country, googleMaps, date, infoText, location } = props.card;
  console.log(props.card.img);
  return (
    <div className={Styles.container}>
      <div className={Styles.card}>
        <img src={img} className={Styles.img} />
        <div className={Styles.cardText}>
          <div className={Styles.cardInfo}>
            <img className={Styles.pin} src={pin} />
            <p className={Styles.country}>{country}</p>
            <a className={Styles.googleMaps} href={googleMaps}>
              View on GoogleMaps
            </a>
          </div>
          <div className={Styles.locationInfo}>
            <h2>{location}</h2>
            <p className={Styles.date}>
              {date.startDate} - {date.endDate}
            </p>
            <p className={Styles.infoText}>{infoText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
