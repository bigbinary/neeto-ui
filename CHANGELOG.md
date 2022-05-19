<!---

------ FOLLOW THESE WHILE ADDING AN ENTRY ------

** Add BREAKING keyword in bold for changes which could potentially break the component, eg: **BREAKING**
** Represent a component name in italics, eg: _Modal_
** Enclose a prop name in double backticks, eg: `isLoading`
** Represent a version as second level heading and write the version number inside a square bracket, eg: ##  [3.3.2]

--->
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

Prefix the change with one of these keywords:

- *Added*: for new features.
- *Changed*: for changes in existing functionality.
- *Deprecated*: for soon-to-be removed features.
- *Removed*: for now removed features.
- *Fixed*: for any bug fixes.
- *Security*: in case of vulnerabilities.

## 3.4.6 - 2022-05-19

- *Updated*: `react-toastify` to `9.0.1`

## 3.4.5 - 2022-05-19

- Fixed: `TypeError` issue in *Toastr* component.

## 3.4.4

- Fixed: import for molecule components.

## 3.4.3

- Added: `prefix` and `suffix` to *EmailInput*.

## 3.4.2

- Fixed: issue with search not working with `isCreatable` *Select*.

## 3.4.1

- Fixed: issue with `autoFocus` not working on *Input* when inside *Dropdown*.

## 3.4.0

- Removed: all instances of TailwindCSS.
- Added: `label` prop in *Tags* molecule.
- Changed: Added `neetoCal` into *AppSwitcher* app list .
- Removed: `count` limiting (to 99) logic from *MenuBar.Block*.

## 3.3.13

- Added: Tags in the molecule section.

## 3.3.12

- Fixed: loading state in *ActionBlock* component.

## 3.3.11

- Added: New input format for the *EmailInput* component.

## 3.3.10

- Fixed: Removed unnecessary scrollbar in *Table* component.
- Added: `maxHeight` prop to the *EmailInput* component.

## 3.3.9

- Fixed: *ActionDropdown* issues with common props for button and dropdown

## 3.3.7

- Changed: Updated React version to 17.0.2.

## 3.3.6

- Fixed: Reset Formik data on continue action in *BlockNavigation* component.

## 3.3.5

- Added: active state to `NavLink` in *Sidebar* component.

## 3.3.4

- Added: `hideOnTargetExit` prop to *Tooltip* component

## 3.3.3

- Added: data-cy for in *Alert* component elements

## 3.3.2

- Fixed: Added override for `onClick` prop in *Dropdown* component

## 3.3.1

- Fixed: Typography of Header in *Alert* component.
- Fixed: Max width issue in *Dropdown* component.

## 3.3.0

- Changed: **BREAKING** `isLoading` prop of *Table* to `loading`.
- Changed: Implemented *Dropdown* component with Tippy.js and removed `react-popper`
- Deprecated: **BREAKING** `loading` prop of *Pane*, *Modal* and *Alert* components.
- Removed: **BREAKING** `placement` prop from *Tooltip* (Use position instead).

#### UI

- Changed: colors of `$neeto-ui-warning` and `$neeto-ui-error` in *Color Palette*
- 
- Changed: the text color in *Table* to `$neeto-ui-black`
- 
- Changed: UI of *Tag* of component
- 
- Changed: look and feel of *Danger Button*
- 
- Changed: Contrast of *Avatar*, *Accordian*, *Toastr* and *Callout*
- 
- Changed: Made *Modal* Header text and Close icon aligned in a line
- 
- Added: new variant for *Danger Button* -`danger-text`
- 
- Added: new accent colors
- 
- ![accent-colors](https://user-images.githubusercontent.com/48869249/160755429-d2830f42-3086-4cbe-b9f5-4f0bca4f1a32.png)
- 
