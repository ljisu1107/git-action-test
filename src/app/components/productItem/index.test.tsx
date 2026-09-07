import {render, screen} from "@testing-library/react";
import ProductItem from "./index";

// 1. 현재 상품의 `title`과 `description`에 입력한 내용이 제대로 렌더링이 되는지 확인하기
test("현재 상품의 `title`과 `description`에 입력한 내용이 제대로 렌더링이 되는지 확인", () => {
  const title = "컴퓨터";
  const description = "조립 컴퓨터 / 데스크탑 / 미니 PC";
  render(<ProductItem title={title} description={description} isSoldOut={false}/>)

  const titleElement = screen.getByText(title);
  const descriptionElement = screen.getByText(description);

  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});

// 2. 증가 버튼과 감소 버튼, 초기 숫자인 1이 존재하는지 확인하기
test("증가 버튼과 감소 버튼, 초기 숫자인 1이 존재하는지 확인", () => {
  const title = "컴퓨터";
  const description = "조립 컴퓨터 / 데스크탑 / 미니 PC";
  render(<ProductItem title={title} description={description} isSoldOut={false}/>)

  const addButton = screen.getByRole("button",{name:"+"});
  const subsetButton = screen.getByRole("button",{name:"-"});
  const numberElement = screen.getByText("1");

  expect(addButton).toBeInTheDocument();
  expect(subsetButton).toBeInTheDocument();
  expect(numberElement).toBeInTheDocument();
});


// 3. 구매하기 버튼이 존재하는지 확인하기
test("증가 버튼과 감소 버튼, 초기 숫자인 1이 존재하는지 확인", () => {
  const title = "컴퓨터";
  const description = "조립 컴퓨터 / 데스크탑 / 미니 PC";
  render(<ProductItem title={title} description={description} isSoldOut={false}/>)

  const buyButton = screen.getByRole("button",{name:"구매하기"});

  expect(buyButton).toBeInTheDocument();
});


// 4. 상품이 품절 상태(`isSoldOut={true}`)일 때 “품절” 텍스트가 렌더링되는지 확인하기
test("상품이 품절 상태(`isSoldOut={true}`)일 때 “품절” 텍스트가 렌더링되는지 확인", () => {
  const title = "컴퓨터";
  const description = "조립 컴퓨터 / 데스크탑 / 미니 PC";
  render(<ProductItem title={title} description={description} isSoldOut={true}/>)

  const soldOutText = screen.getByText("품절");

  expect(soldOutText).toBeInTheDocument();
});

// 5. 상품이 품절 상태(`isSoldOut={true}`)일 때 버튼이 비활성화(`disabled`)되고, CSS 클래스명에 `opacity-50`과 `cursor-not-allowed`가 포함되는지 확인하기
test("상품이 품절 상태(`isSoldOut={true}`)일 때 버튼이 비활성화(`disabled`)되고, CSS 클래스명에 `opacity-50`과 `cursor-not-allowed`가 포함되는지 확인", () => {
  const title = "컴퓨터";
  const description = "조립 컴퓨터 / 데스크탑 / 미니 PC";
  render(<ProductItem title={title} description={description} isSoldOut={true}/>)

  const buyButton = screen.getByRole("button",{name:"구매하기"});

  expect(buyButton).toBeDisabled();
  expect(buyButton).toHaveClass("opacity-50");
  expect(buyButton).toHaveClass("cursor-not-allowed");
});