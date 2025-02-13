import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { id, icon, title, paragraph } = feature;
  return (
<div className="group grow relative">
  <div className="wow fadeInUp flex flex-col" data-wow-delay="2s">
    {/* Main Content Row */}
    <div className="flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 p-3 rounded-lg transition-all-mt-1">
      <div className="rounded-md bg-primary bg-opacity-10 text-primary p-2">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-black dark:text-white flex-1">
        {title}
      </h3>
      <div className="flex items-center gap-2">
        <span className="group-hover:hidden transition-opacity">
          {id.toString().padStart(2, '0')}
        </span>
        <button className="hidden group-hover:inline-block text-primary text-sm font-medium">
          View More
        </button>
      </div>
    </div>

    {/* Hover Content */}
    <div className="top-full left-0 w-full hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg z-10 transform -translate-y-1">
      <p className="text-base font-medium leading-relaxed ">
        {paragraph}
      </p>
    </div>
  </div>
</div>
  );
};

export default SingleFeature;