const SkillsComponent = () => {
    return (
        <div className="text-justify lg:pr-10 font-sans tracking-tighter text-gray-300 text-md py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
            justify-items-center">
                {/* Development */}
                <div>
                    <div className="flex flex-col items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                        <h3 className="font-semibold text-gray-300 text-lg">Development</h3>
                    </div>
                    <div className="hidden lg:grid grid-cols-3 gap-x-12 gap-y-4 py-4 text-[#64ffda]">
                        {['JavaScript', 'HTML5', 'CSS3', 'React', 'Nodejs', 'Angular',
                            'Java', 'Python', 'ObjectiveC'].map((tech, id) => (
                                <div
                                    key={id}
                                    className="flex items-center justify-center rounded-full h-20 w-20
                                    bg-[#122545] text-sm text-center"
                                >
                                    {tech}
                                </div>
                            ))}
                    </div>

                    <div className="lg:hidden flex flex-wrap gap-3 justify-center py-4 text-[#64ffda]">
                        {['JavaScript', 'HTML5', 'CSS3', 'React', 'Nodejs', 'Angular',
                            'Java', 'Python', 'ObjectiveC'].map((tech, id) => (
                                <span
                                    key={id}
                                    className="bg-[#122545] text-mint px-4 py-2 
                                    rounded-full text-sm border border-[#24519f] border-opacity-25"
                                >
                                    {tech}
                                </span>
                            ))}
                    </div>

                </div>

                {/* Tools & IDEs */}
                <div>
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                        </svg>

                        <h3 className="font-semibold text-lg text-gray-300 mt-1">Tools & IDEs</h3>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center py-4 lg:pl-8">
                        {['Visual Studio Code', 'Git + Github', 'Command Line', 'Chrome DevTools',
                            'Android Studio', 'Eclipse', 'ServiceNow', 'Tableau', 'PowerBI'].map((tool, id) => (
                                <span
                                    key={id}
                                    className="bg-[#122545] text-mint px-4 py-2 rounded-full 
                                    text-sm border border-[#24519f] border-opacity-25"
                                >
                                    {tool}
                                </span>
                            ))}
                    </div>
                </div>

                {/* Knowledge */}
                <div>
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>

                        <h3 className="font-semibold text-lg text-gray-300 mt-1">Knowledge</h3>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center items-center py-4">
                        {['SASS', 'LESS', 'TailwindCSS', 'SQL', 'Docker', 'Postman', 'HR'].map((item, id) => (
                            <span
                                key={id}
                                className="bg-[#122545] text-mint px-4 py-2 
                                rounded-full text-sm border border-[#24519f] 
                                border-opacity-25"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsComponent;
