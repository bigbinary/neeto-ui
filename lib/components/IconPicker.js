import React from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import iconsList from "../constants/remixIconsList.js";
import iconTags from "../constants/remixIconsTags.js";

export default function IconPicker({ onChange = () => null, value = null }) {
  const categories = Object.keys(iconTags);
  let iconsMeta = {};

  for (const category of categories) {
    const iconsInCategory = Object.keys(iconTags[category]);
    iconsMeta[category] = iconsList
      .sort()
      .filter((iconName) =>
        iconsInCategory.includes(iconName.replace(/(-fill|-line)$/, ""))
      );
  }

  return (
    <div>
      <Dropdown
        ulClasses="pt-0"
        label={value ? <i className={`ri-${value}`}></i> : "Pick an icon"}
        buttonStyle={"secondary"}
      >
        <div className="w-72">
          {value && (
            <div className="sticky top-0 flex justify-center p-2 bg-white">
              <Button
                onClick={() => onChange(null)}
                label="Remove icon"
                className="text-sm text-indigo-500"
                icon="ri-close-fill"
                style="text"
              />
            </div>
          )}
          <div className="mt-1">
            {categories.map((category, index) => (
              <div className="w-full px-4" key={index}>
                <h3 className="mb-2 font-medium text-md">{category}</h3>
                <div className="grid grid-cols-5">
                  {iconsMeta[category].map((iconName, index) => (
                    <div
                      key={index}
                      onClick={() => onChange(iconName)}
                      className="flex items-center justify-center w-10 h-10 col-span-1 text-gray-700 rounded-md cursor-pointer hover:bg-gray-100"
                    >
                      <i className={`ri-lg ri-${iconName}`} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Dropdown>
    </div>
  );
}
