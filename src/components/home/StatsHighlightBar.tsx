const stats = [
  {
    icon: '/fire.png',
    title: '2+',
    subtitle: 'Years Experience',
    tint: 'bg-[#fee2e2]',
  },
  {
    icon: '/gift.png',
    title: '20+',
    subtitle: 'Projects Completed',
    tint: 'bg-[#ffedd5]',
  },
  {
    icon: '/opensource.png',
    title: 'Open Source',
    subtitle: 'Contributor',
    tint: 'bg-[#e0e7ff]',
  },
  {
    icon: '/diamond.png',
    title: 'Clean Code',
    subtitle: 'Advocate',
    tint: 'bg-[#dbeafe]',
  },
  {
    icon: '/bulb.png',
    title: 'Always',
    subtitle: 'Learning',
    tint: 'bg-[#fef9c3]',
  },
  {
    icon: '/flag.png',
    title: 'India',
    subtitle: 'Based',
    tint: 'bg-[#f3f4f6]',
  },
] as const

export function StatsHighlightBar() {
  return (
    <section
      aria-label="Highlights"
      className="overflow-hidden rounded-[22px] border border-cloud/90 bg-snow shadow-[0_8px_30px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-surface-dark-raised dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
    >
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((item, index) => {
          const isLastColMobile = index % 2 === 1
          const isLastColSm = index % 3 === 2
          const isLastColLg = index === stats.length - 1

          return (
            <li
              key={item.subtitle + item.title}
              className={[
                'relative flex items-center gap-3 px-4 py-4 sm:gap-3.5 sm:px-5 sm:py-[18px]',
                // Mobile 2-col dividers
                !isLastColMobile ? 'border-r border-cloud dark:border-white/10' : '',
                index < 4 ? 'border-b border-cloud dark:border-white/10' : '',
                // sm 3-col
                'sm:border-b-0',
                index < 3 ? 'sm:border-b sm:border-cloud dark:sm:border-white/10' : '',
                !isLastColSm ? 'sm:border-r sm:border-cloud dark:sm:border-white/10' : 'sm:border-r-0',
                // lg 6-col — single row, vertical dividers only
                'lg:border-b-0 lg:border-r lg:border-cloud dark:lg:border-white/10',
                isLastColLg ? 'lg:border-r-0' : '',
              ].join(' ')}
            >
              <span
                className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12 ${item.tint} dark:bg-white/10`}
              >
                <img
                  src={item.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain [image-rendering:pixelated] sm:h-[30px] sm:w-[30px]"
                  draggable={false}
                />
              </span>

              <div className="min-w-0 leading-tight">
                <p className="truncate text-[15px] font-bold tracking-tight text-obsidian dark:text-snow sm:text-[16px]">
                  {item.title}
                </p>
                <p className="mt-0.5 truncate text-[12px] text-fog sm:text-[13px]">{item.subtitle}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
