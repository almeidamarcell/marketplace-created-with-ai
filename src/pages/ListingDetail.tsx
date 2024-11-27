import React from 'react';
import { useParams } from 'react-router-dom';
import AcquisitionDetails from '../components/acquisition/AcquisitionDetails';
import CustomerMetrics from '../components/metrics/CustomerMetrics';
import WebTrafficChart from '../components/metrics/WebTrafficChart';
import BusinessDetails from '../components/business/BusinessDetails';
import ListingActions from '../components/listings/ListingActions';
import '../components/charts/ChartConfig';

export default function ListingDetail() {
  const { id } = useParams();

  const analyticsData = {
    labels: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024'],
    datasets: [{
      label: 'Users',
      data: [2.76, 3.35, 3.69, 3.08, 3.57, 3.7, 3.82, 3.66, 3.53, 4.53, 4.42, 4.08],
      borderColor: 'rgb(59, 130, 246)',
      tension: 0.4,
    }]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-8">
            <AcquisitionDetails />

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-6">Metrics</h2>
              <div className="space-y-8">
                <CustomerMetrics />
                <WebTrafficChart data={analyticsData} />
              </div>
            </div>

            <BusinessDetails />
          </div>

          <div>
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <ListingActions listingId={id || ''} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}