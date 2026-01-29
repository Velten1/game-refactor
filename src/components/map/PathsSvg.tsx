interface PathsSvgProps {
    levels: {
        id: number;
        x: number;
        y: number;
        unlocks: number[];
    }[];
    completedLevels: number[];
}

const PathsSvg = ({ levels, completedLevels }: PathsSvgProps) => {
    //create path to receive x1, y1, x2, y2 (all numbers)
    //return string command to draw curve
    //string need be like "M x1 y1 C x1 y1+50, x2 y2-50, x2 y2" (m = move to, c = cubic bezier curve)
    const createPath = (x1: number, y1: number, x2: number, y2: number) => {
        return `M ${x1} ${y1} C ${x1} ${y1 + 50}, ${x2} ${y2 - 50}, ${x2} ${y2}`;
    };

    const paths: Array<{
        d: string
        isActive: boolean
    }> = [];

    levels.forEach((level) => {
        level.unlocks.forEach((unlockId) => {
            const targetLevel = levels.find((l) => l.id === unlockId);
            if (targetLevel) {
                const pathData = createPath(level.x, level.y, targetLevel.x, targetLevel.y);
                const isActive = completedLevels.includes(level.id);

                paths.push({ d: pathData, isActive });
            }
        });
    });

    return (
        <svg 
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
        >
            {paths.map((path, index) => (
                <path
                    key={index}
                    d={path.d}
                    stroke={path.isActive ? "#10b981" : "#475569"}
                    strokeWidth={path.isActive ? 4 : 2}
                    fill="none"
                    strokeLinecap="round"
                    className={path.isActive ? "path-line" : ""}
                />
            ))}
        </svg>
    );
};

export default PathsSvg;
