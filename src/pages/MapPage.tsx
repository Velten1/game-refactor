import Hud from '../components/hud/Hud.tsx';
import { gameLevels } from '../data/gameLevels.ts';
import { useState } from 'react';
import MapCanvas from '../components/map/MapCanvas.tsx';
import QuestModal from '../components/questModal/QuestModal.tsx';
import Toast from '../components/toast/Toast.tsx';

const MapPage = () => {
    const [completedLevels, setCompletedLevels] = useState<number[]>([]);
    const [unlockedLevels, setUnlockedLevels] = useState([1]);
    const [activeLevelId, setActiveLevelId] = useState<number | null>(null);
    const [showToast, setShowToast] = useState(false);

    const progressPercent = (completedLevels.length / gameLevels.length) * 100;

    const activeLevel = activeLevelId ? gameLevels.find(l => l.id === activeLevelId) : undefined;

    const handleReset = () => {
        if (confirm('Deseja realmente reiniciar toda a sua jornada?')) {
            setCompletedLevels([]);
            setUnlockedLevels([1]);
            setActiveLevelId(null);
            localStorage.removeItem('rpg_python_progress');
        }
    };

    const handleLevelClick = (levelId: number) => {
        if (unlockedLevels.includes(levelId)) {
            setActiveLevelId(levelId);
        }
    };

    const handleCloseModal = () => {
        setActiveLevelId(null);
    };

    const handleCompleteQuest = () => {
        if (!activeLevel) return;

        if (!completedLevels.includes(activeLevel.id)) {
            setCompletedLevels(prev => [...prev, activeLevel.id]);
            setShowToast(true);
        }

        if (activeLevel.unlocks && activeLevel.unlocks.length > 0) {
            setUnlockedLevels(prev => {
                const newUnlocked = [...prev];
                activeLevel.unlocks.forEach(unlockId => {
                    if (!newUnlocked.includes(unlockId)) {
                        newUnlocked.push(unlockId);
                    }
                });
                return newUnlocked;
            });
        }

        handleCloseModal();
    };

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
            <QuestModal
                isOpen={activeLevelId !== null}
                level={activeLevel}
                onClose={handleCloseModal}
                onComplete={handleCompleteQuest}
                completedLevels={completedLevels}
            />
            <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
            />
        </>
    );
};

export default MapPage;