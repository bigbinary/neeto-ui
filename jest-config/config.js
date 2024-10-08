import { IGNORED_CONSOLE_MESSAGES } from "./constants";

export const failOnConsoleOptions = {
  allowMessage: message => IGNORED_CONSOLE_MESSAGES.includes(message),
  silenceMessage: message => IGNORED_CONSOLE_MESSAGES.includes(message),
};
