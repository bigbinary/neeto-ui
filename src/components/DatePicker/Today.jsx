/* eslint-disable @bigbinary/neeto/no-dumb-components-with-use-translation */
import React from "react";

import { useTranslation } from "react-i18next";

import { getLocale } from "utils";

const Today = ({ onClick }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="text-center">
      <button
        {...{ onClick }}
        className="neeto-ui-rounded-md hover:neeto-ui-bg-gray-200 px-2 py-1 text-xs font-medium transition duration-300 ease-in-out"
        data-cy="year-month-mode-today"
      >
        {getLocale({
          i18n,
          translationKey: "neetoui.datePicker.today",
          defaultValue: "Today",
          t,
        })}
      </button>
    </div>
  );
};

export default Today;
