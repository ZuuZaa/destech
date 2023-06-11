export const Section = ({ title, children }) => {
  return (
    <section className="py-16">
      <h2 className="text-[80px] font-bold max-w-[13ch]">{title}</h2>
      <div className="py-5">
        {children}
      </div>
    </section>
  )
}
