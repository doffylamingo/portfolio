import Links from "@/components/Links";
import Projects from "@/components/Projects";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl p-4 font-[family-name:var(--font-geist-mono)] sm:p-6 md:p-8 lg:p-10">
      <div className="flex w-full justify-end">
        <ThemeSwitcher />
      </div>
      <main className="pt-5 pb-15">
        <h2 className="font-semibold text-xl">
          Hello! I'm Nowie, a Full Stack Web Developer based in the Philippines.
        </h2>
        <Links />
      </main>

      <Projects />

      <footer className="flex flex-col items-center justify-center p-10">
        <Links />
      </footer>
    </div>
  );
}
