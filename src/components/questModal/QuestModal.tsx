


const QuestModal = () => {
    return (
        <div id="quest-modal" className="fixed inset-0 z-[100] hidden flex items-center justify-center p-4 modal-overlay bg-black/80">
        <div className="bg-slate-800 border-2 border-slate-600 rounded-lg max-w-2xl w-full shadow-2xl transform transition-all scale-100 relative overflow-hidden">
            
            <div className="bg-slate-900 p-4 border-b border-slate-700 flex justify-between items-center">
                <h2 id="modal-title" className="rpg-font text-yellow-400 text-sm md:text-base">Nome da Missão</h2>
                {/* <button onClick={closeModal} className="text-slate-400 hover:text-white transition-colors"> 
                    <i className="fa-solid fa-xmark text-xl"></i>
                </button> */}
            </div>

            <div className="p-6 max-h-[70vh] overflow-y-auto">
                <div className="flex items-start gap-4 mb-6">
                    <div className="bg-slate-700 p-3 rounded-lg hidden md:block">
                        <i id="modal-icon" className="fa-solid fa-scroll text-3xl text-blue-400"></i>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">Objetivo:</h3>
                        <p id="modal-desc" className="text-slate-300 leading-relaxed text-sm md:text-base">Descrição da missão...</p>
                    </div>
                </div>

                <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Pergaminho de Sabedoria (Código)</h4>
                    <pre className="code-block p-4 rounded text-xs md:text-sm overflow-x-auto text-green-400 font-mono"><code id="modal-code">print("Hello World")</code></pre>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded mb-4">
                    <h4 className="text-blue-400 font-bold text-sm mb-1"><i className="fa-solid fa-lightbulb"></i> Desafio Prático</h4>
                    <p id="modal-challenge" className="text-sm text-slate-300">O que o usuário deve fazer mentalmente ou em sua IDE.</p>
                </div>
            </div>

            <div className="p-4 bg-slate-900 border-t border-slate-700 flex justify-end gap-3">
                {/* <button onClick={closeModal} className="px-4 py-2 text-slate-400 hover:text-white text-sm transition-colors">Voltar</button> */}
                {/* <button onClick={completeQuest} className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded shadow-lg hover:shadow-green-500/50 transition-all text-sm flex items-center gap-2">
                    <i className="fa-solid fa-check"></i> Completar Missão
                </button> */}
            </div>
        </div>
        </div>
    )
}

export default QuestModal;