import { FC } from "react";

type Props = {
  data: [];
};

const Table: FC<Props> = ({ data }) => {
  return <table>{data.map((elem) => elem)}</table>;
};

export { Table };
