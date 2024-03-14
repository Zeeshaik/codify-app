import React, { useEffect, useState } from "react";
import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory";

interface CircularProgressProps {}

interface CircularProgressState {
  percent: number;
}

const CircularProgress: React.FC<CircularProgressProps> = () => {
  const [percent, setPercent] = useState<string>("25" as string); // Ensure initial value is a number

  useEffect(() => {
    const setStateInterval = window.setInterval(() => {
        let percentVal = parseInt(percent);
      let newPercent = percentVal + Math.random() * 25;
      newPercent = newPercent > 100 ? 0 : newPercent;
      let newPercentStr = newPercent.toString();
      setPercent(newPercentStr); // Assert if you're certain it's a number
    }, 2000);
    
    return () => {
      window.clearInterval(setStateInterval);
    };
  }, [percent]);

  return (
    <div>
      <svg viewBox="0 0 400 400" width="50%" height="50%">
        <VictoryPie
          standalone={false}
          animate={{ duration: 1000 }}
          width={400}
          height={400}
          data={[{ x: 1, y: Number(percent) }, { x: 2, y: 100 - Number(percent) }]}
          innerRadius={120}
          cornerRadius={25}
          labels={() => null}
          style={{
            data: {
              fill: ({ datum }) => {
                const color = datum.y > 30 ? "green" : "red";
                return datum.x === 1 ? color : "transparent";
              },
            },
            labels: {
              fill: "white", // Set label fill color to white
              fontSize: 45,
            },
          }}
        />
        <VictoryAnimation duration={500} data={{ percent }}>
          {(newProps) => (
            <VictoryLabel
              textAnchor="middle"
              verticalAnchor="middle"
              x={200}
              y={200}
              text={`${Math.round(parseInt(percent))}%`}
              style={{ fontSize: 45, fill: "white"}}
            />
          )}
        </VictoryAnimation>
      </svg>
    </div>
  );
};

export default CircularProgress;
