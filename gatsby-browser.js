const React = require("react")
const Layout = require("./src/components/layout").default
const StateProvider = require("./src/components/store").StateProvider

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.wrapRootElement = ({ element }) => {
  return <StateProvider>{element}</StateProvider>
}
