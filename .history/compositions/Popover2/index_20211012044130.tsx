

const Popover2 = ({ }) => {

    return (
        <Popover>
            <PopoverTrigger aria-label={`Theme Selection`}>
                <IconButton>
                    {icon}
                </IconButton>
            </PopoverTrigger>

            <PopoverContent>
                <PopoverHeading>
                    {heading}
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

{/* <Flex css={{ fd: 'row', ml: '$2', jc: 'flex-start', ai: 'flex-start', flexWrap: 'wrap', width: '225px', height: '100%' }}>
{themes.map((theme: ITheme, i: number) => (
    <Thematicaikon 
        key={`theme${i}`} 
        theme={theme} 
        index={i} 
    /> 
))}
</Flex> */}
