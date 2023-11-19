import * as React from 'react';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import { Level7Props } from '../GameLevels/JavaLevels/IntroductionLevels/Level7';

interface IDroppableSectionProps {
    onDrop: (optionText: string) => void;
    isOptionDropped: boolean;
    droppedText: string | null;
}

const DroppableSection: React.FunctionComponent<IDroppableSectionProps> = ({ onDrop, isOptionDropped, droppedText }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: Level7Props.OPTION,
        drop: (item: { optionText: string }, monitor: DropTargetMonitor) => {
            if (monitor) {
                onDrop(item.optionText);
            }
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    });
    const isActive = isOver && canDrop;

    return (
        <div ref={drop} className={`your-droppable-styles ${isActive ? 'active' : ''}`}>
            {isOptionDropped ? <span className=' bg-gray-600 px-3 py-2 rounded-lg'>{droppedText}</span> : <span className=' bg-gray-600 px-3 py-1 rounded-lg'>&nbsp;&nbsp;&nbsp;</span>}
        </div>
    );
};

export default DroppableSection;
