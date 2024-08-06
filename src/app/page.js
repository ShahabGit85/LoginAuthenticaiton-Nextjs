import { AuthProvider } from "@/context/context";
import Login from "./(auth)/login/page";
export default function App() {
  return (
    <AuthProvider>
      <Login/>
    </AuthProvider>
  );
}
