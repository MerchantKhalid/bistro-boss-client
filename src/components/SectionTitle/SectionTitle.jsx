import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center my-8 md:w-4/12">
      <p className="text-yellow-700">---{subHeading}---</p>
      <h3 className="text-4xl border-y-4 py-4 uppercase text-gray-400">
        {heading}{' '}
      </h3>
    </div>
  );
};

export default SectionTitle;
