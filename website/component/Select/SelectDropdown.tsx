import React from "react";

import Select, { components } from "react-select";

// import { ReactComponent as Dropdownicon } from "../assets/images/Dropdown.svg";

export interface SelectDropdownOptionArrayProps {
  value: string | Array<string> | null;
  label: string | Array<string> | null;
}

interface SelectDropdownProps {
  label?: string;
  onChange?: (e: any) => void;
  onBlur?: any;
  type?: any;
  name?: any;
  options: Array<SelectDropdownOptionArrayProps>;
  errors?: string | null | any;
  placeholder?: string;
  value?: any;
  menuIsOpen?: boolean;
  isRequired?: boolean;
  description?: string | null;
  isSearchable?: boolean;
  id?: string;
  isDisabled?: boolean;
  tabIndex?: number | undefined;
  touched?: boolean;
}

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
  label,
  onChange,
  onBlur,
  name,
  errors,
  value,
  menuIsOpen,
  isRequired = false,
  description,
  isSearchable,
  id,
  options,
  tabIndex = 0,
  touched,
  ...rest
}) => {
  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        {/* <Dropdownicon /> */}
      </components.DropdownIndicator>
    );
  };

  const customStyles = {};

  const defaultValue = (
    optionsArray: Array<SelectDropdownOptionArrayProps>,
    value: string
  ) => {
    return optionsArray
      ? optionsArray.find((optionsArray) => optionsArray.value === value)
      : "";
  };

  return (
    <div className="select-input-group">
      {label && (
        <>
          <label
            className={`${isRequired && "required"} test1`}
            htmlFor={id}
            dangerouslySetInnerHTML={{ __html: label }}
          />

          {description && <p tabIndex={tabIndex}>{description}</p>}
        </>
      )}
      <Select
        {...rest}
        inputId={id}
        components={{
          DropdownIndicator,
          IndicatorSeparator: () => null,
        }}
        menuIsOpen={menuIsOpen}
        isSearchable={isSearchable}
        options={options}
        name={name}
        className="react-select-container"
        classNamePrefix="react-select"
        styles={customStyles}
        onChange={onChange}
        onBlur={onBlur}
        value={defaultValue(options, value) || null}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "#3B8282",
            primary: "#3B8282",
          },
        })}
      />
      {errors && touched && <div className="form-error-msg">{errors}</div>}
    </div>
  );
};
