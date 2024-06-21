"use client";
import React, { useState } from "react";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
import { Icon } from "@iconify/react";

const fruits = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "orange", label: "Orange" },
  { value: "apple", label: "Apple" },
];
const formatGroupLabel = (data) => (
  <div className="flex justify-between items-center">
    <strong>
      <span className=" text-2xl font-semibold capitalize">{data.label}</span>
    </strong>
    <span>{data.options.length}</span>
  </div>
);
const groupedOptions = [
  {
    label: "Ice Creams",
    options: [
      { value: "vanilla", label: "Vanilla" },
      { value: "Dark Chocolate", label: "Dark Chocolate" },
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "salted-caramel", label: "Salted Caramel" },
    ],
  },
  {
    label: "Snacks",
    options: [
      { value: "Pizza", label: "Pizza" },
      { value: "Burger", label: "Burger" },
      { value: "Pasta", label: "Pasta" },
      { value: "Pretzel", label: "Pretzel" },
      { value: "Popcorn", label: "Popcorn" },
    ],
  },
];
const animatedComponents = makeAnimated();

// Fixed Options Select

const styles = {
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, opacity: "0.5" } : base;
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, color: "#626262", paddingRight: 6 }
      : base;
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: "none" } : base;
  },
  option: (provided, state) => ({
    ...provided,
    fontSize: "14px",
  }),
};
const orderOptions = (values) => {
  if (values.length > 0)
    return values
      .filter((v) => v.isFixed)
      .concat(values.filter((v) => !v.isFixed));
};

const iconOptions = [
  {
    label: "Social Media",
    options: [
      {
        value: "facebook",
        label: "Facebook",
        icon: "fe:facebook",
      },
      {
        value: "twitter",
        label: "Twitter",
        icon: "fe:twitter",
      },
      {
        value: "linkedin",
        label: "Linkedin",
        icon: "fe:linkedin",
      },
      {
        value: "github",
        label: "Github",
        icon: "fe:github",
      },
      {
        value: "instagram",
        label: "Instagram",
        icon: "fe:instagram",
      },
      {
        value: "dribbble",
        label: "Dribbble",
        icon: "fe:dribbble",
      },
      {
        value: "gitlab",
        label: "Gitlab",
        icon: "fe:gitlab",
      },
    ],
  },
  {
    label: "File Types",
    options: [
      { value: "pdf", label: "PDF", icon: "fe:file" },
      { value: "txt", label: "txt", icon: "fe:file-word" },
      { value: "image", label: "Image", icon: "fe:file-image" },
    ],
  },
  {
    label: "Others",
    options: [
      { value: "figma", label: "Figma", icon: "logos:figma" },
      { value: "chrome", label: "Chrome", icon: "logos:chrome" },
      { value: "safari", label: "Safari", icon: "fe:globe" },
      { value: "slack", label: "Slack", icon: "logos:slack-icon" },
      { value: "youtube", label: "Youtube", icon: "fe:youtube" },
    ],
  },
];
const OptionComponent = ({ data, ...props }) => {
  //const Icon = data.icon;

  return (
    <components.Option {...props}>
      <div className="flex items-center gap-2">
        <Icon icon={data.icon} />
        {data.label}
      </div>
    </components.Option>
  );
};

// start component
const ReactSelectOption = () => {
  const [fixedValue, setFixedValue] = useState(
    orderOptions([fruits[0], fruits[1]])
  );
  const fixedOnChange = (value, { action, removedValue }) => {
    switch (action) {
      case "remove-value":
      case "pop-value":
        if (removedValue.isFixed) {
          return;
        }
        break;
      case "clear":
        value = fruits.filter((v) => v.isFixed);
        break;
      default:
        break;
    }

    value = orderOptions(value);
    setFixedValue(value);
  };

  return (
    <div className=" grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div>
        <Select
          isClearable={false}
          defaultValue={[fruits[2], fruits[3]]}
          styles={styles}
          isMulti
          name="colors"
          options={fruits}
          className="react-select"
          classNamePrefix="select"
        />
      </div>
      <div>
        <Select
          isClearable={false}
          defaultValue={fruits[1]}
          options={groupedOptions}
          styles={styles}
          formatGroupLabel={formatGroupLabel}
          className="react-select"
          classNamePrefix="select"
        />
      </div>
      <div>
        <Select
          isClearable={false}
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={[fruits[4], fruits[5]]}
          isMulti
          options={fruits}
          styles={styles}
          className="react-select"
          classNamePrefix="select"
        />
      </div>
      <div>
        <Select
          isClearable={false}
          value={fixedValue}
          styles={styles}
          isMulti
          onChange={fixedOnChange}
          name="furits"
          className="react-select"
          classNamePrefix="select"
          options={fruits}
        />
      </div>
      <div className="lg:col-span-2 col-span-1">
        <Select
          options={iconOptions}
          className="react-select"
          classNamePrefix="select"
          components={{
            Option: OptionComponent,
          }}
          styles={styles}
        />
      </div>
    </div>
  );
};

export default ReactSelectOption;
