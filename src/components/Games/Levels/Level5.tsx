import * as React from 'react';

interface ILevel5Props {
    onComplete: () => void;
}

const Level5: React.FunctionComponent<ILevel5Props> = ({onComplete}) => {
    return (
        <div>
          <h1>Level 5</h1>
          {/* Your Level 1 interface */}
          <button onClick={onComplete}>Complete Level</button>
        </div>
      );
};

export default Level5;
