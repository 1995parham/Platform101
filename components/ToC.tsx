import React from "react";
import style from "./ToC.module.css";

interface ToCProps {
  topics: [string];
  selected: string | number;
}

export default function ToC(props: ToCProps) {
  return (
    <ul>
      {props.topics.map((topic, index) => {
        if (index === props.selected || topic === props.selected) {
          return (
            <li key={index} className={style.active}>
              {topic}
            </li>
          );
        } else {
          return <li key={index}>{topic}</li>;
        }
      })}
    </ul>
  );
}
