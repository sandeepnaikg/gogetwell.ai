import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-indigo-100">
		<button
            onClick={onClick}
            className="w-full py-2 px-0 md:px-4 flex items-center justify-between text-left transition-colors hover:bg-indigo-50/50 rounded-lg"
        >
            <h3 className="text-[16px] leading-[1.2] font-medium text-gray-900 pr-8">{question}</h3>
            <div className={`flex-shrink-0 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <BiChevronDown className="w-5 h-5 text-indigo-600" />
            </div>
        </button>

        <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
        >
            <div className="p-2 md:p-4 pt-0 text-gray-600">
                {answer}
            </div>
        </div>
    </div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqData = [
        {
            que: 'What is gogetwell.ai?',
            ans: 'gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication.',
        },
        {
            que: 'What is the AI Front Office for Healthcare Agents?',
            ans: 'The AI Front Office is a powerful platform that helps me manage my healthcare services more efficiently. It handles patient leads, books appointments, and even builds a professional website—all using AI, so I can focus on delivering care.',
        },
        {
            que: 'How does the AI Agent assist me in my healthcare business?',
            ans: 'The AI Agent works like a virtual assistant, answering patient questions, scheduling consultations, and managing appointments in real time. It helps me automate everyday tasks, saving me time and boosting my productivity.',
        },
        {
            que: 'Can I customize the website for my healthcare services?',
            ans: 'Yes, I can fully customize the website to showcase my services. I get to choose the design, features, and content that best represent my brand, making it easy to attract and engage with patients.',
        },
        {
            que: 'How does this platform support independent healthcare facilitators like me?',
            ans: 'The platform is designed specifically for independent facilitators or small teams. It integrates AI to automate my front-office tasks, manage patient leads, and even process payments, making it ideal for gig economy professionals.',
        },
        {
            que: 'How does the platform help me manage patient leads?',
            ans: 'The AI system captures, organizes, and prioritizes patient leads for me. It follows up with patients, schedules consultations, and makes sure I never miss an opportunity to provide care.',
        },
        {
            que: 'Is it easy to integrate the platform with the hospitals I work with?',
            ans: 'Yes, the platform easily connects with the hospital systems I collaborate with. It helps me manage billing, communication, and partnerships without any hassle.',
        },
        {
            que: 'Is the platform secure and compliant with healthcare regulations?',
            ans: "Absolutely. The platform is designed with top-level security measures and complies with healthcare regulations, so I know that my patients' data is always protected.",
        },
        {
            que: 'How quickly can I get started with the platform?',
            ans: 'Setting up the platform is fast and easy. I can create my AI-powered front office and website in no time, and the support team guides me through the entire process.',
        },
        {
            que: 'What kind of customer support is available if I need help?',
            ans: 'I have access to 24/7 customer support, along with tutorials and live demos, to make sure I get the most out of the platform and can resolve any issues quickly.',
        },
        {
            que: 'How does the platform help me attract more patients?',
            ans: 'The platform allows me to create a custom, SEO-optimized website, manage patient communication, and build a strong online reputation, all of which help me attract and retain more patients.',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-16 px-2 md:px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                </div>

                {/* FAQ Items */}
                <div className="space-y-2 bg-white rounded-2xl shadow-xl p-6">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.que}
                            answer={faq.ans}
                            isOpen={index === openIndex}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;