import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export const getMeals = async () => {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return db.prepare("select * from meals").all();
};

export const getMeal = (mealSlug) => {
	return db.prepare("select * from meals where slug = ?").get(mealSlug);
};

export const saveMeal = async (meal) => {
	meal.slug = slugify(meal.title, { lower: true });
	meal.instructions = xss(meal.instructions);

	const imageExtention = meal.image.name.split(".").pop();
	const fileName = `${meal.slug}.${imageExtention}`;

	const stream = fs.createWriteStream(`public/images/${fileName}`);
	const bufferedImage = await meal.image.arrayBuffer();
	stream.write(Buffer.from(bufferedImage), (error) => {
		if (error) throw new Error("Saving image failed!");
	});
	meal.image = `/images/${fileName}`;

	db.prepare(
		"insert into meals (title, creator, creator_email, image, summary, instructions, slug) values (@title, @creator, @creator_email, @image, @summary,@instructions, @slug)",
	).run(meal);
};
