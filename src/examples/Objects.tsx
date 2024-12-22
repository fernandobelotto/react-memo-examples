import { useMemo, useState, memo } from "react";

export const Objects = () => {
  const [count, setCount] = useState<number>(0);
  const item = {
    id: 1,
    name: "John",
  };

  const itemMemoized = useMemo(() => ({ id: 1, name: "John" }), []);

  return (
    <>
      <button onClick={() => setCount((count: number) => count + 1)}>
        count is {count}
      </button>

      <p>display</p>
      <Display item={item} />

      <p>display with itemMemoized</p>
      <Display item={itemMemoized} />

      <p>display memoized with item</p>
      <DisplayMemoized item={item} />

      <p>display memoized with itemMemoized</p>
      <DisplayMemoized item={itemMemoized} />
    </>
  );
};

const Display = ({ item }: { item: { id: number; name: string } }) => {
  return (
    <div>
      <div>{item.name}</div>
      <div>{item.id}</div>
    </div>
  );
};

const DisplayMemoized = memo(Display);
