

const Popover2 = ({ }) => {

    return (
        <Popover>
            <PopoverTrigger aria-label={`Theme Selection`}>
                <IconButton>
                    <LayersIcon />
                </IconButton>
            </PopoverTrigger>

            <PopoverContent>
                <PopoverHeading>
                    <ActiveThemeDisplay />
                    <ActiveModeToggler /> 
                </PopoverHeading>

                <PopoverSeparator />
                
                <PopoverArrow />

                <PopoverClose aria-label="Close">
                    <Cross2Icon />
                </PopoverClose>
            </PopoverContent>
        </Popover>
    )
}