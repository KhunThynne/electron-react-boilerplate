import { Outlet } from 'react-router'
import { Fragment } from 'react/jsx-runtime'

export default function Layout() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}
