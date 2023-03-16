import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const useNavPrompt = ({ shouldBlock = true }) => {
  const [isBlocked, setIsBlocked] = useState(false);

  const history = useHistory();
  const unblockRef = useRef();
  const navRef = useRef();

  const continueNavigation = () => {
    if (isBlocked && unblockRef.current) {
      unblockRef.current?.();
      setIsBlocked(false);
      if (navRef.current) {
        const { action, transition } = navRef.current;
        handleNavigation(action, transition);
      }
    }
  };

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
    if (shouldBlock) {
      unblockRef.current = history.block((transition, action) => {
        setIsBlocked(true);
        navRef.current = { transition, action };
        // handleNavigation(action, transition);
        return false;
      });
      return () => {
        if (unblockRef.current) {
          unblockRef.current();
        }
      };
    }
  }, [shouldBlock]);

  return { isBlocked, continueNavigation, hidePrompt };
};

export default useNavPrompt;
