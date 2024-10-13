import { Button } from "@/components/ui/button";

export const Hero9 = () => (
  <div className="min-h-screen flex flex-col">
    <div
      className="w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/564x/47/5a/bc/475abcee227d7d47c2c094e7aaa4a4f0.jpg')",
        height: "75vh",
      }}
    ></div>
    <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 px-10 py-10">
      <div className="flex gap-4">
        <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
          This is the start of something!
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl leading-relaxed tracking-tight text-muted-foreground text-left">
          Managing a small business today is already tough. Avoid further
          complications by ditching outdated, tedious trade methods. Our goal is
          to streamline SMB trade, making it easier and faster than ever.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="gap-4 rounded-none ">
            Button
          </Button>
          <Button
            size="lg"
            className="gap-4 rounded-none border border-primary"
            variant="outline"
          >
            Button
          </Button>
        </div>
      </div>
    </div>
  </div>
);
