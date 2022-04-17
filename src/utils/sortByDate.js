export const sortByDate = (sortBy) => {
  if (sortBy === "ASC") {
    return (a, b) => new Date(b.date) - new Date(a.date);
  }
  if (sortBy === "DESC") {
    return (a, b) => new Date(a.date) - new Date(b.date);
  }
};
