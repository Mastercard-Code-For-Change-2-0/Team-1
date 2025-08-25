import { Button } from "@/components/ui/button";

interface NavbarProps {
  onLoginClick: () => void;
}

const Navbar = ({ onLoginClick }: NavbarProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-soft z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <img 
                src="/header-logo.svg" 
                alt="Guardian Gateway Logo" 
                className="h-8 w-auto"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-foreground leading-tight">
                Seva Sahayog Foundation
              </h1>
            
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                How it Works
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Login Button */}
          <div className="flex items-center">
            <Button variant="default" onClick={onLoginClick} className="ml-4">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;