import { useState } from "react";
import styles from "./user.module.scss";
import Modal from "../modal/modal";
import Delete from "../deleteUser/delete";
import Edit from "../editUser/edit";

const User = ({ props }) => {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [changeOpen, setChangeOpen] = useState(false);

    return (
        <div className={styles.user__wrapper}>
            <div className={styles.id}>{props.id}</div>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.buttons}>
                <button onClick={() => setChangeOpen(true)}>&#9998;</button>
                <button onClick={() => setDeleteOpen(true)}>&#10060;</button>
            </div>
            {deleteOpen && (
                <Modal
                    closeModal={() => setDeleteOpen(false)}
                    children={
                        <Delete
                            props={props}
                            closeModal={() => setDeleteOpen(false)}
                        />
                    }
                />
            )}
            {changeOpen && (
                <Modal
                    closeModal={() => setChangeOpen(false)}
                    children={
                        <Edit
                            closeModal={() => setChangeOpen(false)}
                            props={props}
                        />
                    }
                />
            )}
        </div>
    );
};

export default User;
