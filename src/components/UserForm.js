import { React, useRef } from "react";
import { useDispatch } from "react-redux";
import { addOpenAIKey } from "../utils/gptSlice";

const UserForm = () => {
  const openAIKey = useRef(null);

  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(addOpenAIKey({ openAIKey: openAIKey.current.value }));
  };
  return (
    <div>
      <form
        className="bg-black bg-opacity-80 p-12 w-4/12 my-24 absolute mx-auto left-0 right-0 text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">Enter your OpenAI Key</h1>

        <input
          ref={openAIKey}
          type="text"
          placeholder="Enter Your OpenAI Key"
          className="p-4 my-2 w-full bg-gray-900 bg-opacity-70 rounded-md border-red-500"
        />
        {/* <p className="text-sm text-red-600">{emailMessage}</p> */}

        <button
          type="submit"
          className="py-2 my-2 bg-red-600 w-full rounded-md"
          onClick={handleButtonClick}
        >
          continue
        </button>
        <div className="flex flex-row my-4">
          <p className="text-gray-400">Don't Have OpenAI key? </p>
          <a
            href="https://platform.openai.com/api-keys"
            className="font-bold mx-2 cursor-pointer"
          >
            {" "}
            get it now
          </a>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
