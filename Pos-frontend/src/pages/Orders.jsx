import React, {useState} from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/order/OrderCard";
import BackButton from "../components/shared/BackButton";



function Orders() {
  
  const [status, setStatus] = useState("All");
  return (

    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
      <div className="flex items-center justify-between px-10 py-4 m-2">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">
          Orders
        </h1>
        </div>
        <div className="flex items-center justify-around gap-4">
          {/* Orders content goes here */}
          <button onClick={() => setStatus("All")} className={`text-[#ababab] text-lg ${status === "All" && "bg-[#383838] rounded-lg px-5 py-2  "} rounded-lg px-5 py-2 font-semibold`}>
            All
          </button>
          <button onClick={() => setStatus("In Progress")} className={`text-[#ababab] text-lg ${status === "In Progress" && "bg-[#383838] rounded-lg px-5 py-2  "} rounded-lg px-5 py-2 font-semibold`}>
            In Progress
          </button>
          <button onClick={() => setStatus("Ready")} className={`text-[#ababab] text-lg ${status === "Ready" && "bg-[#383838] rounded-lg px-5 py-2  "} rounded-lg px-5 py-2 font-semibold`}>
            Ready
          </button>
          <button onClick={() => setStatus("Completed")} className={`text-[#ababab] text-lg ${status === "Completed" && "bg-[#383838] rounded-lg px-5 py-2  "} rounded-lg px-5 py-2 font-semibold`}>
            Completed
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-5  px-16 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-5rem-5rem)]">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        
      </div>

      <BottomNav />
    </section>
  );
}

export default Orders;
