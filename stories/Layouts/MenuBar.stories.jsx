import React, { useState } from "react";

import { Settings, Plus, Search } from "neetoicons";

import { Button, Typography } from "components";
import { Container, MenuBar } from "components/layouts";

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
        <MenuBar.Block active count={13} label="All" />
        <MenuBar.Block count={2} label="Users" />
        <MenuBar.Block count={7} label="Leads" />
        <MenuBar.Block count={4} label="Visitors" />
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
        <MenuBar.Block count={80} label="Europe" />
        <MenuBar.Block count={60} label="Middle-East" />
        <MenuBar.Block count={60} label="Asia" />
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
        <MenuBar.Block count={80} label="Europe" />
        <MenuBar.Block count={60} label="Middle-East" />
        <MenuBar.Block count={60} label="Asia" />
        <MenuBar.AddNew label="Add new tag" />
        <MenuBar.Item
          description="Welcome message, KB and labels "
          label="General"
        />
        <MenuBar.Item
          active
          description="Brand color, logo and widget position"
          label="Styling"
        />
        <MenuBar.Item
          description="Position, Icon and label"
          label="Widget icon"
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
