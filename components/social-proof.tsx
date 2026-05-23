const row1 = [
  "Agencies", "Web Studios", "Consultancies", "Property", "Fitness", "Trades",
  "Agencies", "Web Studios", "Consultancies", "Property", "Fitness", "Trades",
]
const row2 = [
  "Retail", "Legal", "Healthcare", "Events", "Recruitment", "Hospitality", "Coaches", "Builders",
  "Retail", "Legal", "Healthcare", "Events", "Recruitment", "Hospitality", "Coaches", "Builders",
]

function TickerRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden">
      <div className={`flex gap-0 w-max ${reverse ? "animate-ticker-reverse" : "animate-ticker"}`}>
        {items.map((item, i) => (
          <span key={i} className="flex items-center text-muted text-sm font-body whitespace-nowrap px-5">
            {item}
            <span className="ml-5 text-divider select-none">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function SocialProof() {
  return (
    <section className="py-12 bg-bg border-y border-divider overflow-hidden">
      <div
        className="flex flex-col gap-5"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <TickerRow items={row1} />
        <TickerRow items={row2} reverse />
      </div>
    </section>
  )
}
