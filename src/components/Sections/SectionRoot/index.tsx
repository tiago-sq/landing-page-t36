type SectionRootProps = {
  children: React.ReactNode;
  sectionId: string;
  className?: string;
  refEl: React.RefObject<HTMLElement>;
};

function SectionRoot({ children, sectionId, className = 'section', refEl }: SectionRootProps) {
  return (
    <section id={ sectionId } className={ className } ref={ refEl }>
      { children }
    </section>
  );
}

export default SectionRoot;
