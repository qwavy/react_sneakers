import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifyError = (message) =>
    toast(<p style={{ fontSize: 16 }}>{message}</p>, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        type: "error"
    });

const CustomAlert = () => {
    const onError = () => {
        notifyError("you must log in to your account");
    };
    return (
        <>
            <button onClick={() => onError()}  className="conform_button">Checkout</button>
            <ToastContainer />
        </>
    )
}
export default CustomAlert