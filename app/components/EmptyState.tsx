import Image from "next/image";

const EmptyState = () => {
  return (
    <div
      className="
    px-4
    py-10
    sm:px-6
    lg:px-8
    h-full
    flex
    justify-start
    bg-slate-50"
    >
      <div className="text-center items-center flex flex-col">
        <h3
          className="
          mt-2
          text-2xl
          font-semibold
          text-gray-900
          mb-5
        "
        >
          Welcome again to SkyChat!
        </h3>
        <p className="text-gray-500 mx-32 mb-5">
        Hello, my name is Javier Labrador and I am the developer of this application, I would like you to support me with a star by clicking on the repository below!
        </p>
        <a href="https://github.com/Jalch0/sky-chat-app" target="_blank">
        <div className="relative border-2 border-black/10 rounded-lg border-b-orange-400 w-[450px] hover:scale-110 transition shadow-xl">
          <div className="flex items-center justify-center">
            <Image
              src={
                "https://drive.google.com/uc?export=download&id=1RVkwDLgXEObDJaqaPIoDFqaoDWCYIcTU"
              }
              alt="Image from github repo"
              width="450"
              height="200"
            />
          </div>

          <div className="bg-white p-5">
            <div className=" text-start text-md font-semibold mb-1">
              <h3>Jalch0/sky-chat-app</h3>
            </div>
            <div className="mb-5">
              <p className="text-sm text-gray-500 text-start">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis minus totam deleniti dolorum maxime magnam incidunt
                iure inventore sunt iste suscipit.
              </p>
            </div>
            <div className="flex gap-2 text-sm">
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-black h-[10px] w-[10px] mr-1" />
                <p>NextJS</p>
              </div>
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-blue-900 h-[10px] w-[10px] mr-1" />

                <p>TypeScript</p>
              </div>
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-cyan-600 h-[10px] w-[10px] mr-1" />

                <p>Tailwind</p>
              </div>
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-emerald-800 h-[10px] w-[10px] mr-1" />

                <p>MongoDB</p>
              </div>
              <div className="flex justify-center items-center">
                <div className="rounded-full bg-slate-800 h-[10px] w-[10px] mr-1" />
                <p>Prisma</p>
              </div>
            </div>
          </div>
          <span className="absolute right-0 bottom-0 -mb-2 -mr-2 text-2xl">
            ⭐
          </span>
        </div>
        </a>
        <p className="text-gray-500 mx-32 mt-5 font-bold">
        To start, select a conversation that has already started or if you want to start a new chat, select the user you want to talk to!
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
