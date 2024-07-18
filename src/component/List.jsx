import React, { useState } from "react"; // Импортируем useState для управления состоянием
import Card from "./Card.jsx"; // Импортируем компонент Card

const data = [
	{
		title: "Безлимитный 300", // Заголовок карточки
		price: "300", // Цена
		color: "blue", // Цвет карточки
		trafic: {
			title: "до 10 Мбит/сек", // Заголовок для трафика
			description: "Объем включенного трафика не ограничен", // Описание трафика
		},
	},
	{
		title: "Безлимитный 450",
		price: "450",
		color: "red",
		trafic: {
			title: "до 50 Мбит/сек",
			description: "Объем включенного трафика не ограничен",
		},
	},
	{
		title: "Безлимитный 550",
		price: "550",
		color: "green",
		trafic: {
			title: "до 100 Мбит/сек",
			description: "Объем включенного трафика не ограничен",
		},
	},
	{
		title: "Безлимитный 300",
		price: "300",
		color: "gray",
		trafic: {
			title: "до 10 Мбит/сек",
			description: "Объем включенного трафика не ограничен",
		},
	},
];

function List() {
	const [selectedCard, setSelectedCard] = useState(null); // Состояние для хранения выбранной карточки

	const handleSelect = (index) => {
		setSelectedCard(index); // Устанавливает выбранную карточку
	};

	return (
		<React.Fragment>
			{data.map(
				(
					card,
					index // Перебирает массив data и создает карточки
				) => (
					<Card
						key={index} // Устанавливает уникальный ключ для каждой карточки
						title={card.title} // Передает заголовок
						price={card.price} // Передает цену
						color={card.color} // Передает цвет
						trafic={card.trafic} // Передает информацию о трафике
						isSelected={selectedCard === index} // Проверяет, выбрана ли текущая карточка
						onSelect={() => handleSelect(index)} // Обработчик клика для выбора карточки
					/>
				)
			)}
		</React.Fragment>
	);
}

export default List; // Экспортирует компонент List для использования в других местах
