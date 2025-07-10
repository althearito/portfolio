import { cn } from "../../lib/utils";

export const SectionLayout = ({
  title,
  subheading,
  children,
  id,
  className = "",
}) => {
  return (
    <section id={id} className={cn("pb-8 px-2 lg:px-12", className)}>
      <div className="max-w-6xl mx-auto mt-16">
        <div className="space-y-4 mb-8">
          <h2 className="text-4xl font-semibold tracking-tight">{title}</h2>
          <div className="w-12 h-px bg-neutral-900"></div>
        </div>
        <div className="space-y-6 text-neutral-600 leading-relaxed">
          <p>{subheading}</p>
        </div>
        <div className="flex flex-col md:flex-row items-left justify-left mt-8 "></div>

        {children}
      </div>
    </section>
  );
};
