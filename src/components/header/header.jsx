import { useState } from "react";
import styles from "./header.module.scss";
import Modal from "../modal/modal";
import Create from "../createUser/create";

const Header = () => {
    const [open, setOpen] = useState();
    return (
        <div className={styles.wrapper}>
            <h1>Панель управления</h1>
            <div className={styles.hr}></div>
            <button onClick={() => setOpen(true)}>Создать новую персону</button>
            {open && (
                <Modal
                    closeModal={() => setOpen(false)}
                    children={<Create closeModal={() => setOpen(false)} />}
                />
            )}
        </div>
    );
};

export default Header;
