const Wrapper = (props) => {
  return (
    <div className={`bg ${props.color}`}>
      <div className="wrapper">
        {props.children}
      </div>
    </div>
  )
}

export default Wrapper