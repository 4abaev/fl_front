import { useDispatch } from "react-redux";
import styles from "./delete.module.scss";
import { deletePeople } from "../../state/actions";

const Delete = ({ props, closeModal }) => {
    const dispatch = useDispatch();
    const onSubmit = () => {
        dispatch(deletePeople({ id: props.id }));
        closeModal();
    };
    return (
        <div className={styles.form}>
            <h2>Удаление персоны</h2>
            <p>Вы действительно удалить персону?</p>
            <p className={styles.name}>{props.name}</p>
            <button onClick={onSubmit}>Удалить</button>
        </div>
    );
};

export default Delete;
