export function ctaFields() {
  return [
    {
      type: "string",
      name: "href",
      label: "URL",
    },
    {
      type: "string",
      name: "children",
      label: "Label",
    },
    {
      type: "boolean",
      name: "blank",
      label: "New tab ?",
    },
    {
      type: "string",
      name: "theme",
      label: "Theme",
      options: ["primary", "secondary", "gray", "white", "wide"],
    },
  ];
}
export function menu_itemFields() {
  return [
    {
      type: "string",
      name: "label",
      label: "Label",
    },
    {
      type: "string",
      name: "url",
      label: "URL",
    },
    {
      type: "boolean",
      name: "blank",
      label: "New tab ?",
    },
    {
      type: "image",
      name: "icon",
      label: "Icon",
    },
  ];
}
export function menuFields() {
  return [
    {
      type: "object",
      name: "primary",
      label: "Primary navigation",
      fields: [
        {
          type: "object",
          name: "items",
          label: "Items",
          list: true,
          fields: [...menu_itemFields()],
        },
      ],
    },
    {
      type: "object",
      name: "footer",
      label: "Footer navigation",
      fields: [
        {
          type: "object",
          name: "items",
          label: "Items",
          list: true,
          fields: [...menu_itemFields()],
        },
      ],
    },
    {
      type: "object",
      name: "social",
      label: "Social networks",
      fields: [
        {
          type: "object",
          name: "items",
          label: "Items",
          list: true,
          fields: [...menu_itemFields()],
        },
      ],
    },
  ];
}
export function pageFields() {
  return [
    {
      type: "datetime",
      name: "date",
      label: "Publication date",
    },
    {
      type: "string",
      name: "title",
      label: "Post title",
    },
    {
      type: "string",
      name: "preview",
      label: "Preview",
    },
    {
      type: "boolean",
      name: "private",
      label: "Private ?",
    },
    {
      type: "object",
      name: "seo",
      label: "SEO",
      fields: [...seoFields()],
    },
  ];
}
export function seoFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
  ];
}
export function settingsFields() {
  return [
    {
      type: "object",
      name: "app",
      label: "App",
      fields: [
        {
          type: "string",
          name: "siteName",
          label: "App name",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
        {
          type: "image",
          name: "banner",
          label: "App Image",
        },
        {
          type: "boolean",
          name: "activeGa",
          label: "Activer Google Analytics",
        },
        {
          type: "string",
          name: "gaId",
          label: "Gtag ID",
        },
      ],
    },
    {
      type: "object",
      name: "consent",
      label: "GDPR",
      fields: [
        {
          type: "string",
          name: "accept",
          label: "accept",
        },
        {
          type: "string",
          name: "content",
          label: "content",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "decline",
          label: "decline",
        },
        {
          type: "string",
          name: "manage",
          label: "manage",
        },
        {
          type: "string",
          name: "more",
          label: "more",
        },
        {
          type: "object",
          name: "customize",
          label: "customize",
          fields: [
            {
              type: "string",
              name: "menuTitle",
              label: "menuTitle",
            },
            {
              type: "string",
              name: "title",
              label: "title",
            },
            {
              type: "string",
              name: "content",
              label: "content",
            },
            {
              type: "string",
              name: "validate",
              label: "validate",
            },
          ],
        },
        {
          type: "object",
          name: "services",
          label: "services",
          list: true,
          fields: [
            {
              type: "string",
              name: "custom_id",
              nameOverride: "id",
              label: "id",
            },
            {
              type: "string",
              name: "label",
              label: "label",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "forms",
      label: "Forms",
      fields: [
        {
          type: "string",
          name: "recipients",
          label: "Recipients",
          list: true,
          ui: {
            component: "tags",
          },
        },
        {
          type: "string",
          name: "subject",
          label: "Subject (default)",
        },
      ],
    },
    {
      type: "object",
      name: "fourZeroFour",
      label: "404",
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "content",
          label: "content",
        },
        {
          type: "string",
          name: "cta",
          label: "cta",
        },
        {
          type: "string",
          name: "metaTitle",
          label: "metaTitle",
        },
      ],
    },
    {
      type: "object",
      name: "post",
      label: "Post navigation",
      fields: [
        {
          type: "string",
          name: "nextPost",
          label: "nextPost",
        },
        {
          type: "string",
          name: "previousPost",
          label: "previousPost",
        },
      ],
    },
    {
      type: "object",
      name: "switcher",
      label: "Switcher",
      fields: [
        {
          type: "string",
          name: "label",
          label: "label",
        },
      ],
    },
    {
      type: "string",
      name: "followTitle",
      label: "Follow Title",
    },
    {
      type: "string",
      name: "viewMore",
      label: "View More",
    },
  ];
}
