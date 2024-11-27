import React from 'react';
import { Line } from 'react-chartjs-2';
import { chartDefaults } from '../charts/ChartConfig';

interface Props {
  data: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      borderColor: string;
      tension: number;
    }>;
  };
}

export default function WebTrafficChart({ data }: Props) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium text-gray-500 uppercase">Web traffic by</h3>
          <img src="https://www.google.com/images/about/analytics-154px.png" alt="Google Analytics" className="h-4" />
        </div>
        <span className="text-sm text-gray-500">Last updated 28 days ago</span>
      </div>

      <div className="border rounded-lg p-6">
        <div className="flex gap-8 mb-6">
          <div className="border-r pr-8">
            <h4 className="text-sm font-medium mb-2">Audience</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Users</li>
              <li>Sessions</li>
              <li>Bounce rate</li>
              <li>Avg. session duration</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Acquisition</h4>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-4">Users</h4>
          <div className="h-64">
            <Line data={data} options={chartDefaults} />
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500">
                  {data.labels.map((label) => (
                    <th key={label} className="px-2 py-1">{label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-900">
                  {data.datasets[0].data.map((value, index) => (
                    <td key={index} className="px-2 py-1 text-center">{value}k</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}