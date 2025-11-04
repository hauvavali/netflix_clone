import SearchBar from "./SearchBar";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  return (
    <header className="app-header">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Brand */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl lg:text-4xl font-bold text-[var(--netflix-red)]">
            REACTFLIX
          </h1>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <SignedOut>
            {/* Sign in button — styled with brand colors */}
            <SignInButton>
              <button
                className="px-3 py-2 rounded text-white   hover:bg-[var(--netflix-red-hover)] transition"
                type="button"
              >
                Sign in
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <SearchBar />
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
