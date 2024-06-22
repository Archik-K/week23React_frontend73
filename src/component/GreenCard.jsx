import styles from "./GreenCard.module.css";
import Price from "./Price.jsx";
import Head from "./Head.jsx";
import Traffic from "./Traffic.jsx";

function GreenCard() {
	return (
		<div className={styles.CardGreen}>
			<div className={styles.headGreenCard}>
				<Head headgdfRate="Безлимитный 550" />
			</div>
			<div className={styles.headGreenCard}>
				<Price valute="руб" price="550" duration="/мес" />
			</div>
			<div>
				<Traffic
					internet="до 100 Мбит/сек"
					trafficVolume="Объем включенного трафика не ограничен"
				/>
			</div>
		</div>
	);
}
export default GreenCard;
