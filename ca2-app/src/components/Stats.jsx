import { useContext, useEffect } from "react";
import { AppContext } from "../context/Appcontext";

const Stats = () => {
  const { items } = useContext(AppContext);
  const total = items.length;

const delivered = items.filter(
  i => i?.status?.toLowerCase?.() === "delivered"
).length;

const cancelled = items.filter(
  i => i?.status?.toLowerCase?.() === "cancelled"
).length;

  useEffect(() => {
    window.appState = {
      total,
      delivered: active,
      cancelled,
    };
  }, [total, delivered, cancelled]);

  return (
    <div>
      <div data-testid="total-orders">{total}</div>
      <div data-testid="delivered-orders">{delivered}</div>
      <div data-testid="cancelled-orders">{cancelled}</div>
    </div>
  );
};

export default Stats;