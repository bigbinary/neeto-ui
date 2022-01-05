import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
import classnames from "classnames";
import { Check, LeftArrow, Search } from "@bigbinary/neeto-icons";

import { Portal, Backdrop } from "../../atoms";
import {
  SWITCHER_SIZE,
  BLUR_INITIAL,
  BLUR_FINAL,
  TRANSITION,
} from "../../constants/overlay";
import { getClientApp } from "../../constants/clientApps";
import Button from "../Button";
import Input from "../Input";
import Typography from "../Typography";

const sizes = { lg: "lg", sm: "sm" };

const noop = () => {};

const envs = {
  development: "development",
  staging: "staging",
  production: "production",
};

const getSubdomain = () => {
  let host = window.location.host;
  let parts = host.split(".");
  let subdomain = "";
  if (parts.length >= 3) {
    subdomain = parts[0];
  }
  return subdomain;
};

const animationVariants = {
  open: {
    x: 0,
    filter: BLUR_INITIAL,
  },
  closed: {
    x: -SWITCHER_SIZE,
    filter: BLUR_FINAL,
  }
};

const AppSwitcher = ({
  size = "sm",
  isOpen,
  onClose = noop,
  loading = false,
  className = "",
  closeOnEsc = true,
  closeOnOutsideClick = true,
  environment,
  activeApp = "Desk",
  subdomain = "",
  neetoApps = [],
  recentApps = [],
  isSidebarOpen = false,
  ...otherProps
}) => {
  const paneWrapper = useRef();

  useHotkeys("esc", closeOnEsc ? onClose : noop);

  return (
    <Portal className="neeto-ui-portal">
      <AnimatePresence>
        {isOpen && (
          <Backdrop
            onClick={closeOnOutsideClick && onClose}
            key="switcher-backdrop"
            className={classnames("neeto-ui-app-switcher__backdrop", {
              "neeto-ui-app-switcher__backdrop--expanded": isSidebarOpen,
            })}
          >
            <motion.div
              variants={animationVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{
                bounce: false,
                duration: TRANSITION,
              }}
              ref={paneWrapper}
              key="switcher-wrapper"
              data-cy="switcher-wrapper"
              className={classnames("neeto-ui-app-switcher__wrapper", {
                "neeto-ui-app-switcher__wrapper-size--sm": size === sizes.sm,
                "neeto-ui-app-switcher__wrapper-size--lg": size === sizes.lg,
                [className]: className,
              })}
              onClick={(e) => e.stopPropagation()}
              {...otherProps}
            >
              {loading ? (
                <></>
              ) : (
                <Body
                  onClose={onClose}
                  environment={environment}
                  activeApp={activeApp}
                  subdomain={subdomain || getSubdomain() || "spinkart"}
                  neetoApps={neetoApps}
                  recentApps={recentApps}
                />
              )}
            </motion.div>
          </Backdrop>
        )}
      </AnimatePresence>
    </Portal>
  );
};

const Body = ({
  onClose,
  environment,
  activeApp,
  subdomain,
  neetoApps,
  recentApps,
}) => {
  let clientApps = getClientApp(subdomain);
  let recent;
  if (neetoApps.length > 0) {
    recent = clientApps.filter((app) => recentApps.includes(app.name));
    clientApps = clientApps.filter((app) => neetoApps.includes(app.name));
  }
  const [search, setSearch] = useState("");

  const handleSearch = (e) => setSearch(e.target.value);

  const filteredApps = clientApps.filter((app) =>
    app.name.toLowerCase().includes(search.replace(/ /g, "").toLowerCase())
  );
  return (
    <>
      <div className="neeto-ui-app-switcher__header">
        <Button
          icon={LeftArrow}
          style="text"
          iconPosition="left"
          label="Back"
          onClick={onClose}
        />
      </div>
      <div className="neeto-ui-app-switcher__search-wrapper">
        <Input
          placeholder="Search Products"
          suffix={<Search />}
          onChange={handleSearch}
        />
      </div>
      {search.length === 0 && recent && (
        <div className="neeto-ui-app-switcher__body">
          <Typography
            style="h5"
            weight="bold"
            textTransform="uppercase"
            className="neeto-ui-text-gray-300"
          >
            Recently
          </Typography>
          <div className="neeto-ui-app-switcher__grid">
            {recent
              .filter((item) => item.isActive)
              .map((app) => {
                const { name, url, icon } = app;
                const SVG = icon;
                return (
                  <a
                    href={url[environment]}
                    target="_blank"
                    className={classnames("neeto-ui-app-switcher-link", {
                      "neeto-ui-app-switcher-link--active": activeApp === name,
                    })}
                    key={name}
                    rel="noreferrer"
                    data-test-id={`neetoapp-link-${name}`}
                  >
                    <div className="neeto-ui-app-switcher-link__row">
                      <div
                        className={classnames(
                          "neeto-ui-app-switcher-link__icon-holder",
                          {
                            [`gradient--${name.toLowerCase()}`]: name,
                          }
                        )}
                      >
                        {SVG && (
                          <SVG
                            color="white"
                            className="neeto-ui-app-switcher-link__icon"
                          />
                        )}
                      </div>
                      <Typography
                        style="h4"
                        weight="semibold"
                        component="span"
                        className="neeto-ui-text-gray-600 neeto-ui-app-switcher-link__title"
                      >
                        {name}
                      </Typography>
                      {activeApp === name && (
                        <span className="neeto-ui-app-switcher-link__check-icon neeto-ui-text-gray-800">
                          <Check size="22" />
                        </span>
                      )}
                    </div>
                  </a>
                );
              })}
          </div>
        </div>
      )}

      <div className="neeto-ui-app-switcher__body">
        <Typography
          style="h5"
          weight="bold"
          textTransform="uppercase"
          className="neeto-ui-text-gray-300"
        >
          {search.length === 0 ? "All" : "Apps"}
        </Typography>
        <div className="neeto-ui-app-switcher__grid">
          {filteredApps
            .filter((item) => item.isActive)
            .map((app) => {
              const { name, url, icon } = app;
              const SVG = icon;
              return (
                <a
                  href={url[environment]}
                  target="_blank"
                  className={classnames("neeto-ui-app-switcher-link", {
                    "neeto-ui-app-switcher-link--active": activeApp === name,
                  })}
                  key={name}
                  rel="noreferrer"
                  data-test-id={`neetoapp-link-${name}`}
                >
                  <div className="neeto-ui-app-switcher-link__row">
                    <div
                      className={classnames(
                        "neeto-ui-app-switcher-link__icon-holder",
                        {
                          [`gradient--${name.toLowerCase()}`]: name,
                        }
                      )}
                    >
                      {SVG && (
                        <SVG
                          color="white"
                          className="neeto-ui-app-switcher-link__icon"
                        />
                      )}
                    </div>
                    <Typography
                      style="h4"
                      weight="semibold"
                      component="span"
                      className="neeto-ui-text-gray-600 neeto-ui-app-switcher-link__title"
                    >
                      {name}
                    </Typography>
                    {activeApp === name && (
                      <span className="neeto-ui-app-switcher-link__check-icon neeto-ui-text-gray-800">
                        <Check size="22" />
                      </span>
                    )}
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    </>
  );
};

AppSwitcher.propTypes = {
  /**
   * Size of the AppSwitcher
   */
  size: PropTypes.oneOf(Object.values(sizes)),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  loading: PropTypes.bool,
  className: PropTypes.string,
  /**
   * To close AppSwitcher on esc key press
   */
  closeOnEsc: PropTypes.bool,
  /**
   * To close AppSwitcher on outside click
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * Name of the active application
   */
  activeApp: PropTypes.string,
  /**
   * Organization subdomain name
   */
  subdomain: PropTypes.string,
  /**
   * List of names of enabled neetoApps
   */
  neetoApps: PropTypes.arrayOf(PropTypes.string),
  /**
   * List of names of recently created neetoApps
   */
  recentApps: PropTypes.arrayOf(PropTypes.string),
  environment: PropTypes.oneOf(Object.values(envs)).isRequired,
  v2: PropTypes.bool,
};

export default AppSwitcher;
