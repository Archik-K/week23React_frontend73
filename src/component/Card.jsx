import React from "react";
import Price from "./Price.jsx";
import Head from "./Head.jsx";
import Traffic from "./Traffic.jsx";
import styles from "./Card.module.css";

const Card = ({ title, price, trafic, color, isSelected, onSelect }) => {
	const colorClasses = {
		blue: styles.headCard_blue,
		red: styles.headCard_red,
		green: styles.headCard_green,
		gray: styles.headCard_gray,
	};
	const cardClass = colorClasses[color];
	const cardHoverClass = color === "green" ? styles.Card_green : "";
	const selectedClass = isSelected ? styles.Card_selected : "";

	return (
		<div
			className={`${styles.Card} ${cardHoverClass} ${selectedClass}`}
			onClick={onSelect}
		>
			<div className={cardClass}>
				<Head headgdfRate={title} />
			</div>
			<div className={cardClass}>
				<Price valute="руб" price={price} duration="/мес" />
			</div>
			<div>
				<Traffic internet={trafic.title} trafficVolume={trafic.description} />
			</div>
		</div>
	);
};

export default Card;
