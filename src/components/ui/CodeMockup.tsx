export type CodeLine = { prefix?: string; className?: string; code: string };

export default function CodeMockup({ lines }: { lines: CodeLine[] }) {
  return (
    <div className="mockup-code">
      {lines.map((line, i) => (
        <pre key={i} data-prefix={line.prefix} className={line.className}>
          <code>{line.code}</code>
        </pre>
      ))}
    </div>
  );
}
