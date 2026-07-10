"use client";
import { useRef, useState } from "react";

import styles from "./ImagePicker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
	const [selectedImage, setSelectedImage] = useState(null);
	const imageInput = useRef();
	const handleClickPick = () => {
		imageInput.current.click();
	};
	const handleChangePicker = (event) => {
		const file = event.target.files[0];
		if (!file) {
			setSelectedImage(null);
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			setSelectedImage(reader.result);
		};
		reader.readAsDataURL(file);
	};
	return (
		<div className={styles.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={styles.controls}>
				<div className={styles.preview}>
					{selectedImage ? (
						<Image
							src={selectedImage}
							alt="Image selected by user."
							fill
						/>
					) : (
						<p>No image selected</p>
					)}
				</div>
				<input
					className={styles.input}
					type="file"
					id={name}
					accept="image/png, image/jpeg"
					name={name}
					ref={imageInput}
                    onChange={handleChangePicker}
				/>
				<button
					type="button"
					className={styles.button}
					onClick={handleClickPick}
				>
					Pick an Image
				</button>
			</div>
		</div>
	);
};

export default ImagePicker;
