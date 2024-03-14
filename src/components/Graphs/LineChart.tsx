import React from "react";
import { VictoryChart, VictoryLine, VictoryScatter, InterpolationPropType } from "victory";

interface ILineChartProps {
  data: { timestamp: number; score: number }[];
}

const LineChart: React.FunctionComponent<ILineChartProps> = ({ data }) => {
    
  const [polar, setPolar] = React.useState<boolean>(false);
  const [interpolation, setInterpolation] = React.useState<InterpolationPropType>("linear");
    console.log(data);
  const formattedData = data.map(({ timestamp, score }) => ({
    x: new Date(timestamp * 1000), // Convert timestamp to Date object
    y: score,
  }));

  const cartesianInterpolations = [
    "basis",
    "bundle",
    "cardinal",
    "catmullRom",
    "linear",
    "monotoneX",
    "monotoneY",
    "natural",
    "step",
    "stepAfter",
    "stepBefore",
  ];

  const polarInterpolations = ["basis", "cardinal", "catmullRom", "linear"];

  return (
    <div>
      <select
        className="bg-gray-900 p-2 rounded-2xl"
        value={interpolation}
        onChange={(event) => {
          const value = event.target.value as InterpolationPropType;
          setInterpolation(value);
        }}
        style={{ width: 75 }}
      >
        {polar
          ? polarInterpolations.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))
          : cartesianInterpolations.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
      </select>

      <VictoryChart polar={polar} width={600} height={350} style={{ }}>
        <VictoryLine
          interpolation={interpolation}
          data={formattedData}
          style={{ data: { stroke: "#c43a31" } }}
          key="line"
        />
        <VictoryScatter
          data={formattedData}
          size={6}
          style={{ data: { fill: "#c43a31" } }}
          key="scatter"
        />
      </VictoryChart>
    </div>
  );
};

export default LineChart;
