"use client";
import Card from "@/components/ui/card-snippet";
import { AutocompleteItem, Autocomplete } from "@/components/ui/autocomplete";
const AutocompletePage = () => {
  const animals = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "rabbit", label: "Rabbit" },
  ];

  return (
    <div className=" grid grid-cols-1 gap-5">
      <Card title="AUTO">
        <p className="mb-4">
          In the <code className="text-primary">Combobox </code> component
          <code className="text-primary"> Command </code> and{" "}
          <code className="text-primary">Popover </code> component used together
          to make a combobox.
        </p>

        <Autocomplete label="Select an animal" className="max-w-xs">
          {animals.map((animal) => (
            <AutocompleteItem key={animal.value} value={animal.value}>
              {animal.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      </Card>
      <Card title="AUTO">
        <p className="mb-4">
          In the <code className="text-primary">Combobox </code> component
          <code className="text-primary"> Command </code> and{" "}
          <code className="text-primary">Popover </code> component used together
          to make a combobox.
        </p>

        <Autocomplete label="Select an animal" className="max-w-xs">
          {animals.map((animal) => (
            <AutocompleteItem key={animal.value} value={animal.value}>
              {animal.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      </Card>
    </div>
  );
};

export default AutocompletePage;
