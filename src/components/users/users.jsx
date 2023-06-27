import { useEffect } from "react";
import User from "../user/user";
import styles from "./users.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPeoples } from "../../state/actions";
const Users = () => {
    const peoples = useSelector((state) => state.peoples.peoples);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPeoples());
    }, [dispatch]);

    return (
        <div className={styles.wrapper}>
            {peoples &&
                peoples.map((user) => {
                    const userProps = {
                        id: user.id,
                        name: user.name,
                    };
                    return <User key={user.id} props={userProps} />;
                })}
        </div>
    );
};

export default Users;
