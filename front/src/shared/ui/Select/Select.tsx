import React, {useRef, useState} from 'react'
import {Container, Dropdown, DropdownItem, ErrorText, Field} from "@/shared/ui/Select/Select.styles.ts";
import {useClickOutside} from "@/shared/hooks/useClickOutside.ts";

export interface SelectOption {
  label: string
  value: string
}

export interface SelectProps {
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  isDisabled?: boolean
  hasError?: boolean
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  isDisabled = false,
  hasError = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const selectedOption = options.find(opt => opt.value === value)
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref,
    () => setIsOpen(false));

  const handleSelect = (option: SelectOption) => {
    onChange(option.value)
    setIsOpen(false)
  }

  return (
    <Container ref={ref}>
      <Field
        as="button"
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        disabled={isDisabled}
        $hasError={hasError}
      >
        {selectedOption?.label}
      </Field>
      {hasError && <ErrorText>Error</ErrorText>}
      {isOpen && (
        <Dropdown>
          {options.map(option => (
            <DropdownItem
              key={option.value}
              onClick={() => handleSelect(option)}
              $isActive={option.value === value}
            >
              {option.label}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </Container>
  )
}
