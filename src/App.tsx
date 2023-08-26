import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/addcontact");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen bg-aliceblue flex flex-col sm:flex-row h-screen">
        <Navbar />
        <div className="flex flex-col basis-4/5 items-center h-full w-full">
          <h1 className="flex-3 text-6xl font-cursive py-16">
            {location.pathname === "/contacts"
              ? "Contacts"
              : location.pathname === "/chartandmaps"
              ? "Charts And Maps"
              : "Contacts"}
          </h1>
          <div className="flex-1 flex justify-center w-full h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
