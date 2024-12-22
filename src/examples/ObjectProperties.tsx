import { useMemo, useState, memo } from "react";

// this example shows that memo works when the object properties are
export const ObjectProperties = () => {
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
      <Display name={item.name} id={item.id} />

      <p>display with itemMemoized</p>
      <Display name={itemMemoized.name} id={itemMemoized.id} />

      <p>display memoized with item</p>
      <DisplayMemoized name={item.name} id={item.id} />

      <p>display memoized with itemMemoized</p>
      <DisplayMemoized name={itemMemoized.name} id={itemMemoized.id} />
    </>
  );
};

const Display = ({ name, id }: { name: string; id: number }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{id}</div>
    </div>
  );
};

const DisplayMemoized = memo(Display);
