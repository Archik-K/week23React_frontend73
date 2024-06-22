import styles from "./GrayCard.module.css";
import Price from "./Price.jsx";
import Head from "./Head.jsx";
import Traffic from "./Traffic.jsx";

function GrayCard() {
	return (
		<div className={styles.CardGray}>
			<div className={styles.headGrayCard}>
				<Head headgdfRate="Безлимитный 300" />
			</div>
			<div className={styles.headGrayCard}>
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
export default GrayCard;
