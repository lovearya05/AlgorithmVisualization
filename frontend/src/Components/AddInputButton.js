import React from "react";
import { InputNumber, Button } from "antd";
// import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// import "antd/dist/antd.css";
import 'antd/dist/antd.min.css'
import sleepFun from "./utils/sleepFun";

export default function AddInputButton({
	num,
	setNum,
	name,
	addElement,
	onDelete,
}) {
	const onChangeHandler = (e) => {
		setNum(e);
	};

	const onClickHandle = () => {
		addElement();
	};

	const onDeleteClick = async () => {
		await sleepFun(300);
		onDelete();
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
				justifyContent: "center",
			}}
		>
			{name === "Insert" && (
				<InputNumber
					style={{ marginBottom: "15px" }}
					value={num}
					onChange={onChangeHandler}
				/>
			)}
			{name === "Insert" ? (
				<Button
					type="primary"
					onClick={onClickHandle}
					icon={<ControlPointOutlinedIcon />}
				>
					{name}
				</Button>
			) : (
				<>
					<Button
						style={{ marginTop: "60%" }}
						type="primary"
						danger
						onClick={onDeleteClick}
						icon={<DeleteOutlineOutlinedIcon />}
					>
						{name}
					</Button>
				</>
			)}
		</div>
	);
}
