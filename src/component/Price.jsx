import styles from "./Price.module.css";

function Price(props) {
	return (
		<div className={styles.Price}>
			<p className={styles.valute}>{props.valute}</p>
			<p>{props.price}</p>
			<p className={styles.duration}>{props.duration}</p>
		</div>
	);
}
export default Price;
