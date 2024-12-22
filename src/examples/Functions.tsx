import { useCallback, useState, memo } from "react";

export const Functions = () => {
  const [count, setCount] = useState<number>(0);

  function func() {
    console.log("hello");
  }

  const funcMemoized = useCallback(func, []);

  return (
    <>
      <button onClick={() => setCount((count: number) => count + 1)}>
        count is {count}
      </button>

      <p>child with funct</p>
      <Child funcParam={func} />

      <p>child with funcMemoized</p>
      <Child funcParam={funcMemoized} />

      <p>child memoized with func</p>
      <ChildMemoized funcParam={func} />

      <p>child memoized with funcMemoized</p>
      <ChildMemoized funcParam={funcMemoized} />
    </>
  );
};

const Child = ({ funcParam }: { funcParam: () => void }) => {
  return (
    <div>
      <p onClick={funcParam}>click</p>
    </div>
  );
};

const ChildMemoized = memo(Child);
