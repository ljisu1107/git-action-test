// 1. 이메일, 비밀번호, 비밀번호 확인 입력 필드가 제대로 렌더링되는지 확인하는 테스트 코드를 작성해보세요. 이때 `getByLabelText`를 사용하여 각 입력 필드를 찾아보고, `toBeInTheDocument`를 활용하여 존재 여부를 확인해보세요.
// 2. 비밀번호, 비밀번호 확인 입력 필드의 `type`이 `"password"`인지 확인하는 테스트 코드를 작성해보세요. 이때 매쳐는 `toHaveAttribute`를 활용해보세요. 이때 `getByPlaceholderText`를 활용하여 입력 필드를 가져와보세요.
// 3. 회원가입 버튼이 렌더링되는지 확인하세요. 이때 회원가입 버튼은 `getByRole`을 활용하여 가져와보세요.

import {render,screen} from "@testing-library/react";
import SignupForm from "@/app/components/signupForm/index";

test("이메일, 비밀번호, 비밀번호 확인 입력 필드가 제대로 렌더링되는지 확인", () => {
  render(<SignupForm />);
  const emailLabel = screen.getByLabelText("이메일");
  const passwordLabel = screen.getByLabelText("비밀번호");
  const passwordCheckLabel = screen.getByLabelText("비밀번호 확인");

  expect(emailLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
  expect(passwordCheckLabel).toBeInTheDocument();

});

test("비밀번호, 비밀번호 확인 입력 필드의 `type`이 `password`인지 확인", () => {
  render(<SignupForm />);

  const passwordElement = screen.getByPlaceholderText("비밀번호");
  const passwordCheckElement = screen.getByPlaceholderText("비밀번호 확인");

  expect(passwordElement).toHaveAttribute("type", "password");
  expect(passwordCheckElement).toHaveAttribute("type", "password");
});

test("회원가입 버튼이 렌더링되는지 확인", () => {
  render(<SignupForm />);
  const joinBtn = screen.getByRole("button",{name:"회원가입"});

  expect(joinBtn).toBeInTheDocument();
});