import { Outlet } from "react-router-dom";
import { EcommerceFooter } from "./layout/EcommerceFooter";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <EcommerceFooter />
    </div>
  );
}

export default App;
