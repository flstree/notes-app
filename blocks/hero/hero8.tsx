import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const Hero8 = () => (
  <div className="w-screen h-screen relative overflow-hidden px-4 md:px-20">
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <iframe
        className="w-0 h-0 md:w-full md:h-full object-cover"
        src="https://www.youtube.com/embed/-CV14txxrIs?si=GZ_NmjZh2oqDzvuY&autoplay=1&mute=1&loop=1&playlist=-CV14txxrIs&controls=0&showinfo=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="https://www.example.com/your-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        ></video> */}
    </div>
    <div className="flex gap-8 py-20 lg:py-40 flex-col items-start h-full justify-center relative z-10">
      <div className="flex gap-4 flex-col">
        <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-start font-regular">
          This is the start of something new
        </h1>
        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-start">
          Managing a small business today is already tough. Avoid further
          complications by ditching outdated, tedious trade methods. Our goal is
          to streamline SMB trade, making it easier and faster than ever.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            className="rounded-none border border-primary"
            type="text"
            placeholder="Enter your email"
          />
          <Button className="rounded-none">Sign up</Button>
        </div>
        <div className="flex">
          <p className="text-muted-foreground">
            By clicking sign up you are confirming that you agree with our{" "}
            <Link href="/">Terms and conditions</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);
