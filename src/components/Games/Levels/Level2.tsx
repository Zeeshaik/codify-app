import * as React from 'react';

interface ILevel3Props {
    onComplete: () => void;
}

const Level2: React.FunctionComponent<ILevel3Props> = ({onComplete}) => {
    return (
        <div>
          <h1>Level2</h1>
          {/* Your Level 1 interface */}
          <button onClick={onComplete}>Complete Level</button>
        </div>
      );
};

export default Level2;
