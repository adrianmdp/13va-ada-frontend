type Props = {
  type: "text" | "password" | "email" | "checkbox" | "radio" | "file";
  name: string;
  placeholder: string;
  id: string;
  label?: string;
};

export default Props;
