import React, { useState } from "react";
import { Header, SubHeader, Container, Scrollable } from "../../../lib/v2/layouts";
import { Button } from "../../../lib/v2";

const Layouts = () => {
  const [searchString, setSearchString] = useState("");
  return (
    <Container>
      <Header
        title="Layouts"
        actionBlock={
          <Button
            label="Primary Action"
          />
        }
      />
      <SubHeader
        searchProps={{
          value: searchString,
          onChange: (e) => setSearchString(e.target.value),
        }}
        deleteButtonProps={{
          count: 0,
          selectedIDs: [],
          onClick: () => {}
        }}
        disableButtonProps={{
          count: 0,
          selectedIDs: [],
          onClick: () => {}
        }}
      />
      <Scrollable className="w-full px-10">
        <table className={`v2-nui-table v2-nui-table--actions`}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Phone No</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Goutham Subramanyam</td>
              <td>goutham.subramanyam@bigbinary.com</td>
              <td>BigBinary</td>
              <td>+91 9633123456</td>
              <td>
                <div className="flex flex-row items-center justify-end space-x-3">
                  <Button icon="ri-pencil-line" style="icon" />
                  <Button icon="ri-lock-line" style="icon" />
                  <Button icon="ri-delete-bin-line" style="icon" />
                </div>
              </td>
            </tr>
            <tr>
              <td>Edwin Babu</td>
              <td>edwin.babu@bigbinary.com</td>
              <td>BigBinary</td>
              <td>+91 8281331983</td>
              <td>
                <div className="flex flex-row items-center justify-end space-x-3">
                  <Button icon="ri-pencil-line" style="icon" />
                  <Button icon="ri-lock-line" style="icon" />
                  <Button icon="ri-delete-bin-line" style="icon" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Scrollable>
    </Container>
  );
};

export default Layouts;
