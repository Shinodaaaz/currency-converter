import {ServerErrorsWrapper} from "@/shared/ui/ServerErrors/ServerErrors.styles.ts";

export const ServerErrors = () => {
  return (
    <ServerErrorsWrapper>
      <h1>500 – Internal server error</h1>
      <p>Something went wrong. Try again later.</p>
    </ServerErrorsWrapper>
  );
};

