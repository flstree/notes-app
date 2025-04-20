import { Flame, LucideIcon } from "lucide-react";

interface Loader3Props {
  text: string;
  icon?: LucideIcon | string;
}

export const Loader3 = ({ text, icon }: Loader3Props) => (
  <div className="w-full h-svh">
    <div className="container mx-auto h-full">
      <div className="flex gap-8 py-20 lg:py-40 flex-col items-center h-full justify-center">
        <p className="flex items-center">
          {/* {icon && (
            <span>
              <Flame />
            </span>
          )} */}
          <span>{text}</span>
        </p>
      </div>
    </div>
  </div>
);
