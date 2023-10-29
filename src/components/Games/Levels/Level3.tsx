import * as React from 'react';

interface ILevel3Props {
    onComplete: () => void;
}

const Level3: React.FunctionComponent<ILevel3Props> = ({onComplete}) => {
    return (
        <div>
          <h1>Level 3</h1>
          {/* Your Level 1 interface */}
          <button onClick={onComplete}>Complete Level</button>
        </div>
      );
};

export default Level3;
