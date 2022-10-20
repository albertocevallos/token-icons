import { clsx } from 'clsx'
import { Menu, Tab, Transition, Dialog } from '@headlessui/react'
import Link from 'next/link'
import { forwardRef, Fragment, useEffect, useId, useRef, useState } from 'react'
import Image from 'next/future/image'
import { matchSorter } from 'match-sorter'
import { tags } from '@/data/tags'

const ethereumUrl =
  'https://raw.githubusercontent.com/albertocevallos/token-icons/main/assets/blockchains/ethereum/metadata.json'
const arbitrumUrl =
  'https://raw.githubusercontent.com/albertocevallos/token-icons/main/assets/blockchains/arbitrum/metadata.json'
const polygonUrl =
  'https://raw.githubusercontent.com/albertocevallos/token-icons/main/assets/blockchains/polygon/metadata.json'

function Logo(props) {
  return (
    <div className="flex items-center">
      <Image
        src={require('@/images/favicon-32x32.png')}
        alt=""
        className=""
        priority
        unoptimized
        width={25}
        height={25}
        style={{ marginRight: '.5em', borderRadius: '.25em' }}
      />
      <div className="text-xl font-semibold leading-9 tracking-tight text-slate-900">
        TokenIcons
      </div>
    </div>
  )
}

function Container({ className, ...props }) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}

function Button({ className, ...props }) {
  className = clsx(
    className,
    'rounded-lg text-slate-900 font-semibold transition flex items-center gap-3 text-[0.8125rem] leading-6 py-1 px-1.5 hover:bg-slate-900/[0.03] -my-1 -mx-1.5'
  )

  if (props.href) {
    return <Link className={className} {...props} />
  }

  return <button className={className} {...props} />
}

function ShareButton({ children = 'Share on Twitter' }) {
  let href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    'Check out Heroicons by @steveschoger and the @tailwindcss team 😍'
  )}&url=${encodeURIComponent('https://heroicons.com')}`

  return (
    <Button href={href}>
      <svg
        viewBox="0 0 20 20"
        aria-hidden="true"
        className="h-5 w-5 fill-slate-400"
      >
        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84" />
      </svg>
      <span>{children}</span>
    </Button>
  )
}

function Header({ ethereumIcons, arbitrumIcons, polygonIcons }) {
  return (
    <header className="relative overflow-hidden bg-slate-50 pt-6">
      <Image
        src={require('@/images/beams.jpg')}
        alt=""
        className="absolute bottom-0 left-1/2 ml-[-639px] w-[1278px] max-w-none"
        priority
        unoptimized
      />
      <div className="absolute inset-0 shadow-[inset_0_-1px_0_rgba(22,27,59,0.04)]" />
      <Container className="relative">
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo className="h-7" />
            <Menu as="div" className="relative">
              <Menu.Button
                aria-label="Version"
                className="flex items-center rounded-full border border-slate-700/10 bg-slate-100 py-1.5 pl-2.5 pr-3 text-xs font-semibold text-slate-500 transition hover:border-slate-700/20"
              >
                v1.0.0
                <svg viewBox="0 0 6 3" className="ml-2 w-1.5 overflow-visible">
                  <path
                    d="M0 0L3 3L6 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Menu.Button>
              <Menu.Items className="absolute top-full mt-1 w-40 rounded-lg bg-white py-2 text-sm font-semibold leading-6 text-slate-700 shadow ring-1 ring-slate-900/5">
                <Menu.Item disabled>
                  <span className="flex items-center justify-between px-3 py-1 text-violet-500">
                    v1.0.0
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        d="m7.75 12.75 2.25 2.5 6.25-6.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
          <ShareButton>
            Share<span className="sr-only sm:not-sr-only"> on Twitter</span>
          </ShareButton>
        </div>
        <div className="flex justify-center text-center lg:pt-5 lg:pb-7 lg:text-left">
          <div className="flex max-w-[37rem] flex-col py-16 lg:pt-12 lg:pb-11">
            <h1 className="mt-6 text-[1.75rem] font-extrabold leading-9 tracking-tight text-slate-900 md:text-4xl">
              A free, up-to-date collection of ERC-20 icons.
            </h1>
            <div className="order-first flex items-center justify-center gap-4 text-[0.8125rem] leading-6 text-slate-500 lg:justify-start">
              <p>{`${
                ethereumIcons.length +
                arbitrumIcons.length +
                polygonIcons.length
              } icons`}</p>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="w-0.5 fill-current"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <p>MIT license</p>
              <svg
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="w-0.5 fill-current"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <p>Ethereum &amp; EVM tokens</p>
            </div>
            <div className="mt-10 flex justify-center gap-8 lg:justify-start">
              <Button href="https://github.com/albertocevallos/token-icons">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 fill-slate-900"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                  />
                </svg>
                Documentation
              </Button>
              <Button href="https://www.npmjs.com/package/token-icons">
                <Image
                  src={require('@/images/npm.png')}
                  alt=""
                  className="w-8"
                  priority
                  unoptimized
                />
                Install the package
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-auto lg:justify-center">
            {/* <Illustration /> */}
          </div>
        </div>
      </Container>
    </header>
  )
}

function Glow(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 384 12" fill="none" aria-hidden="true" {...props}>
      <mask
        id={`${id}-a`}
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={48}
        y={0}
        width={269}
        height={4}
      >
        <path
          transform="rotate(180 316.656 4)"
          fill="#C4C4C4"
          d="M316.656 4h268v4h-268z"
        />
      </mask>
      <g filter={`url(#${id}-b)`} mask={`url(#${id}-a)`}>
        <path
          transform="rotate(180 292.656 1)"
          fill={`url(#${id}-c)`}
          d="M292.656 1h220v2h-220z"
        />
      </g>
      <mask
        id={`${id}-d`}
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={116}
        y={0}
        width={268}
        height={12}
      >
        <path
          transform="rotate(180 384 12)"
          fill="#C4C4C4"
          d="M384 12h268v12H384z"
        />
      </mask>
      <g filter={`url(#${id}-e)`} mask={`url(#${id}-d)`}>
        <path
          transform="rotate(180 360 1)"
          fill={`url(#${id}-f)`}
          d="M360 1h220v2H360z"
        />
      </g>
      <defs>
        <linearGradient
          id={`${id}-c`}
          x1="292.656"
          y1={1}
          x2="512.656"
          y2={1}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A78BFA" stopOpacity={0} />
          <stop offset=".323" stopColor="#A78BFA" />
          <stop offset=".672" stopColor="#EC4899" stopOpacity=".3" />
          <stop offset={1} stopColor="#EC4899" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={`${id}-f`}
          x1={360}
          y1={1}
          x2={580}
          y2={1}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A78BFA" stopOpacity={0} />
          <stop offset=".323" stopColor="#A78BFA" />
          <stop offset=".672" stopColor="#EC4899" stopOpacity=".3" />
          <stop offset={1} stopColor="#EC4899" stopOpacity={0} />
        </linearGradient>
        <filter
          id={`${id}-b`}
          x="71.656"
          y={-2}
          width={222}
          height={4}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation=".5"
            result="effect1_foregroundBlur_311_43467"
          />
        </filter>
        <filter
          id={`${id}-e`}
          x={131}
          y={-10}
          width={238}
          height={20}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="4.5"
            result="effect1_foregroundBlur_311_43467"
          />
        </filter>
      </defs>
    </svg>
  )
}

const TabList = forwardRef(function TabList(
  { enabled = true, selectedIndex, ethereumIcons, arbitrumIcons, polygonIcons },
  ref
) {
  let List = enabled ? Tab.List : 'div'
  let Item = enabled ? Tab : 'div'

  return (
    <List
      ref={ref}
      aria-hidden={!enabled}
      className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:pt-12"
    >
      {[
        [
          'Ethereum',
          `${ethereumIcons.length} icons`,
          'The leading smart contract platform for writing and distributing dapps.',
        ],
        [
          'Arbitrum',
          `${arbitrumIcons.length} icons`,
          'The leading smart contract platform for writing and distributing dapps.',
        ],
        [
          'Polygon',
          `${polygonIcons.length} icons`,
          'The leading smart contract platform for writing and distributing dapps.',
        ],
      ].map(([type, details, description], index) => (
        <div
          key={type}
          className={clsx(
            'relative rounded-xl p-6 text-sm leading-6 transition',
            selectedIndex === index
              ? 'shadow-[0_1px_3px_rgba(15,23,42,0.03),0_1px_2px_rgba(15,23,42,0.06)] ring-1 ring-slate-600/[0.04]'
              : 'hover:bg-slate-50'
          )}
        >
          <h2>
            <Item className="flex gap-2 transition [&:not(:focus-visible)]:focus:outline-none">
              <span className="absolute inset-0 rounded-xl" />
              <span
                className={clsx(
                  'font-semibold',
                  selectedIndex === index ? 'text-violet-500' : 'text-slate-900'
                )}
              >
                {type}
              </span>
              <span className="hidden text-slate-400 lg:block">{details}</span>
            </Item>
          </h2>
          <p className="mt-1 text-slate-500">{description}</p>
          <Glow
            className={clsx(
              'absolute top-full right-0 w-[384px] max-w-[120%] transition',
              selectedIndex !== index && 'opacity-0'
            )}
          />
        </div>
      ))}
    </List>
  )
})

function TabListSmall({ enabled = true, selectedIndex }) {
  let List = enabled ? Tab.List : 'div'
  let Item = enabled ? Tab : 'div'

  return (
    <List
      aria-hidden={!enabled}
      className="grid grid-cols-3 gap-0.5 rounded-lg bg-slate-400/10 text-center text-[0.8125rem] font-semibold leading-6 text-slate-600 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-slate-900/5"
    >
      {['Ethereum', 'Arbitrum', 'Polygon'].map((type, typeIndex, types) => (
        <Item
          key={type}
          className={clsx(
            'py-2 px-6 transition focus:z-10 [&:not(:focus-visible)]:focus:outline-none',
            typeIndex === 0 && 'rounded-l-lg',
            typeIndex === types.length - 1 && 'rounded-r-lg',
            selectedIndex === typeIndex
              ? 'bg-slate-50 text-violet-500'
              : 'bg-white hover:bg-slate-50 hover:text-slate-700'
          )}
        >
          {type}
        </Item>
      ))}
    </List>
  )
}

function useMediaQuery(query) {
  let [matches, setMatches] = useState(null)

  useEffect(() => {
    let matchMedia = window.matchMedia(query)

    function handleChange() {
      setMatches(matchMedia.matches)
    }

    handleChange()
    matchMedia.addEventListener('change', handleChange)

    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}

function Blur(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 1140 34" fill="none" {...props}>
      <g opacity=".6" filter={`url(#${id}-a)`}>
        <path fill={`url(#${id}-b)`} d="M6 6h1128v22H6z" />
        <path fill={`url(#${id}-c)`} d="M6 6h1128v22H6z" />
      </g>
      <defs>
        <radialGradient
          id={`${id}-c`}
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 -22 1128 0 563 28)"
        >
          <stop offset=".273" stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id={`${id}-b`}
          x1={6}
          y1={6}
          x2={1134}
          y2={6}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A78BFA" stopOpacity={0} />
          <stop offset=".323" stopColor="#A78BFA" />
          <stop offset=".672" stopColor="#EC4899" stopOpacity=".3" />
          <stop offset={1} stopColor="#EC4899" stopOpacity={0} />
        </linearGradient>
        <filter
          id={`${id}-a`}
          x={0}
          y={0}
          width={1140}
          height={34}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={3}
            result="effect1_foregroundBlur_311_43535"
          />
        </filter>
      </defs>
    </svg>
  )
}

function Icons({ type, icons, query, openModal, setData, setType }) {
  setType(type)

  let filteredIcons = query
    ? matchSorter(icons, query.replace(/\s+/, '-'), { keys: ['name', 'tags'] })
    : icons

  if (query && filteredIcons.length === 0) {
    return (
      <div className="flex flex-col items-center py-20 text-sm leading-6 text-slate-600 md:py-32 lg:py-40">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
          className="h-8 w-8"
        >
          <path
            d="m13 13 6 6m0-6-6 6m15-3c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z"
            stroke="#CBD5E1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="mt-6">
          We’re sorry we don’t have icons for{' '}
          <span className="font-semibold text-slate-900">{`“${query}”`}</span>.
        </p>
        <p className="mt-1">
          If you can’t find what you’re looking for{' '}
          <Link
            href="https://github.com/tailwindlabs/heroicons/discussions/new?category=ideas"
            className="font-semibold text-violet-600"
          >
            make a suggestion on GitHub.
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-x-6 gap-y-8 pt-10 pb-16 sm:pt-11 md:pt-12">
      {filteredIcons.map((icon) => (
        <TokenIcon
          type={type}
          key={icon.name}
          icon={icon}
          openModal={openModal}
          setData={setData}
        />
      ))}
    </div>
  )
}
const TokenIcon = ({ type, icon, openModal, setData }) => {
  return (
    <div>
      <div className="relative h-[8.5rem]">
        <button
          onClick={() => {
            openModal()
            setData(icon)
          }}
          type="button"
          id={`${icon.name}-btn`}
          aria-label={icon.name}
          aria-haspopup="true"
          aria-controls={icon.name}
          className="absolute inset-0 flex h-full w-full  cursor-pointer items-center justify-center rounded-xl text-slate-900 ring-1 ring-inset ring-slate-900/[0.08]"
        >
          <span
            dangerouslySetInnerHTML={{ __html: icon.svg }}
            className={clsx('transition-transform')}
          />
          <Image
            src={`https://raw.githubusercontent.com/albertocevallos/token-icons/main/assets/blockchains/${type}/assets/${icon.id}/logo.png`}
            alt="icon"
            className=""
            width={50}
            height={50}
            priority
            unoptimized
            style={{ objectPosition: 'center' }}
          />
        </button>

        <Transition
          as={Fragment}
          enter="transition-opacity duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300 ease-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          show={false}
        >
          <p className="absolute inset-x-0 bottom-10 text-center text-[0.8125rem] font-semibold leading-6 text-violet-500">
            Copied!
          </p>
        </Transition>
        <Transition
          as={Fragment}
          enter="transition-opacity duration-100 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200 ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          show={false}
        >
          <div
            id={icon.name}
            role="menu"
            aria-labelledby={`${icon.name}-btn`}
            className={clsx(
              'absolute inset-0 grid grid-cols-1 grid-rows-2 gap-1 p-1'
            )}
          >
            <div
              id={`${icon.name}-svg`}
              role="menuitem"
              className={clsx(
                'flex cursor-pointer items-center justify-center rounded-lg bg-slate-50/[0.94] text-[0.8125rem] font-semibold text-slate-500'
              )}
              onMouseEnter={() => setActiveType('svg')}
              onMouseLeave={() => setActiveType(undefined)}
              onClick={() => copy('svg')}
            >
              Copy SVG
            </div>
            <div
              id={`${icon.name}-jsx`}
              role="menuitem"
              className={clsx(
                'flex cursor-pointer items-center justify-center rounded-lg bg-slate-50/[0.94] text-[0.8125rem] font-semibold text-slate-500'
              )}
              onMouseEnter={() => setActiveType('jsx')}
              onMouseLeave={() => setActiveType(undefined)}
              onClick={() => copy('jsx')}
            >
              Copy JSX
            </div>
          </div>
        </Transition>
      </div>
      <div
        className="mt-3 truncate text-center text-[0.8125rem] leading-6 text-slate-500"
        title={icon.name}
      >
        {icon.name}
      </div>
    </div>
  )
}

function Modal({ type, isOpen, data, closeModal, openModal }) {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-center text-2xl font-medium leading-6 text-gray-900"
                  >
                    {data.name}
                  </Dialog.Title>
                  <div className="mt-10 mb-10 flex items-center justify-center">
                    <Image
                      src={`https://raw.githubusercontent.com/albertocevallos/token-icons/main/assets/blockchains/${type}/assets/${data.id}/logo.png`}
                      alt="icon"
                      className=""
                      width={100}
                      height={100}
                      priority
                      unoptimized
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-900"> Type</p>
                    <p className="text-sm text-gray-500">{data.type}</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-900"> Address</p>
                    <p className="text-sm text-gray-500">
                      <a href={data.explorer} target="_blank">
                        {data.id}
                      </a>
                    </p>
                  </div>

                  <div className="mt-2">
                    <p className="text-sm text-gray-900"> Description</p>
                    <p className="text-sm text-gray-500">{data.description}</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-900"> Website</p>
                    <p className="text-sm text-gray-500">
                      <a href={data.website} target="_blank">
                        {data.website}
                      </a>
                    </p>{' '}
                  </div>

                  <div className="mt-10 flex items-center justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default function Home() {
  const [ethereumIcons, setEthereumIcons] = useState([])
  const [arbitrumIcons, setArbitrumIcons] = useState([])
  const [polygonIcons, setPolygonIcons] = useState([])

  let [isOpen, setIsOpen] = useState(false)
  let [data, setData] = useState()
  let [type, setType] = useState('ethereum')

  let searchBarRef = useRef()
  let searchInputRef = useRef()
  let tabListRef = useRef()
  let [scrolled, setScrolled] = useState(false)
  let isLg = useMediaQuery('(min-width: 1024px)')
  let [query, setQuery] = useState('')

  useEffect(() => {
    updateEth()
    updateArb()
    updatePoly()
  }, [])

  const updateEth = async () => {
    const ethRes = await fetch(ethereumUrl)
    const ethJson = await ethRes.json()
    setEthereumIcons(ethJson)
  }

  const updateArb = async () => {
    const arbRes = await fetch(arbitrumUrl)
    const arbJson = await arbRes.json()
    console.log(arbJson)
    setArbitrumIcons(arbJson)
  }
  const updatePoly = async () => {
    const polyRes = await fetch(polygonUrl)
    const polyJson = await polyRes.json()
    setPolygonIcons(polyJson)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  useEffect(() => {
    function update() {
      setScrolled(
        window.scrollY >=
          tabListRef.current.offsetTop +
            tabListRef.current.offsetHeight -
            searchBarRef.current.offsetHeight
      )
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update, { passive: true })
      window.removeEventListener('resize', update)
    }
  }, [])

  useEffect(() => {
    function onKeyDown(event) {
      let element = event.target
      let tagName = element.tagName
      let isEditingContent =
        element.isContentEditable ||
        tagName === 'INPUT' ||
        tagName === 'SELECT' ||
        tagName === 'TEXTAREA'

      if (
        (event.key === 'k' && (event.metaKey || event.ctrlKey)) ||
        (event.key === '/' && !isEditingContent)
      ) {
        event.preventDefault()
        searchInputRef.current.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onkeydown)
    }
  }, [])

  return (
    <>
      <Header
        ethereumIcons={ethereumIcons}
        arbitrumIcons={arbitrumIcons}
        polygonIcons={polygonIcons}
      />
      <main>
        <Tab.Group>
          {({ selectedIndex }) => (
            <>
              <div
                ref={searchBarRef}
                className="pointer-events-none sticky top-0 z-50 -mb-10 overflow-hidden pb-10 sm:-mb-11 sm:pb-11 md:-mb-12 md:pb-12"
              >
                <div className="relative">
                  <Blur className="absolute bottom-[-16px] left-1/2 ml-[-570px] w-[1140px]" />
                  <div className="pointer-events-auto relative bg-white pb-4 shadow-[0_1px_3px_rgba(15,23,42,0.08)] sm:pb-0">
                    <Container className="flex flex-col sm:flex-row sm:items-center">
                      <div className="relative flex-auto">
                        <input
                          ref={searchInputRef}
                          type="search"
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          aria-label="Search all icons"
                          placeholder="Search all icons..."
                          className="block w-full appearance-none rounded-lg bg-transparent py-6 pr-4 pl-9 text-base text-slate-900 transition placeholder:text-slate-400 focus:outline-none sm:text-[0.8125rem] sm:leading-6 [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
                        />
                        <svg
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 fill-slate-500 transition"
                        >
                          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z" />
                        </svg>
                      </div>
                      <div className="lg:hidden">
                        <TabListSmall
                          enabled={isLg === false}
                          selectedIndex={selectedIndex}
                        />
                      </div>
                      <Transition
                        className="hidden lg:block"
                        show={scrolled}
                        enter="transition-opacity"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <TabListSmall
                          enabled={isLg}
                          selectedIndex={selectedIndex}
                        />
                      </Transition>
                    </Container>
                  </div>
                </div>
              </div>

              <Container>
                <TabList
                  ref={tabListRef}
                  enabled={isLg && !scrolled}
                  selectedIndex={selectedIndex}
                  ethereumIcons={ethereumIcons}
                  arbitrumIcons={arbitrumIcons}
                  polygonIcons={polygonIcons}
                />
                <Tab.Panels>
                  <Tab.Panel className="focus:outline-none">
                    <Icons
                      type="ethereum"
                      icons={ethereumIcons}
                      query={query}
                      openModal={openModal}
                      setData={setData}
                      setType={setType}
                    />
                  </Tab.Panel>
                  <Tab.Panel className="focus:outline-none">
                    <Icons
                      type="arbitrum"
                      icons={arbitrumIcons}
                      query={query}
                      openModal={openModal}
                      setData={setData}
                      setType={setType}
                    />
                  </Tab.Panel>
                  <Tab.Panel className="focus:outline-none">
                    <Icons
                      type="polygon"
                      icons={polygonIcons}
                      query={query}
                      openModal={openModal}
                      setData={setData}
                      setType={setType}
                    />
                  </Tab.Panel>
                </Tab.Panels>
                <footer className="flex flex-col items-center justify-between gap-10 border-t border-slate-400/20 pt-10 pb-20 sm:flex-row">
                  <p className="flex items-center gap-3 text-[0.8125rem] leading-6 text-slate-900">
                    {/* <svg width="30" height="18" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15 0c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C17.08 7.271 18.782 9 22.5 9c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C20.42 1.728 18.718 0 15 0ZM7.5 9C3.5 9 1 11 0 15c1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C9.58 16.271 11.282 18 15 18c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C12.92 10.729 11.218 9 7.5 9Z"
                        fill="#38BDF8"
                      />
                    </svg> */}
                    <span>
                      An{' '}
                      <a
                        target="_blank"
                        href="https://ethereum.org"
                        className="font-semibold"
                      >
                        ethereum
                      </a>{' '}
                      project
                    </span>
                  </p>
                  <ShareButton />
                </footer>
              </Container>
            </>
          )}
        </Tab.Group>
        {isOpen && (
          <Modal
            type={type}
            isOpen={isOpen}
            data={data}
            closeModal={closeModal}
            openModal={openModal}
          />
        )}
      </main>
    </>
  )
}
