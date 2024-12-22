import { useMemo, useState, memo } from "react";

export const Arrays = () => {
  const [count, setCount] = useState<number>(0);
  const itemsMemoized = useMemo(() => [1, 2, 3, 4, 5], []);
  const items = [1, 2, 3, 4, 5];

  return (
    <>
      <button onClick={() => setCount((count: number) => count + 1)}>
        count is {count}
      </button>

      <p>list with items</p>
      <List items={items} />

      <p>list with items memoized</p>
      <List items={itemsMemoized} />

      <p>display memoized with items</p>
      <ListMemoized items={items} />

      <p>display memoized with items memoized</p>
      <ListMemoized items={itemsMemoized} />
    </>
  );
};

const List = ({ items }: { items: number[] }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

const ListMemoized = memo(({ items }: { items: number[] }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
});
