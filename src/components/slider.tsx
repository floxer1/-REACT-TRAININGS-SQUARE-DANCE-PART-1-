type IProps = {
  maxValue: number;
  value: number;
  onValueChanged(value: number): void;
  label: string;
};

export function Slider({ value, maxValue, onValueChanged, label }: IProps) {
  return (
    <div>
      <label>{label}</label>
      <input
        min="0"
        max={maxValue}
        value={value}
        onChange={(e) => onValueChanged(parseInt(e.target.value))}
        type="range"
      />
    </div>
  );
}
