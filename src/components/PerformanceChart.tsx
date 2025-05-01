
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataPoint {
  name: string;
  score: number;
  time: number;
}

interface PerformanceChartProps {
  data: DataPoint[];
}

export function PerformanceChart({ data }: PerformanceChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" domain={[0, 100]} />
        <YAxis yAxisId="right" orientation="right" domain={[0, 'dataMax + 30']} />
        <Tooltip />
        <Legend />
        <Line 
          yAxisId="left"
          type="monotone" 
          dataKey="score" 
          stroke="#8884d8" 
          activeDot={{ r: 8 }}
          name="Score (%)"
        />
        <Line 
          yAxisId="right" 
          type="monotone" 
          dataKey="time" 
          stroke="#82ca9d" 
          name="Time (seconds)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
