import styles from "./Head.module.css";

function Head(props) {
	return (
		<div className={styles.Head}>
			<h2>{props.headgdfRate}</h2>
		</div>
	);
}
export default Head;
