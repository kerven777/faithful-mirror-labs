export function AccentTitle({ text, light = false }: { text: string; light?: boolean }) {
  const words = text.trim().split(/\s+/);
  const last = words.pop() ?? "";
  return (
    <>
      {words.length > 0 && <>{words.join(" ")} </>}
      <span className={light ? "underline-squiggle-light" : "underline-squiggle"}>{last}</span>
    </>
  );
}
