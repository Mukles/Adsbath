export function SectionFooter({ title }: { title: string }) {
  return (
    <div className="py-4 text-center bg-secondary">
      <h3 className="text-text-light text-3xl">{title}</h3>
    </div>
  );
}
