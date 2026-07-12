"use server";
import { redirect } from "next/navigation";

import { saveMeal } from "./meals";

const isInvalidText = (text) => {
	return !text || text.trim() === "";
};

export const shareMeal = async (_, formData) => {
	const meal = {
		title: formData.get("title"),
		creator: formData.get("name"),
		creator_email: formData.get("email"),
		summary: formData.get("summary"),
		instructions: formData.get("instructions"),
		image: formData.get("image"),
	};

	if (
		isInvalidText(meal.title) ||
		isInvalidText(meal.creator) ||
		isInvalidText(meal.creator_email) ||
		isInvalidText(meal.summary) ||
		!meal.creator_email.indclues("@") ||
		!meal.image ||
		meal.image.size === 0
	) {
		return {
			message: "Invalid Input!"
		}
	}

	await saveMeal(meal);
	redirect("/meals");
};
