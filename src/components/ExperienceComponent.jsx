import React from 'react';

const ExperienceComponent = () => {
    return (
        <div className="flex flex-col lg:px-20 py-10 pr-11 font-sans 
        tracking-wider subpixel-antialiased ...">
            {/* Experience Card */}
            <div className="group w-full grid grid-cols-1 sm:grid-cols-[100px_1fr] 
             hover:bg-[#10203b] rounded-lg transition-all gap-4 p-4">
                {/* Date */}
                <div className="flex gap-1 text-sm text-gray-300 mt-2">
                    <span className="">2019</span>
                    <span className="h-[1px] w-3 mt-2.5 bg-gray-400"></span>
                    <span className="">2021</span>
                </div>

                {/* Job Details */}
                <div>
                    <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-[#86fce0]">
                        Mobile Application Development
                    </h2>
                    <h4 className="text-sm text-gray-400 mb-2">
                        Masters, Lublin University of Technology, Poland.
                    </h4>
                    <p className="text-sm text-gray-300 mb-4">
                        Collected and implemented data to improve the design and development of field drawings.
                        Used ServiceNow to create and manage production incident tickets, improving response time.
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-4 text-sm text-[#64ffda]">
                        <span className="bg-[#162b4f] px-3 py-1 rounded-full">Adroid Application Development</span>
                        <span className="bg-[#162b4f] px-3 py-1 rounded-full">Web development</span>
                        <span className="bg-[#162b4f] px-3 py-1 rounded-full">Microsoft PowerBI</span>
                        <span className="bg-[#162b4f] px-3 py-1 rounded-full">Human Resources</span>
                        <span className="bg-[#162b4f] px-3 py-1 rounded-full">Linux</span>
                    </div>
                </div>
            </div>

            {/* You can duplicate the above block for other experiences if needed */}
            {/* Experience Card */}
            <div className="group p-4 mt-6 w-full grid grid-cols-1 sm:grid-cols-[100px_1fr] 
            gap-4 hover:bg-[#10203b] rounded-lg transition-all">
                {/* Date */}
                <div className="flex gap-1 text-sm text-gray-300 mt-2">
                    <span className="">2017</span>
                    <span className="h-[1px] w-3 mt-2.5 bg-gray-400"></span>
                    <span className="">2019</span>
                </div>

                {/* Job Details */}
                <div>
                    <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-[#86fce0]">
                        Junior GIS Engineer
                    </h2>
                    <h4 className="text-sm text-gray-400 mb-2">
                        Cyient, Hyderabad, India
                    </h4>
                    <p className="text-sm text-gray-300 mb-4">
                        Collected and implemented data to improve the design and development of field drawings.
                        Used ServiceNow to create and manage production incident tickets, improving response time.
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-4 text-sm text-[#64ffda]">
                        <span className="bg-[#162b4f] px-3 py-1 rounded-full">AutoCAD</span>
                        <span className="bg-[#162b4f] px-3 py-1 rounded-full">Data Management</span>
                        <span className="bg-[#162b4f] px-3 py-1 rounded-full">ServiceNow</span>
                    </div>
                </div>
            </div>

            <div className="group p-4 mt-6 w-full grid grid-cols-1 sm:grid-cols-[100px_1fr] 
            gap-4 hover:bg-[#10203b] rounded-lg transition-all">
                {/* Date */}
                <div className="flex gap-1 text-sm text-gray-300 mt-2">
                    <span className="">2016</span>
                    <span className="h-[1px] w-3 mt-2.5 bg-gray-300"></span>
                    <span className="">2017</span>
                </div>

                {/* Job Details */}
                <div>
                    <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-[#86fce0]">
                        Android Application Developer
                    </h2>
                    <h4 className="text-sm text-gray-400 mb-2">
                        InfoTech, Hyderabad, India
                    </h4>
                    <p className="text-sm text-gray-300 mb-4">
                        Collected and implemented data to improve the design and development of field drawings.
                        Used ServiceNow to create and manage production incident tickets, improving response time.
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-4 text-sm text-[#64ffda]">
                        <span className="bg-[#162b4f] px-3 py-1 rounded-full">Java</span>
                        <span className="bg-[#162b4f] px-3 py-1 rounded-full">XML</span>
                        <span className="bg-[#162b4f] px-3 py-1 rounded-full">Manual Testing</span>
                        <span className="bg-[#162b4f] px-3 py-1 rounded-full">Android Studio</span>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ExperienceComponent;
