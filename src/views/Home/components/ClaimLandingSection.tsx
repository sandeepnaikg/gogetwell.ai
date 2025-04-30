import PatientSignUpPopup from '@/views/auth/PatientSignUp/Popup';
import React from 'react';
import { BiBot, BiGlobe, BiMessageSquare, BiTrendingUp } from 'react-icons/bi';
import { CgLock } from 'react-icons/cg';
import { FaUsers } from 'react-icons/fa';
import { LuBuilding2 } from 'react-icons/lu';

const ClaimLandingSection = () => {
    const features = [
        { icon: <BiGlobe className="w-6 h-6 text-primary" />, title: 'Online Website With AI Agent', description: 'Intelligent digital presence' },
        { icon: <LuBuilding2 className="w-6 h-6 text-primary" />, title: 'Build Digital Business', description: 'Scale your operations' },
        { icon: <BiMessageSquare className="w-6 h-6 text-primary" />, title: 'Patient Conversation', description: 'Seamless communication' },
        { icon: <BiTrendingUp className="w-6 h-6 text-primary" />, title: 'Boost Revenue', description: 'Increase your earnings' },
        { icon: <FaUsers className="w-6 h-6 text-primary" />, title: 'Lead Generation Support', description: 'Convert visitors to clients' },
        { icon: <CgLock className="w-6 h-6 text-primary" />, title: '24/7 Support for patient', description: 'Round-the-clock assistance' }
    ];

    return (
        <div className="bg-gradient-to-br from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center space-x-4">
                                <div className="bg-indigo-100 p-3 rounded-lg">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="bg-primary p-4 rounded-full">
                        <BiBot className="w-12 h-12 text-white" />
                    </div>

                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Claim Your Digital Front Office (Website)
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Use power AI to transform your online presence and automate patient interactions
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="space-y-4 w-full max-w-md">
                        <input
                            disabled
                            type="text"
                            placeholder="GoGetWell.ai/your_name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <PatientSignUpPopup hcfLogin popupButtonStatus buttonChildren={<button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
                            Join the Waiting List
                        </button>} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClaimLandingSection;