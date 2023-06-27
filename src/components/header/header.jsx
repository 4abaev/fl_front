import styles from "./header.module.scss";
import { createPeople } from "../../state/actions";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Input } from "../input/input";

const Header = () => {
    function generateRandomEmail() {
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        let email = "";

        // Generate a random string of 10 characters
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            email += characters[randomIndex];
        }

        // Add the domain part of the email
        email += "@example.com";

        return email;
    }
    function generateRandomPassword(length) {
        const characters =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        let password = "";

        // Generate a random string of specified length
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        return password;
    }
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
                email: generateRandomEmail(),
                password: generateRandomPassword(10),
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
