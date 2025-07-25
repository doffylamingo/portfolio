import LinkItem from "./LinkItem";

export default function Links() {
  return (
    <div className="mt-2 flex gap-5">
      <LinkItem
        name="GitHub"
        href="https://github.com/doffylamingo"
      />
      <LinkItem
        name="LinkedIn"
        href="https://github.com/doffylamingo"
      />
      <LinkItem
        name="Email"
        href="mailto:nowietorres@outlook.com"
      />
    </div>
  );
}
