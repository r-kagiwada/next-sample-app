import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    default: "入力エラーです",
    required: ({ label }) => `${label}は必須入力です`,
    oneOf: ({ values }: any) =>
      `次の値のいずれかでなければなりません: ${values as string}`,
    notOneOf: ({ values }: any) =>
      `次の値のいずれかであってはなりません: ${values as string}`,
    notType: "形式が違います",
  },
  string: {
    length: ({ label, length }) =>
      `${label}は${length.toString()}文字入力して下さい`,
    min: ({ label, min }) =>
      `${label}は${min.toString()}文字以上入力してください`,
    max: ({ label, max }) =>
      `${label}は${max.toString()}文字以内で入力して下さい`,
    matches: ({ label }) => `${label}の形式が違います`,
    email: ({ label }) => `${label}の形式が違います`,
    url: ({ label }) => `${label}の形式が違います`,
    trim: ({ label }) => `${label}は前後にスペースを入れてはいけません`,
    lowercase: ({ label }) => `${label}は小文字でなければなりません`,
    uppercase: ({ label }) => `${label}は大文字でなければなりません`,
  },
  number: {
    min: ({ min }: any) => `${min as string}以上の値を入力して下さい`,
    max: ({ max }: any) => `${max as string}以下の値を入力して下さい`,
    lessThan: ({ lessThan }: any) =>
      `${lessThan as string}より小さい値を入力して下さい`,
    moreThan: ({ moreThan }: any) =>
      `${moreThan as string}より大きい値を入力して下さい`,
    positive: "正の数を入力して下さい",
    negative: "負の数を入力して下さい",
    integer: "整数を入力して下さい",
  },
  date: {
    min: ({ min }: any) => `${min as string}以上の日付を入力して下さい`,
    max: ({ max }: any) => `${max as string}以下の日付を入力して下さい`,
  },
  object: {
    noUnknown: "有効なキーを持ったデータを入力して下さい",
  },
  array: {
    min: ({ min }: any) => `${min as string}個以上の値を入力して下さい`,
    max: ({ max }: any) => `${max as string}個以下の値を入力して下さい`,
  },
});

export default Yup;
