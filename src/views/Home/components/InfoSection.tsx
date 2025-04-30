import React, { ReactNode } from 'react'
import aboutUs from '@/assets/images/about_us.gif'
import mission from '@/assets/images/our_mission.gif'
import challenges from '@/assets/images/challenges_solve.gif'

interface SectionProps {
    img: any
    icon1: ReactNode
    icon2: ReactNode
    title: string
    content1: string
    content2: string
    icontitle1: string
    iconp1: string
    icontitle2: string
    iconp2: string
    status: 'left' | 'right'
}

const Section: React.FC<SectionProps> = ({
    status,
    img,
    icon1,
    icon2,
    title,
    content1,
    content2,
    icontitle1,
    iconp1,
    icontitle2,
    iconp2,
}) => {
    return (
        <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Image Section */}
            <div
                className={`w-full lg:w-1/2 flex items-center justify-center ${status && 'order-last lg:order-first'}`}
            >
                <img
                    src={img}
                    alt="About us"
                    className="w-full object-cover rounded-lg max-w-[400px]"
                />
            </div>

            {/* Content Section */}
            <div
                className={`w-full lg:w-1/2 ${status && 'order-first lg:order-last'}`}
            >
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        {title}
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                </div>

                <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">{content1}</p>

                    <p className="text-gray-600 leading-relaxed">{content2}</p>
                </div>

                {/* Feature Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                {icon1}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">
                                {icontitle1}
                            </h4>
                            <p className="text-sm text-gray-600">{iconp1}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                {icon2}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">
                                {icontitle2}
                            </h4>
                            <p className="text-sm text-gray-600">{iconp2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FullPageSections = () => {
    const sections = [
        {
            img: aboutUs,
            icon1: (
                <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                </svg>
            ),
            icon2: (
                <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            ),
            title: 'About Us',
            content1:
                'We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders.',
            content2:
                'Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience.',
            icontitle1: 'Modern Solutions',
            iconp1: 'Leveraging AI technology for healthcare',
            icontitle2: 'Patient-Centric',
            iconp2: 'Personalized healthcare experiences',
            status: 'left',
        },
        {
            img: mission,
            icon1: (
                <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            icon2: (
                <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                </svg>
            ),
            title: 'Our Mission',
            content1:
                'Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.',
            content2:
                'We strive to become the leading platform for healthcare tourism management and digital transformation.',
            icontitle1: 'Modern Solutions',
            iconp1: 'Leveraging AI technology for healthcare',
            icontitle2: 'Patient-Centric',
            iconp2: 'Personalized healthcare experiences',
            status: 'left',
        },
    ]


    return (
        <div className="scroll-smooth max-w-[1538px] mx-auto">
            <div className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col gap-y-32">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <img
                            src={aboutUs}
                            alt="About us"
                            className="w-full object-cover rounded-lg max-w-[400px]"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                About Us
                            </h2>
                            <div className="h-1 w-20 bg-primary rounded-full"></div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-600 leading-relaxed">
                                We are a pioneering AI-driven platform focused
                                on revolutionizing the medical tourism industry.
                                By addressing inefficiencies and
                                disorganization, we empower healthcare
                                facilitators to modernize their operations,
                                attract more patients, and deliver seamless,
                                personalized care across borders.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                Our cutting-edge solutions are designed to
                                streamline processes and enhance the overall
                                patient experience.
                            </p>
                        </div>

                        {/* Feature Points */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <svg
                                            className="w-6 h-6 text-primary"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">
                                        Modern Solutions
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Leveraging AI technology for healthcare
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <svg
                                            className="w-6 h-6 text-primary"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">
                                        Patient-Centric
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Personalized healthcare experiences
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Image Section - Will appear first on mobile */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center order-first lg:order-last">
                        <img
                            src={mission}
                            alt="Our Mission"
                            className="w-full object-cover rounded-lg max-w-md"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 order-last lg:order-first">
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                Our Mission
                            </h2>
                            <div className="h-1 w-20 bg-primary rounded-full"></div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-600 leading-relaxed">
                                Our mission is to simplify the complex medical
                                tourism process by leveraging advanced AI tools
                                that optimize healthcare facilitators
                                operations, maximize revenue opportunities, and
                                provide patients with personalized and
                                stress-free treatment journeys.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                We strive to become the leading platform for
                                healthcare tourism management and digital
                                transformation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <svg
                                            className="w-6 h-6 text-primary"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">
                                        AI-Powered Solutions
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Optimizing operations with advanced
                                        technology
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <svg
                                            className="w-6 h-6 text-primary"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">
                                        Growth Focus
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Maximizing revenue and opportunities
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Image Section - Left Side */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <img
                            src={challenges}
                            alt="Challenges in Medical Tourism"
                            className="w-full object-cover rounded-lg max-w-[400px]"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                The Challenges We Solve
                            </h2>
                            <div className="h-1 w-20 bg-primary rounded-full"></div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-gray-600 leading-relaxed">
                                Medical tourism, especially in India, is plagued
                                by disorganization and inefficiency.
                                Facilitators often rely on outdated methods,
                                leading to delayed bookings, inadequate patient
                                support, and missed growth opportunities.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                Our platform addresses these pain points by
                                streamlining lead management and improving
                                operational efficiency for facilitators and
                                hospitals alike.
                            </p>
                        </div>

                        {/* Feature Points */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <svg
                                            className="w-6 h-6 text-primary"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">
                                        Efficient Operations
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Streamlined booking and management
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <svg
                                            className="w-6 h-6 text-primary"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">
                                        Enhanced Support
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Improved patient communication
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default FullPageSections
