import { useMemo, useState, memo } from "react";

// this example shows that memo does not work when the object properties are objects or arrays
export const ObjectPropertiesNested = () => {
  const [count, setCount] = useState<number>(0);
  const item = {
    id: 1,
    name: "John",
    items: [1, 2, 3],
  };

  const itemMemoized = useMemo(
    () => ({ id: 1, name: "John", items: [1, 2, 3] }),
    []
  );

  return (
    <>
      <button onClick={() => setCount((count: number) => count + 1)}>
        count is {count}
      </button>

      <p>display</p>
      <Display name={item.name} id={item.id} items={item.items} />

      <p>display with itemMemoized</p>
      <Display
        name={itemMemoized.name}
        id={itemMemoized.id}
        items={itemMemoized.items}
      />

      <p>display memoized with item</p>
      <DisplayMemoized name={item.name} id={item.id} items={item.items} />

      <p>display memoized with itemMemoized</p>
      <DisplayMemoized
        name={itemMemoized.name}
        id={itemMemoized.id}
        items={itemMemoized.items}
      />
    </>
  );
};

const Display = ({
  name,
  id,
  items,
}: {
  name: string;
  id: number;
  items: number[];
}) => {
  console.log("display rendering");
  return (
    <div>
      <div>{name}</div>
      <div>{id}</div>
      <div>{items.join(", ")}</div>
    </div>
  );
};

const DisplayMemoized = memo(Display);
