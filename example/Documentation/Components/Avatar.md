## Props

```table
rows:
  - Prop: '**contact**'
    Definition: 'To provide contact username and profile image to avatar component.'
    Type: 'Object'
    Structure: '{name: "", profile_image_path: ""}'
  - Prop: '**className**'
    Definition: 'Provide external className overrides to avatar component.'
    Type: 'String'
  - Prop: '**bgClassName**'
    Definition: 'Provide className for background color for avatar component.'
    Type: 'String'
  - Prop: '**size**'
    Definition: 'Specify the dimension for avatar component.'
    Type: 'Integer'
  - Prop: '**status**'
    Definition: 'Specify the status of the user if needed in avatar component.'
    Type: 'One of ["online", "idle", "offline"]'
  - Prop: '**activity**'
    Definition: 'Specify user activity if needed in avatar component'
    Type: 'One of ["view", "type"]'
  - Prop: '**otherProps**'
    Definition: 'Pass any other properties to avatar component.'
    Type: 'Object'
```

## Preview

```react
showSource: true
---
<div className="flex space-x-4">
  <Avatar size={36} contact={{ name: "Vinay V" }}/>
  <Avatar size={36} contact={{ name: "Goutham Subramanyam" }}/>
  <Avatar size={36} contact={{ name: "Neeraj Singh" }}/>
  <Avatar size={36} bgClassName="bg-purple-800" contact={{ name: "Neeraj Singh" }}/>
  <Avatar size={36} contact={{ name: "BigBinary", profile_image_path: "https://avatars.githubusercontent.com/u/780670?s=200&v=4" }}/>
  <Avatar size={36} contact={{ name: "Oliver Smith" }} status="online"/>
  <Avatar size={36} contact={{ name: "Charlie Smith" }} status="offline"/>
  <Avatar size={36} contact={{ name: "Adam Smith" }} status="idle"/>
  <Avatar size={36} contact={{ name: "Sam Smith" }} activity="view"/>
  <Avatar size={36} contact={{ name: "Oliver Smith" }} activity="type"/>
</div>
```
