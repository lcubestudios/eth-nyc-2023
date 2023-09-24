interface UiButtonPropsType {
  label?: string;
  fontStyle?: string;
  bgColor?: string;
  textColor?: string;
  fontSize?: string;
  paddingX?: string;
  paddingY?: string;
  onClick: () => void;
}

export function UiButton(props: UiButtonPropsType) {
	const label = props.label || 'Button'
	const fontStyle = props.fontStyle || 'heading'
	const bgColor = props.bgColor || 'main-primary';
	const textColor = props.textColor || 'black';
	const fontSize = props.fontSize || '24px';
	const paddingX = props.paddingX || '0';
	const paddingY = props.paddingY || '0';
	const onClick = props.onClick

	return <button
		className={`w-full text-[${fontSize}] text-${textColor} font-${fontStyle}`}
		onClick={onClick}
	>
		<div className={`brick-edge bg-${bgColor}`}></div>
		<div className={`brick w-full bg-${bgColor} px-${paddingX} py-${paddingY}`}>{label}</div>
		<div className={`brick-edge bg-${bgColor}`}></div>
	</button>
}
