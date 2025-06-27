import { FormGroup, Typography } from "@mui/material";
import { useState } from "react";
import {
  SlideBarPaper,
  CheckBoxLabel,
  CheckboxIcon,
  StyledCard,
  ContainerBox,
  CardBox,
  ProductImage,
  ProductCost,
  QuantityControlBox,
  CountButton,
  AddCartButton,
  ProductCount,
} from "../styles/slidebar";
import { CATEGORIES, AllPRODUCTS } from "../constants/product";

const SlideBar = ({ cartList, handleAddToCart, handleRemoveFromCart }) => {
  const getQuantity = (productId) => {
    const item = cartList?.find((item) => item?.id === productId);
    return item ? item?.quantity : 0;
  };
  const {
    ALL_CATEGORIES,
    BREAD_CATEGORY,
    DIARY_CATEGORY,
    FRUITS_CATEGORY,
    SPICES_CATEGORY,
    VEGETABLES_CATEGORY,
  } = CATEGORIES;

  const [selectedCategories, setSelectedCategories] = useState([
    ALL_CATEGORIES,
  ]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => {
      if (category === ALL_CATEGORIES) return [ALL_CATEGORIES];

      const updatedCategory = prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev.filter((item) => item !== ALL_CATEGORIES), category];

      return updatedCategory.length ? updatedCategory : [ALL_CATEGORIES];
    });
  };

  const isCategoryChecked = (category) => {
    if (category === ALL_CATEGORIES) {
      const individualCategories = Object.values(CATEGORIES).filter(
        (item) => item !== ALL_CATEGORIES
      );
      
      return (
        selectedCategories.includes(ALL_CATEGORIES) ||
        individualCategories.every((item) => selectedCategories.includes(item))
      );
    }
    return selectedCategories.includes(category);
  };

  return (
    <ContainerBox>
      <SlideBarPaper>
        <FormGroup>
          <CheckBoxLabel
            control={<CheckboxIcon />}
            label="All Categories"
            labelPlacement="start"
            id="allCategories"
            checked={isCategoryChecked(ALL_CATEGORIES)}
            onChange={() => handleCategoryChange(ALL_CATEGORIES)}
          />
          <CheckBoxLabel
            control={<CheckboxIcon />}
            label="bread"
            labelPlacement="start"
            checked={isCategoryChecked(BREAD_CATEGORY)}
            onChange={() => handleCategoryChange(BREAD_CATEGORY)}
          />
          <CheckBoxLabel
            control={<CheckboxIcon />}
            label="diary"
            labelPlacement="start"
            checked={isCategoryChecked(DIARY_CATEGORY)}
            onChange={() => handleCategoryChange(DIARY_CATEGORY)}
          />
          <CheckBoxLabel
            control={<CheckboxIcon />}
            label="fruits"
            labelPlacement="start"
            checked={isCategoryChecked(FRUITS_CATEGORY)}
            onChange={() => handleCategoryChange(FRUITS_CATEGORY)}
          />
          <CheckBoxLabel
            control={<CheckboxIcon />}
            label="seasoning_and_spices"
            labelPlacement="start"
            checked={isCategoryChecked(SPICES_CATEGORY)}
            onChange={() => handleCategoryChange(SPICES_CATEGORY)}
          />
          <CheckBoxLabel
            control={<CheckboxIcon />}
            label="vegetables"
            labelPlacement="start"
            checked={isCategoryChecked(VEGETABLES_CATEGORY)}
            onChange={() => handleCategoryChange(VEGETABLES_CATEGORY)}
          />
        </FormGroup>
      </SlideBarPaper>
      <CardBox>
        {AllPRODUCTS.filter((product) =>
          selectedCategories.includes(ALL_CATEGORIES)
            ? true
            : selectedCategories.includes(product.categories)
        ).map((product) => (
          <StyledCard key={product.id}>
            <Typography variant="h6">{product.name}</Typography>
            <ProductImage src={product.image} alt={product.name} />
            <Typography variant="h6">{product.grocery}</Typography>
            <ProductCost variant="subtitle2">${product.cost}</ProductCost>

            {getQuantity(product.id) > 0 ? (
              <QuantityControlBox>
                <CountButton
                  variant="contained"
                  onClick={() => handleRemoveFromCart(product)}
                >
                  -
                </CountButton>
                <ProductCount>{getQuantity(product.id)}</ProductCount>
                <CountButton
                  variant="contained"
                  onClick={() => handleAddToCart(product)}
                >
                  +
                </CountButton>
              </QuantityControlBox>
            ) : (
              <AddCartButton onClick={() => handleAddToCart(product)}>
                ADD TO CART
              </AddCartButton>
            )}
          </StyledCard>
        ))}
      </CardBox>
    </ContainerBox>
  );
};

export default SlideBar;
