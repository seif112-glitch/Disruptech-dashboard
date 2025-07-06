import React from 'react';
import { Calendar, FileText, TrendingUp, Users, DollarSign } from 'lucide-react';

export const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'capital_call',
      title: 'Capital Call - Fund II',
      description: 'New capital call of $150K requested',
      date: '2 hours ago',
      icon: DollarSign,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      type: 'performance',
      title: 'Portfolio Update',
      description: 'TechCorp valuation increased by 15%',
      date: '5 hours ago',
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      id: 3,
      type: 'document',
      title: 'Q3 Report Available',
      description: 'Quarterly report has been uploaded',
      date: '1 day ago',
      icon: FileText,
      color: 'bg-purple-500'
    },
    {
      id: 4,
      type: 'meeting',
      title: 'Investor Meeting',
      description: 'Annual investor meeting scheduled',
      date: '2 days ago',
      icon: Users,
      color: 'bg-orange-500'
    },
    {
      id: 5,
      type: 'distribution',
      title: 'Distribution Notice',
      description: 'Fund I distribution of $75K processed',
      date: '3 days ago',
      icon: Calendar,
      color: 'bg-teal-500'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`p-2 rounded-lg ${activity.color}`}>
                <Icon className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {activity.description}
                </p>
              </div>
              <div className="text-xs text-gray-400 whitespace-nowrap">
                {activity.date}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View all activity →
        </button>
      </div>
    </div>
  );
};