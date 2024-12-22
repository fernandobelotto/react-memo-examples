import { memo, useMemo, useState } from "react";

export const SimpleProps = () => {
  const [count, setCount] = useState<number>(0);
  const itemMemoized = useMemo(() => "1", []);
  const item = "1";

  return (
    <>
      <button onClick={() => setCount((count: number) => count + 1)}>
        count is {count}
      </button>

      <p>component</p>
      <SimpleDisplay item={item} />

      <p>component with item memoized</p>
      <SimpleDisplay item={itemMemoized} />

      <p>component memoized with item</p>
      <SimpleDisplayMemoized item={item} />

      <p>component memoized with item memoized</p>
      <SimpleDisplayMemoized item={itemMemoized} />
    </>
  );
};

const SimpleDisplay = ({ item }: { item: string }) => {
  return <p>simple display {item}</p>;
};

const SimpleDisplayMemoized = memo(SimpleDisplay);
