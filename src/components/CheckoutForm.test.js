import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => 
{
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => 
{
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/first name:/i);
    const firstName = "Carlos";
    userEvent.type(firstNameInput, firstName);

    const lastNameInput = screen .getByLabelText(/last name:/i);
    const lastName = "Solano";
    userEvent.type(lastNameInput, lastName);

    const addressInput = screen.getByLabelText(/address:/i);
    const address = "1234 Pizza St.";
    userEvent.type(addressInput, address);

    const cityInput = screen.getByLabelText(/city:/i);
    const city = "San Antonio";
    userEvent.type(cityInput, city);

    const stateInput = screen.getByLabelText(/state:/i);
    const state = "Texas";
    userEvent.type(stateInput, state);

    const zipInput = screen.getByLabelText(/zip:/i);
    const zip = "78245";
    userEvent.type(zipInput, zip);

    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);


    await waitFor(() => 
    {
        const successMessageRender = screen.queryByTestId("successMessage");
        const firstNameRender = screen.queryByTestId("firstName");
        const lastNameRender = screen.queryByTestId("lastName");
        const addressRender = screen.queryByTestId("address");
        const cityRender = screen.queryByTestId("city");
        const zipRender = screen.queryByTestId("zip");

        expect(successMessageRender).toBeVisible();
        expect(firstNameRender).toBeVisible();
        expect(lastNameRender).toBeVisible();
        expect(addressRender).toBeVisible();
        expect(cityRender).toBeVisible();
        expect(zipRender).toBeVisible();
    });

});
