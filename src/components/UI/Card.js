import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.cardCss}`}>{props.children}</div>
  );
};
export default Card;
