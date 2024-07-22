import React from 'react';

interface DataPreparationStepProps {
  title: string;
  description?: string;
  expanded: boolean;
}

const DataPreparationStep: React.FC<DataPreparationStepProps> = ({ title, description, expanded }) => {
  return (
    <div className="flex flex-col mt-12 max-md:mt-10">
      <div className="flex gap-5 justify-between pr-11 text-lg font-semibold leading-5 text-black uppercase max-md:pr-5">
        <div>{title}</div>
        <img
          loading="lazy"
          src={`http://b.io/ext_${expanded ? '2' : '1'}-`}
          alt=""
          className="shrink-0 my-auto w-4 aspect-[1.59] fill-zinc-600"
        />
      </div>
      {expanded && description && (
        <div className="mt-4 text-base leading-7 text-neutral-500">{description}</div>
      )}
    </div>
  );
};

export default DataPreparationStep;