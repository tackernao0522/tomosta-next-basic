const Content = (props) => {
  const { children } = props
  return (
    <>
      <div className="container">
        {children}
      </div>
      <hr />
      <footer>©︎ 2021 ともすた</footer>
    </>
  )
}

export default Content
