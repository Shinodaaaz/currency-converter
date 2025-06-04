import {NotFoundWrapper} from "@/shared/ui/Notfound/Notfound.styles.ts";
import {Button} from "@/shared/ui/Button/Button.tsx";
import {useNavigate} from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundWrapper>
      <h1>404 – Ooops...(</h1>
      <p>Check the address or go back to the main page.</p>
      <Button label={'Back'} onClick={() => navigate('/rates')}/>
    </NotFoundWrapper>
  );
};
