import React, { useState, useEffect } from "react";
import {
  Header,
  SubHeader,
  Container,
  Scrollable,
  MenuBar,
} from "../../../lib/components/layouts";
import {
  Button,
  PageLoader,
  Pagination,
  Checkbox,
  Dropdown,
  Typography,
} from "../../../lib/components";
import {
  MenuHorizontal,
  Settings,
  RightArrow,
  LeftArrow,
  Plus,
  Search,
  UserCircle,
} from "@bigbinary/neeto-icons";

const SidebarHandleIcon = ({size, color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path stroke={color} strokeWidth="1.5" d="M3 7.25L21 7.25"></path>
      <path stroke={color} strokeWidth="1.5" d="M3 11.25L15 11.25"></path>
      <path stroke={color} strokeWidth="1.5" d="M3 15.25L11 15.25"></path>
    </svg>
  );
}

const Layouts = () => {
  const [searchString, setSearchString] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex">
      <MenuBar
        showMenu={showMenu}
        title={
          <div className="flex justify-between">
            <Typography style="h2">Contacts</Typography>
          </div>
        }
      >
        <MenuBar.Block label="All" count={13} active />
        <MenuBar.Block label="Users" count={2} />
        <MenuBar.Block label="Leads" count={7} />
        <MenuBar.Block label="Visitors" count={4} />

        <MenuBar.SubTitle
          iconProps={[
            {
              icon: () => <Search size={20} />,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search />
        <MenuBar.Block label="Europe" count={80} />
        <MenuBar.Block label="Middle-East" count={60} />
        <MenuBar.Block label="Asia" count={60} />
        <MenuBar.AddNew label="Add New Segments" />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: () => <Settings size={20} />,
            },
            {
              icon: () => <Plus size={20} />,
            },
            {
              icon: () => <Search size={20} />,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Block label="Europe" count={80} />
        <MenuBar.Block label="Middle-East" count={60} />
        <MenuBar.Block label="Asia" count={60} />
        <MenuBar.AddNew label="Add New Tag" />
        
        <MenuBar.Item label="Pre Chat Survey" description="Create pre chat survey questions" />
        <MenuBar.Item label="Post Chat Survey" active description="Create post chat survey questions" />
        <MenuBar.Item label="Post Chat Survey" description="Create post chat survey questions" />

      </MenuBar>
      <Container>
        <Header
          title={
            <div className="flex items-center">
              <h3>Layouts</h3>
            </div>
          }
          menuBarHandle={
            <Button
              style="text"
              className="mr-2"
              icon={() =>
                <SidebarHandleIcon size={20} color={"#68737D"} />
              }
              onClick={() => setShowMenu(!showMenu)}
            />
          }
          actionBlock={<Button label="Primary Action" />}
          breadcrumbs={[{ text: "Home", link: "/" }]}
        />
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
            <table
              className={`v2-nui-table v2-nui-table--checkbox v2-nui-table--actions`}
            >
              <thead>
                <tr>
                  <th>
                    <Checkbox name="header" />
                  </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>Phone No</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {Array(50)
                  .fill()
                  .map((_, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <td>
                          <Checkbox name="1" />
                        </td>
                        <td>Goutham Subramanyam</td>
                        <td>goutham.subramanyam@bigbinary.com</td>
                        <td>BigBinary</td>
                        <td>+91 9633123456</td>
                        <td>
                          <div className="flex flex-row items-center justify-end space-x-3">
                            <Dropdown
                              icon={MenuHorizontal}
                              buttonStyle="icon"
                              autoWidth
                            >
                              <li>Edit</li>
                              <li>Delete</li>
                            </Dropdown>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Checkbox name="2" />
                        </td>
                        <td>Edwin Babu</td>
                        <td>edwin.babu@bigbinary.com</td>
                        <td>BigBinary</td>
                        <td>+91 8281331983</td>
                        <td>
                          <div className="flex flex-row items-center justify-end space-x-3">
                            <Dropdown
                              icon={MenuHorizontal}
                              buttonStyle="icon"
                              autoWidth
                            >
                              <li>Edit</li>
                              <li>Delete</li>
                            </Dropdown>
                          </div>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
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
    </div>
  );
};

export default Layouts;
