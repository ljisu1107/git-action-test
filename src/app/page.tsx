// src/app/page.tsx action 테스트

"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function Home() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/posts");
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>MSW 기본 세팅 연습</h1>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>
              {item.id}: {item.title}
            </h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}