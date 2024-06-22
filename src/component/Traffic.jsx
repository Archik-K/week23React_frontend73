import styles from "./Traffic.module.css";

function Traffic(props) {
	return (
		<div>
			<p className={styles.internet}>{props.internet}</p>
			<p className={styles.trafficVolume}>{props.trafficVolume}</p>
		</div>
	);
}
export default Traffic;
