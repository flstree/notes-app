import { Flame } from "lucide-react";

export const Loader3 = () => (
  <div className="w-full h-svh">
    <div className="container mx-auto h-full">
      <div className="flex gap-8 py-20 lg:py-40 flex-col items-center h-full justify-center">
        <p className="flex items-center">
          <span>
            <Flame />
          </span>{" "}
          <span>Firestrap</span>
        </p>
      </div>
    </div>
  </div>
);
