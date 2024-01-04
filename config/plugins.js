module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_hpuORSFLcug51RpVWmJSnIofwTTj/i6ZvhHwXiu",
      apiToken: "3gEDkcGqEt1EHKVIe3RKzAA1",
      appFilter: "ticket-bay-be",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
