// AddToCart.js
import classNames from "classnames";
import styles from "./AddToCart.module.scss";

export function AddToCart(props) {
    const { onClick, className, children } = props;

    return (
        <button
            type="button"
            className={classNames(styles.addToCartButton, { [className]: className })}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
