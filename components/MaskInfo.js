import { useEffect, useState } from "react";

function HeartAndInfo({ likes }) {
  return (
    <div className="flex mr-auto mb-[1.875rem]">
      <button className="flex hover:opacity-50 transition-opacity duration-200 mr-1 text-center px-3 py-[0.5625rem] bg-[rgba(80,83,76,0.186)] rounded-full">
        <img
          src="/images/heart.svg"
          className="w-[0.875rem] h-[0.8125rem] mr-[0.375rem] m-auto"
          alt="heart"
        />
        <span className="text-xs">{likes}</span>
      </button>
      <button className="flex hover:opacity-50 transition-opacity duration-200 text-center  px-3 py-[0.5625rem] bg-[rgba(80,83,76,0.186)] rounded-full">
        <span className="text-[0.625rem] mr-[0.625rem]">More info</span>
        <img
          src="/images/chevron-right.svg"
          className="w-[0.3125rem] h-2 m-auto"
          alt="heart"
        />
      </button>
    </div>
  );
}

function CountDown({ data }) {
  const [[h, m, s], setTime] = useState(["00", "00", "00"]);
  const fixedNow = new Date().getTime();
  useEffect(() => {
    let interval = setInterval(function () {
      let now = new Date().getTime();
      let distance = fixedNow + data.endsIn - now;

      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime([hours, minutes, seconds]);
      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <p className="text-[rgba(0,0,0,0.6)] text-xs pb-1">Auction ending in</p>
      <div className="grid w-full grid-cols-3">
        {[
          { text: "hours", time: h },
          { text: "minutes", time: m },
          { text: "seconds", time: s },
        ].map(({ text, time }, i) => (
          <div
            key={text}
            className="flex w-full flex-wrap font-sans pb-[0.375rem]"
          >
            <span className="w-1/2">{time}</span>
            <span className="w-1/2 text-center">{i !== 2 && ":"}</span>
            <span className="w-full font-sans text-[rgba(0,0,0,0.4)] text-[0.625rem]">
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MinimumBid({ data }) {
  return (
    <div className="">
      <p className="text-[rgba(0,0,0,0.6)] text-xs pb-1">Minimum bid</p>
      <p className="pb-[0.375rem] leading-none">{`${data.minBidETH} ETH`}</p>
      <p className="text-[rgba(0,0,0,0.4)] text-[0.625rem]">
        ${data.minBidUSD}
      </p>
    </div>
  );
}

export default function MaskInfo({ data }) {
  return (
    <div className="flex flex-col">
      <p className="pb-2 text-sm opacity-40">@{data.nickname}</p>
      <p className="font-mono leading-none text-[2.375rem] max-w-sm pb-[1.375rem]">
        {data.title}
      </p>
      <HeartAndInfo likes={data.likes} />
      <button className="w-full max-w-xs mb-4 font-mono button button-solid">
        Place a Bid
      </button>
      <div className="flex">
        <MinimumBid data={data} />
        <div className="mx-8 border-solid md:border-l-[0.0625rem] border-[rgba(0,0,0,0.2)]"></div>
        <CountDown data={data} />
      </div>
    </div>
  );
}
