import React from 'react';
import styled from 'styled-components';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const Sec = styled.section`
  max-width: 50rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;
const Totally = styled.h1`
  font-size: 1.6rem;
  font-family: 'Poppins';
  color: #333;
  padding: 2rem;
  border-radius: 23px;
  background: #f9f9f9;
  box-shadow: 7px 7px 14px #848484, -7px -7px 14px #e6e6e6;
  margin-top: 2rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1.2rem;
    text-align: center;
  }
`;

const GraphSt = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    padding: 2rem;
  }
`;

const Pie = styled.div`
  border-radius: 23px;
  background: #f9f9f9;
  padding: 1rem;
  box-shadow: 7px 7px 14px #848484, -7px -7px 14px #e6e6e6;
`;

const Chart = styled.div`
  border-radius: 23px;
  background: #f9f9f9;
  box-shadow: 7px 7px 14px #848484, -7px -7px 14px #e6e6e6;
  padding: 1rem;
`;

const UserStats = ({ data }) => {
  const [graphs, setGraphs] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const graphData = data.map((item) => {
    return {
      x: item.title,
      y: Number(item.acessos),
    };
  });

  React.useEffect(() => {
    setTotal(
      data
        .map(({ acessos }) => Number(acessos))
        .reduce((a, b) => {
          return a + b;
        }, 0),
    );
    setGraphs(graphData);
    console.log(data);
  }, [data]);

  return (
    <Sec>
      <Totally>Acessos: {total}</Totally>

      <GraphSt>
        <Pie>
          <VictoryPie
            data={graphs}
            innerRadius={25}
            colorScale="red"
            padding={{ top: 20, right: 80, bottom: 20, left: 80 }}
            style={{
              fontSize: '18px',
              data: {
                fillOpacity: 0.9,
                stroke: '#fff',
                strokeWidth: 2,
              },
              labels: {
                fontSize: 14,
                fill: '#333',
              },
            }}
          />
        </Pie>
        <Chart>
          <VictoryChart height={400}>
            <VictoryBar alignment="start" data={graphs}></VictoryBar>
          </VictoryChart>
        </Chart>
      </GraphSt>
    </Sec>
  );
};

export default UserStats;
