import React, { FC } from "react";
import Form from "./Form";

const InputCard: FC = () => {
  return (
    <>
      <div className="max-w-6xl mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Form />
      </div>
    </>
  );
};

export default InputCard;
