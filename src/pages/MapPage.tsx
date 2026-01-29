const MapPage = () => {
    return (
        <main className="map-container relative pt-24 pb-20 flex flex-col items-center">
        
        <svg id="map-svg" className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-visible">
            <path id="path-line" className="path-line stroke-2 stroke-blue-500 stroke-opacity-70" d="M0 0 L100 100" />
        </svg>

        <div id="nodes-container" className="relative w-full max-w-4xl min-h-[1200px] mx-auto z-10">
            <div id="level-1" className="level-node node-unlocked" style={{ left: '50%', top: '5%' }}>
                <div className="node-content">
                    <h2 className="text-lg font-bold">O Despertar (Hello World)</h2>
                    <p className="text-sm text-slate-400">Toda jornada começa com um único passo.</p>
                </div>
            </div>
        </div>
    </main>
    )
}

export default MapPage;