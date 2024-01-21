const Blotch = ({blotchObject}) => {

    const style = {
      background: blotchObject.color,
      width: `${blotchObject.size}px`,
      height: `${blotchObject.size}px`,
      borderRadius: "100%",
      position: "absolute",
      top: `${blotchObject.coords.y}px`,
      left: `${blotchObject.coords.x}px`,
    };

    return (
        <div style={style}>
        </div>
    )
}

export default Blotch;