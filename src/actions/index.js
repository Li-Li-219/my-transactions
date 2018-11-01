export const addFilter = filter => ({
  type: "ADD_FILTER",
  filter: filter,
});

export const removeFilter = filter => ({
  type: "REMOVE_FILTER",
  filter: filter
});