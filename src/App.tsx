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
      <div className="w-full h-full min-h-screen bg-aliceblue flex flex-col md:flex-row">
        <Navbar />
        <main className="flex basis-4/5 flex-col items-center h-full w-full">
          <h1 className="text-6xl font-cursive py-16">
            {location.pathname === "/contacts"
              ? "Contacts"
              : location.pathname === "/chartandmaps"
              ? "Charts And Maps"
              : "Contacts"}
          </h1>
          <div className="flex justify-center w-full h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default App;
