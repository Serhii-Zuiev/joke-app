export const stateWithJokes = {
  jokes: [{ beckend: "data" }],
  filter: "All",
  isLoading: false,
  error: null,
};

export const stateWithApiError = {
  jokes: [],
  filter: "All",
  isLoading: false,
  error: { beckend: "404" },
};

export const stateWithLoadingStatus = {
  jokes: [],
  filter: "All",
  isLoading: true,
  error: null, 
};

export const stateWithoutLoadingStatus = {
  jokes: [],
  filter: "All",
  isLoading: false,
  error: null,
}; 

export const stateWithFilter = {
  jokes: [],
  filter: "Nerdy",
  isLoading: false,
  error: null,
}; 
