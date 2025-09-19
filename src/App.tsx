import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import StudentSignup from "./pages/StudentSignup";
import Dashboard from "./pages/Dashboard";
import TherapistDashboard from "./pages/TherapistDashboard";
import InstituteDashboard from "./pages/InstituteDashboard";
import BookAppointment from "./pages/BookAppointment";
import ChatSol from "./pages/ChatSol";
import Resources from "./pages/Resources";
import PeerGroup from "./pages/PeerGroup";
import SafeHub from "./pages/SafeHub";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup/student" element={<StudentSignup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/therapist" element={<TherapistDashboard />} />
          <Route path="/dashboard/institute" element={<InstituteDashboard />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/chat-sol" element={<ChatSol />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/peer-group" element={<PeerGroup />} />
          <Route path="/safe-hub" element={<SafeHub />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
