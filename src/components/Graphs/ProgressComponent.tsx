import React from 'react';

interface ProgressItemProps {
  difficulty: string;
  solved: number;
  total: number;
  beats: number;
  progressColor: string;
}

const ProgressItem: React.FC<ProgressItemProps> = ({
  difficulty,
  solved,
  total,
  beats,
  progressColor,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex md:w-[350px] w-[250px] items-end text-xs">
        <div className="w-14 text-label-3 dark:text-dark-label-3">{difficulty}</div>
        <div className="flex flex-1 items-center">
          <span className="mr-1 text-base font-medium leading-5 text-label-1 dark:text-dark-label-1">
            {solved}
          </span>
          <span className="text-xs font-medium text-label-4 dark:text-dark-label-4">/{total}</span>
        </div>
        <div className="lc-lg:hidden lc-xl:inline text-label-3 dark:text-dark-label-3">
          <span className="space-x-1.5">
            <span>Beats</span>
            <span className="font-medium text-label-2 dark:text-dark-label-2">{beats}%</span>
          </span>
        </div>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full  max-w-none">
        <div className={`absolute h-full w-full bg-${progressColor}-100 dark:bg-dark-${progressColor}-100`} />
        <div
          className={`absolute h-full rounded-full transition-all duration-300 ease-out bg-${progressColor}-500 dark:bg-dark-${progressColor}-500`}
          style={{ width: `${(solved / total) * 100}%` }}
        />
      </div>
    </div>
  );
};

const ProgressComponent: React.FC = () => {
  const data = [
    { difficulty: 'Easy', solved: 140, total: 780, beats: 95.3, progressColor: 'green' },
    { difficulty: 'Medium', solved: 129, total: 1615, beats: 89.5, progressColor: 'yellow' },
    { difficulty: 'Hard', solved: 26, total: 683, beats: 82.7, progressColor: 'red' },
  ];

  return (
    <div className="lc-xl:mx-8 mx-3 flex items-center">
      <div className="lc-xl:max-w-[250px] flex w-full flex-col space-y-4">
        {data.map((item) => (
          <ProgressItem key={item.difficulty} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProgressComponent;
