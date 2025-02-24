"use client";

import { useEffect, useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    console.error(error);
  }, [error]);

  if (!isHydrated) return null; // Avoids SSR mismatch

  return (
    <div>
      <p>Oops! Something went wrong... maybe try refreshing?</p>
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
