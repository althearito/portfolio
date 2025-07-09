import { useState, useEffect } from "react";
import { Download, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

import experiences from "./data/experiences";
import tools from "./data/tools";
import coreSkills from "./data/coreSkills";
import projects from "./data/projects";
import about from "./data/about";
import { FloatingNav } from "./components/layout/floating-nav";
import { SectionLayout } from "./components/layout/section-layout";
import Footer from "./components/layout/footer";

export default function App() {
  return (
    <section className="min-h-screen bg-white text-gray-900 ">
      <FloatingNav />
      <div className="min-h-px flex flex-col p-10 max-w-6xl mx-auto ">
        {/* Header */}

        <div
          id="hero"
          className="py-16 pb-8 lg:pt-72 pt-60 px-6 mb-8 md:mr-16 lg:mr-0 lg:px-12"
        >
          <div className="space-y-6 max-w-6xl mx-auto">
            <h1 className="text-2xl font-light text-neutral-900 tracking-wide">
              Hi, I'm Althea Jazel Rito!
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-tight leading-none">
              UI/UX Designer
            </h1>

            <div className="flex items-left justify-left gap-4">
              {about.socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 hover:bg-white transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-xl font-light text-neutral-600 mx-auto leading-relaxed md:mr-30 lg:mr-0">
              Bringing ideas to life with clean design, smart UX, and a passion
              for human-centered solutions.
            </p>

            <div className="flex flex-col md:flex-row items-left justify-left gap-4 ">
              <Link
                to="/projects"
                className="w-fit group inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 *:md:px-8 md:py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all duration-300 hover:scale-105"
              >
                View My Projects
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit inline-flex items-center gap-2 border border-neutral-300 text-neutral-700 px-8 py-4 rounded-full text-sm font-medium hover:border-gray-100 hover:bg-gray-100 transition-all duration-300"
              >
                <Download />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* About */}
        <section
          id="about"
          className="pt-24 pb-8 px-6 lg:px-12 md:mr-16 lg:mr-0"
        >
          <div className="max-w-6xl mx-auto ">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8 ">
                <div className="space-y-4">
                  <h2 className="text-4xl font-semibold tracking-tight">
                    About
                  </h2>
                  <div className="w-12 h-px bg-neutral-900"></div>
                </div>
                <div className="space-y-6 text-neutral-600 leading-relaxed">
                  <p>
                    I'm a fresh IT graduate with a passion for designing both
                    web and mobile applications. Throughout my experience, I've
                    worked on creating websites for school events, freelancing
                    projects, and personal ventures.
                  </p>
                  <p>
                    I really enjoy turning ideas into user-friendly designs that
                    look good and work well on different devices. I've also been
                    part of a team where I worked closely with developers, which
                    gave me a good understanding of how coding works.
                  </p>
                  <p>
                    This experience helped me learn how to balance creativity
                    with practicality, so my designs are not only attractive but
                    also easy for developers to implement.
                  </p>
                </div>
              </div>

              <div className="space-y-12 lg:mt-10">
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-neutral-800">
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-700 hover:border-neutral-300 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-neutral-800">
                    Core Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {coreSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-700 hover:border-neutral-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experiences */}
        <SectionLayout
          id="experience"
          title="Experiences"
          subheading="A selection of design-focused projects showcasing user-centered
                solutions, responsive layouts, and cross-functional
                collaboration."
        >
          <div className="relative flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0">
            <div className="absolute left-4 top-3 bottom-0 w-0.5 bg-neutral-200 md:top-[14px] md:left-0 md:right-5 md:bottom-auto md:h-0.5 md:w-[calc(100%-2.5rem)] z-0"></div>

            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-col items-start text-left pl-8 md:pl-0 "
              >
                <div className="absolute top-1 left-2 w-4 h-4 rounded-full bg-white border-1 border-neutral-500 md:top-2 md:left-0"></div>
                <div className="mt-0 mb-8 md:mt-8 flex-1 space-y-2 ml-6 md:ml-0 hover:bg-neutral-50 p-4 rounded-2xl">
                  <span className="text-sm font-medium text-neutral-900 tracking-wide">
                    {experience.date}
                  </span>
                  <h3 className="mt-4 text-xl font-medium text-neutral-800 mb-4">
                    {experience.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionLayout>

        {/* Projects */}
        <SectionLayout
          id="projects"
          title="Selected Works"
          subheading="A selection of design-focused projects showcasing user-centered
                solutions, responsive layouts, and cross-functional
                collaboration."
        >
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video bg-white flex items-center justify-center">
                  <img
                    src={project.logo || "/placeholder.svg"}
                    alt={project.title}
                    className="w-40 h-40 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors">
                      {project.title}
                    </h3>
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
                    className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:gap-3 transition-all duration-300 border border-neutral-200 rounded-full py-2 px-4 bg-neutral-100"
                  >
                    View Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SectionLayout>
      </div>

      <Footer />
    </section>
  );
}
