import { useEffect, useState } from "react";

export const Loader5 = () => {
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
      <div className="w-full flex flex-col gap-2 h-full justify-between items-between mx-auto">
        <div className="w-full bg-muted-foreground h-12 mb-4">
          <div
            className="bg-foreground h-12 "
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-end w-full">
          <div className="text-9xl font-bold">{progress}%</div>
        </div>
      </div>
    </div>
  );
};
