import { SignedOut, SignUp } from "@clerk/clerk-react";

export const Page = () => {
    const currentPage = window.location.href
  return (
    <div>
      <SignedOut>
        <SignUp forceRedirectUrl={currentPage}/>
      </SignedOut>
    </div>
  );
};
