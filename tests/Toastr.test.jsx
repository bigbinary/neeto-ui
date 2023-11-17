import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { init } from "i18next";
import { act } from "react-dom/test-utils";
import { ToastContainer } from "react-toastify";

import { Toastr, Button } from "components";

const renderToastrButton = (
  type,
  onClick = () => Toastr[type.toLowerCase()](`This is a ${type} toastr.`)
) => {
  render(
    <>
      <ToastContainer />
      <Button label={`${type} Toastr`} onClick={onClick} />
    </>
  );

  return screen.getByText(`${type} Toastr`);
};

const renderCustomConfigToastrButton = type => {
  const customConfig = {
    autoClose: 7000,
    hideProgressBar: false,
    role: "custom-role",
  };

  const onClick = () =>
    Toastr[type.toLowerCase()](
      `This is a ${type} toastr.`,
      "Close",
      () => {},
      customConfig
    );

  render(
    <>
      <ToastContainer />
      <Button label={`${type} Toastr`} onClick={onClick} />
    </>
  );

  return screen.getByText(`${type} Toastr`);
};

const renderCustomMessageToastrButton = (type, message) => {
  const onClick = () => Toastr[type.toLowerCase()](message);
  render(
    <>
      <ToastContainer />
      <Button label={`${type} Toastr`} onClick={onClick} />
    </>
  );

  return screen.getByText(`${type} Toastr`);
};

const testToastrErrorMessages = async (errorResponse, expectedMessage) => {
  const onAxiosStringError = () => {
    const axiosError = {
      isAxiosError: true,
      response: { data: errorResponse },
      message: "Default Message",
    };
    Toastr.error(axiosError);
  };

  render(
    <>
      <ToastContainer />
      <Button label="Throw an axios error" onClick={onAxiosStringError} />
    </>
  );
  const button = screen.getByText("Throw an axios error");
  await userEvent.click(button);
  const axiosError = await screen.findByText(expectedMessage);
  expect(axiosError).toBeInTheDocument();
};

beforeAll(() =>
  init({
    lng: "en",
    debug: true,
    resources: {
      en: {
        translation: {
          message: {
            success: "This is a Success {{entityName}}.",
            info: "This is a Info {{entityName}}.",
            warning: "This is a Warning {{entityName}}.",
            error: "This is a Error {{entityName}}.",
            toastr: "This is a toastr.",
          },
        },
      },
    },
  })
);

describe("Toastr", () => {
  ["Success", "Info", "Warning", "Error"].forEach(type => {
    it(`should render ${type} Toastr without error`, async () => {
      const button = renderToastrButton(type);
      await userEvent.click(button);
      const toastr = await screen.findByText(`This is a ${type} toastr.`);
      expect(toastr).toBeInTheDocument();
    });
  });

  ["Success", "Info", "Warning", "Error"].forEach(type => {
    it(`should show new ${type} Toastr if button text varies`, async () => {
      renderToastrButton(type, () =>
        Toastr[type.toLowerCase()](
          `This is a ${type} toastr.`,
          Date.now(),
          () => {}
        )
      );
      const button = screen.getByText(`${type} Toastr`);

      await userEvent.click(button);
      let toastrs = await screen.findAllByText(`This is a ${type} toastr.`);
      expect(toastrs.length).toBe(1);

      await userEvent.click(button);
      // wait for some time for new toastr to show up
      await act(() => new Promise(resolve => setTimeout(resolve, 100)));
      toastrs = await screen.findAllByText(`This is a ${type} toastr.`);
      expect(toastrs.length).toBe(2);
    });
  });

  ["Success", "Info", "Warning", "Error"].forEach(type => {
    it(`should not render duplicate ${type} Toastrs`, async () => {
      const button = renderToastrButton(type);

      await userEvent.click(button);
      let toastrs = await screen.findAllByText(`This is a ${type} toastr.`);
      expect(toastrs.length).toBe(1);

      await userEvent.click(button);
      // wait for some time for new toastr to show up (but won't be shown)
      await act(() => new Promise(resolve => setTimeout(resolve, 100)));
      toastrs = await screen.findAllByText(`This is a ${type} toastr.`);
      expect(toastrs.length).toBe(1);
    });
  });

  it("should render Toastr with CTA without error", async () => {
    render(
      <>
        <ToastContainer />
        <Button
          label="Toastr with CTA"
          onClick={() =>
            Toastr.error(
              Error("Ticket marked as spam."),
              "Block Customer",
              () => alert("Customer blocked successfully!")
            )
          }
        />
      </>
    );
    const button = screen.getByText("Toastr with CTA");
    await userEvent.click(button);
    const toastr = await screen.findByText("Ticket marked as spam.");
    expect(toastr).toBeInTheDocument();
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    const callToAction = screen.getByText("Block Customer");
    await userEvent.click(callToAction);
    expect(alertMock).toHaveBeenCalledTimes(1);
  });

  it("should render a clickable message when the toastr has a link", async () => {
    render(
      <>
        <ToastContainer />
        <Button
          label="Info Toastr"
          onClick={() => Toastr.info("https://github.com/bigbinary/neeto-ui")}
        />
      </>
    );
    const button = screen.getByText("Info Toastr");
    await userEvent.click(button);
    const link = await screen.findByRole("link");
    expect(link).toHaveAttribute(
      "href",
      "https://github.com/bigbinary/neeto-ui"
    );
  });

  it("should render plain text error toastr", async () => {
    render(
      <>
        <ToastContainer />
        <Button
          label="String Error"
          onClick={() => Toastr.error("This is a plain text error toastr!")}
        />
      </>
    );
    const button = screen.getByText("String Error");
    await userEvent.click(button);
    const errorToastr = await screen.findByText(
      "This is a plain text error toastr!"
    );
    expect(errorToastr).toBeInTheDocument();
  });

  it("should render Axios Error Toastr when response is undefined", async () => {
    const errorResponse = undefined;
    const expectedMessage = "Default Message";
    testToastrErrorMessages(errorResponse, expectedMessage);
  });

  it("should render Error Toastr with 'Something went wrong.' when there is no message passed explicitly", async () => {
    render(
      <>
        <ToastContainer />
        <Button label="Error Toastr" onClick={() => Toastr.error()} />
      </>
    );
    const button = screen.getByText("Error Toastr");
    await userEvent.click(button);
    const errorToastr = await screen.findByText("Something went wrong.");
    expect(errorToastr).toBeInTheDocument();
  });

  ["Success", "Info", "Warning", "Error"].forEach(type => {
    it(`should render ${type} Toastr when custom config is passed`, async () => {
      const button = renderCustomConfigToastrButton(type);
      await userEvent.click(button);

      const toastr = await screen.findByText(`This is a ${type} toastr.`);
      expect(toastr).toBeInTheDocument();

      const progressBar = await screen.findByRole("progressbar");
      expect(progressBar).toBeInTheDocument();

      if (type !== "Error") {
        const toastrRole = await screen.findByRole("custom-role");
        expect(toastrRole).toBeInTheDocument();
      }
    });
  });

  ["Success", "Info", "Warning", "Error"].forEach(type => {
    it(`should render ${type} Toastr with translated message when response object contains noticeCode as key`, async () => {
      const button = renderCustomMessageToastrButton(type, {
        noticeCode: `message.${type.toLowerCase()}`,
        entityName: "toastr",
      });
      await userEvent.click(button);
      const toastr = await screen.findByText(`This is a ${type} toastr.`);
      expect(toastr).toBeInTheDocument();
    });
  });

  ["Success", "Info", "Warning", "Error"].forEach(type => {
    it(`should render ${type} Toastr when response object contains notice as key`, async () => {
      const button = renderCustomMessageToastrButton(type, {
        notice: `This is a ${type} toastr.`,
      });
      await userEvent.click(button);
      const toastr = await screen.findByText(`This is a ${type} toastr.`);
      expect(toastr).toBeInTheDocument();
    });
  });

  ["Success", "Info", "Warning", "Error"].forEach(type => {
    it(`should render ${type} Toastr with customMessage string when response object contains custom_message as noticeCode`, async () => {
      const button = renderCustomMessageToastrButton(type, {
        noticeCode: "custom_message",
        customMessage: "This is a custom message.",
      });
      await userEvent.click(button);
      const toastr = await screen.findByText("This is a custom message.");
      expect(toastr).toBeInTheDocument();
    });
  });

  it("should render Axios Error Toastr using noticeCode without error", () => {
    const errorResponse = {
      noticeCode: "message.error",
      entityName: "toastr",
    };
    const expectedMessage = "This is a Error toastr.";
    testToastrErrorMessages(errorResponse, expectedMessage);
  });

  it("should render Axios Error Toastr when errorCode and errors are passed", () => {
    const errorResponse = {
      errors: ["Error message one.", "Error message two."],
      errorCode: "message.error",
      entityName: "toastr",
    };

    const expectedMessage =
      "Error message one. Error message two. This is a Error toastr.";
    testToastrErrorMessages(errorResponse, expectedMessage);
  });

  it("should render Axios Error Toastr when errorCode and error are passed", () => {
    const errorResponse = {
      error: "Error Message.",
      errorCode: "message.error",
      entityName: "toastr",
    };
    const expectedMessage = "Error Message. This is a Error toastr.";
    testToastrErrorMessages(errorResponse, expectedMessage);
  });

  it("should render Axios Error Toastr when errorCodes and error are passed", () => {
    const errorResponse = {
      error: "Error Message.",
      errorCodes: [
        { key: "message.error", context: { entityName: "toastr" } },
        "message.toastr",
      ],
    };
    const expectedMessage = "Error Message. This is a Error toastr.";
    testToastrErrorMessages(errorResponse, expectedMessage);
  });

  it("should render Axios Error Toastr with errorCode when errorCode and errorCodes are passed", () => {
    const errorResponse = {
      errorCode: "message.error",
      errorCodes: [
        { key: "message.error", context: { entityName: "invisible" } },
        "message.toastr",
      ],
      entityName: "toastr",
    };
    const expectedMessage = "This is a Error toastr.";
    testToastrErrorMessages(errorResponse, expectedMessage);
  });

  it("should render Axios Error Toastr with error when error and errors are passed", () => {
    const errorResponse = {
      error: "Error message.",
      errors: ["Error message one. Error message two."],
    };
    const expectedMessage = "Error message.";
    testToastrErrorMessages(errorResponse, expectedMessage);
  });

  it("should render Axios Error Toastr using when errorCodes and errors are passed", () => {
    const errorResponse = {
      errors: ["Error message one.", "Error message two."],
      errorCodes: [
        { key: "message.error", context: { entityName: "toastr" } },
        "message.toastr",
      ],
    };

    const expectedMessage =
      "Error message one. Error message two. This is a Error toastr. This is a toastr.";
    testToastrErrorMessages(errorResponse, expectedMessage);
  });

  it("should render Axios Error Toastr using error_code when errorCodes and errors are null", () => {
    const errorResponse = {
      errors: null,
      errorCodes: null,
      errorCode: "message.error",
      entityName: "toastr",
    };
    const expectedMessage = "This is a Error toastr.";
    testToastrErrorMessages(errorResponse, expectedMessage);
  });
});
