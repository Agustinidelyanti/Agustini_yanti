export type dataButton = {
  buttonAttributes: Array<{ url: string; title: string; icon: string }>;
};

export const footerConfig: dataButton = {
  buttonAttributes: [
    {
      url: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrkWNFNvWwxbgnXbnHRWJJbngXWgqFtFWLMtWFhhfGwScqjtBvxVxQBnvNWzwBbJNqBLMg",
      title: "My Email",
      icon: "fa fa-envelope-o",
    },

    {
      url: "https://github.com/Agustinidelyanti",
      title: "My Github",
      icon: "fa fa-github",
    },

    {
      url: "https://www.linkedin.com/in/agustini-delyanti-2011a7308/",
      title: "My linkedin",
      icon: "fa fa-linkedin-square",
    },

    {
      url: "https://id.pinterest.com/agustinidelyanti/",
      title: "My pinterest",
      icon: "fa fa-pinterest",
    },
  ],
};
