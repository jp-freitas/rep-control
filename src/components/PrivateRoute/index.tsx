import { RouteProps, Redirect, Route } from "react-router-dom";

export type PrivateRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
} & RouteProps;

export function PrivateRoute({
  isAuthenticated,
  authenticationPath,
  ...routeProps
}: PrivateRouteProps) {
  return isAuthenticated ? <Route {...routeProps} /> : <Redirect to={{ pathname: authenticationPath }} />
}