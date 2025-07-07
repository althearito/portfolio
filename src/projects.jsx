import { Link, useNavigate } from "react-router";
import { SectionLayout } from "./components/layout/section-layout";
import projects from "./data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const navigation = useNavigate();

  return (
    <>
      <div className="p-6 pb-2">
        <nav className="flex items-center py-4 border-b border-gray-200">
          <button
            className="flex items-center text-gray-700 hover:text-black transition-colors cursor-pointer"
            onClick={() => navigation(-1)}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
          </button>
          <p className="ml-2">Back to Profile</p>
        </nav>
      </div>

      <SectionLayout
        id="projects"
        title="Selected Works"
        subheading="A selection of design-focused projects showcasing user-centered
                  solutions, responsive layouts, and cross-functional
                  collaboration."
      >
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-white flex items-center justify-center">
                <img
                  src={project.img || "/placeholder.svg"}
                  alt={project.title}
                  className="w-40 h-40 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:gap-3 transition-all duration-300 border border-neutral-200 rounded-full py-2 px-4"
                >
                  View Case Study
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
}
