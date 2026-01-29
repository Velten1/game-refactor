import { useEffect } from "react";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//toast message are ready
//show toast message when level is completed
//toast message should be hidden after 3 seconds

//autoclose needs be true by default
interface ToastProps {
    show: boolean;
    onClose: () => void;
    autoClose?: boolean;
}

const Toast = ({ show, onClose, autoClose = true}: ToastProps) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, autoClose ? 3000 : 0);
            return () => clearTimeout(timer);
        }
    }, [show, autoClose, onClose]);

    if (!show) return null;

    return (
        //if show is true, remove the translate-y-24 class
        //if show is false, add the translate-y-24 class
        <div id="victory-toast" className={`fixed bottom-5 right-5
            bg-green-600 text-white
            px-6 py-4 rounded shadow-2xl
            transform transition-transform duration-300
            z-[110] flex items-center gap-3
            ${show ? 'translate-y-0' : 'translate-y-24'}
            `}          
            >
            <div className="flex-shrink-0 text-xl mt-0.5">
                <FontAwesomeIcon icon={faTrophy} />
            </div>
            <div>
                <h4 className="font-bold text-sm">Nível Completado!</h4>
                <p className="text-xs">O próximo desafio foi desbloqueado.</p>
            </div>
        </div>
    )
}

export default Toast;