import React from "react";
import * as iconset from "@bigbinary/neeto-icons";

const applications = [
  "NeetoAnalytics",
  "NeetoCal",
  "NeetoChangelog",
  "NeetoChat",
  "NeetoDesk",
  "NeetoForm",
  "NeetoInsights",
  "NeetoInterview",
  "NeetoInvisible",
  "NeetoKb",
  "NeetoQuiz",
  "NeetoReplay",
  "NeetoWireframe",
];

export default {
  title: "Foundation/Iconography",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          '`import { Clock } from "@bigbinary/neeto-icons";` <br><br> Anywhere in your React file <br><br> `<Clock color="#1e1e20" size={24} />`',
      },
    },
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
  },
};

export const Iconography = () => {
  return (
    <div className="p-4">
      <p className="mb-4">
        <a
          href="https://github.com/bigbinary/neeto-icons"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-0.5 text-sm font-medium text-gray-600 hover:text-gray-900 mr-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"
            ></path>
          </svg>
          <span>Source</span>
        </a>
      </p>
      <div className="grid grid-cols-4 gap-3 lg:grid-cols-8">
        {iconset.iconList.map((icon) => {
          const Component = iconset[icon];
          return (
            <div
              key={icon}
              className="flex flex-col items-center justify-center p-5 transition-colors rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <Component />
              <div className="mt-2 text-xs">{icon}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ApplicationIcons = () => {
  return (
    <div className="p-4">
      <table className="table border-collapse">
        <thead>
          <tr>
            <th className="p-4 text-left border border-gray-200"></th>
            <th className="p-4 text-left border border-gray-200">
              Application
            </th>
            <th className="p-4 text-left border border-gray-200">
              Gradient class
            </th>
            <th className="p-4 text-left border border-gray-200">Icon</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, idx) => {
            const Component = iconset[application];
            return (
              <tr key={idx}>
                <td className="p-4 text-center border border-gray-200">
                  <div
                    className={`w-8 h-8 rounded-md mb-3 flex flex-row items-center justify-center ${application
                      .toLocaleLowerCase()
                      .replace("neeto", "gradient--")}`}
                  >
                    <Component color="#fff" />
                  </div>
                </td>
                <td className="p-4 text-left border border-gray-200">
                  <b className="p-1 px-2 text-xs">{application}</b>
                </td>
                <td className="p-4 text-left border border-gray-200">
                  <code className="p-1 px-2 text-xs bg-gray-100 rounded">{`${application
                    .toLocaleLowerCase()
                    .replace("neeto", "gradient--")}`}</code>
                </td>
                <td className="p-4 text-left border border-gray-200">
                  <code className="p-1 px-2 text-xs bg-gray-100 rounded">
                    {application}
                  </code>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
