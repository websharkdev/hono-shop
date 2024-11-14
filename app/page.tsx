"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/hello");
      const { message } = await res.json();
      setMessage(message);
    };
    fetchData();
  }, []);

  if (!message) return <p>Loading...</p>;

  return (
    <p>
      <Button>Some SHADCN-BUTTON</Button>
      {message}
    </p>
  );
}
