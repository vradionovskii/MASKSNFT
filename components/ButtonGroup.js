export default function ButtonGroup() {
  return (
    <>
      <div className="space-x-[0.625rem] hidden md:block">
        <button className="button button-outline">Connect Wallet</button>
        <button className="button button-solid">Add Mask</button>
      </div>
      <button
        aria-label="+"
        className="w-10 h-10 text-center transition-opacity duration-200 bg-black rounded-full hover:opacity-70 md:hidden"
      >
        <svg
          className="w-[0.875rem] h-[0.875rem] m-auto"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 6.53333H14V7.46666H0V6.53333Z"
            fill="white"
          />
          <rect
            x="7.46655"
            width="14"
            height="0.933333"
            transform="rotate(90 7.46655 0)"
            fill="white"
          />
        </svg>
      </button>
    </>
  );
}
