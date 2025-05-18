import { Outlet } from "react-router-dom";
import { EcommerceFooter } from "./layout/EcommerceFooter";
import { Header } from "./layout/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <EcommerceFooter />
    </div>
  );
}

export default App;
