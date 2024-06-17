type IProps = {
  size: number;
  angleInDeg: number;
};

export function Square({ angleInDeg, size }: IProps) {
  return (
    <div
      className={"square"}
      style={{
        height: size,
        width: size,
        transform: `rotate(${angleInDeg}deg)`,
      }}
    ></div>
  );
}
