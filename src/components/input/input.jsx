import styles from "./index.module.scss";

export function Input({ name, label, register, errors, type, onlyInput }) {
    return (
        <div className={styles.input_container}>
            <input
                className={errors[name] ? styles.error : styles.input}
                type={type}
                placeholder={label}
                autoComplete="off"
                id={name}
                {...register}
            />
            {errors[name] && (
                <p className={styles.error_msg}>
                    {String(errors[name].message)}
                </p>
            )}
        </div>
    );
}
