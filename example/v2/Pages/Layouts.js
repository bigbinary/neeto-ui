import React, { useState, useEffect } from "react";
import {
  Header,
  SubHeader,
  Container,
  Scrollable,
} from "../../../lib/v2/layouts";
import { Button, PageLoader, Pagination } from "../../../lib/v2";

const Layouts = () => {
  const [searchString, setSearchString] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container>
      <Header title="Layouts" actionBlock={<Button label="Primary Action" />} />
      <SubHeader
        searchProps={{
          value: searchString,
          onChange: (e) => setSearchString(e.target.value),
        }}
        deleteButtonProps={{
          count: 0,
          selectedIDs: [],
          onClick: () => {},
        }}
        disableButtonProps={{
          count: 0,
          selectedIDs: [],
          onClick: () => {},
        }}
      />
      <Scrollable className="w-full">
        {isLoading ? (
          <PageLoader />
        ) : (
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
        )}
      </Scrollable>
      <div className="flex flex-row justify-end items-center w-full mt-6 mb-8">
        <Pagination
          count={300}
          pageNo={1}
          pageSize={25}
          navigate={() => {}}
        />
      </div>
    </Container>
  );
};

export default Layouts;
