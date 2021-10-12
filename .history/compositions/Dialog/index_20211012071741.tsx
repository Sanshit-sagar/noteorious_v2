import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogClose,
}
const DialogDemo = () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="large">Edit profile</Button>
      </DialogTrigger>

      <DialogContent >
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
       
        <Text> CONTENT GOES HERE </Text>

        <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
          <DialogClose asChild>
            <Button aria-label="Close" variant="green">
              Save changes
            </Button>
          </DialogClose>
        </Flex>

        <DialogClose asChild>
          <IconButton>
            <Cross2Icon />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );