import React from 'react';

interface StatCard {
  title: string;
  value: string | number;
  icon: string;
  color: string;
  bgColor: string;
}

const Dashboard: React.FC = () => {
  const stats: StatCard[] = [
    {
      title: 'Active Programmes',
      value: '5',
      icon: '🎓',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Departments',
      value: '12',
      icon: '🏢',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Total Teachers',
      value: '156',
      icon: '👨‍🏫',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Total Subjects',
      value: '342',
      icon: '📚',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Available Rooms',
      value: '48',
      icon: '🚪',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
    },
    {
      title: 'Generated Routines',
      value: '24',
      icon: '⏰',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
    },
  ];

  const recentActivities = [
    {
      text: 'New routine generated for B.Tech CST Sem 5',
      time: '2 hours ago',
      status: 'success',
      icon: '✅',
    },
    {
      text: 'Department "Electronics Engineering" updated',
      time: '5 hours ago',
      status: 'info',
      icon: 'ℹ️',
    },
    {
      text: 'Teacher "Dr. Smith" added to Mathematics dept',
      time: '1 day ago',
      status: 'info',
      icon: 'ℹ️',
    },
    {
      text: 'Routine committed for M.Sc Physics Sem 3',
      time: '2 days ago',
      status: 'success',
      icon: '✅',
    },
    {
      text: 'New session "Fall 2025" created',
      time: '3 days ago',
      status: 'warning',
      icon: '⚠️',
    },
  ];

  const quickActions = [
    {
      title: 'Generate New Routine',
      description: 'Create schedule for a semester',
      icon: '🎯',
    },
    {
      title: 'Add Programme',
      description: 'Create new academic programme',
      icon: '➕',
    },
    {
      title: 'Manage Teachers',
      description: 'Add or update faculty members',
      icon: '👥',
    },
    {
      title: 'View Reports',
      description: 'Check routine statistics',
      icon: '📊',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-gray-600 text-lg">
          Welcome to ICRoGen - Manage your academic schedules efficiently
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200/50`}
          >
            <div className="flex flex-col gap-3">
              <div
                className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}
              >
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium mt-1">{stat.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <span className="text-xl">📈</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Recent Activities</h2>
          </div>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-4 rounded-xl border-l-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-md ${
                  activity.status === 'success'
                    ? 'bg-green-50 border-green-500'
                    : activity.status === 'warning'
                    ? 'bg-yellow-50 border-yellow-500'
                    : 'bg-blue-50 border-blue-500'
                }`}
              >
                <div className="text-2xl">{activity.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-800 font-medium">{activity.text}</p>
                  <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    activity.status === 'success'
                      ? 'bg-green-100 text-green-700'
                      : activity.status === 'warning'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <span className="text-xl">⚡</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Quick Actions</h2>
          </div>
          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-200 hover:scale-[1.02] hover:shadow-md group"
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl group-hover:scale-110 transition-transform">
                    {action.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{action.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;