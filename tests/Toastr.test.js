import React from "react";
import { Toastr, Button } from "../lib/components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToastContainer } from "react-toastify";

describe("Toastr", () => {
  it("should render Info Toastr without error", async () => {
    render(
      <>
        <ToastContainer/>
        <Button
          label="Info Toastr"
          onClick={() => Toastr.info("This is an info toastr.")}
        />
      </>
    );
    const button = screen.getByText("Info Toastr");
    userEvent.click(button);
    const infoToastr = await screen.findByText("This is an info toastr.");
    expect(infoToastr).toBeInTheDocument();
  });

  it("should render Warning Toastr without error", async () => {
    render(
      <>
        <ToastContainer/>
        <Button
          label="Warning Toastr"
          onClick={() => Toastr.warning("This is a warning toastr.")}
        />
      </>
    );
    const button = screen.getByText("Warning Toastr");
    userEvent.click(button);
    const warningToastr = await screen.findByText("This is a warning toastr.");
    expect(warningToastr).toBeInTheDocument();
  });

  it("should render Success Toastr without error", async () => {
    render(
      <>
        <ToastContainer/>
        <Button
          label="Success Toastr"
          onClick={() => Toastr.success("This is a success toastr.")}
        />
      </>
    );
    const button = screen.getByText("Success Toastr");
    userEvent.click(button);
    const successToastr = await screen.findByText("This is a success toastr.");
    expect(successToastr).toBeInTheDocument();
  });

  it("should render Toastr with CTA without error", async () => {
    render(
      <>
        <ToastContainer/>
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
    const alertMock = jest.spyOn(window,'alert').mockImplementation();
    const callToAction = screen.getByText("Block Customer");
    userEvent.click(callToAction);
    expect(alertMock).toHaveBeenCalledTimes(1);
  });

  it("should render Error Toastr without error", async () => {
    render(
      <>
        <ToastContainer/>
        <Button
          label="Error Toastr"
          onClick={() =>
            Toastr.error(Error("Some error occured!"))
          }
        />
      </>
    );
    const button = screen.getByText("Error Toastr");
    userEvent.click(button);
    const errorToastr = await screen.findByText("Some error occured!");
    expect(errorToastr).toBeInTheDocument();
  });

  it("should render a clickable message when the toastr has a link", async () => {
    render(
      <>
        <ToastContainer/>
        <Button
          label="Info Toastr"
          onClick={() => Toastr.info("https://github.com/bigbinary/neeto-ui")}
        />
      </>
    );
    const button = screen.getByText("Info Toastr");
    userEvent.click(button);
    const link = await screen.findByRole("link");
    expect(link).toHaveAttribute("href", "https://github.com/bigbinary/neeto-ui");
  })

  it("should render plain text error toastr", async () => {
    render(
      <>
        <ToastContainer/>
        <Button
          label="String Error"
          onClick={() =>
            Toastr.error("This is a plain text error toastr!")
          }
        />
      </>
    );
    const button = screen.getByText("String Error");
    userEvent.click(button);
    const errorToastr = await screen.findByText("This is a plain text error toastr!");
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
        <ToastContainer/>
        <Button label="Throw an axios error" onClick={onAxiosStringError} />
      </>
    );
    const button = screen.getByText("Throw an axios error");
    userEvent.click(button);
    const axiosError = await screen.findByText("Not Found");
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
        <ToastContainer/>
        <Button
          label="Throw an axios error with array of error messages"
          onClick={onAxiosArrayError}
        />
      </>
    );
    const button = screen.getByText("Throw an axios error with array of error messages");
    userEvent.click(button);
    const axiosError = await screen.findByText("A is required B is required");
    expect(axiosError).toBeInTheDocument();
  });

  it("should render Error Toastr with 'Something went wrong.' when there is no message passed explicitly", async () => {
    render(
      <>
        <ToastContainer/>
        <Button
          label="Error Toastr"
          onClick={() => Toastr.error()}
        />
      </>
    );
    const button = screen.getByText("Error Toastr");
    userEvent.click(button);
    const errorToastr = await screen.findByText("Something went wrong.");
    expect(errorToastr).toBeInTheDocument();
  });
});
