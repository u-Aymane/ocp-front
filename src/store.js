export const initialState = {
  ui: {
    isSidebarOpen: false,
    isUserNextStepAllowed: false,
    triggerCheck: Math.random(),
    stepSuccessCallback: () => {},
    page: {
      headTitle: "Home Page",
      title: "Dashboard",
      subTitle: "",
      icon: "images/icons/icons8_dashboard_black.svg",
      returnLink: false,
    },
  },
};
