export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-8 md:p-24">
      <h1 className="text-8xl leading-normal">Piper</h1>
      <p className="md:w-[700px] text-lg text-center">
        A{" "}
        <span className="font-medium underline underline-offset-4">
          pipeline management system
        </span>
        . You can use this project for{" "}
        <span className="font-medium underline underline-offset-4">free</span>.
        <br className="hidden md:block" /> I mainly created this project for
        people (you and me) to learn :D!
      </p>
    </main>
  );
}
