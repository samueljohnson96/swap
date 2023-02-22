import { Home, SignIn, SignUp, How, Loyalty, FAQ, Contact } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: HomeIcon,
    name: "how",
    path: "/how",
    element: <How />,
  },
  {
    icon: HomeIcon,
    name: "Loyalty",
    path: "/loyalty",
    element: <Loyalty />,
  },
  {
    icon: HomeIcon,
    name: "FAQ",
    path: "/faq",
    element: <FAQ />,
  },
  {
    icon: HomeIcon,
    name: "Contact",
    path: "/contact",
    element: <Contact />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },

];

export default routes;
