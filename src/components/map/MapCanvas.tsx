import LevelNode from './LevelNode';
import PathsSvg from './PathsSvg';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface MapCanvasProps {
    levels: {
        id: number;
        title: string;
        x: number;
        y: number;
        icon: IconDefinition;
        unlocks: number[];
    }[];
    completedLevels: number[];
    unlockedLevels: number[];
    onLevelClick: (levelId: number) => void;
}

const MapCanvas = ({ levels, completedLevels, unlockedLevels, onLevelClick }: MapCanvasProps) => {
    const getLevelStatus = (level: typeof levels[0]): 'locked' | 'unlocked' | 'completed' | 'current' => { //same format that array props
        const isCompleted = completedLevels.includes(level.id);
        const isUnlocked = unlockedLevels.includes(level.id);
        const isCurrent = isUnlocked && !isCompleted;
        
        if (isCompleted) return 'completed';
        if (isCurrent) return 'current';
        if (isUnlocked) return 'unlocked';
        return 'locked';
    };

    return (
        <div className="relative w-full max-w-4xl min-h-[1200px] mx-auto z-10">
            <PathsSvg 
                levels={levels}
                completedLevels={completedLevels}
            />
            <div className="relative w-full h-full">
                {levels.map((level) => (
                    <LevelNode
                        key={level.id}
                        level={level}
                        status={getLevelStatus(level)}
                        onClick={onLevelClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default MapCanvas;