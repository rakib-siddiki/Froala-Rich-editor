export const SkeletonLoader = () => {
  return (
    <div className="flex flex-col py-3  rounded-md bg-gray-50 dark:bg-gray-700 h-96">
      {/* Text Formatting Options Skeleton */}
      <div className="flex flex-wrap gap-5 px-6 ">
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className="w-6 h-6 bg-gray-100 dark:bg-gray-400 rounded animate-pulse"
          />
        ))}
      </div>
      {/* divider */}
      <div className="w-full h-0.5 bg-gray-100 dark:bg-gray-400 mt-10" />
      {/* rounded */}
      <div className=" ml-6 w-20 h-4 bg-gray-100 dark:bg-gray-400 my-4 rounded-full" />

      {/* divider */}
      <div className=" w-full h-0.5 bg-gray-100 dark:bg-gray-400 " />

      {/* rounded */}
      <div className="flex gap-2">
        <div className="ml-6 w-20 h-4 bg-gray-100 dark:bg-gray-400 rounded-full my-4" />
        <div className="w-7 h-4 bg-gray-100 dark:bg-gray-400 rounded-full my-4" />
      </div>
    </div>
  );
};
