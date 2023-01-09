import React from "react";
import { Toastr, Button } from "../lib/components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToastContainer } from "react-toastify";
import { act } from "react-dom/test-utils";
import { init } from "i18next";

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

const renderCustomConfigToastrButton = (type) => {
  const customConfig = {
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

beforeAll(() =>
  init({
    lng: "en",
    debug: true,
    resources: {
      en: {
        translation: {
          message: {
            success: "This is a Success toastr.",
            info: "This is a Info toastr.",
            warning: "This is a Warning toastr.",
            error: "This is a Error toastr.",
          },
        },
      },
    },
  })
);

describe("Toastr", () => {
  ["Success", "Info", "Warning", "Error"].forEach((type) => {
    it(`should render ${type} Toastr without error`, async () => {
      const button = renderToastrButton(type);
      userEvent.click(button);
      const toastr = await screen.findByText(`This is a ${type} toastr.`);
      expect(toastr).toBeInTheDocument();
    });
  });

  ["Success", "Info", "Warning", "Error"].forEach((type) => {
    it(`should show new ${type} Toastr if button text varies`, async () => {
      renderToastrButton(type, () =>
        Toastr[type.toLowerCase()](
          `This is a ${type} toastr.`,
          Date.now(),
          () => {}
        )
      );
      const button = screen.getByText(`${type} Toastr`);

      userEvent.click(button);
      let toastrs = await screen.findAllByText(`This is a ${type} toastr.`);
      expect(toastrs.length).toBe(1);

      userEvent.click(button);
      // wait for some time for new toastr to show up
      await act(() => new Promise((resolve) => setTimeout(resolve, 100)));
      toastrs = await screen.findAllByText(`This is a ${type} toastr.`);
      expect(toastrs.length).toBe(2);
    });
  });

  ["Success", "Info", "Warning", "Error"].forEach((type) => {
    it(`should not render duplicate ${type} Toastrs`, async () => {
      const button = renderToastrButton(type);

      userEvent.click(button);
      let toastrs = await screen.findAllByText(`This is a ${type} toastr.`);
      expect(toastrs.length).toBe(1);

      userEvent.click(button);
      // wait for some time for new toastr to show up (but won't be shown)
      await act(() => new Promise((resolve) => setTimeout(resolve, 100)));
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
    userEvent.click(button);
    const toastr = await screen.findByText("Ticket marked as spam.");
    expect(toastr).toBeInTheDocument();
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    const callToAction = screen.getByText("Block Customer");
    userEvent.click(callToAction);
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
    userEvent.click(button);
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
    userEvent.click(button);
    const errorToastr = await screen.findByText(
      "This is a plain text error toastr!"
    );
    expect(errorToastr).toBeInTheDocument();
  });

  it("should render Axios Error Toastr without error", async () => {
    const onAxiosStringError = () => {
      try {
        // Dummy axios error object
        const axiosError = {
          isAxiosError: true,
          config: {
            url: "https://api.github.com/users/org",
          },
          response: {
            data: {
              error: "Not Found",
            },
            status: 404,
          },
        };
        throw axiosError;
      } catch (e) {
        Toastr.error(e);
      }
    };
    render(
      <>
        <ToastContainer />
        <Button label="Throw an axios error" onClick={onAxiosStringError} />
      </>
    );
    const button = screen.getByText("Throw an axios error");
    userEvent.click(button);
    const axiosError = await screen.findByText("Not Found");
    expect(axiosError).toBeInTheDocument();
  });

  it("should render Axios Error Toastr when response is undefined", async () => {
    const onAxiosArrayError = () => {
      try {
        // Dummy axios error object
        const axiosError = {
          isAxiosError: true,
          config: {
            url: "https://api.github.com/users/org",
          },
          message: "Network Error",
        };
        throw axiosError;
      } catch (e) {
        Toastr.error(e);
      }
    };
    render(
      <>
        <ToastContainer />
        <Button
          label="Throw an axios error with undefined response"
          onClick={onAxiosArrayError}
        />
      </>
    );
    const button = screen.getByText(
      "Throw an axios error with undefined response"
    );
    userEvent.click(button);
    const axiosError = await screen.findByText("Network Error");
    expect(axiosError).toBeInTheDocument();
  });

  it("should render Axios Error Toastr with array of error messages", async () => {
    const onAxiosArrayError = () => {
      try {
        // Dummy axios error object
        const axiosError = {
          isAxiosError: true,
          config: {
            url: "https://api.github.com/users/org",
          },
          response: {
            data: {
              errors: ["A is required", "B is required"],
            },
          },
        };
        throw axiosError;
      } catch (e) {
        Toastr.error(e);
      }
    };
    render(
      <>
        <ToastContainer />
        <Button
          label="Throw an axios error with array of error messages"
          onClick={onAxiosArrayError}
        />
      </>
    );
    const button = screen.getByText(
      "Throw an axios error with array of error messages"
    );
    userEvent.click(button);
    const axiosError = await screen.findByText("A is required B is required");
    expect(axiosError).toBeInTheDocument();
  });

  it("should render Error Toastr with 'Something went wrong.' when there is no message passed explicitly", async () => {
    render(
      <>
        <ToastContainer />
        <Button label="Error Toastr" onClick={() => Toastr.error()} />
      </>
    );
    const button = screen.getByText("Error Toastr");
    userEvent.click(button);
    const errorToastr = await screen.findByText("Something went wrong.");
    expect(errorToastr).toBeInTheDocument();
  });

  ["Success", "Info", "Warning", "Error"].forEach((type) => {
    it(`should render ${type} Toastr when custom config is passed`, async () => {
      const button = renderCustomConfigToastrButton(type);
      userEvent.click(button);

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

  ["Success", "Info", "Warning", "Error"].forEach((type) => {
    it(`should render ${type} Toastr with translated message when response object contains noticeCode as key`, async () => {
      const button = renderCustomMessageToastrButton(type, {
        noticeCode: `message.${type.toLowerCase()}`,
      });
      userEvent.click(button);
      const toastr = await screen.findByText(`This is a ${type} toastr.`);
      expect(toastr).toBeInTheDocument();
    });
  });

  ["Success", "Info", "Warning", "Error"].forEach((type) => {
    it(`should render ${type} Toastr when response object contains notice as key`, async () => {
      const button = renderCustomMessageToastrButton(type, {
        notice: `This is a ${type} toastr.`,
      });
      userEvent.click(button);
      const toastr = await screen.findByText(`This is a ${type} toastr.`);
      expect(toastr).toBeInTheDocument();
    });
  });
});
