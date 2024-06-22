import styles from "./BlueCard.module.css";
import Price from "./Price.jsx";
import Head from "./Head.jsx";
import Traffic from "./Traffic.jsx";

function BlueCard() {
	return (
		<div className={styles.CardBlue}>
			<div className={styles.headBlueCard}>
				<Head headgdfRate="Безлимитный 300" />
			</div>
			<div className={styles.headBlueCard}>
				<Price valute="руб" price="300" duration="/мес" />
			</div>
			<div>
				<Traffic
					internet="до 10 Мбит/сек"
					trafficVolume="Объем включенного трафика не ограничен"
				/>
			</div>
		</div>
	);
}
export default BlueCard;
