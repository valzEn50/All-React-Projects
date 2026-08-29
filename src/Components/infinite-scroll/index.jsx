import React, { useEffect, useState, useRef, useCallback } from "react";
import "./infinite-scroll.css";

export default function InfiniteScroll() {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  
  const observer = useRef();
  const countRef = useRef(0);
  const hasFetchedRef = useRef(false);

  const loader = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      console.log("hi");
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchProducts();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  async function fetchProducts() {
    try {
      setLoading(true);
      const skip = countRef.current === 0 ? 0 : countRef.current * 20;
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${skip}`,
      );

      const result = await response.json();

      if (result && result.products && result.products.length && hasMore) {
        setCards((prevCards) => [...prevCards, ...result.products]);
        countRef.current += 1;
        setCount(countRef.current);
      } else {
        setHasMore(false);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;
    fetchProducts();
  }, []);

  return (
    <div className="scroll-con">
      <div className="scroll-card-con">
        {cards && cards.length
          ? cards.map((card, index) => (
              <div
                className="scroll-card"
                ref={cards.length === index + 1 ? loader : null}
                key={card.id}
              >
                <img src={card.thumbnail} alt={card.title} />
                <p className="card-txt">{card.title}</p>
              </div>
            ))
          : null}
      </div>
      {loading && (
        <div className="loader">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            className="load-icon"
            viewBox="0 0 16 16"
          >
            <path
              fill="#fff"
              d="M9.25 1.5c0 .719-.563 1.25-1.25 1.25-.719 0-1.25-.531-1.25-1.25C6.75.812 7.281.25 8 .25c.688 0 1.25.563 1.25 1.25ZM8 13.25c.688 0 1.25.563 1.25 1.25 0 .719-.563 1.25-1.25 1.25-.719 0-1.25-.531-1.25-1.25 0-.688.531-1.25 1.25-1.25ZM15.75 8c0 .719-.563 1.25-1.25 1.25-.719 0-1.25-.531-1.25-1.25 0-.688.531-1.25 1.25-1.25.688 0 1.25.563 1.25 1.25Zm-13 0c0 .719-.563 1.25-1.25 1.25C.781 9.25.25 8.719.25 8c0-.688.531-1.25 1.25-1.25.688 0 1.25.563 1.25 1.25Zm.625-5.844c.719 0 1.25.563 1.25 1.25 0 .719-.531 1.25-1.25 1.25-.688 0-1.25-.531-1.25-1.25 0-.687.563-1.25 1.25-1.25Zm9.219 9.219c.687 0 1.25.531 1.25 1.25 0 .688-.563 1.25-1.25 1.25-.719 0-1.25-.563-1.25-1.25 0-.719.531-1.25 1.25-1.25Zm-9.219 0c.719 0 1.25.531 1.25 1.25 0 .688-.531 1.25-1.25 1.25-.688 0-1.25-.563-1.25-1.25 0-.719.563-1.25 1.25-1.25Z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
