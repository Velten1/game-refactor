const Hud = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-slate-900/90 border-b border-slate-700 z-50 px-4 py-3 flex justify-between items-center shadow-lg backdrop-blur-sm">
        <div className="flex items-center gap-3">
            <i className="fa-brands fa-python text-3xl text-yellow-400"></i>
            <div>
                <h1 className="rpg-font text-xs md:text-sm text-yellow-400">A Jornada da Serpente</h1>
                <p className="text-xs text-slate-400">Lógica de Programação</p>
            </div>
        </div>
        
        <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
                <p className="text-xs text-slate-400">Progresso</p>
                <div className="w-32 h-3 bg-slate-800 rounded-full mt-1 border border-slate-600 overflow-hidden">
                    <div id="progress-bar" className="h-full bg-gradient-to-r from-blue-500 to-green-500 w-0 transition-all duration-500"></div>
                </div>
            </div>
            {/* <button onClick={resetProgress} className="text-xs border border-red-500 text-red-400 hover:bg-red-500/10 px-3 py-1 rounded transition-colors" title="Reiniciar Jogo"> 
                <i className="fa-solid fa-skull"></i> Reset
             </button> */}
        </div>
    </header>
    )
}

export default Hud;