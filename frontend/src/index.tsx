import { Navbar } from "components/Navbar";
import { Task } from "components/Task";
import { navLinks } from "constants/navLinks";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById('root')!)
  .render(
    <>
      <Navbar navLinks={navLinks} />
      <Task />
    </>,
  );