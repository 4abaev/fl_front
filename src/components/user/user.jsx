import { useState } from "react";
import styles from "./user.module.scss";
import { useDispatch } from "react-redux";
import { deletePeople, putPeople } from "../../state/actions";
import { useForm } from "react-hook-form";
import { Input } from "../input/input";

const User = ({ props }) => {
    const [changeOpen, setChangeOpen] = useState(false);

    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(putPeople({ id: props.id, name: data.Name }));
        setChangeOpen(false);
    };

    const onDelete = () => {
        dispatch(deletePeople({ id: props.id }));
    };

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: "onChange" });
    return changeOpen ? (
        <form className={styles.user__wrapper} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.id}>{props.id}</div>
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
            <button className={styles.button} type="submit">Сохранить</button>
        </form>
    ) : (
        <div className={styles.user__wrapper}>
            <div className={styles.id}>{props.id}</div>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.buttons}>
                <button onClick={() => setChangeOpen(true)}>Редактировать</button>
                <button onClick={onDelete}>Удалить</button>
            </div>
        </div>
    );
};

export default User;
