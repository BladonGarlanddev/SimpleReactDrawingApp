import Blotch from "./Blotch"

const Canvas = ({blotchObjects}) => {

    const style = {
        position: 'relative',
    }

    return (
      <div style={style}>
        {blotchObjects.map((blotchObject) => (
          <Blotch blotchObject={blotchObject}/>
        ))}
      </div>
    );

}

export default Canvas;