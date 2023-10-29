import * as React from 'react';

interface ILevel1Props {
    onComplete: () => void;
}

const Level1: React.FunctionComponent<ILevel1Props> = ({onComplete}) => {
    return (
        <div>
          <h1>Level 1</h1>
          {/* Your Level 1 interface */}
          <button onClick={onComplete}>Complete Level</button>
        </div>
      );
};

export default Level1;
