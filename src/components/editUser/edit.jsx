import { useDispatch } from "react-redux";
import { Input } from "../input/input";
import styles from "./edit.module.scss";
import { useForm } from "react-hook-form";
import { patchPeople } from "../../state/actions";
const Edit = ({ props, closeModal }) => {
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(patchPeople({ id: props.id, name: data.Name }));
        closeModal();
    };

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: "onChange" });
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h2>Редактирование персоны</h2>
            <p className={styles.name}>{props.name}</p>
            <p className={styles.name}>{props.id}</p>
            <Input
                type="text"
                name="Name"
                label="Имя персоны"
                errors={errors}
                register={register("Name", {
                    required: "Это поле обязательно для заполнения",
                    minLength: {
                        value: 3,
                        message: "Имя пользователя слишком короткое",
                    },
                    maxLength: {
                        value: 28,
                        message: "Имя пользователя слишком длинное",
                    },
                    pattern: {
                        value: /^[a-zа-яё0-9]+$/i,
                        message: "Только буквы и числа",
                    },
                })}
            />
            <button type="submit">Сохранить</button>
        </form>
    );
};

export default Edit;
