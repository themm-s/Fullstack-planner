
export function CheckBox(props: { className?: string; id?: string | undefined; value?: string | number | readonly string[] | undefined; label?: string; onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; }) {
  return (
    <div>
      <input type="checkbox" id={props.id} value={props.value} onChange={props.onChange} />
      <label htmlFor={props.id} className={props.className}>{props.label}</label>
    </div>
  );
}