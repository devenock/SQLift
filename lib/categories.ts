import { db } from "./db";
import { cache } from "react";
import { categories } from "./schema";

export const getCategories = cache(async () => {
  try {
    const results = await db.query.categories.findMany({
      orderBy: (categories, { asc }) => [asc(categories.orderIndex)],
    });

    return results;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories");
  }
});
