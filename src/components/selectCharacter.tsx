import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the props for the component
interface SelectCharacterProps {
  onValueChange: (selectedOption: any) => void;
}

export default function SelectCharacter({
  onValueChange,
}: SelectCharacterProps) {
  // State to store the selected model, default is "GPT-3.5"
  const [selectedModel, setSelectedModel] = useState("GPT-3.5");

  // Function to handle the change of value
  const handleValueChange = (value: any) => {
    setSelectedModel(value); // Update the selected model
    onValueChange(value); // Call the callback function with the selected value
    console.log("Selected model:", value); // Log the selected model
  };

  return (
    <div>
      <div className="text-white">
        <Select onValueChange={handleValueChange} defaultValue="GPT-3.5">
          <SelectTrigger className="w-[180px] bg-slate-800">
            <SelectValue className="text-white" placeholder="Select AI Model" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800">
            <SelectGroup className="text-white">
              <SelectLabel>Models</SelectLabel>
              <SelectItem value="GPT-3.5">GPT-3.5-Turbo</SelectItem>
              <SelectItem value="mistral-7b-instruct">Mistral-7b</SelectItem>
              <SelectItem value="sonar-small-chat">Sonar-Small</SelectItem>
              <SelectItem
                value="Gemini"
                className="pointer-events-none  text-gray-400"
              >
                Gemini (Soon)
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
