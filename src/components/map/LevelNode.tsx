import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface LevelNodeProps {
    level: {
        id: number;
        title: string;
        x: number;
        y: number;
        icon: IconDefinition;
    }
    status: 'locked' | 'unlocked' | 'completed' | 'current';
    onClick: (levelId: number) => void;
}

const LevelNode = ({ level, status, onClick }: LevelNodeProps) => {

    let baseClasses = 'level-node absolute w-16 h-16 md:w-20 md:h-20 rounded-full border-4 flex items-center justify-center bg-slate-800 transition-all duration-300';
    if (status === 'completed') {
        baseClasses += " node-completed border-emerald-500 text-emerald-100";
    } else if (status === 'unlocked' || status === 'current') {
        baseClasses += " node-unlocked border-blue-500 text-blue-100 bg-slate-700";
    } else {
        baseClasses += " node-locked border-slate-600 text-slate-600";
    }

    if (status === 'current') {
        baseClasses += " current-quest";
    }

    const handleClick = () => {
        if (status !== 'locked') {
            onClick(level.id);
        }
    }

    const shortTitle = level.title.split('(')[0].trim();

    return (
        <div
            className={baseClasses}
            style={{
                left: `${level.x}%`,
                top: `${level.y}%`,
                transform: 'translate(-50%, -50%)'
            }}
            onClick={handleClick}
        >
            <FontAwesomeIcon 
                icon={level.icon} 
                className="text-xl md:text-2xl"
            />
            
            <div className={`absolute -bottom-8 md:-bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-[10px] md:text-xs font-bold px-2 py-1 rounded bg-slate-900 border border-slate-700 shadow-md ${
                status === 'locked' ? 'text-slate-600' : 'text-white'
            }`}>
                Nvl {level.id}: {shortTitle}
            </div>
        </div>
    );
};

export default LevelNode;
