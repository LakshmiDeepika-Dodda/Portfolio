import { Button } from "reactstrap";
import VideoPlayerComponent from "./VideoPlayerComponent";
import { useState } from "react";


const ProjectsComponent = () => {

  const [videoUrl, setvideoUrl] = useState(null);
  if (videoUrl) {
    return (
      <VideoPlayerComponent
        videoURL={videoUrl}
        goback={() => setvideoUrl(null)}
      />
    );
  }


  return (
    <div className=" text-justify py-6 bg-[#0a192f] font-sans tracking-tighter gap-4">

      {/*Todo list application*/}
      <div className="max-w-md mx-auto my-4 rounded-xl
       shadow-md overflow-hidden md:max-w-2xl hover:bg-[#10203b] group">
        <div className="md:flex">
          <div className="md:flex-shrink-0 p-5">
            <img className="h-24 w-32 object-fill md:h-28 md:w-36 rounded-xl border-2 border-blue-800"
              src="todo.png" alt="Man looking at item at a store"></img>
          </div>
          <div className="lg:text-start pt-4">
            <div className="font-semibold text-white
              group-hover:text-mint">TODOList Application</div>
            <p className="mt-2 text-gray-400">It's a simple TODO list application built with ReactJS that lets users add, delete, and manage tasks.
              The app uses JSON data (via JSON server) to store and retrieve task information dynamically.</p>
            <div className='flex justify-start gap-4 pb-2'>
              {/*Github link*/}
              <Button
                tag="a"
                href="https://github.com/deepikavirajith/Todo-List"
                target="_blank"
                rel="noopener noreferrer"
                className="flex px-3 py-1 bg-[#162b4f] rounded-full w-fit text-mint mt-6"
              >
                Github
              </Button>

              <Button className="flex px-3 py-1 bg-[#162b4f] rounded-full w-fit  text-mint mt-6"
                onClick={() => setvideoUrl("media1.mp4")}>
                Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/*storePurchase application*/}
      <div className="max-w-md mx-auto my-4 rounded-xl
       shadow-md overflow-hidden md:max-w-2xl hover:bg-[#10203b] group">
        <div className="md:flex">
          <div className="md:flex-shrink-0 p-5">
            <img className="h-24 w-32 object-fill md:h-28 md:w-36 rounded-xl border-2 border-blue-800"
              src="customer.jpg" alt="Man looking at item at a store"></img>
          </div>
          <div className="lg:text-start pt-4">
            <div className="font-semibold text-white
              group-hover:text-mint">CustomerInformation</div>
            <p className="mt-2 text-gray-400">A clean and easy-to-use ReactJS app to manage customer details and their purchases.
              It lets you add, view, and delete customer records, with data stored using a JSON server.</p>
            <div className='flex justify-start gap-4 pb-2'>
              {/*Github link*/}
              <Button
                tag="a"
                href="https://github.com/deepikavirajith/customerDetails"
                target="_blank"
                rel="noopener noreferrer"
                className="flex px-3 py-1 bg-[#162b4f] rounded-full w-fit text-mint mt-6"
              >
                Github
              </Button>
              <Button className="flex px-3 py-1 bg-[#162b4f] rounded-full w-fit  text-mint mt-6"
                onClick={() => setvideoUrl("media2.mp4")}>
                Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/*Contacts application*/}
      <div className="max-w-md mx-auto my-4 rounded-xl
       shadow-md overflow-hidden md:max-w-2xl hover:bg-[#10203b] group">
        <div className="md:flex">
          <div className="md:flex-shrink-0 p-5">
            <img className="h-24 w-32 object-fill md:h-28 md:w-36 rounded-xl border-2 border-blue-800"
              src="contacts.png" alt="Man looking at item at a store"></img>
          </div>
          <div className="lg:text-start pt-4">
            <div className="font-semibold text-white
              group-hover:text-mint">Contacts Application</div>
            <p className="mt-2 text-gray-400">A modern contact management app built with ReactJS, Redux Toolkit, and React Router.
              It uses Axios to interact with a JSON server and Toastify for clean user notifications.
              Easily add, view, edit, and delete contacts in a smooth, responsive interface.</p>
            <div className='flex justify-start gap-4 pb-2'>
              {/*Github link*/}
              <Button
                tag="a"
                href="https://github.com/deepikavirajith/ContactsApplication_with_Redux"
                target="_blank"
                rel="noopener noreferrer"
                className="flex px-3 py-1 bg-[#162b4f] rounded-full w-fit text-mint mt-6"
              >
                Github
              </Button>
              <Button className="flex px-3 py-1 bg-[#162b4f] rounded-full w-fit  text-mint mt-6"
                onClick={() => setvideoUrl("media3.mp4")}>
                Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

       {/*Portfolio application*/}
      <div className="max-w-md mx-auto my-4 rounded-xl
       shadow-md overflow-hidden md:max-w-2xl hover:bg-[#10203b] group">
        <div className="md:flex">
          <div className="md:flex-shrink-0 p-5">
            <img className="h-24 w-32 object-fill md:h-28 md:w-36 rounded-xl border-2 border-blue-800"
              src="port.png" alt="Man looking at item at a store"></img>
          </div>
          <div className="lg:text-start pt-4">
            <div className="font-semibold text-white
              group-hover:text-mint">Porfolio application</div>
            <p className="mt-2 text-gray-400">A personal portfolio website built with ReactJS 
              and styled using TailwindCSS. It interactive hover effects and responsive grid layouts.
              Designed to showcase about the work done in past and user experience in a modern, 
              user-friendly format.</p>
            <div className='flex justify-start gap-4 pb-2'>
              {/*Github link*/}
              <Button
                tag="a"
                href="https://github.com/deepikavirajith/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex px-3 py-1 bg-[#162b4f] rounded-full w-fit text-mint mt-6"
              >
                Github
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsComponent;