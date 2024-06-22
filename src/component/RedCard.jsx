import styles from "./RedCard.module.css";
import Price from "./Price.jsx";
import Head from "./Head.jsx";
import Traffic from "./Traffic.jsx";

function RedCard() {
	return (
		<div className={styles.CardRed}>
			<div className={styles.headCardRed}>
				<Head headgdfRate="Безлимитный 450" />
			</div>
			<div className={styles.headCardRed}>
				<Price valute="руб" price="450" duration="/мес" />
			</div>
			<div>
				<Traffic
					internet="до 50 Мбит/сек"
					trafficVolume="Объем включенного трафика не ограничен"
				/>
			</div>
		</div>
	);
}
export default RedCard;
