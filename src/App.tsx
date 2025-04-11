import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import AppRoutes from "./AppRoutes";
import ChatBox from "@/components/ChatBox"; // Import the ChatBox component


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ErrorBoundary>
      <TooltipProvider>
        <HashRouter>
          <Toaster />
          <Sonner />
          <AppRoutes />
          <ChatBox /> {/* Add the ChatBox component here */}
        </HashRouter>
      </TooltipProvider>
    </ErrorBoundary>
  </QueryClientProvider>
);

export default App;