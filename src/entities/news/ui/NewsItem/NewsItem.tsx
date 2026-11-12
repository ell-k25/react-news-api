import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import type { Inews } from "../../model/types";
import styles from "./styles.module.css";

interface Props {
  item: Inews;
}

const NewsItem = ({ item }: Props) => {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)}
          {item.author !== "" ? ` by ${item.author}` : ""}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
