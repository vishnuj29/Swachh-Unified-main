import React from 'react';
import { Home, Users, Settings } from 'lucide-react';

interface UserRoleCard {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  redirectUrl: string;
  gradientFrom: string;
  gradientTo: string;
}

const userRoles: UserRoleCard[] = [
  {
    id: 'citizen',
    icon: Home,
    title: 'SWACHH',
    subtitle: 'Citizen Portal',
    description: 'Manage your household waste, track your eco-friendly contributions, and earn rewards for a greener community.',
    redirectUrl: 'https://project-sih-lemon.vercel.app/',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-emerald-600'
  },
  {
    id: 'worker',
    icon: Users,
    title: 'SWACHH SAATHI',
    subtitle: 'Worker Dashboard',
    description: 'Your daily companion for a safer and more rewarding work life. Get your routes, report issues, and access training.',
    redirectUrl: 'https://project-shawchh-sarthi.vercel.app/',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-cyan-600'
  },
  {
    id: 'admin',
    icon: Settings,
    title: 'SWACHH NIYANTRAN',
    subtitle: 'Admin Dashboard',
    description: 'Total control and oversight of the entire waste management system. Monitor live operations, manage workforce, and analyze key data.',
    redirectUrl: 'https://project-swachh-niyantran.vercel.app/',
    gradientFrom: 'from-indigo-500',
    gradientTo: 'to-purple-600'
  }
];

const handleCardClick = (url: string) => {
  window.location.href = url;
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-blue-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-10 w-24 h-24 bg-white/15 rounded-full blur-xl"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Welcome to the{' '}
            <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              Swachh Ecosystem
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
            Your journey towards a cleaner and healthier India begins here.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl w-full">
          {userRoles.map((role) => {
            const IconComponent = role.icon;
            return (
              <div
                key={role.id}
                onClick={() => handleCardClick(role.redirectUrl)}
                className="group bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-2 border border-white/20"
              >
                {/* Icon Section */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${role.gradientFrom} ${role.gradientTo} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                
                {/* Content Section */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      {role.title}
                    </h2>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {role.subtitle}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm line-height-loose">
                    {role.description}
                  </p>
                  
                  {/* Call to action */}
                  <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    <span>Click to access</span>
                    <svg 
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-white/70 text-sm">
            Building a sustainable future, one step at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;