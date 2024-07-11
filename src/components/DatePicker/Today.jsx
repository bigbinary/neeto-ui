/* eslint-disable @bigbinary/neeto/no-dumb-components-with-use-translation */
import React from "react";

import { useTranslation } from "react-i18next";

const Today = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <button
        {...{ onClick }}
        className="neeto-ui-rounded-md hover:neeto-ui-bg-gray-200 px-2 py-1 text-xs font-medium transition duration-300 ease-in-out"
        data-cy="year-month-mode-today"
      >
        {t("neetoui.datePicker.today")}
      </button>
    </div>
  );
};

export default Today;
