export const DEFAULT_PLAYGROUND_CODE = `() => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (<div>
    <Button label="Open pane" onClick={() => setIsOpen(true)} />
    <Pane
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Typography
        </Typography>
      </Pane.Header>
      <Pane.Body>
        <Typography style="body2">
          Somewhere out in space live the Herculoids! Zok, the laser-ray
          dragon!
        </Typography>
      </Pane.Body>
    </Pane>
  </div>)
}
`;
