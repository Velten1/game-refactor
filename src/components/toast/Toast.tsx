

const Toast = () => {
    return (
        <div id="victory-toast" className="fixed bottom-5 right-5 bg-green-600 text-white px-6 py-4 rounded shadow-2xl transform translate-y-24 transition-transform duration-300 z-[110] flex items-center gap-3">
        <i className="fa-solid fa-trophy text-yellow-300 text-xl"></i>
        <div>
            <h4 className="font-bold text-sm">Nível Completado!</h4>
            <p className="text-xs">O próximo desafio foi desbloqueado.</p>
        </div>
    </div>
    )
}

export default Toast;