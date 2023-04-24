import React, { useState } from "react";
import { Settings, Plus, Search } from "neetoicons";

import { Container, MenuBar } from "components/layouts";
import { Button, Typography } from "components";

export default {
  title: "Layouts/MenuBar",
  component: MenuBar,
  subcomponents: {
    Block: MenuBar.Block,
    AddNew: MenuBar.AddNew,
    SubTitle: MenuBar.SubTitle,
    Search: MenuBar.Search,
    Item: MenuBar.Item,
  },
  parameters: {
    docs: {
      description: {
        component: '`import { MenuBar } from "@bigbinary/neetoui/layouts";`',
      },
    },
  },
};

export const MenuBarStory = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <div className="flex">
      <MenuBar showMenu={showMenu} title="Contacts">
        <MenuBar.Block label="All" count={13} active />
        <MenuBar.Block label="Users" count={2} />
        <MenuBar.Block label="Leads" count={7} />
        <MenuBar.Block label="Visitors" count={4} />

        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () =>
                setIsSearchCollapsed(isSearchCollapsed => !isSearchCollapsed),
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
        <MenuBar.AddNew label="Add new segments" />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Settings,
            },
            {
              icon: Plus,
            },
            {
              icon: Search,
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
        <MenuBar.AddNew label="Add new tag" />

        <MenuBar.Item
          label="General"
          description="Welcome message, KB and labels "
        />
        <MenuBar.Item
          label="Styling"
          active
          description="Brand color, logo and widget position"
        />
        <MenuBar.Item
          label="Widget icon"
          description="Position, Icon and label"
        />
      </MenuBar>
      <Container>
        <div className="flex h-full w-full items-center justify-center">
          <Button
            label={`${showMenu ? "Close" : "Open"} Menubar`}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </Container>
    </div>
  );
};

MenuBarStory.storyName = "MenuBar";
