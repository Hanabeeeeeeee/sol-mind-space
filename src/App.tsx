import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import StudentSignup from "./pages/StudentSignup";
import TherapistSignup from "./pages/TherapistSignup";
import InstitutionSignup from "./pages/InstitutionSignup";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
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
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup/student" element={<StudentSignup />} />
          <Route path="/signup/therapist" element={<TherapistSignup />} />
          <Route path="/signup/institution" element={<InstitutionSignup />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
