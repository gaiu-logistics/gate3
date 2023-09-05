import { useEffect, useState } from "react";
import Keycloak from "keycloak-js";
type Props = {};

const useAuth = (props: Props) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const client = new Keycloak();

    return () => {};
  }, [third]);

  return <div>useAuth</div>;
};

export default useAuth;
