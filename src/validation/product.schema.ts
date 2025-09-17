import { z } from "zod";

export const ProductSchema = z.object({
  name : z.string().trim().min(1, "Name is required").max(255, "Name is too long"),
  price : z.string()
    .transform((val) => (val === "" ? 0 : Number(val)))
    .refine((num) => num > 0, {
      message: "Số tiền tối thiểu là 1",
    }),

  detailDesc : z.string().trim().min(1, "Detail description is required").max(255, "Detail description is too long"),
  shortDesc : z.string().trim().min(1, "Short description is required").max(255, "Short description is too long"),
  quantity : z.string()
    .transform((val) => (val === "" ? 0 : Number(val)))
    .refine((num) => num > 0, {
      message: "Số tiền tối thiểu là 1",
    }),
  factory : z.string().trim().min(1, "Factory is required").max(255, "Factory is too long"),
  target : z.string().trim().min(1, "Target is required").max(255, "Target is too long"),
});

export type TProductSchema = z.infer<typeof ProductSchema>;
