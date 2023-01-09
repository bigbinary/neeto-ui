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

- _Added_: for new features.
- _Changed_: for changes in existing functionality.
- _Deprecated_: for soon-to-be removed features.
- _Removed_: for now removed features.
- _Fixed_: for any bug fixes.
- _Security_: in case of vulnerabilities.

## 4.1.42 - 2023-01-05

- Updated: Sidebar neeto logo.

## 4.1.41 - 2023-01-05

- Fixed: Focus trap for conditionally rendered elements in _Overlay_

## 4.1.40 - 2022-12-30

- Added: word break for _Modal_ body and _Tooltip_ content

## 4.1.38 - 2022-12-29

- Fixed: proptypes declaration being included in production bundle (3% bundle size reduction)
- Changed: github workflow compilation environment to `production`

## 4.1.37 - 2022-12-28

- Fixed: issue with multiple links in _Sidebar_ getting active at the same time.
- Changed: logic in _Select_ component to respect `getOptionValue` prop.

## 4.1.35 - 2022-12-27

- Added: the ability to choose email from options in _EmailInput_.

## 4.1.34 - 2022-12-26

- Fixed: Select dropdown width when strategy fixed.

## 4.1.33 - 2022-12-25

- Fixed: Issues with `value` prop of _Select_ component.

## 4.1.32 - 2022-12-25

Added: _Checkbox_ and _MultiEmailInput_ are wrapped with `forwardref`.

## 4.1.31 - 2022-12-21

- Fixed: issue with continue in _BlockNavigation_.

## 4.1.30 - 2022-12-21

- Added: functionality to scroll to the selected value in _Select_ component

## 4.1.29 - 2022-12-21

- Fixed: pressing `enter` key in _Select_ to select an option submitting the _Form_.

## 4.1.28 - 2022-12-20

- Fixed: **Form** `validateOnChange` and `validateOnBlur` is not being triggered after the form is submitted by pressing enter key and there are validation errors.

## 4.1.27 - 2022-12-19

- Updated: _Product switcher_ component in neetoUI
- Updated: the icon Tooltip content from "App switcher" to "Product switcher"

## 4.1.26 - 2022-12-19

- Added: support for `neeto-ui-shadow-sm`, `neeto-ui-shadow-md` and `neeto-ui-shadow-lg`.

## 4.1.25 - 2022-12-14

Fixed: Issue with overlapping column headers for fixed columns in tables.

## 4.1.24 - 2022-12-12

Added: `labelProps` to form elements to customize `Label`.
Changed: Made `shouldDynamicallyRenderRowSize` `false` by default.

## 4.1.22 - 2022-12-07

- Added: _Popover_ component

<img width="1100" alt="Screenshot 2022-12-05 at 5 42 51 PM" src="https://user-images.githubusercontent.com/24496302/205637383-afe596b8-c117-43ce-ad00-fee566fa0859.png">
## 4.1.20 - 2022-12-06
- Changed: `color` prop in *Tag* component as optional in type definition.
## 4.1.19 - 2022-12-05
- Fixed: Prevented form submission on the `enter` key for neetoEditor.
## 4.1.18 - 2022-12-02
Added: `shouldDynamicallyRenderRowSize` to calculate rows per page dynamically based on viewport height.
## 4.1.17 - 2022-12-01
Fixed: Issue with class instance producing undefined in the host application.
Added: Types for `manager`.
## 4.1.16 - 2022-12-01
Fixed: Prevents form submission when the `enter` key is pressed.
## 4.1.15 - 2022-11-28
Fixed: Form validation triggered with incorrect values from MultiEmailInput.
## 4.1.13 - 2022-11-24
- Fixed: Wrong managers bundle entry point in rollup config
- Added: `OverlayManager` which is used by all overlay components in neetoUI internally. The host application can use the methods inside the class to determine whether an Overlay is open in the product or not.
- Removed: `ModalManager` and migrate the Modal component to use `OverlayManager`.

## 4.1.12 - 2022-11-24

- Fixed: UI issues in Subheader

## 4.1.11 - 2022-11-21

- Fixed: warnings in _DatePicker_ and _TimePicker_ component

## 4.1.10 - 2022-11-17

- Adds formikBag to onSubmit

## 4.1.9 - 2022-11-16

- Fixed: `validateOnBlur` and `validateOnChange` getting triggered before the first submission of the _Form_.

## 4.1.8 - 2022-11-16

- Updated: Toaster styles.
- Added: POC for Toasters with minimum content and bottom left positioning

## 4.1.7 - 2022-11-14

- Changed: color-picker related dependencies to dev dependency

## 4.1.6 - 2022-11-13

- Fixed: issue with _Select_ dropdown when scrolling the page.

## 4.1.5 - 2022-11-11

- Added `system-ui` to `font-family` in `_base.scss`

## 4.1.4 - 2022-11-10

- Added: `className` as props to _Form_ component.

## 4.1.3 - 2022-11-10

- Removes Tags molecule from library and moved to [neeto-tags-frontend](https://github.com/bigbinary/neeto-tags-frontend)

## 4.1.2 - 2022-11-09

- Added `Form` component to `neetoui/formik`.
- Added relevant tests for `Form` component.
- Removed the usage of `Formik` and `Form` from `formik` in stories and used `Form`.
- Fixed flaky tests.

## 4.1.1 - 2022-11-03

- Added: Eyedropper to _ColorPicker_

## 4.1.0 - 2022-11-03

- Changed: **BREAKING** Name of the _EmailInput_ component to _MultiEmailInput_ in both components and Formik components.

## 4.0.17 - 2022-10-28

- Fixed:`ValidateDOMNesting` warning in _DatePicker_ component.
- Fixed: the issue with date items looking disabled in normal state

## 4.0.16 - 2022-10-28

Changes documentations to sentence case from title casing.

## 4.0.15 - 2022-10-28

- Added: Border for menubar block and item active states.

## 4.0.14 - 2022-10-28

- Added: ability to pass custom config to Toastr.

## 4.0.13 - 2022-10-20

- Fixed: Icons grabbing away click events & onClick not being triggered when icons are replaced during a state change.
- Fixed: False positive type errors for MenuBar & Dropdown subcomponents

## 4.0.12 - 2022-10-17

- Added: tooltip to _Avatar_ component

## 4.0.11 - 2022-10-10

- Fixed false positive type errors

## 4.0.10 - 2022-10-05

- Fixed: issue with week picker in `DatePicker`.

## 4.0.9 - 2022-09-29

- Fixed: warnings in `Tag` and `DatePicker` props.
- Added: neetoReview app to `AppSwitcher`.

## 4.0.8 - 2022-09-28

- Added: _Kbd_ component to render keyboard keys.

## 4.0.7 - 2022-09-22

- Fixed: Clicking on neetoQuiz from the app switcher takes the user to the consumer page.

## 4.0.6 - 2022-09-20

- Changed: default value of `defaultPageSize` prop of _Table_ component from 100 to 15.

## 4.0.5 - 2022-09-20

- Added: type support for data-cy props in all components that are forward referenced to HTML native elements.

## 4.0.4 - 2022-09-16

- Changed: Allowed `hideOnSinglePage` override in _Table_ `paginationProps`

## 4.0.3 - 2022-09-13

- Added: Storybook addon that lets users toggle between dark and light mode
- Fixed: date/time input color in darkmode
- Fixed: overlapping issue with _Dropdown_ in _Table_

## 4.0.2 - 2022-09-12

- Fixed: navigation issue in _BlockNavigation_ component

## 4.0.1 - 2022-09-12

- Added: `secondary` style variant
- Added: `info` style variant
- Removed: `inactive` style variant
- Fixed issue with custom target in _Dropdown_
- Fixed alignment issues in Dropdown `sizing` Story
- Updated select styles of antd table pagination
- Fixed Menuhorizontal button size in Table

## 4.0.0 - 2022-09-02

- Updated: Color palette
- Added: CSS variables support
- Added: Custom theming support
- Added: Default dark theme support
- Added: Design preview in Storybook
- Added: Guidelines to structure content in applications
- Changed: bundle type to `CJS`
- Fixed: delay while opening overlays
- Removed: `framer-motion` from dependencies.

### Color palette 🎨

- Updated color naming convention
- Added CSS variables support for colors
- Implemented dynamic color palette to support default dark mode
- Served color codes as RBG numbers in CSS variables to achieve color transparency
- Enhanced contrast of status color (info, success, error, warning)
- Included existing pastel colors as the color swatches of primary, success, error, warning, and info
- Added new set of pastel colors
- Removed unused colors from the palette
- Updated utility classes to match the new variable naming
- Restructured documentation and created new documentation for color palette
- Deprecated `neeto-ui-accent1`, `neeto-ui-accent2`, `neeto-ui-accent3`, `neeto-ui-accent4` colors and utility classes
- Deprecated `neeto-ui-secondary-indigo`, `neeto-ui-secondary-green`, `neeto-ui-secondary-teal` colors and utility classes
- Deprecated `neeto-ui-pastel-teal`
- Renamed `neeto-ui-success` to `neeto-ui-success-500`
- Renamed `neeto-ui-info` to `neeto-ui-info-500`
- Renamed `neeto-ui-error` to `neeto-ui-error-500`
- Renamed `neeto-ui-warning` to `neeto-ui-warning-500`
- Renamed `neeto-ui-pastel-blue` to `neeto-ui-info-100`
- Renamed `neeto-ui-pastel-green` to `neeto-ui-success-100`
- Renamed `neeto-ui-pastel-yellow` to `neeto-ui-warning-100`
- Renamed `neeto-ui-pastel-red` to `neeto-ui-error-100`

### Cosmetic changes 👁

#### Button

- Updated primary button color to `neeto-ui-primary-500`
- Added `:focus` rings to buttons for accessibility
- Updated `:focus-visible` styles to match the new design
- Updated border radius to `5px`
- Updated CSS transition from `all .3s ease-in-out` to `all .3s linear`
- Deprecated variants story in Storybook doc
- Created independent stories for `Styles`, `Sizes`, `Icon only` etc

#### Checkbox

- Replaced checked state icon with neetoIcon
- Updated checked state color to `neeto-ui-primary-500`
- Changed default state border color from `grey 300` to `grey 400`
- Updated `:hover` border color to `grey 500`
- Updated `:focus-visible` border color to `neeto-ui-primary-500`
- Updated focus ring styles to match `neeto-ui-primary` color
- Improved spacing in component

#### Radio

- Replaced checked state icon with neetoIcon
- Updated checked state color to `neeto-ui-primary-500`
- Changed default state border color from `grey 300` to `grey 400`
- Updated `:hover` border color to `grey 500`
- Updated `:focus-visible` border color to `neeto-ui-primary-500`
- Updated focus ring styles to match `neeto-ui-primary` color
- Improved spacing in component

#### Input

- Updated border-radius to `5px`
- Updated focus ring styles to match `neeto-ui-primary` color
- Fixed unwanted spacing in maxLength label
- Fixed alignment issues in Input with maxLength and no label text
- Fixed spacing inconsistencies in error test and helper text - used same margin value for both
- Fixed alignment issues in naked inputs
- Deprecate `variants` story in Storybook and created individual stories for `Input sizing`

#### Textarea

- Updated border-radius to `5px`
- Updated focus ring styles to match `neeto-ui-primary` color
- Fixed unwanted spacing in the maxLength label
- Fixed alignment issues in Input with maxLength and no label text
- Fix spacing inconsistencies in error test and helper text - used the same margin value for both
- Fixed alignment issues in naked inputs
- Added size prop to Textarea

#### Select

- Updated border-radius to `5px`
- Updated focus ring styles to match `neeto-ui-primary` color
- Replaced the default dropdown icons with neetoIcons
- Added CSS transition to the select options
- Applied Badge styles to Multi select items
- Replaced multivalue remove icon with neetoIcon
- Updated multivalue error styles
- Increased Story heights for better view

#### Email input

- Updated border radius to `5px`
- Updated selected values styles to match Tag styles
- Fixed prefix and suffix spacing
- Updated prefix icon size to `16px`
- Updated focus ring styles to match `neeto-ui-primary` color
- Fixed spacing issues in counter
- Fixed alignment issues in label row
- Fixed spacing inconsistencies in error test and helper text - used same margin for both
- Updated error styles of multivalue select

#### Label

- Updated label bottom margin to 8px
- Removed letter-spacing in label text

#### Dropdown & Action Dropdown

- Updated border-radius to `5px`
- Reduced the height of Dropdown options to `32px`
- Created Storybook examples with semantic markup for easy keyboard win
- Separated Delete/Remove actions with a border
- Updated `box-shadow`

#### Date Time picker

- Replaced default icons with neetoIcons
- Updated selection color to `neeto-ui-primary`
- Added border to date and time dropdown
- Updated box shadow of dropdown

#### Accordion

- Updated font weight of Accordion title to `500`
- Updated `border-radius` to `8px`

#### Avatar

- Updated background colors to new pastel colors
- Updated square variant `border-radius` to `5px`

#### Table

- Updated column title color to `grey 600`
- Updated column title font weight to 700
- Reduced cell padding from `12px 16px` to `8px 16px` to accommodate more number of row in a given height
- Removed border from pagination items
- Updated pagination buttons to match neetoUI button style
- Updated active pagination item styles to `neeto-ui-primary`
- Replaced default icons with neetoIcons

#### PageLoader

- Updated neeto logo

#### Color picker

- Added border to input

#### Alert & Modal

- Reduced outer padding from `32px ` to `24px` to provide the compact view
- Updated `border-radius` to `12px`

#### Toast

- Applied `48px` minimum height
- Applied dark theme to all variants
- Reduced text font weight to `400`

#### Tooltip

- Changed box shadow of light theme variant to `--neeto-ui-shadow-s`

#### Sidebar

- Increased width from `64px` to `72px`
- Changed background color from `neeto-ui-gray-200` to `neeto-ui-white`
- Added border on the right side
- Updated `padding-top` and `padding-bottom` to `24px`

### Functionality changes 🛠️

#### Input

- Changed: `maxlength` prop logic to allow typing characters beyond the specified maxlength. The character count will be shown only when the input length reaches 90% of maxlength and changes the state to error when input exceeds the maxlength

#### TextArea

- Changed: `maxlength` prop logic to allow typing characters beyond the specified maxlength. Character count will be shown only when the input length reaches 90% of maxlength and changes the state to error when input exceeds the maxlength

#### Dropdown

- Changed: **BREAKING** Renamed `ulProps` prop to `dropdownProps`
- Added: `buttonSize` prop

#### ActionDropdown

- Changed: **BREAKING** Renamed `size` prop to `buttonSize`
- Changed: **BREAKING** Renamed `style` prop to `buttonStyle`

#### Tag

- Changed: **BREAKING** Renamed `style` prop to `type`
- Removed: **BREAKING** Renamed `color` and `indicatorColor` props
- Added: **BREAKING** `style` and `indicatorStyle` props with options `"success" | "warning" | "danger" | "primary" | "inactive"`

#### ColorPicker

- Added: `Size` prop

#### Typography

- Added: new variant **nano**

#### Modal

- Added: `description` prop in header
- Added: `initialFocusRef` and `finalFocusRef` to programmatically add focus to custom components.
- Added: `blockScrollOnMount` prop to enable/disable body scrolling when the modal opens.
- Added: focus trapping to focusable elements in Modal.

#### Sidebar

- Removed: **BREAKING** `footerLinks` props
- Removed: **BREAKING** `isCollapsed` prop and **expanded state** of sidebar

## 3.5.17 - 2022-08-25

- Fixed: false positive type errors for tooltip

## 3.5.16 - 2022-08-17

- Changed: avoided showing duplicate toastr when called multiple times with the same arguments.

## 3.5.15 - 2022-08-05

- Fixed: Fixed false positive ts errors which were thrown since some of the fields were not marked optional.

## 3.5.14 - 2022-08-01

- Added: neetoTestify and neetoSite to AppSwitcher

## 3.5.13 - 2022-07-28

- Added: type support for all exported components. IDE will now auto-predict the component props.
- Changed: Deprecated babel-eslint was replaced with @babel/eslint-parser

## 3.5.12 - 2022-07-25

- Security: Bump moment from 2.29.3 to 2.29.4

## 3.5.11 - 2022-07-06

- Added: a _Button_ component in neetoui/formik that automatically disables itself if the form is not in a submittable state. Example: the form contains any invalid data, the form content has not been changed, or the form is already being submitted. To make this work, you need to import _Button_ from "neetoui/formik" as your submit button.
- Changed: _ActionBlock_ will now use the above-mentioned logic internally. So its submit/cancel buttons will also be automatically enabled or disabled.

## 3.5.10 - 2022-07-05

- Fixed: issue with closeOnEsc prop when the Pane is controlled.

## 3.5.9 - 2022-07-05

- Fixed: Checkbox in _Table_ component cut off in lower screen resolutions.

## 3.5.8 - 2022-07-01

- Fixed: Error when handling `axios` error objects with `undefined` response in `Toastr.error`

## 3.5.7 - 2022-06-24

- Added: `startsFrom` to `counter` prop of _EmailInput_ component.

## 3.5.6 - 2022-06-13

- Fixed: Calendar icon overflowing under the clear icon in Date Range picker

## 3.5.5 - 2022-06-09

- Fixed: issue with `onClose` function reference when closing the _Modal_ using `Esc`.

## 3.5.4 - 2022-06-08

Fixed: `TypeError` issue in _Toastr_ component.

## 3.5.3 - 2022-06-07

- Fixed: issue with `closeOnEsc` prop when the _Dropdown_ is controlled.

## 3.5.2 - 2022-06-07

- Fixed : placeholder content extending into multiple lines in _Select_ component.

## 3.5.1 - 2022-06-07

- Fixed: `useInsertionEffect` export issue due to `terser` compression.

## 3.5.0 - 2022-05-25

- Changed: Replaced webpack with rollup for bundling the package.

## 3.4.6 - 2022-05-19

- Updated: `react-toastify` to `9.0.1`

## 3.4.4

- Fixed: import for molecule components.

## 3.4.3

- Added: `prefix` and `suffix` to _EmailInput_.

## 3.4.2

- Fixed: issue with search not working with `isCreatable` _Select_.

## 3.4.1

- Fixed: issue with `autoFocus` not working on _Input_ when inside _Dropdown_.

## 3.4.0

- Removed: all instances of TailwindCSS.
- Added: `label` prop in _Tags_ molecule.
- Changed: Added `neetoCal` into _AppSwitcher_ app list .
- Removed: `count` limiting (to 99) logic from _MenuBar.Block_.

## 3.3.13

- Added: Tags in the molecule section.

## 3.3.12

- Fixed: loading state in _ActionBlock_ component.

## 3.3.11

- Added: New input format for the _EmailInput_ component.

## 3.3.10

- Fixed: Removed unnecessary scrollbar in _Table_ component.
- Added: `maxHeight` prop to the _EmailInput_ component.

## 3.3.9

- Fixed: _ActionDropdown_ issues with common props for button and dropdown

## 3.3.7

- Changed: Updated React version to 17.0.2.

## 3.3.6

- Fixed: Reset Formik data on continue action in _BlockNavigation_ component.

## 3.3.5

- Added: active state to `NavLink` in _Sidebar_ component.

## 3.3.4

- Added: `hideOnTargetExit` prop to _Tooltip_ component

## 3.3.3

- Added: data-cy for in _Alert_ component elements

## 3.3.2

- Fixed: Added override for `onClick` prop in _Dropdown_ component

## 3.3.1

- Fixed: Typography of Header in _Alert_ component.
- Fixed: Max width issue in _Dropdown_ component.

## 3.3.0

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
- ![accent-colors](https://user-images.githubusercontent.com/48869249/160755429-d2830f42-3086-4cbe-b9f5-4f0bca4f1a32.png)
