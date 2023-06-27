import styles from "./header.module.scss";
import { createPeople } from "../../state/actions";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Input } from "../input/input";

const Header = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ mode: "onChange" });

    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(
            createPeople({
                name: data.Name,
                current_cell: 0,
                first_dice: 0,
                second_dice: 0,
                resuld: 0,
                game_status: "Roll the dice"
            })
        );
        reset()
    };
    return (
        <div className={styles.wrapper}>
            <h1>Панель управления</h1>
            <div className={styles.hr}></div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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

        </div>
    );
};

export default Header;
