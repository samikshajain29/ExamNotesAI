import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
const markDownComponent = {
  h1: ({ children }) => (
    <h1 className="text-2xl font-bold text-indigo-700 mt-6 mb-4 border-b pb-2">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold text-indigo-600 mt-5 mb-3">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className=" text-gray-700 leading-relaxed mb-3">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc ml-6 space-y-1 text-gray-700">{children}</ul>
  ),
  li: ({ children }) => <li className="marker:text-indigo-500">{children}</li>,
};
function FinalResult({ result }) {
  const [quickRevision, setQuickRevision] = useState(false);
  if (
    !result ||
    !result.subTopics ||
    !result.questions ||
    !result.questions.short ||
    !result.questions.long ||
    !result.revisionPoints
  ) {
    return null;
  }
  return (
    <div className="mt-6 p-3 space-y-10 bg-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          📘 Generated Notes
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => setQuickRevision(!quickRevision)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${quickRevision ? "bg-green-600 text-white" : "bg-green-100 text-green-700 hover:bg-green-200"}`}
          >
            {quickRevision ? "Exit Revision Mode" : "Quick Revision (5 min)"}
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700">
            ⬇️ Download PDF
          </button>
        </div>
      </div>

      <section>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <ReactMarkdown components={markDownComponent}>
            {result.notes}
          </ReactMarkdown>
        </div>
      </section>
    </div>
  );
}

export default FinalResult;
