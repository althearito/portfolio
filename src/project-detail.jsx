import { useNavigate, useParams } from "react-router";
import projects from "./data/projects";
import { ArrowLeft } from "lucide-react";
import Footer from "./components/layout/footer";
import { useLayoutEffect } from "react";

export default function ProjectDetail() {
  const navigation = useNavigate();
  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));

  useLayoutEffect(() => {
    document.body.scrollTo({ top: 0 });
  }, []);

  return (
    <section id="projects" className="">
      <div className="min-h-px flex flex-col p-10 max-w-6xl mx-auto">
        <nav className="flex items-center  py-3 border-b border-gray-200">
          <button
            className="flex items-center text-gray-700 hover:text-black transition-colors cursor-pointer"
            onClick={() => navigation(-1)}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
          </button>
          <p className="ml-2">Back to Profile</p>
        </nav>

        {/* Title */}
        <div className="mt-8 space-y-6">
          <div className="flex flex-col items-center ">
            <div className="md:flex w-24 h-24 aspect-video items-center justify-center rounded-2xl mb-6 overflow-hidden hidden">
              <img src={project.logo} alt={project.title} />
            </div>
            <div className=" text-2xl text-left font-semibold text-neutral-900 tracking-wide md:text-center md:text-4xl justify-center flex">
              <div className="max-w-2xl">{project.title}</div>
            </div>
          </div>

          <div className="text-neutral-900 tracking-wide md:text-center md:text-xl ">
            {project.type} | {project.date}
          </div>
          <div className="aspect-video flex items-center justify-center bg-blue-50 rounded-2xl">
            <img src={project.img} alt={project.title} className="" />
          </div>
          {/* Project Overview */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-8">
                {project.keywords.map((keyword, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <div className="space-y-4 mt-12">
                <h2 className="text-2xl md:text-4xl font-semibold tracking-tight ">
                  Project Overview
                </h2>
                <div className="w-12 h-px bg-neutral-900"></div>
              </div>

              <div className="text-neutral-600">{project.description}</div>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="space-y-4 rounded-xl">
                <div className="text-xl text-left font-semibold text-neutral-900 tracking-wide">
                  The Challenge
                </div>
                <div className="text-neutral-600">{project.challenge}</div>
              </div>
              <div className="space-y-4 rounded-xl">
                <div className="text-xl text-left font-semibold text-neutral-900 tracking-wide">
                  The Solution
                </div>
                <div className="text-neutral-600">{project.solution}</div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border  border-neutral-200 rounded-xl p-4 space-y-2">
                <div className="font-semibold text-neutral-900 tracking-wide ">
                  Duration
                </div>
                <div className="text-neutral-600">{project.duration}</div>
              </div>
              <div className="border  border-neutral-200 rounded-xl p-4 space-y-2">
                <div className="font-semibold text-neutral-900 tracking-wide ">
                  The Team
                </div>
                <div className="text-neutral-600">{project.duration}</div>
              </div>
              {project.role && (
                <div className="border border-neutral-200 rounded-xl p-4 space-y-2">
                  <div className="font-semibold text-neutral-900 tracking-wide ">
                    My Role
                  </div>
                  <div className="text-neutral-600">
                    {project.role.map((el, index) => (
                      <p key={index}>{el}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Design Process */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-4 mt-12">
                <h2 className="text-2xl md:text-4xl font-semibold tracking-tight ">
                  Design Process
                </h2>
                <div className="w-12 h-px bg-neutral-900"></div>
              </div>
              <div className="max-w-6xl mx-auto flex flex-col md:space-x-12 space-y-8 md:space-y-0">
                <div className="space-y-4">
                  {project.process.map((process, index) => (
                    <div key={index} className="group">
                      <div className="flex flex-row md:items-center gap-8 md:gap-6 p-8 rounded-2xl hover:bg-neutral-50 transition-colors duration-30">
                        <div className="md:w-32 flex-shrink-0 text-center md:justify-center items-center flex">
                          <div className="rounded-full w-13 md:w-15 flex bg-neutral-100 text-center items-center justify-center">
                            <span className="text-sm md:text-xl font-medium tracking-wide text-neutral-800 p-4 rounded-full">
                              {process.id}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-2 md:w-8/12">
                          <h3 className="text-xl font-medium text-neutral-900">
                            {process.title}
                          </h3>
                          <p className="text-neutral-600 leading-relaxed">
                            {process.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ALTERNATE FEATURES */}
          <div className="space-y-8 ">
            <div className="space-y-4 mt-12">
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight ">
                Highlighted Features
              </h2>
              <div className="w-12 h-px bg-neutral-900"></div>
            </div>
            <div className="space-y-12 ">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className={` overflow-hidden transition-all duration-300 grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1
                      ? "md:grid-cols-[1fr_1.2fr]"
                      : "md:grid-cols-[1.2fr_1fr]"
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="flex items-center mb-4 ">
                      {/* <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold mr-4">
                      {index + 1}
                    </div> */}
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <div className="relative aspect-video rounded-lg overflow-hidden flex items-center justify-center">
                      <img
                        src={feature.img}
                        alt={feature.title}
                        className="fill object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
