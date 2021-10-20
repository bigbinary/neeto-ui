import React, { useState, useEffect, useMemo } from "react";
import {
  MenuHorizontal,
  Settings,
  Plus,
  Search,
} from "@bigbinary/neeto-icons";

import {
  Header,
  SubHeader,
  Container,
  Scrollable,
  MenuBar,
} from "../../../lib/components/layouts";
import {
  Button,
  Pagination,
  Checkbox,
  Dropdown,
  Typography,
  Table,
} from "../../../lib/components";
import { TABLE_DATA, TABLE_HEADERS } from "../constants";

const useSortTable = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);
  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const performSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, performSort, sortConfig };
};

const Layouts = () => {
  const [searchString, setSearchString] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer)
  }, []);

  const { items, performSort, sortConfig } = useSortTable(TABLE_DATA);

  const { key, direction } = sortConfig || { key: "", direction: "" };

  const isSorted = (headerKey, sortDirection) =>
    key === headerKey && direction === sortDirection;

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
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
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
        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
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

        <MenuBar.Item label="General" description="Welcome Message, KB and Labels " />
        <MenuBar.Item label="Styling" active description="Brand Color, Logo and Widget Position" />
        <MenuBar.Item label="Widget Icon" description="Position, Icon and Label" />

      </MenuBar>
      <Container>
        <Header
          title="Layouts"
          menuBarToggle={() => setShowMenu(!showMenu)}
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
          <Table hasActions hasCheckbox>
            <Table.Head>
              <Table.Tr>
                <Table.Th />
                {TABLE_HEADERS.map(({ label, key }, idx) => (
                  <Table.Th
                    key={idx}
                    onClick={() => performSort(key)}
                    isAscending={isSorted(key, "ascending")}
                    isDescending={isSorted(key, "descending")}
                  >
                    {label}
                  </Table.Th>
                ))}
                <Table.Th />
              </Table.Tr>
            </Table.Head>
            <Table.Body
              isLoading={{
                loading: isLoading,
                rowCount: 50,
                columnCount: 6,
              }}
            >
              {items.map(({ name, email, phone_number, pass_year }, idx) => (
                <Table.Tr key={idx}>
                  <Table.Td>
                    <Checkbox name={idx} />
                  </Table.Td>
                  <Table.Td center>{name}</Table.Td>
                  <Table.Td center>{email}</Table.Td>
                  <Table.Td center>{phone_number}</Table.Td>
                  <Table.Td center>{pass_year}</Table.Td>
                  <Table.Td>
                    <div className="flex flex-row items-center justify-end space-x-3">
                      <Dropdown
                        icon={MenuHorizontal}
                        buttonStyle="text"
                        autoWidth
                      >
                        <li>Edit</li>
                        <li>Delete</li>
                      </Dropdown>
                    </div>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Body>
          </Table>
        </Scrollable>
        <div className="flex flex-row items-center justify-end w-full mt-6 mb-8">
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
