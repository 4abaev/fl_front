import { useRef } from "react";
import styles from "./modal.module.scss";
import { useOnClickOutside } from "usehooks-ts";
const Modal = ({ children, closeModal }) => {
    const ref = useRef(null);

    const handleClickOutSide = () => {
        closeModal();
    };

    useOnClickOutside(ref, handleClickOutSide);
    return (
        <div className={styles.modal}>
            <div ref={ref} className={styles.modal_content}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
