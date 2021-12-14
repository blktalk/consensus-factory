import React, { useState, useEffect, useRef } from 'react';
import SelectMenu from './SelectMenu';
import ColorPicker from './ColorPicker';

export default function FillControl({ field, input, meta }) {
    const fillTypes = [
      { label: "Solid", value: "solid" },
      { label: "Gradient", value: "gradient" },
    ]
    const [fillType, setFillType] = useState(getFillType(input.value));
  
  const bgColors = [
    { label: "Primary", value: "bg-primary"},
    { label: "Accent 1", value: "bg-accent1"},
    { label: "Accent 2", value: "bg-accent2"},
    { label: "Accent 3", value: "bg-accent3"},
    { label: "Accent 4", value: "bg-accent4"},
    { label: "White", value: "bg-white"},
    { label: "Gray Light", value: "bg-gray-light"},
    { label: "Gray", value: "bg-gray"},
    { label: "Gray Dark", value: "bg-gray-dark"},
    { label: "Black", value: "bg-black"},
  ]
  const [bgColor, setBgColor] = useState(getStyleMatch(bgColors, input.value) || "bg-black");
  
  const fromColors = [
    { label: "Primary", value: "from-primary"},
    { label: "Accent 1", value: "from-accent1"},
    { label: "Accent 2", value: "from-accent2"},
    { label: "Accent 3", value: "from-accent3"},
    { label: "Accent 4", value: "from-accent4"},
    { label: "White", value: "from-white"},
    { label: "Gray Light", value: "from-gray-light"},
    { label: "Gray", value: "from-gray"},
    { label: "Gray Dark", value: "from-gray-dark"},
    { label: "Black", value: "from-black"},
  ]
  const [fromColor, setFromColor] = useState(getStyleMatch(fromColors, input.value) || "from-black");

  const toColors = [
    { label: "Primary", value: "to-primary"},
    { label: "Accent 1", value: "to-accent1"},
    { label: "Accent 2", value: "to-accent2"},
    { label: "Accent 3", value: "to-accent3"},
    { label: "Accent 4", value: "to-accent4"},
    { label: "White", value: "to-white"},
    { label: "Gray Light", value: "to-gray-light"},
    { label: "Gray", value: "to-gray"},
    { label: "Gray Dark", value: "to-gray-dark"},
    { label: "Black", value: "to-black"},
  ]
  const [toColor, setToColor] = useState(getStyleMatch(toColors, input.value) || "to-black");

  const directions = [
    { label: "↑", value: "bg-gradient-to-t" },
    { label: "↗", value: "bg-gradient-to-tr" },
    { label: "→", value: "bg-gradient-to-r" },
    { label: "↘", value: "bg-gradient-to-br" },
    { label: "↓", value: "bg-gradient-to-b" },
    { label: "↙", value: "bg-gradient-to-bl" },
    { label: "←", value: "bg-gradient-to-l" },
    { label: "↖", value: "bg-gradient-to-tl" },
  ]
  const [direction, setDirection] = useState(getStyleMatch(directions, input.value) || "bg-gradient-to-r");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Update Hidden Field
    const input = inputRef.current;
    const lastValue = input.value;
    const solidFillClasses = `${bgColor}`;
    const gradientFillClasses = `${fromColor} ${toColor} ${direction}`;
    const newValue = fillType != 'gradient' ? solidFillClasses : gradientFillClasses;
    input.value = newValue;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }, [bgColor, toColor, fromColor, fillType, direction, inputRef.current]);

  // See if one of groups arrays styles is present in the fields value
  function getStyleMatch(options: {label: string, value: string}[], styles: string): string {
    const optionValues = options.map(option => option.value);
    const currentStyles = styles.split(" ");
    const matches = optionValues.filter(element => currentStyles.includes(element))
    return matches[0];
  }

  function getFillType(value: string) {
    return value.includes("to-") ? "gradient" : "solid"
  }
  function handleSetBgColor(value: string) {
    setBgColor(`bg-${value}`)
  }
  function handleSetToColor(value: string) {
    setToColor(`to-${value}`)
  }
  function handleSetFromColor(value: string) {
    setFromColor(`from-${value}`)
  }
  function handleSetFillType(value: string) {
    if (value === "solid") {
      setBgColor(fromColor.replace("from-", "bg-"))
    } else {
      setFromColor(bgColor.replace("bg-", "from-"))
    }
    setFillType(`${value}`)
  }

  return (
    <>
      <div>
        <label className="block mb-2 overflow-hidden" style={{
          color: "var(--tina-color-grey-8)",
          fontSize: "var(--tina-font-size-1)",
          fontWeight: "600",
          letterSpacing: "0.01em",
          textOverflow: "ellipsis",
        }}>{field.label}</label>
      </div>
      <div className="flex mb-2 items-center">
        <SelectMenu value={fillType} onChange={handleSetFillType} options={fillTypes} className="w-24 mr-1" />
        {fillType === "solid" &&
          <ColorPicker value={bgColor.replace('bg-','')} onClick={handleSetBgColor} className="mr-1" />
        }
        {fillType === "gradient" &&
          <>
            <ColorPicker value={fromColor.replace('from-','')} onClick={handleSetFromColor} className="mr-1" />
            <ColorPicker value={toColor.replace('to-','')} onClick={handleSetToColor} className="mr-1" />
            <SelectMenu value={direction} onChange={setDirection} options={directions} className="w-12" />
          </>
        }
      </div>
      <input ref={inputRef} type="text" {...input}  className="hidden" />
    </>
  )
}