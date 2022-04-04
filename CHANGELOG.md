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

## [3.3.0]

- Changed: `isLoading` prop of **Table** to `loading`.
- Changed: Implemented **Dropdown** component with Tippy.js and removed `react-popper`
- Deprecated: `loading` prop of **Pane**, **Modal** and **Alert** components.
- Removed: `placement` prop from **Tooltip** (Use position instead).
- Removed: Tailwind dependency

#### UI

- Added: new variant for Danger Button - `danger-text`
- Added: new accent colors

  ![accent-colors](https://user-images.githubusercontent.com/48869249/160755429-d2830f42-3086-4cbe-b9f5-4f0bca4f1a32.png)

- Changed: colors of `$neeto-ui-warning` and `$neeto-ui-error` in **Color Palette**
- Changed: the text color in **Table** to `$neeto-ui-black`
- Changed: UI of **Tag** of component
- Changed: look and feel of **Danger Button**
- Changed: Contrast of **Avatar**, **Accordian**, **Toastr** and **Callout**
- Changed: Made **Modal** Header text and Close icon aligned in a line
