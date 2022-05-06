<!---

------- FOLLOW THESE WHILE ADDING AN ENTRY ------

** Add BREAKING keyword in bold for changes which could potentially break the component, eg: **BREAKING**
** Represent a component name in italics, eg: _Modal_
** Enclose a prop name in double backticks, eg: `isLoading`
** Represent a version as second level heading and write the version number inside a square bracket, eg: ##  [3.3.2]

--->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

Prefix the change with one of these keywords:

- _Added_: for new features.
- _Changed_: for changes in existing functionality.
- _Deprecated_: for soon-to-be removed features.
- _Removed_: for now removed features.
- _Fixed_: for any bug fixes.
- _Security_: in case of vulnerabilities.

## [3.3.13]

 - Added: Tags in the molecule section.

## [3.3.12]

- Fixed: loading state in _ActionBlock_ component.

## [3.3.11]

- Added: New input format for the _EmailInput_ component.

## [3.3.10]

- Fixed: Removed unnecessary scrollbar in _Table_ component.
- Added: `maxHeight` prop to the _EmailInput_ component.

## [3.3.9]

- Fixed: _ActionDropdown_ issues with common props for button and dropdown

## [3.3.7]

- Changed: Updated React version to 17.0.2.

## [3.3.6]

- Fixed: Reset Formik data on continue action in _BlockNavigation_ component.

## [3.3.5]

- Added: active state to `NavLink` in _Sidebar_ component.

## [3.3.4]

- Added: `hideOnTargetExit` prop to _Tooltip_ component

## [3.3.3]

- Added: data-cy for in _Alert_ component elements

## [3.3.2]

- Fixed: Added override for `onClick` prop in _Dropdown_ component

## [3.3.1]

- Fixed: Typography of Header in _Alert_ component.
- Fixed: Max width issue in _Dropdown_ component.

## [3.3.0]

- Changed: **BREAKING** `isLoading` prop of _Table_ to `loading`.
- Changed: Implemented _Dropdown_ component with Tippy.js and removed `react-popper`
- Deprecated: **BREAKING** `loading` prop of _Pane_, _Modal_ and _Alert_ components.
- Removed: **BREAKING** `placement` prop from _Tooltip_ (Use position instead).

#### UI

- Changed: colors of `$neeto-ui-warning` and `$neeto-ui-error` in _Color Palette_
- Changed: the text color in _Table_ to `$neeto-ui-black`
- Changed: UI of _Tag_ of component
- Changed: look and feel of _Danger Button_
- Changed: Contrast of _Avatar_, _Accordian_, _Toastr_ and _Callout_
- Changed: Made _Modal_ Header text and Close icon aligned in a line

- Added: new variant for _Danger Button_ -`danger-text`
- Added: new accent colors

  ![accent-colors](https://user-images.githubusercontent.com/48869249/160755429-d2830f42-3086-4cbe-b9f5-4f0bca4f1a32.png)
