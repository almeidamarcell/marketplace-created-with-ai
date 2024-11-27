import React from 'react';
import { Users, DollarSign, TrendingUp } from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const MetricCard = ({ icon, label, value }: MetricCardProps) => (
  <div className="bg-gray-50 rounded-lg p-4">
    <div className="flex items-center gap-2 mb-2">
      {icon}
      <span className="text-sm text-gray-500">{label}</span>
    </div>
    <p className="text-2xl font-semibold">{value}</p>
  </div>
);

export default function CustomerMetrics() {
  return (
    <div>
      <h3 className="text-sm font-medium text-gray-500 uppercase mb-4">Customer metrics</h3>
      <div className="grid grid-cols-3 gap-4">
        <MetricCard
          icon={<Users className="h-5 w-5 text-blue-600" />}
          label="CUSTOMERS"
          value="10-100"
        />
        <MetricCard
          icon={<DollarSign className="h-5 w-5 text-blue-600" />}
          label="ANNUAL RECURRING REVENUE"
          value="$1.1M"
        />
        <MetricCard
          icon={<TrendingUp className="h-5 w-5 text-blue-600" />}
          label="ANNUAL GROWTH RATE"
          value="1%"
        />
      </div>
    </div>
  );
}