import styles from "./styles.module.css";
import withSkeleton from "@/shared/hocs/withSkeleton";
import NewsCard from "@/entities/news/ui/NewsCard/NewsCard";
import type { Inews } from "@/entities/news";
import type { ReactNode } from "react";

interface Props {
  news?: Inews[];
  type?: "banner" | "item";
  direction?: "row" | "column";
  viewNewsSlot?: (news: Inews) => ReactNode;
}

const NewsList = ({ news, type = "item", viewNewsSlot }: Props) => {
  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {news?.map((item) => {
        return <NewsCard key={item.id} viewNewsSlot={viewNewsSlot} item={item} type={type} />;
      })}
    </ul>
  );
};
const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);
export default NewsListWithSkeleton;
