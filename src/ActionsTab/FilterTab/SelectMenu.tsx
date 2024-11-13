import * as React from "react";
import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import './Filter.scss';

interface Framework {
    value: string;
    label: string;
}

interface ComboboxDemoProps {
    frameworks: Framework[];
    placeHolder: string;
    isFirst?: boolean; // New prop to check if it's the first instance
}

export function ComboboxDemo({ frameworks, placeHolder }: ComboboxDemoProps) {
    const [open, setOpen] = React.useState(false);
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [hoveredValue, setHoveredValue] = useState<string | null>(null); // Track hovered item

    const toggleValue = (currentValue: string) => {
        setSelectedValues((prevValues) =>
            prevValues.includes(currentValue)
                ? prevValues.filter((value) => value !== currentValue)
                : [...prevValues, currentValue]
        );
    };

    const clearAll = () => {
        setSelectedValues([]);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                    style={open ? {backgroundColor:"rgba(34, 56, 95, 1)",color:"white"} : {}}
                >
                    {placeHolder}
                    {open ? 
                    <svg 
                    className='transition-transform rotate-180 isWhite'
                    width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.0019 0C13.8539 0 14.2989 0.986 13.7849 1.623L13.7089 1.707L7.70891 7.707C7.53671 7.87918 7.30761 7.98261 7.06459 7.99789C6.82156 8.01317 6.58131 7.93925 6.38891 7.79L6.29491 7.707L0.294907 1.707L0.211906 1.613L0.157907 1.536L0.103907 1.44L0.0869064 1.404L0.0599065 1.337L0.0279064 1.229L0.0179062 1.176L0.00790644 1.116L0.00390625 1.059V0.941L0.00890636 0.883L0.0179062 0.823L0.0279064 0.771L0.0599065 0.663L0.0869064 0.596L0.156907 0.464L0.221906 0.374L0.294907 0.293L0.388906 0.21L0.465907 0.156L0.561906 0.102L0.597907 0.085L0.664907 0.0579996L0.772906 0.026L0.825906 0.0159998L0.885906 0.00599957L0.942906 0.00199986L13.0019 0Z" fill="#6D6D6D" />
                    </svg> 
                    :
                    <svg className="hovarable transition-transform rotate-360" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0019 0C13.8539 0 14.2989 0.986 13.7849 1.623L13.7089 1.707L7.70891 7.707C7.53671 7.87918 7.30761 7.98261 7.06459 7.99789C6.82156 8.01317 6.58131 7.93925 6.38891 7.79L6.29491 7.707L0.294907 1.707L0.211906 1.613L0.157907 1.536L0.103907 1.44L0.0869064 1.404L0.0599065 1.337L0.0279064 1.229L0.0179062 1.176L0.00790644 1.116L0.00390625 1.059V0.941L0.00890636 0.883L0.0179062 0.823L0.0279064 0.771L0.0599065 0.663L0.0869064 0.596L0.156907 0.464L0.221906 0.374L0.294907 0.293L0.388906 0.21L0.465907 0.156L0.561906 0.102L0.597907 0.085L0.664907 0.0579996L0.772906 0.026L0.825906 0.0159998L0.885906 0.00599957L0.942906 0.00199986L13.0019 0Z" fill="#6D6D6D"/>
                    </svg>
                    }
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="w-[200px] p-0"
            >
                <Command>
                    <CommandInput placeholder="Search..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <div className="flex justify-between px-4 py-2">
                            <button onClick={clearAll} className="text-blue-500" style={{fontSize:"12px"}}>Sıfırla</button>
                        </div>
                        <CommandGroup>
                            {frameworks.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={() => toggleValue(framework.value)}
                                    onMouseEnter={() => setHoveredValue(framework.value)}
                                    onMouseLeave={() => setHoveredValue(null)}
                                    style={{
                                        color: "rgba(109, 109, 109, 1)",
                                        backgroundColor:
                                            selectedValues.includes(framework.value) || hoveredValue === framework.value
                                                ? "rgba(233, 236, 243, 1)"
                                                : "transparent",
                                    }}
                                >
                                    {framework.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            selectedValues.includes(framework.value) ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                            <button className="sendBtn">Göstər</button>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
