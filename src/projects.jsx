import { Link, useNavigate } from "react-router";
import { SectionLayout } from "./components/layout/section-layout";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useProjects } from "./hooks/use-projects";
import { cn } from "./lib/utils";
import Footer from "./components/layout/footer";

export default function Projects() {
  const navigation = useNavigate();
  const { TYPES, projects, selectedSection, setSelectedSection } =
    useProjects();

  return (
    <div>
      <div className="p-10 pb-0 min-h-px flex flex-col max-w-6xl mx-auto">
        <nav className="flex items-center py-4 border-b border-gray-200">
          <button
            className="flex items-center text-gray-700 hover:text-black transition-colors cursor-pointer"
            onClick={() => navigation(-1)}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
          </button>
          <p className="ml-2">Back</p>
        </nav>
      </div>

      <SectionLayout
        id="projects"
        title="Selected Works"
        subheading="A selection of design-focused projects showcasing user-centered
                  solutions, responsive layouts, and cross-functional
                  collaboration."
        className="px-10 max-w-6xl mx-auto "
      >
        <div className="flex w-full flex-wrap gap-4 pb-8">
          {TYPES.map((type, index) => (
            <button
              key={index}
              className={cn(
                "flex items-center justify-center px-8 py-4 rounded-full text-center text-neutral-700 hover:text-black transition-colors border border-neutral-200 cursor-pointer",
                {
                  "text-neutral-900 font-medium bg-zinc-100 ":
                    type === selectedSection,
                }
              )}
              onClick={() => setSelectedSection(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {projects.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-8 mt-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-md border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video bg-white flex items-center justify-center">
                  <img
                    src={project.logo || "/placeholder.svg"}
                    alt={project.title}
                    className="aspect-video opacity-95 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 line-clamp-4">
                      {project.description}
                    </p>
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
                    className="inline-flex items-center gap-2 text-neutral-900 bg-neutral-100 font-medium hover:gap-3 transition-all duration-300 border border-neutral-200 rounded-full py-2 px-4"
                  >
                    View Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-neutral-600 h-90 flex justify-center items-center">
            No results found.
          </p>
        )}
      </SectionLayout>
      <Footer />
    </div>
  );
}
