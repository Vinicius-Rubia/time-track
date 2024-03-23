import { selectLoader } from "@/redux/loaderSlice";
import { Loader2 } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

export const Loader: React.FC = () => {
  const loader = useSelector(selectLoader);

  return (
    loader.isActive && (
      <div className="inline-block leading-none fixed inset-0 m-auto w-full h-full z-50">
        <div className="bg-black/40 backdrop-blur-[2px] fixed top-0 left-0 w-full h-full"></div>
        <div className="flex items-center justify-center w-full h-full">
          <div className="grid place-items-center z-50 animate-pulse">
            <Loader2 className="animate-spin text-accent w-[60px] h-[60px]" />
            {loader.message && (
              <p className="font-medium flex text-accent text-sm mt-4 items-center">
                {loader.message}
                <span>...</span>
              </p>
            )}
          </div>
        </div>
      </div>
    )
  );
};
