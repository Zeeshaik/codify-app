import * as React from 'react';

interface ILevel4Props {
    onComplete: () => void;
}

const Level4: React.FunctionComponent<ILevel4Props> = ({onComplete}) => {
    return (
        <div>
          <h1>Level 4</h1>
          {/* Your Level 1 interface */}
          <button onClick={onComplete}>Complete Level</button>
        </div>
      );
};

export default Level4;
