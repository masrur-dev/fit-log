import "./globals.css";
import Navbar from "../components/shared/Navbar";
import { FitLogProvider } from "../context/FitLogContext";
import { Dumbbell } from "lucide-react";

export const metadata = {
  title: "FITLOG",
  description: "Workout Library",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          <Navbar />
          {children}
          <footer className="app-footer"><div className="footer-shell"><LinkBrand/><p>© 2026 FitLog — Work smarter. Train hard, log honest.</p></div></footer>
        </FitLogProvider>
      </body>
    </html>
  );
}

function LinkBrand(){return <div className="footer-brand"><Dumbbell size={13}/>FITLOG</div>}
