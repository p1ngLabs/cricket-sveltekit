export const ssr = false;

export const load = ({ route }) => ({
  pathname: route.id,
});
