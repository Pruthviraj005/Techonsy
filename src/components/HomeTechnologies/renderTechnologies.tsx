import { Technology } from "@/types/technologies";

const RenderTechnologies = ({ feature }: { feature: Technology }) => {
  const { icon, title, paragraph, redirect } = feature;

  return (
    <div className="grow relative">
      <div
        className="wow fadeInUp flex flex-col bg-gray-50 dark:bg-gray-800 p-4 shadow transition-all min-h-[250px] sm:min-h-[200px] md:h-auto"
        data-wow-delay="2s"
      >
        {/* Main Content Row */}
        <div className="flex items-center gap-4">
          <div className="bg-primary bg-opacity-10 text-primary p-2 rounded-md">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-black dark:text-white flex-1">
            {title}
          </h3>
          <button
            className="text-primary text-sm font-large"
          >
            &gt;
          </button>
        </div>

        {/* Paragraph (Scrollable) */}
        <div className="mt-3 overflow-y-auto max-h-[150px] text-base font-medium leading-relaxed text-gray-700 dark:text-gray-300">
          {paragraph}
        </div>
      </div>
    </div>
  );
};

export default RenderTechnologies;
