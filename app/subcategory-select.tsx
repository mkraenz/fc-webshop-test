"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

type Props = {
  subcategories: { id: number; name: string }[];
};

const SubCategorySelect: FC<Props> = ({ subcategories }) => {
  const router = useRouter();
  return (
    <div className="subcategory-selection">
      <label htmlFor="subcategories">Categories:</label>
      <select
        name="subcategories"
        onChange={(e) => {
          console.log("SELECTED", e.currentTarget.value);
          router.push(`/category/${e.currentTarget.value}`);
        }}
      >
        {subcategories.map((subcategory) => (
          <option value={subcategory.id} key={subcategory.id}>
            {subcategory.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SubCategorySelect;
