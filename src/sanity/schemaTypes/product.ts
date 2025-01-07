/* eslint-disable import/no-anonymous-default-export */

export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name of Product",
      type: "string",
    },
    {
      name: "slug",
      title: "Product Slug",
      type: "slug",
      Options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Product Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
};
