import { useState, useEffect } from "react";

export const Loader4 = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="container mx-auto h-full">
        <div className="w-1/2 flex flex-col gap-2 h-full justify-center items-center mx-auto">
          <div className="w-full bg-muted-foreground h-1 mb-4">
            <div
              className="bg-foreground h-1 "
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between w-full">
            <div className="mb-1 text-base font-medium dark:text-white">
              Loading
            </div>
            <div className="text-base dark:text-white">{progress}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
