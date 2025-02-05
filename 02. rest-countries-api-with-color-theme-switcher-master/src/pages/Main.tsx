import { HEADER_HEIGHT } from "@/constants";

export default function Main() {
  const hscreen = window.innerHeight - HEADER_HEIGHT;
  console.log(hscreen);

  return (
    <div
      className={`w-screen h-[${hscreen}px] mt-[${HEADER_HEIGHT}px] px-16 py-10`}
    >
      메인 영역
    </div>
  );
}
