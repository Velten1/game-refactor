import Hud from '../components/hud/Hud.tsx';
import { gameLevels } from '../data/gameLevels.ts';
import { useState } from 'react';
import MapCanvas from '../components/map/MapCanvas.tsx';



const MapPage = () => {

    const [completedLevels, setCompletedLevels] = useState<number[]>([]);
    const [unlockedLevels, setUnlockedLevels] = useState([1]);
    const progressPercent = (completedLevels.length / gameLevels.length) * 100;
    const handleReset = () => {
        if (confirm('Deseja realmente reiniciar toda a sua jornada?')) {
            setCompletedLevels([]);
            setUnlockedLevels([1]);
            localStorage.removeItem('rpg_python_progress');
        }
    }    
    const handleLevelClick = (levelId: number) => {
        if (unlockedLevels.includes(levelId)) {
            setCompletedLevels([...completedLevels, levelId]);
        } else {
            setUnlockedLevels([...unlockedLevels, levelId]);
        }
    }
    return (
        <>
        <Hud progressPercent={progressPercent} onReset={handleReset} />
        <main className="map-container relative pt-24 pb-20 flex flex-col items-center">
            <MapCanvas 
                levels={gameLevels}
                completedLevels={completedLevels}
                unlockedLevels={unlockedLevels}
                onLevelClick={handleLevelClick}
            />
        </main>
    </>
    )
}

export default MapPage;