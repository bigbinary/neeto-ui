import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const useNavPrompt = ({ shouldBlock = true }) => {
  const [isBlocked, setIsBlocked] = useState(false);

  const history = useHistory();
  const unblockRef = useRef();

  const continueNavigation = () => isBlocked && unblockRef.current?.();

  const hidePrompt = () => setIsBlocked(false);

  const handleNavigation = (action, transition) => {
    switch (action) {
    case "PUSH":
      history.push(transition);
      break;
    case "REPLACE":
      history.replace(transition);
      break;
    case "POP":
      history.goBack();
      break;
    }
  };

  useEffect(() => {
    const unblock = history.block((transition, action) => {
      if (shouldBlock) {
        setIsBlocked(true);
        unblockRef.current = () => {
          unblock();
          handleNavigation(action, transition);
        };
        return false;
      }

      return undefined;
    });
    return () => unblock();
  }, [shouldBlock]);

  return { isBlocked, continueNavigation, hidePrompt };
};

export default useNavPrompt;
