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

## 3.5.11 - 2022-07-06

- Added: a *Button* component in neetoui/formik that automatically disables itself if the form is not in a submittable state. Example: the form contains any invalid data, the form content has not been changed, or the form is already being submitted. To make this work, you need to import *Button* from "neetoui/formik" as your submit button.
- Changed: *ActionBlock* will now use the above-mentioned logic internally. So its submit/cancel buttons will also be automatically enabled or disabled.

## 3.5.10 - 2022-07-05

- Fixed: issue with closeOnEsc prop when the Pane is controlled.

## 3.5.9 - 2022-07-05

- Fixed: Checkbox in *Table* component cut off in lower screen resolutions.

## 3.5.8 - 2022-07-01

- Fixed: Error when handling `axios` error objects with `undefined` response in `Toastr.error`

## 3.5.7 - 2022-06-24

- Added: `startsFrom` to `counter` prop of *EmailInput* component.

## 3.5.6 - 2022-06-13

- Fixed: Calendar icon overflowing under the clear icon in Date Range picker

## 3.5.5 - 2022-06-09

- Fixed: issue with `onClose` function reference when closing the *Modal* using `Esc`.

## 3.5.4 - 2022-06-08

Fixed: `TypeError` issue in *Toastr* component.

## 3.5.3 - 2022-06-07

- Fixed: issue with `closeOnEsc` prop when the *Dropdown* is controlled.

## 3.5.2 - 2022-06-07

- Fixed : placeholder content extending into multiple lines in *Select* component.

## 3.5.1 - 2022-06-07

- Fixed: `useInsertionEffect` export issue due to `terser` compression.

## 3.5.0 - 2022-05-25

- Changed: Replaced webpack with rollup for bundling the package.

## 3.4.6 - 2022-05-19

- Updated: `react-toastify` to `9.0.1`

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
- Changed: the text color in *Table* to `$neeto-ui-black`
- Changed: UI of *Tag* of component
- Changed: look and feel of *Danger Button*
- Changed: Contrast of *Avatar*, *Accordian*, *Toastr* and *Callout*
- Changed: Made *Modal* Header text and Close icon aligned in a line
- Added: new variant for *Danger Button* -`danger-text`
- Added: new accent colors
- ![accent-colors](https://user-images.githubusercontent.com/48869249/160755429-d2830f42-3086-4cbe-b9f5-4f0bca4f1a32.png)
