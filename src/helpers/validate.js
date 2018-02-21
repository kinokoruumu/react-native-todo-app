import validator from 'validator';

export default validate = (fieldName, value) => {
	const formFields = {
		email: (value) => {
			if (validator.isEmpty(value)) {
				return "メールアドレスが入力されていません"
			}
			if (!validator.isEmail(value)) {
				return "メールアドレスの形式ではありません"
			}
			return ""
		},
		password: (value) => {
			if (validator.isEmpty(value)) {
				return "パスワードが入力されていません"
			}
			if (!validator.isAlpha(value)) {
				return "半角英数字で入力してください"
			}
			return ""
		}
	}

	return formFields[fieldName](value)
}