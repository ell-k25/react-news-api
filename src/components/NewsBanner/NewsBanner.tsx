import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import type { Inews } from "../../interfaces";
import Image from "../image/Image";
import styles from "./styles.module.css";

interface Props {
  item: Inews;
}

const NewsBanner = ({ item }: Props) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)}
        {item.author !== "" ? ` by ${item.author}` : ""}
      </p>
    </div>
  );
};

export default NewsBanner;
