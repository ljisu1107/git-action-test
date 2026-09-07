import {render, screen, fireEvent} from "@testing-library/react";
import {LikeButton} from "@/app/components/likeButton/index";

// 1. `'좋아요'` 버튼을 누르기 전에는 버튼에 `'좋아요'`가 표시되어야 하며, `bg-gray-400` 클래스가 적용되어야 한다.

test(`'좋아요' 버튼을 누르기 전에는 버튼에 '좋아요'가 표시되어야 하며, bg-gray-400 클래스가 적용 확인`, () => {
  render(<LikeButton/>);
  const likeButton = screen.getByRole('button', { name: `좋아요` });
  expect(likeButton).toBeInTheDocument();
  expect(likeButton).toHaveClass("bg-gray-400");
});

// 2. **`'좋아요'` 버튼을 클릭하면** `'좋아요 취소'`로 텍스트가 변경되어야 하며, `bg-red-400` 클래스가 적용되어야 한다.
test(`'좋아요' 버튼을 클릭하면 '좋아요 취소'로 텍스트가 변경되어야 하며, bg-red-400 클래스가 적용 확인`, () => {
  render(<LikeButton/>);
  const likeButton = screen.getByRole('button', { name: `좋아요` });
  fireEvent.click(likeButton);
  expect(likeButton).toBeInTheDocument();
  expect(likeButton).toHaveTextContent("좋아요 취소");
  expect(likeButton).toHaveClass("bg-red-400");
});
// 3. `'좋아요'` 버튼을 한 번 클릭 후 다시 클릭하면 `'좋아요'` 버튼으로 되돌아와야 한다.
test(`'좋아요' 버튼을 한 번 클릭 후 다시 클릭하면 '좋아요' 버튼으로 되돌아와야 한다.`, () => {
  render(<LikeButton/>);
  const likeButton = screen.getByRole('button', { name: `좋아요` });
  fireEvent.click(likeButton);
  fireEvent.click(likeButton);

  expect(likeButton).toBeInTheDocument();
  expect(likeButton).toHaveTextContent("좋아요");
});