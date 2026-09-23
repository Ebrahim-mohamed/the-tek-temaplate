export function HeroSection({
  text,
  secText,
}: {
  text: string;
  secText?: string;
}) {
  return (
    <div
      className="
        relative
        rounded-b-[7rem]
        w-full
        overflow-hidden
        h-dvh
        flex
        items-center
        justify-center
        text-white
        text-[2rem]
        bg-cover
        bg-start
        bg-[url('/assets/mobileBanner.jpeg')]
        min-[1000px]:bg-[url('/assets/homePage.jpg')]
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-10 rounded-b-[7rem] bg-[#00000091]" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center">
        <p>{text}</p>

        {secText && <p>{secText}</p>}
      </div>
    </div>
  );
}
