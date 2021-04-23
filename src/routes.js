import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LoginPage} from "./pages/LoginPage"
import {MyTaskPage} from "./pages/MyTaskPage"
import {CompletedTaskPage} from "./pages/CompletedTaskPage"

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/mytasks" exact>
          <MyTaskPage/>
        </Route>
        <Route path="/completedtasks" exact>
          <CompletedTaskPage/>
        </Route>
        <Redirect to="/mytasks"/>
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path="/" exact>
        <LoginPage/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  )
}
