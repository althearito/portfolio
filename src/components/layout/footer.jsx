import { Github, Mail, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer
      id="contact"
      className="py-16 px-6 lg:px-12 bg-neutral-900 text-white mt-16"
    >
      <div className="max-w-9/12 md:max-w-11/12 xl:max-w-7/12 mx-auto ">
        <div className="grid md:grid-cols-2 gap-12 items-start ml-0 xl:ml-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-light tracking-tight">
              Let's Create Something Amazing
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              I'm passionate about creating intuitive, inclusive, and
              user-centered digital experiences. Let's build thoughtful
              solutions that connect people and technology.
            </p>
          </div>

          <div className="space-y-6 xl:ml-12">
            <a
              href="mailto:ritoaltheajazel@gmail.com"
              className="inline-flex items-center gap-3 text-lg font-medium hover:text-neutral-300 transition-colors md:ml-10 "
            >
              <Mail className="w-5 h-5 " />
              ritoaltheajazel@gmail.com
            </a>

            <div className="flex gap-4 md:ml-10">
              {[
                {
                  href: "https://www.linkedin.com/in/althearito/",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/althearito",
                  icon: Github,
                  label: "GitHub",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all duration-300"
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 xl:ml-12 ">
          <p className="text-sm text-neutral-500 ">
            © 2025 Althea Jazel Rito. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
