import {Input} from "antd";

export const InputComponent = ({size, placeholder, border, style, ...rest}) => {
    return (
        <Input
            size={size}
            placeholder={placeholder}
            border={border}
            style={style}
            {...rest}
        />
    )

}

export default InputComponent;
