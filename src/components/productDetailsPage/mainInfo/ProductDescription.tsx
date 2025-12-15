// import React from "react";

type Props = {
  description: string;
}

export default function ProductDescription({ description }: Props) {
  return (
    <div className="mt-6">
      <p className="text-gray-400">
        {description}

        <span className="text-black underline cursor-pointer hover:text-gray-800">
           {' '}more...
        </span>
      </p>
    </div>
  );
}
