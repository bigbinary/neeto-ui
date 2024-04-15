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

Each change is prefixed with one of these keywords::

- *Added*: Describes new features.
- *Changed*: Highlights modifications to existing functionality.
- *Deprecated*: Marks features that will be removed in the future.
- *Removed*: Indicates features that have been taken out.
- *Fixed*: Denotes bug fixes.
- *Security*: Pertains to actions taken in response to vulnerabilities.

## 6.5.12 - 2024-04-15

- Added: Customizable border to Popover arrow.

<img width="469" alt="Screenshot 2024-04-15 at 7 25 08 PM" src="https://github.com/bigbinary/neeto-ui/assets/48869249/70358c5b-6376-476c-a366-6171f4461e0d">
<img width="567" alt="Screenshot 2024-04-15 at 7 24 56 PM" src="https://github.com/bigbinary/neeto-ui/assets/48869249/2a179dd2-0dbe-4583-9e96-c12dddb3480b">
<img width="496" alt="Screenshot 2024-04-15 at 7 27 10 PM" src="https://github.com/bigbinary/neeto-ui/assets/48869249/35a20f00-13f2-469a-b00f-5848a4c100e2">
<img width="479" alt="Screenshot 2024-04-15 at 7 25 54 PM" src="https://github.com/bigbinary/neeto-ui/assets/48869249/1c1505de-be74-4253-8721-774e33737917">
Darkmode

<img width="527" alt="Screenshot 2024-04-15 at 7 40 37 PM" src="https://github.com/bigbinary/neeto-ui/assets/48869249/297a9cd4-e56c-4582-82a3-c104a254afc0">
## 6.5.11 - 2024-04-11

Fixed: `antd` Datepicker not validating minDate and maxDate on input date changes.

## 6.5.10 - 2024-04-11

Fixed: Remove unnecessary onBlur trigger on amPm change in TimePickerInput

## 6.5.7 - 2024-03-29

Fixed: Clearing all rows by directly changing `selectedRowKeys` not working when
`bulkSelectedAllRowsProps` is passed.

## 6.5.5 - 2024-03-27

- Fixed: Table sort state persisting when the query param is removed

## 6.5.4 - 2024-03-27

Fixed: DatePicker unable to switch to different month or year.

## 6.5.3 - 2024-03-27

Added: Styles for *ActionBlock* wrapper

## 6.5.2 - 2024-03-27

- Added: tertiary variant Button.

<img width="104" alt="Screenshot 2024-03-27 at 5 44 48 PM" src="https://github.com/bigbinary/neeto-ui/assets/48869249/e02cb5cc-3633-444f-b0ce-71004dda55bb">
## 6.5.1 - 2024-03-26
- Added: `isSubmitting` prop for *ActionBlock*
## 6.5.0 - 2024-03-22
Added: `bulkSelectAllRowsProps` for tables to allow selecting all rows for multipage tables
## 6.4.0 - 2024-03-21
Added: minDateTime and maxDateTime prop.
## 6.3.10 - 2024-03-20
While changing the page for multi-paged table, the selected rows will not be
deselected.

## 6.3.9 - 2024-03-20

- Added: Support for overriding the dropdown props in the *ColorPicker*
  component so that it can be further customised.

## 6.3.8 - 2024-03-13

- Added: data attribute to table triple dots.

## 6.3.7 - 2024-03-11

- Added: Additional dropdown triggers

## 6.3.6 - 2024-03-06

- Added: support for resize, suffix, prefix and sizing for textarea.

@ajmaln _a Please review.

## 6.3.5 - 2024-03-06

Fixed: Select strategy="fixed"` not scrolling to selected

## 6.3.4 - 2024-03-05

Fixed: TimpickerInput firefox ui issue

## 6.3.3 - 2024-03-05

Fixed: update sortedInfo from queryParams in table on refresh.

## 6.3.2 - 2024-02-28

Before

![Screenshot 2024-02-15 at 5 47 48 PM](https://github.com/bigbinary/neeto-form-web/assets/16187886/b57929f4-5aec-433f-b4e0-f0aad47760cf)

After

![2a-after](https://github.com/bigbinary/neeto-ui/assets/16187886/a4b009a5-b372-4677-aa1d-cc80217ad5b2)


---

Before

![3-before](https://github.com/bigbinary/neeto-site-web/assets/16187886/aa68d9c2-a960-48aa-a94f-d325b30f5e1b)

After

![Screenshot 2024-02-21 at 11 32 00 PM](https://github.com/bigbinary/neeto-ui/assets/16187886/2fe7d125-b701-4513-b44e-f19801c8ca25)

## 6.3.0 - 2024-02-27

- Added: `range` prop to allow time range picking.
- Added: Selected values will be available on `onBlur`.
- Fixed: Error while string value is passed.

## 6.2.6 - 2024-02-22

- Removed sort_by query param from URL when it takes no value

## 6.2.5 - 2024-02-12

Added: `data-cy` to Tag container div.

## 6.2.4 - 2024-02-12

- Updated: Avatar theme.

<img width="1440" alt="Theme 3" src="https://github.com/bigbinary/neeto-ui/assets/48869249/b2fb1559-2e34-492d-b839-57ec32f3061d">
## 6.2.3 - 2024-02-06
Added: Support for `allowClear` prop in *DatePicker* to be `false`
## 6.2.2 - 2024-02-05
If the value prop is invalid date or date string, the value is converted to null.
## 6.2.1 - 2024-01-30
- Fixed: Icon button shrinking issue in table cell.
- Fixed: Updated table cell [link button](https://neeto-ui.neeto.com/?path=/story/components-button--styles&hash=710ee799a61abebfaa6923e81c35d2d46aa793ef) text alignment to left.
- Added: `white-space: normal` to table cell [link button](https://neeto-ui.neeto.com/?path=/story/components-button--styles&hash=710ee799a61abebfaa6923e81c35d2d46aa793ef).
## 6.2.0 - 2024-01-25
- Add ability to add more actions to the table header.
## 6.1.3 - 2024-01-17
### After
<img width="691" alt="Screenshot 2024-01-05 at 6 41 38 PM" src="https://github.com/bigbinary/neeto-ui/assets/16187886/7b1f3e2d-5f35-4089-908f-44c0db4d5601">
<img width="600" alt="Screenshot 2024-01-05 at 6 59 07 PM" src="https://github.com/bigbinary/neeto-ui/assets/16187886/0f47e403-83cc-42b2-9637-44dbe2ee5fe7">
## 6.1.2 - 2024-01-05
- Added support for disabling the create option for MultiEmailInput from the host application
## 6.1.1 - 2024-01-04
Added missing props to the DateTimePicker component.
Some of the events were not accessible within the parent component required to do some async operations.
## 6.1.0 - 2024-01-02
Added: Ability to see info about a table column
## 6.0.5 - 2023-12-22
- Fixed: Pane scroll issue.
## 6.0.3 - 2023-12-15
Added: data-cy to *Spinner*
**Reviewers**
<!---
------------- FORMAT FOR DESCRIPTION -------------
Prefix the change with one of these keywords:
- Added: for new features.
- Changed: for changes in existing functionality.
- Deprecated: for soon-to-be removed features.
- Removed: for now removed features.
- Fixed: for any bug fixes.
- Security: in case of vulnerabilities.
Points to note:
- The description shall be represented in bullet points
- Add the keyword BREAKING in bold style for changes that could potentially break the component, eg: **BREAKING**
- Represent a component name in italics, eg: *Modal*
- Enclose a prop name in double backticks, eg: `isLoading`
Example:
- Changed: **BREAKING** `isLoading` prop of *Table* to `loading`.
- Added: `hideOnTargetExit` prop to *Tooltip* component.
- Deprecated: **BREAKING** `loading` prop of *Pane*, *Modal* and *Alert* components.
- Removed: **BREAKING** `placement` prop from *Tooltip* (Use position instead).
  --->
## 6.0.2 - 2023-12-14
Enhanced the responsiveness of the following components
- Alert
- Modal
- Pane
- Toastr
- NoData
- DatePicker
- Stepper
**Screenshots**
<img width="339" alt="Screenshot 2023-12-12 at 3 22 21 AM" src="https://github.com/bigbinary/neeto-ui/assets/24496302/fb641a39-ad0d-4ae9-8dd7-400a86d1229d">
<img width="339" alt="Screenshot 2023-12-12 at 3 23 48 AM" src="https://github.com/bigbinary/neeto-ui/assets/24496302/572b57f6-7c45-4405-afc6-d3ab9b47a844">
<img width="343" alt="Screenshot 2023-12-12 at 3 26 02 AM" src="https://github.com/bigbinary/neeto-ui/assets/24496302/e5c47a01-d26e-4b50-a6db-7bdbf42849fd">
<img width="341" alt="Screenshot 2023-12-12 at 3 26 22 AM" src="https://github.com/bigbinary/neeto-ui/assets/24496302/7db5d9f5-8e4f-4aa8-91a5-5f0981d3c52b">
## 6.0.0 - 2023-12-04
- Changed: Enhanced the customizability of all the components by allowing users
  to easily override the default styles.
- Added: Added CSS customization storybook example for all the components.
- Changed: Updated *Typography* component to be responsive using
  [RFS](https://github.com/twbs/rfs/tree/v9.0.3).
- Changed: Updated components using Ant Design to CSS-in-JS approach with
  improved dark mode support.
- Removed: Removed Ant Design vendor styles in favor of CSS-in-JS approach.
- Removed: Removed unused components and styles.
- Fixed: Fixed *TimePicker* component dark mode issue.
## 5.2.46 - 2023-12-04
- Added: Logic to handle pagination when the last item from the last page is
  deleted and when applying filters.
## 5.2.45 - 2023-12-01
Fixed: Loading indicator with icon issue in `Button`
## 5.2.42 - 2023-11-30
Added: DateTimePicker component
## 5.2.41 - 2023-11-24
Previously onBlur was causing a redundant onChange call. Now onChange will be
called only if the value contains leading or trailing whitespaces.
## 5.2.40 - 2023-11-23
- Updated the multi select component to not show the `Add` button when no
  options are selected.
- Changed the type of the `Add` button from `primary` to `secondary`.
## 5.2.38 - 2023-11-23
- Updates the logic to calculate table height without considering the pagination
  height when pagination is set to false
## 5.2.37 - 2023-11-22
Added: `hideCancelButton` prop to **Alert** component.
## 5.2.36 - 2023-11-22
- Fixed: `undefined` options issue in *Select*
## 5.2.35 - 2023-11-22
Added: data cy to close select/multiSelect icon
## 5.2.34 - 2023-11-21
This PR will migrate the package from `react-linkify` to `linkify-react`
## 5.2.33 - 2023-11-20
- Fixed: Grouped select `defaultValue` not being set issue
## 5.2.32 - 2023-11-15
- Updated pagination URL param handling in the *Table*.
- Implemented pagination URL param handling in the *Pagination* component.
## 5.2.31 - 2023-11-15
- Allowed the component to use its internal state even when the `onChange` prop
  is passed.
## 5.2.29 - 2023-11-13
Added: `Add` button in *Select*
## 5.2.28 - 2023-11-08
Added: *Stepper* component.
## 5.2.27 - 2023-11-08
Changed: Updated instances of `@reach/autoid` with React `useId`
## 5.2.26 - 2023-11-08

- Changed: pagination button size from `32px` to `28px`.
- Changed: reduced pagination margin top and margin bottom values to make it
  more compact.

## 5.2.24 - 2023-11-07

Added: data-cy attribute to TextArea

## 5.2.23 - 2023-11-06

Added: data-cy attributes to Select, DatePicker and Tags

## 5.2.21 - 2023-10-27

Added: `TimePickerInput` component

## 5.2.20 - 2023-10-26

Changed: Upgraded `framer-motion` and removed some unused packages. Added:
neetoCI config for CI checks

## 5.2.19 - 2023-10-25

Fixed: Trim issue in number inputs

## 5.2.18 - 2023-10-25

Added: Support for lazy loading for the `Select` component

## 5.2.17 - 2023-10-24

Added: New *TreeSelect* component.

## 5.2.15 - 2023-10-23

Add onBlur handler to `Input` component to trim leading and trailing spaces

## 5.2.13 - 2023-10-20

Fixed: scrollToErrorField not working for Select component.

## 5.2.11 - 2023-10-20

- Fixed: Memory leaks in overlay manager

## 5.2.10 - 2023-10-20

- Added: Tooltip to `Kbd` component

## 5.2.8 - 2023-10-19

- Fixed: Button click-ability when disabled

## 5.2.2 - 2023-10-05

- The bug was due to a layout shift that happens when the formik error message
  is rendered. Details in
  https://github.com/bigbinary/neeto-ui/issues/1810#issuecomment-1745953703.
- The issue is fixed when we prevent the default behavior on mouseDown events
  for the cancel button, as suggesed by Sreerag in
  https://github.com/bigbinary/neeto-ui/issues/1810#issuecomment-1746360449

## 5.2.0 - 2023-09-24

- Updated: `antd` and `dayjs` version.

## 5.1.19 - 2023-09-22

- Added: Support for overriding props to `Alert` in `BlockNavigation`

## 5.1.18 - 2023-09-21

- Added: Support for showing only the palette in `ColorPicker`

## 5.1.17 - 2023-09-19

- Fixed: Short hex code filling up the input in `ColorPicker`

## 5.1.16 - 2023-09-12

- Changed: onChange function of `ColorPicker` to output hex-alpha value if the
  transparency option is turned on

## 5.1.15 - 2023-09-06

- Fixed: bug with sortable columns trying to access a `null` `headerRef ` in the
  `handleHeaderClasses` function.
- Achieved the same behavior of center aligning table header content for
  sortable columns, without depending on `headerRef` to do so.

## 5.1.14 - 2023-09-05

- Added: forwardRef to `Tag` component.

## 5.1.13 - 2023-09-01

- Updated the delay for calculating the height of the table header. This is to
  ensure that the height of the table is not affected by the flaky animation
  within the header during render process.

## 5.1.11 - 2023-08-31

Added truncating feature when more than 3 emails are shown on the MultiEmail
input.

## 5.1.9 - 2023-08-25

Fixed: scroll to error is not triggered on submitting form with enter key.

## 5.1.8 - 2023-08-24

Added `type = "button"` attribute to *Tab.Item* component

## 5.1.7 - 2023-08-21

Added: `rejectCharsRegex` prop to *Input* component.

## 5.1.6 - 2023-08-17

- Added: Mechanism to set the pagination and sorting config in URL query
  parameters for `Table`.

## 5.1.5 - 2023-08-08

- Added: `initialFocusRef` prop to *Alert*

## 5.1.4 - 2023-08-04

- Fixed: Handled dot paths in *ScrollToErrorField*.

## 5.1.3 - 2023-08-02

- Fixed: Disabled click in selected option close button if select is disabled.

## 5.1.2 - 2023-08-02

- FIxed: Updated deprecated CSS property `color-adjust`

## 5.1.1 - 2023-08-02

- Fixed: issue with onClose in *Dropdown* not getting called on trigger click.

## 5.1.0 - 2023-08-02

Fixed: Duplicate onSubmit call bug while repeatedly clicking on submit button.

## 5.0.18 - 2023-08-01

- Fixed: error value output in color picker when the initial value is undefined

## 5.0.17 - 2023-07-31

Changed: Disabled auto close for error toasters.

## 5.0.15 - 2023-07-18

- Removed: default empty box image from NoData component.

## 5.0.14 - 2023-07-12

Fixed warnings in jest tests.

## 5.0.13 - 2023-06-30

- Added `neeto-commons-frontend` and `neeto-icons` to peer dependencies.

## 5.0.12 - 2023-06-29

- Changed: Default value of`scrollToErrorField` prop of formik *Form* to false.

## 5.0.11 - 2023-06-27

- Added: `hasScrollToErrorField` prop to formik *Form* component.

## 5.0.10 - 2023-06-20

- Removed: condition to disable *FormikButton* when the form is invalid.

## 5.0.9 - 2023-06-17

- Updated `ramda` version to `^0.29.0` in devDependencies.
- Updated `eslint-plugin-neeto` version to `^1.0.54` in devDependencies.
- Updated `neeto-commons-frontend` version to `^2.0.87` in devDependencies.
- Disabled `no-missing-localization` rule.

## 5.0.8 - 2023-06-16

- Removed: CSS font smoothing.
- Updated: neeto language page - added rule for "Archive vs. deactivate"

## 5.0.7 - 2023-06-11

- Fixed: Misalignment between input and prefix for large screens. Line break in
  prefix when hyphens are added.

## 5.0.6 - 2023-06-06

- Fixes janky animation in *Pane* when form fields have the `autoFocus` prop.

## 5.0.5 - 2023-06-05

Added: `optionRemapping` prop to map the label and value properties of `options`
prop in *Select* component.

## 5.0.4 - 2023-05-29

- Fixed: Overrided `onChange` function to output empty array if value is null in
  *DatePicker*

## 5.0.3 - 2023-05-29

- Fixed: the issue of filter invalid emails link for valid emails in
  *MultiEmailInput* component

## 5.0.2 - 2023-05-23

- Added: `required` prop to *MultiEmailInput*.

## 5.0.1 - 2023-05-07

- Added: resize and reorder columns functionality to *Table* component.

## 5.0.0 - 2023-04-28

Removed following components from `neetoui`:

- `Header`
- `SubHeader`
- `MenuBar`
- `SideBar`
- `PageLoader`
- `AppSwitcher`
- `Container`
- `Scrollable`
- `Page`

## 4.4.27 - 2023-04-24

- Added: `unlmitedChars` prop to *Input* and *Textarea* and reverted the
  behaviour of maxlength prop to the native one.

## 4.4.26 - 2023-04-14

- Fixed: Dropdown menu scroll issues.

## 4.4.25 - 2023-04-14

- Fixed: multi dropdown position in Safari.

## 4.4.24 - 2023-04-13

- Fixed: promise rejection in formik.

## 4.4.23 - 2023-04-05

- Removed: `@rollup/terser-plugin` from bundling.
- Added: sourcemaps for each bundle.

## 4.4.22 - 2023-04-04

Added: Support for children array in *Tooltip* component.

## 4.4.21 - 2023-03-28

- Fixed: defaulted buttons inside color picker to type `button`

## 4.4.20 - 2023-03-28

- Fixed: issue with content overflow and overlap in table cells

## 4.4.19 - 2023-03-27

Added: `children` prop for button and tag components

## 4.4.18 - 2023-03-24

- Changed: -the default row size to 30 and hidden the page size changer in the
  *Table* component.

## 4.4.17 - 2023-03-22

- Fixed: weird behavior or create new option in *MultiEmailInput*.

## 4.4.16 - 2023-03-20

- Added: keyboard accessibility to color picker.

![Screen_Recording_2023-03-16_at_2_48_00_PM_AdobeExpress](https://user-images.githubusercontent.com/48869249/225571905-e8b6a5c5-2407-45d3-84d8-d52d59435a0f.gif)

## 4.4.15 - 2023-03-17

Added terser plugin to rollup config to minimise bundle size.

## 4.4.13 - 2023-03-16

- Renamed the lib folder to src.
- Made the corresponding changes in config files.
- Updated imports with lib to use aliased imports.
- Updated the documentation.
- Ensured tests are running as expected.

## 4.4.12 - 2023-03-15

This PR adds the following changes to the *Switch* component.

- Added `forwardRef` to the *Switch* component so that it supports adding
  *Tooltip* to it, as per this
  [guide](https://github.com/atomiks/tippyjs-react#component-children).

## 4.4.11 - 2023-03-14

- Added: `liveChat` prop to *HelpSection* component.
- Added: data-cy to `helpLink` prop.
- Changed: label into an optional value in LinkType.

## 4.4.10 - 2023-03-14

- Updated: product title font weight in ProductSwitcher from `normal` to
  `medium`.

<img width="725" alt="Group 6" src="https://user-images.githubusercontent.com/48869249/224666135-be677e88-6e79-4d1d-8cd7-b89842e55c51.png">
- Updated: Accordion border color from `--neeto-ui-gray-400` to `--neeto-ui-gray-300`.
-
- Updated: Label color from `--neeto-ui-gray-700` to `--neeto-ui-black`.
-
- Updated: Label font weight from `normal` to `medium`.
-
- Updated: Help text color from `--neeto-ui-gray-600` to `--neeto-ui-gray-700`.
-
<img width="725" alt="Group 8" src="https://user-images.githubusercontent.com/48869249/224667904-67512253-f120-4cca-9ec3-a85e6c7e1499.png">
- Fixed: Modal spacing when there is no footer.
<img width="725" alt="Group 9" src="https://user-images.githubusercontent.com/48869249/224668860-20a74fb4-2f86-4159-9d49-c6ffa0c178d2.png">
- Added: Storybook example for using Tooltip in Table header
<img width="855" alt="Screenshot 2023-03-13 at 3 33 29 PM" src="https://user-images.githubusercontent.com/48869249/224669900-6ffd52b4-b9dd-4e2f-9c33-be5053548d63.png">
- Fixed: Horizontal scroll issue in Table header
## 4.4.8 - 2023-03-10
- Fixed: Issue with overriding components in *Select* component
## 4.4.7 - 2023-03-10
- Added: entry points for TypeScript resolutions in package.json
## 4.4.6 - 2023-03-09
- Added: new fallback avatars in the *Avatar* component using `boringavatars`.
## 4.4.4 - 2023-03-07
- Added: the ability to add a custom separator text between the primary and secondary buttons using the `buttonSeparatorText` prop for the *NoData* component.
## 4.4.3 - 2023-03-07
- Changed: Exported both cjs and esm bundles.
## 4.4.2 - 2023-03-03
Fixed empty toastr message when errors or errorCodes are given null values.
## 4.4.1 - 2023-03-03
- Added feature to display string from custom message key from response , when the noticeCode is custom_message
## 4.4.0 - 2023-02-24
- Fixed: Alignment issues in Table headers when sort is enabled.
- Fixed: Made Table headers popout.
**Color contrast improvements**
- Updated: `--neeto-ui-black` from `#1b1f23` to `#121212`.
- Updated: `--neeto-ui-gray-800` from `#2f3941` to `#1f1f1f`.
- Updated: `--neeto-ui-gray-700` from `#49545c` to `#2f3941`.
<img width="532" alt="Group 2" src="https://user-images.githubusercontent.com/48869249/220600134-0e92558c-4bb5-498b-a09a-63a04725fc0b.png">
- Updated: `h1`, `h2`, `h3`, `h4`, `h5`, `h6` color to `--neeto-ui-black` (`#121212`).
<img width="898" alt="Group 3" src="https://user-images.githubusercontent.com/48869249/220602168-ab61369c-5576-4661-aaf4-e532230ad5eb.png">
- Updated: Color contrast of `secondary`, `text` and `link` variants of Button.
<img width="545" alt="Group 7" src="https://user-images.githubusercontent.com/48869249/220705083-484434cc-d345-40b9-b331-fb9d33590f40.png">
- Updated: Tags color contrast.
<img width="1002" alt="Group 9" src="https://user-images.githubusercontent.com/48869249/220823524-3f8eec49-8bf7-4391-8cdc-cf79b289a2ef.png">
- Updated: Menubar color contrast.

---

- Updated: Search icon position from right to left in AppSwitcher search input.

<img width="747" alt="Group 4" src="https://user-images.githubusercontent.com/48869249/220603160-2bb5f207-e2cc-4eb1-9d46-1f913c9d915f.png">
- Added: Borders to Table.
<img width="1440" alt="Screenshot 2023-02-22 at 4 41 14 PM" src="https://user-images.githubusercontent.com/48869249/220603744-4cdecc30-fa2d-4471-83ec-d88f5df5da63.png">
**Dropdown changes**
- Updated: `--neeto-ui-shadow-lg` to `0 8px 24px rgba(140,149,159,0.2)`.
- Updated: Dropdown shadow to `--neeto-ui-shadow-lg`.
- Updated: Select dropdown shadow to `--neeto-ui-shadow-lg`.
- Updated: Date/Time picker dropdown shadow to `--neeto-ui-shadow-lg`.
<img width="238" alt="shadow" src="https://user-images.githubusercontent.com/48869249/220604390-3c95f1d2-cf41-46e8-af63-32074ddcc60f.png">
- Updated: Dropdown `max-height` from `360px` to `480px` to accommodate more number of items without scroll.
- Updated: Select dropdown `max-height` to `480px`
<img width="407" alt="max" src="https://user-images.githubusercontent.com/48869249/220604606-976fa6ee-76b0-4928-95a0-70f714a0723a.png">
- Improved: The spacing in NoData component
- Updated: AppSwitcher selection styles.
<img width="1440" alt="Screenshot 2023-02-22 at 11 04 47 PM" src="https://user-images.githubusercontent.com/48869249/220709676-2ed9735e-1030-431d-a87e-53e78d9f5b2c.png">
## 4.3.3 - 2023-02-17
- Added: functionality to get `errorCode` or `errorCodes` from the Axios error object and displays translated string as toastr message
## 4.3.2 - 2023-02-16
- Updated: styles of preset ranges in *DatePicker*.
## 4.3.1 - 2023-02-14
- Changed: **BREAKING** Updated `neetoApps` prop in *AppSwitcher* component to include app description and url along with the app name.
- Changed: Product icons required for *AppSwitcher* component is directly picked from `neetoIcons`.
- Removed: `subdomain` and `environment` props from *AppSwitcher* component.
## 4.3.0 - 2023-02-13
- Fixed: overlay issues with Subheader Tippy dropdown
- Fixed: logo sizing in Sidebar
Before
<img width="965" alt="Screenshot 2023-02-09 at 8 26 47 AM" src="https://user-images.githubusercontent.com/48869249/217706767-1350dd62-2a23-4093-b989-a1d2ba98cb97.png">
After
<img width="968" alt="Screenshot 2023-02-09 at 8 27 04 AM" src="https://user-images.githubusercontent.com/48869249/217706816-2bc90bed-5a69-43dc-9cbd-ea4312ae73a6.png">

---

Before

<img width="73" alt="Screenshot 2023-02-09 at 8 34 16 AM" src="https://user-images.githubusercontent.com/48869249/217708196-9d60c9db-87c5-4c12-a88e-7a643a46db0a.png">
After
<img width="74" alt="Screenshot 2023-02-09 at 8 36 36 AM" src="https://user-images.githubusercontent.com/48869249/217708237-933c98b8-af0e-4647-9a92-19bdb2b7ba2b.png">
## 4.2.9 - 2023-02-08
- Changed: `Neeto` logo in the sidebar.
## 4.2.8 - 2023-02-08
- Fixed: *Modal* and *Alert* was adding a `margin-right` to the *body* when there was no scrollbar which caused the UI elements to shift right.
## 4.2.7 - 2023-02-08
- Updated: Pageloader component.
## 4.2.6 - 2023-02-08
- Fixed: Submit on enter triggered when *Form* was being submitted.
## 4.2.5 - 2023-02-07
- Updated : Table sorting UI styles
## 4.2.4 - 2023-01-31
- Updated : `neeto-icons`
## 4.2.3 - 2023-01-30
- Added: transparency control option in *ColorPicker*, controlled via `showTransparencyControl`.
## 4.2.2 - 2023-01-29
- Fixed: respecting the prop `isCreatable` if `loadOptions` prop is provided in *Select* component
## 4.2.1 - 2023-01-24
- Changed: product descriptions as per the [list](https://docs.google.com/spreadsheets/d/1xFWMyXJkUCf1YBRhrokLdlQvyBn0X3uK2M2JUZClGgw).
- Changed: product name from **Review** to **Deploy** in the app switcher.
## 4.2.0 - 2023-01-19
Fixed getToastrMessage in Toastr to accept object with the placeholder value for the translations.
## 4.1.44 - 2023-01-17
- Updated: Button keyboard focus styles
- Updated: Radio keyboard focus styles
- Updated: Checkbox keyboard focus styles
- Updated: `antd` Checkbox focus styles in Table
- Added: Switch focus styles
- Added: Tab focus styles
- Added: Accordion focus styles
- Added: Pagination focus styles
- Added: `antd` Pagination focus styles in Table
Screenshot
<img width="992" alt="Group 1 (1)" src="https://user-images.githubusercontent.com/48869249/212918441-d5c2c57c-16b1-4da7-a472-e64134b659ce.png">
## 4.1.43 - 2023-01-09
Added function in Toastr to check for notice_code in response and if it's not present then it will fall back to notice.
## 4.1.42 - 2023-01-05
- Updated: Sidebar neeto logo.
## 4.1.41 - 2023-01-05
- Fixed: Focus trap for conditionally rendered elements in *Overlay*
## 4.1.40 - 2022-12-30
- Added: word break for *Modal* body and *Tooltip* content
## 4.1.38 - 2022-12-29
- Fixed: proptypes declaration being included in production bundle (3% bundle size reduction)
- Changed: github workflow compilation environment to `production`
## 4.1.37 - 2022-12-28
- Fixed: issue with multiple links in *Sidebar* getting active at the same time.
- Changed: logic in *Select* component to respect `getOptionValue` prop.
## 4.1.35 - 2022-12-27
- Added: the ability to choose email from options in *EmailInput*.
## 4.1.34 - 2022-12-26
- Fixed: Select dropdown width when strategy fixed.
## 4.1.33 - 2022-12-25
- Fixed: Issues with `value` prop of *Select* component.
## 4.1.32 - 2022-12-25
Added: *Checkbox* and *MultiEmailInput* are wrapped with `forwardref`.
## 4.1.31 - 2022-12-21
- Fixed: issue with continue in *BlockNavigation*.
## 4.1.30 - 2022-12-21
- Added: functionality to scroll to the selected value in *Select* component
## 4.1.29 - 2022-12-21
- Fixed: pressing `enter` key in *Select* to select an option submitting the *Form*.
## 4.1.28 - 2022-12-20
- Fixed: **Form** `validateOnChange` and `validateOnBlur` is not being triggered after the form is submitted by pressing enter key and there are validation errors.
## 4.1.27 - 2022-12-19
- Updated: *Product switcher* component in neetoUI
- Updated: the icon Tooltip content from "App switcher" to "Product switcher"
## 4.1.26 - 2022-12-19
- Added: support for `neeto-ui-shadow-sm`, `neeto-ui-shadow-md` and `neeto-ui-shadow-lg`.
## 4.1.25 - 2022-12-14
Fixed: Issue with overlapping column headers for fixed columns in tables.
## 4.1.24 - 2022-12-12
Added: `labelProps` to form elements to customize `Label`.
Changed: Made `shouldDynamicallyRenderRowSize` `false` by default.
## 4.1.22 - 2022-12-07
- Added: *Popover* component
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
- Fixed: warnings in *DatePicker* and *TimePicker* component
## 4.1.10 - 2022-11-17
- Adds formikBag to onSubmit
## 4.1.9 - 2022-11-16
- Fixed: `validateOnBlur` and `validateOnChange` getting triggered before the first submission of the *Form*.
## 4.1.8 - 2022-11-16
- Updated: Toaster styles.
- Added: POC for Toasters with minimum content and bottom left positioning
## 4.1.7 - 2022-11-14
- Changed: color-picker related dependencies to dev dependency
## 4.1.6 - 2022-11-13
- Fixed: issue with *Select* dropdown when scrolling the page.
## 4.1.5 - 2022-11-11
- Added `system-ui` to `font-family` in `_base.scss`
## 4.1.4 - 2022-11-10
- Added: `className` as props to *Form* component.
## 4.1.3 - 2022-11-10
- Removes Tags molecule from library and moved to [neeto-tags-frontend](https://github.com/bigbinary/neeto-tags-frontend)
## 4.1.2 - 2022-11-09
- Added `Form` component to `neetoui/formik`.
- Added relevant tests for `Form` component.
- Removed the usage of `Formik` and `Form` from `formik` in stories and used `Form`.
- Fixed flaky tests.
## 4.1.1 - 2022-11-03
- Added: Eyedropper to *ColorPicker*
## 4.1.0 - 2022-11-03
- Changed: **BREAKING** Name of the *EmailInput* component to *MultiEmailInput* in both components and Formik components.
## 4.0.17 - 2022-10-28
- Fixed:`ValidateDOMNesting` warning in *DatePicker* component.
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
- Added: tooltip to *Avatar* component
## 4.0.11 - 2022-10-10
- Fixed false positive type errors
## 4.0.10 - 2022-10-05
- Fixed: issue with week picker in `DatePicker`.
## 4.0.9 - 2022-09-29
- Fixed: warnings in `Tag` and `DatePicker` props.
- Added: neetoReview app to `AppSwitcher`.
## 4.0.8 - 2022-09-28
- Added: *Kbd* component to render keyboard keys.
## 4.0.7 - 2022-09-22
- Fixed: Clicking on neetoQuiz from the app switcher takes the user to the consumer page.
## 4.0.6 - 2022-09-20
- Changed: default value of `defaultPageSize` prop of *Table* component from 100 to 15.
## 4.0.5 - 2022-09-20
- Added: type support for data-cy props in all components that are forward referenced to HTML native elements.
## 4.0.4 - 2022-09-16
- Changed: Allowed `hideOnSinglePage` override in *Table* `paginationProps`
## 4.0.3 - 2022-09-13
- Added: Storybook addon that lets users toggle between dark and light mode
- Fixed: date/time input color in darkmode
- Fixed: overlapping issue with *Dropdown* in *Table*
## 4.0.2 - 2022-09-12
- Fixed: navigation issue in *BlockNavigation* component
## 4.0.1 - 2022-09-12
- Added: `secondary` style variant
- Added: `info` style variant
- Removed: `inactive` style variant
- Fixed issue with custom target in *Dropdown*
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
- Changed: `maxlength` prop logic to allow typing characters beyond the
  specified maxlength. The character count will be shown only when the input
  length reaches 90% of maxlength and changes the state to error when input
  exceeds the maxlength
#### TextArea
- Changed: `maxlength` prop logic to allow typing characters beyond the
  specified maxlength. Character count will be shown only when the input length
  reaches 90% of maxlength and changes the state to error when input exceeds the
  maxlength
#### Dropdown
- Changed: **BREAKING** Renamed `ulProps` prop to `dropdownProps`
- Added: `buttonSize` prop
#### ActionDropdown
- Changed: **BREAKING** Renamed `size` prop to `buttonSize`
- Changed: **BREAKING** Renamed `style` prop to `buttonStyle`
#### Tag
- Changed: **BREAKING** Renamed `style` prop to `type`
- Removed: **BREAKING** Renamed `color` and `indicatorColor` props
- Added: **BREAKING** `style` and `indicatorStyle` props with options
  `"success" | "warning" | "danger" | "primary" | "inactive"`
#### ColorPicker
- Added: `Size` prop
#### Typography
- Added: new variant **nano**
#### Modal
- Added: `description` prop in header
- Added: `initialFocusRef` and `finalFocusRef` to programmatically add focus to
  custom components.
- Added: `blockScrollOnMount` prop to enable/disable body scrolling when the
  modal opens.
- Added: focus trapping to focusable elements in Modal.
#### Sidebar
- Removed: **BREAKING** `footerLinks` props
- Removed: **BREAKING** `isCollapsed` prop and **expanded state** of sidebar
## 3.5.17 - 2022-08-25
- Fixed: false positive type errors for tooltip
## 3.5.16 - 2022-08-17
- Changed: avoided showing duplicate toastr when called multiple times with the
  same arguments.
## 3.5.15 - 2022-08-05
- Fixed: Fixed false positive ts errors which were thrown since some of the
  fields were not marked optional.
## 3.5.14 - 2022-08-01
- Added: neetoTestify and neetoSite to AppSwitcher
## 3.5.13 - 2022-07-28
- Added: type support for all exported components. IDE will now auto-predict the
  component props.
- Changed: Deprecated babel-eslint was replaced with @babel/eslint-parser
## 3.5.12 - 2022-07-25
- Security: Bump moment from 2.29.3 to 2.29.4
## 3.5.11 - 2022-07-06
- Added: a *Button* component in neetoui/formik that automatically disables
  itself if the form is not in a submittable state. Example: the form contains
  any invalid data, the form content has not been changed, or the form is
  already being submitted. To make this work, you need to import *Button* from
  "neetoui/formik" as your submit button.
- Changed: *ActionBlock* will now use the above-mentioned logic internally. So
  its submit/cancel buttons will also be automatically enabled or disabled.
## 3.5.10 - 2022-07-05
- Fixed: issue with closeOnEsc prop when the Pane is controlled.
## 3.5.9 - 2022-07-05
- Fixed: Checkbox in *Table* component cut off in lower screen resolutions.
## 3.5.8 - 2022-07-01

- Fixed: Error when handling `axios` error objects with `undefined` response in
  `Toastr.error`

## 3.5.7 - 2022-06-24

- Added: `startsFrom` to `counter` prop of *EmailInput* component.

## 3.5.6 - 2022-06-13

- Fixed: Calendar icon overflowing under the clear icon in Date Range picker

## 3.5.5 - 2022-06-09

- Fixed: issue with `onClose` function reference when closing the *Modal* using
  `Esc`.

## 3.5.4 - 2022-06-08

Fixed: `TypeError` issue in *Toastr* component.

## 3.5.3 - 2022-06-07

- Fixed: issue with `closeOnEsc` prop when the *Dropdown* is controlled.

## 3.5.2 - 2022-06-07

- Fixed : placeholder content extending into multiple lines in *Select*
  component.

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
- Changed: Implemented *Dropdown* component with Tippy.js and removed
  `react-popper`
- Deprecated: **BREAKING** `loading` prop of *Pane*, *Modal* and *Alert*
  components.
- Removed: **BREAKING** `placement` prop from *Tooltip* (Use position instead).

#### UI

- Changed: colors of `$neeto-ui-warning` and `$neeto-ui-error` in *Color
  Palette*
- Changed: the text color in *Table* to `$neeto-ui-black`
- Changed: UI of *Tag* of component
- Changed: look and feel of *Danger Button*
- Changed: Contrast of *Avatar*, *Accordian*, *Toastr* and *Callout*
- Changed: Made *Modal* Header text and Close icon aligned in a line
- Added: new variant for *Danger Button* -`danger-text`
- Added: new accent colors
- ![accent-colors](https://user-images.githubusercontent.com/48869249/160755429-d2830f42-3086-4cbe-b9f5-4f0bca4f1a32.png)
